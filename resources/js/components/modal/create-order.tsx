import ModalLayout from "@/layouts/modal-layout";

import { OrderItem, Product, Station } from "@agc/model";
import { usePage } from "@inertiajs/react";
import { useState } from "react";

import ProductCard from "../card/product";
import CreateOrderCart from "./create-order-cart";

interface CreateOrderFormData {
    userId: string,
    stationId: string,
    destinationAddressId: string,
    orderItems: OrderItem[]
}

interface CreateOrderFormProps {station: Station, products: Product[]}

function viewSelectAddressModal() {

}

function createOrder() {

}

function closeModal() {

}

export default function CreateOrderModal({station, products} : CreateOrderFormProps) {
    const {user} = usePage().props;
    const [formData, setFormData] = useState<CreateOrderFormData>({
        userId: user.id,
        stationId: station.id,
        destinationAddressId: user.default_address.id,
        orderItems: []
    });

    return (
        <ModalLayout
            title="Add Order"
            submit={() => createOrder()}
            submitTitle="Add"
            handleClose={() => closeModal()}
        >
        <div className="instant-wrapper">
            <p className="page-title">INSTANT ORDER</p>

            <div className="content-with-cart">
                <div className="products-grid">
                    <div className="address-card">
                        <div className="address-header">
                            <h4><i className="fas fa-map-marker-alt"></i> Delivery Address</h4>
                            <button className="edit-address-btn" onClick={() => {viewSelectAddressModal()}}>
                                <i className="fas fa-edit"></i> Change
                            </button>
                        </div>
                        <div className="address-content" id="deliveryAddressDisplay">
                            <i className="fas fa-location-dot"></i> Loading address...
                        </div>
                    </div>

                    <div className="cards-grid" id="cardsGrid">
                        {products.map((product, idx) => (
                            <ProductCard product={product} key={`product-card-${idx}`}></ProductCard>
                        ))}
                    </div>
                </div>

                <CreateOrderCart orderItems={formData.orderItems}></CreateOrderCart>
            </div>
        </div>
        </ModalLayout>
    );
}