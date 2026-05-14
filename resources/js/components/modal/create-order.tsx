import ModalLayout from "@/layouts/modal-layout";

import { Address, OrderItem, Product, Station, Subscription, User, UserStation } from "@agc/model";
import { usePage } from "@inertiajs/react";
import { useState } from "react";

import ProductCard from "../card/product";
import CreateOrderCart from "./create-order-cart";
import FormModalLayout from "@/layouts/form-modal-layout";

import "../../../css/create-order.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import OrderFormProductCard from "../card/order-form-product";
import { router } from "@inertiajs/react";

export interface CreateOrderItem {
    product: Product,
    quantity: number
}

interface CreateOrderFormData {
    user_id: string | undefined,
    station_id: string,
    destination_address_id: string | undefined,
    rider_id: string | undefined,
    delivery_fee: number,
    order_items: CreateOrderItem[]
} 

interface CreateOrderFormProps {station: UserStation, products: Product[], subscription?: Subscription; closeModal(): void, fromSubscription?: boolean}

function viewSelectAddressModal() {}

function calculateDistanceKm(lat1: number, lng1: number, lat2: number, lng2: number) {
    const R = 6371;
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLng = ((lng2 - lng1) * Math.PI) / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) * Math.sin(dLng / 2) * Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}

export default function CreateOrderModal({station, products, closeModal, subscription = undefined, fromSubscription = false} : CreateOrderFormProps) {
    const { auth } = usePage().props;
    const user: User | undefined = auth?.user;
    const destinationAddress: Address | null = auth?.station && fromSubscription ? subscription?.destination_address ?? null : !auth?.station ? user?.default_address ?? null : null;
    const deliveryFee = (() => {
        if (!auth?.station) return 0;
        if (fromSubscription && destinationAddress) { return calculateDistanceKm(station.address.y, station.address.x, destinationAddress.y, destinationAddress.x) * 5.0;}
        return ((station as UserStation).distance ?? 0) * 5.0;
    })();

    const [formData, setFormData] = useState<CreateOrderFormData>({
        user_id: fromSubscription ? subscription?.subscriber.id : user?.id,
        station_id: station.id,
        destination_address_id: destinationAddress?.id ?? undefined,
        rider_id: undefined,
        delivery_fee: deliveryFee,
        order_items: []
    });

    function createOrder() {
        if (formData.order_items.length === 0) {
            alert("Cart is empty");
            return;
        }

        router.post("/order", {
            is_walk_in: auth?.station && !fromSubscription,
            is_subscription: fromSubscription,

            delivery_fee: deliveryFee,

            client_id: formData.user_id,
            station_id: formData.station_id,
            destination_address_id: destinationAddress?.id ?? null,

            order_items: formData.order_items.map(item => ({
                product_id: item.product.id,
                price: item.product.price,
                quantity: item.quantity,
                product_name: item.product.name
            })),
            subscription_id: fromSubscription && subscription?.id
        }, {
            onSuccess: () => closeModal()
        });
    }
    
    function addToCart(product: Product) {
        setFormData(prev => {
            const existing_order_item = prev.order_items.find(order_item => order_item.product.id  === product.id);
            if (existing_order_item) { return {...prev, order_items: prev.order_items.map(order_item => order_item.product.id === product.id ? {...order_item, quantity: order_item.quantity + 1} : order_item)}; }
            return { ...prev, order_items: [...prev.order_items, { product: product, quantity: 1, }]};
        });
    }

    function removeFromCart(product: Product) {
        setFormData(prev => {
            const existing_order_item = prev.order_items.find(order_item => order_item.product.id === product.id);

            if (!existing_order_item) { return prev; }
            if (existing_order_item.quantity <= 1) { return {...prev, order_items: prev.order_items.filter(order_item => order_item.product.id !== product.id)}; }

            return { ...prev, order_items: prev.order_items.map(order_item =>
                order_item.product.id === product.id ? {...order_item, quantity: order_item.quantity - 1} : order_item
            )};
        });
    }

    function updateOrderItemQuantity(product_id: string, operation: "add" | "subtract") {
        setFormData(prev => ({
            ...prev,
            order_items: prev.order_items
                .map(orderItem => {
                    if (orderItem.product.id !== product_id) return orderItem;
                    const quantity = operation === "add" ? orderItem.quantity + 1 : orderItem.quantity - 1;
                    return { ...orderItem, quantity };
                }).filter(orderItem => orderItem.quantity > 0)
        }));
    }

    return (
        <FormModalLayout
            method="post"
            link="/order"
            title="Create New Order"
            submit={() => {createOrder()}}
            submitTitle="Checkout"
            handleClose={() => closeModal()}
        >
        <div className="instant-wrapper">
            <div className="content-with-cart">
                <div className="products-grid">
                    {user ? (<div className="address-card">
                        <div className="address-header">
                            <h4 style={{marginRight: "10px"}}><FontAwesomeIcon icon={["fas", "map-marker-alt"]} /> Delivery Address</h4>
                            <button className="edit-address-btn" onClick={() => {viewSelectAddressModal()}}><FontAwesomeIcon icon={["fas", "edit"]} /> Change</button>
                        </div>
                        <div className="address-content">
                            <FontAwesomeIcon icon={["fas", "location-dot"]} />{" "}
                            {user.default_address?.location ?? "No default address"}
                        </div>
                    </div>) : fromSubscription ? (<div className="address-card">
                        <div className="address-header">
                            <h4><FontAwesomeIcon icon={["fas", "user"]} /> From Subscription</h4>
                        </div>
                    </div>) : (<div className="address-card">
                        <div className="address-header">
                            <h4><FontAwesomeIcon icon={["fas", "user"]} /> Walk-in Customer</h4>
                        </div>
                    </div>)}

                    <div className="cards-grid">
                        {products.map((product, idx) => (<OrderFormProductCard product={product} 
                            addProductToCart={() => addToCart(product)} 
                            key={`product-card-${idx}`}></OrderFormProductCard>))}
                    </div>
                </div>

                <CreateOrderCart orderItems={formData.order_items} 
                    addQuantity={(productId: string) => updateOrderItemQuantity(productId, "add")} 
                    removeQuantity={(productId: string) => updateOrderItemQuantity(productId, "subtract")}
                    removeProductFromCart={(product: Product) => removeFromCart(product)}
                    distance={station.distance ?? 0}/>
            </div>
        </div>
        </FormModalLayout>
    );
}