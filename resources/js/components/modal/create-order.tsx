import ModalLayout from "@/layouts/modal-layout";

import { OrderItem, Product, Station, User, UserStation } from "@agc/model";
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

interface CreateOrderFormProps {station: UserStation, products: Product[], closeModal(): void}

function viewSelectAddressModal() {}

export default function CreateOrderModal({station, products, closeModal} : CreateOrderFormProps) {
    const { auth } = usePage().props;
    const user: User | undefined = auth?.user;

    const [formData, setFormData] = useState<CreateOrderFormData>({
        user_id: user?.id,
        station_id: station.id,
        destination_address_id: user?.default_address?.id,
        rider_id: undefined,
        delivery_fee: 0.0,
        order_items: []
    });

    function createOrder() {
        if (formData.order_items.length === 0) { alert("Cart is empty"); return; }

        router.post("/order", {
            is_walk_in: auth?.station ? true : false,
            is_subscription: auth?.rider ? true: false,
            delivery_fee: auth?.station ? 0 : (((station as UserStation).distance ?? 0) * 5.0),
            client_id: formData.user_id,
            station_id: formData.station_id,
            destination_address_id: formData.destination_address_id,
            order_items: formData.order_items.map(item => ({product_id: item.product.id, price: item.product.price, quantity: item.quantity, product_name: item.product.name}))
        }, { onSuccess: () => closeModal() });
    }
    
    function addToCart(product: Product) {
        setFormData(prev => {
            const existing_order_item = prev.order_items.find(order_item => order_item.product.id  === product.id);

            if (existing_order_item) {
                return {
                    ...prev,
                    order_items: prev.order_items.map(order_item => order_item.product.id === product.id ? {...order_item, quantity: order_item.quantity + 1} : order_item)
                };
            }

            return {
                ...prev,
                order_items: [...prev.order_items, { product: product, quantity: 1, }]
            };
        });
    }

    function removeFromCart(product: Product) {
        setFormData(prev => {
            const existing_order_item = prev.order_items.find(order_item => order_item.product.id === product.id);

            if (!existing_order_item) { return prev; }
            if (existing_order_item.quantity <= 1) {
                return {...prev, order_items: prev.order_items.filter(order_item => order_item.product.id !== product.id)};
            }

            return {
                ...prev,
                order_items: prev.order_items.map(order_item =>
                    order_item.product.id === product.id ? {...order_item, quantity: order_item.quantity - 1} : order_item
                )
            };
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