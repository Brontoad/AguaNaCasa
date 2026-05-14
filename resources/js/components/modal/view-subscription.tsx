import ModalLayout from "@/layouts/modal-layout";
import OrderTable from "../table/order";
import { Product, Station, Subscription, UserStation } from "@agc/model";
import { formatTimestamp } from "@/datetime";
import { router, usePage } from "@inertiajs/react";
import { ACCOUNT_ROLE } from "@/pages/config";
import { useState } from "react";
import CreateOrderModal from "./create-order";
import axios from "axios";

export default function ViewSubscriptionModal({subscription, closeModal} : {subscription: Subscription, closeModal(): void}) {
    const [createOrderModal, setCreateOrderModal] = useState<{open: boolean, products: Product[]}>({open: false, products: []})
    const {auth} = usePage().props;

    function paySubscription() {
        if (!auth?.user) return;

        router.put('/subscription/pay', {subscription_id: subscription.id});
    }

    async function openCreateOrderModal() {
        try {
            const res = await axios.get("/station/products", {
                params: { station_id: auth.station?.id },
            });

            setCreateOrderModal(prev => ({
                ...prev,
                open: true,
                fromSubscription: true,
                products: res.data.products,
            }));
            
        } catch (err) {
            console.error(err);
        }
    }

    const actionButtons = [
        auth.role === ACCOUNT_ROLE.CUSTOMER && <button key="pay" className="save-btn" onClick={paySubscription}>Pay</button>,
        auth.role === ACCOUNT_ROLE.STATION && <button key="create_order" className="save-btn" onClick={openCreateOrderModal}>Create Order</button>,
    ];

    return (
        <ModalLayout
            title="Subscription Details"
            handleClose={() => closeModal()}    
            actionButtons={actionButtons}
        >
            <div className="order-info-grid">
                <div className="order-info-item">
                    <label>Date Subscribed</label><p>{formatTimestamp(subscription.created_at)}</p>
                </div>
                <div className="order-info-item">
                    <label>Station</label><p>{auth.role === ACCOUNT_ROLE.CUSTOMER ? subscription.station.name : subscription.subscriber.username}</p>
                </div>
            </div>

            <OrderTable orders={subscription.orders} title="Subscription"></OrderTable>
            {createOrderModal.open && <CreateOrderModal station={auth.station as UserStation} products={createOrderModal.products} subscription={subscription} fromSubscription={true} closeModal={() => setCreateOrderModal({open: false, products: []})}/>}
        </ModalLayout>
    );
}