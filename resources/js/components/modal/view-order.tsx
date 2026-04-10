import ModalLayout from "@/layouts/modal-layout";
import { Order } from "@agc/model";
import OrderItemTable from "../table/order-item";
import OrderHistoryTable from "../table/order-history";

function closeModal() {}

export default function ViewOrderModal({order} : {order: Order}) {
    return (
        <ModalLayout
            title="Order Details"
            handleClose={() => closeModal()}    
        >
            <div className="order-info-grid">
                <div className="order-info-item">
                    <label>Order Date</label><p id="modalOrderDate">{order.created_at}</p>
                </div>
                <div className="order-info-item">
                    <label>Status</label><span className="status-badge" id="modalOrderStatus">{order.status}</span>
                </div>
                <div className="order-info-item">
                    <label>Station</label><p id="modalOrderStation">{order.station.name}</p>
                </div>
                {order.subscription && <div className="order-info-item full-width">
                    <p id="modalOrderType"><i className="fas fa-shopping-bag"></i> From Subscription</p>
                </div>}
            </div>

            <div className="order-items-section">
                <h6><i className="fas fa-boxes"></i> Items</h6>
                <div className="table-wrapper"><OrderItemTable orderItems={order.order_items} /></div>
            </div>

            <div className="order-histories-section">
                <h6><i className="fas fa-boxes"></i> Order History</h6>
                <div className="table-wrapper"><OrderHistoryTable orderHistories={order.order_histories} /></div>
            </div>
        </ModalLayout>
    );
}