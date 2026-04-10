import ModalLayout from "@/layouts/modal-layout";
import OrderTable from "../table/order";
import { Subscription } from "@agc/model";

function closeModal() {}

export default function ViewSubscriptionModal({subscription} : {subscription: Subscription}) {
    return (
        <ModalLayout
            title="Subscription Details"
            handleClose={() => closeModal()}    
        >
            <div className="order-info-grid">
                <div className="order-info-item">
                    <label>Date Subscribed</label><p id="modalOrderDate">{subscription.created_at}</p>
                </div>
                <div className="order-info-item">
                    <label>Station</label><p id="modalOrderStation">{subscription.station.name}</p>
                </div>
            </div>

            <OrderTable orders={subscription.orders} title="Subscription"></OrderTable>
        </ModalLayout>
    );
}