import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ACCOUNT_ROLE, ORDER_STATUS } from "@/pages/config";
import { Order } from "@agc/model";

import ModalLayout from "@/layouts/modal-layout";
import OrderItemTable from "../table/order-item";
import OrderHistoryTable from "../table/order-history";
import { usePage } from "@inertiajs/react";

export default function ViewOrderModal({order, closeModal} : {order: Order, closeModal(): void}) {
    const {user} = usePage().props;
    function renderUpdateOrderStatusBtn(order: Order): React.ReactNode {
        switch (order.status) {
            case ORDER_STATUS.WAITING_FOR_CONFIRMATION: return <button className="save-btn" onClick={() => {<></>}}>Confirm Order</button>
            case ORDER_STATUS.TO_PICK_UP: return <button className="save-btn" onClick={() => {<></>}}>Pick-up Order</button>
            case ORDER_STATUS.REFILLING: return <button className="save-btn" onClick={() => {<></>}}>Finish Refilling</button>
            case ORDER_STATUS.ON_DELIVERY: return <button className="save-btn" onClick={() => {<></>}}>Deliver Order</button>
            default: return <></>
        }
    }

    return (
        <ModalLayout
            title="Order Details"
            handleClose={() => closeModal()}    
            actionButtons={[
                user.role === ACCOUNT_ROLE.STATION && renderUpdateOrderStatusBtn(order),
                user.role === ACCOUNT_ROLE.RIDER && <button className="save-btn" onClick={() => {<></>}}>Track Order</button>,
                order.status === ORDER_STATUS.CANCELLED || ORDER_STATUS.COMPLETED &&
                    <button className="save-btn" onClick={() => {<></>}}>Cancel Order</button>
            ]}
        >
            <div className="order-info-grid">
                <div className="order-info-item">
                    <label>Order Date</label><p>{order.created_at}</p>
                </div>
                <div className="order-info-item">
                    <label>Status</label><span className="status-badge">{order.status}</span>
                </div>
                <div className="order-info-item">
                    <label>Station</label><p>{order.station.name}</p>
                </div>
                {order.subscription && <div className="order-info-item full-width">
                    <p><FontAwesomeIcon icon={["fas", "shopping-bag"]} /> From Subscription</p>
                </div>}
            </div>

            <div className="order-items-section">
                <h6><FontAwesomeIcon icon={["fas", "boxes"]} /> Items</h6>
                <div className="table-wrapper"><OrderItemTable orderItems={order.order_items} /></div>
            </div>

            <div className="order-histories-section">
                <h6><FontAwesomeIcon icon={["fas", "boxes"]} /> Order History</h6>
                <div className="table-wrapper"><OrderHistoryTable orderHistories={order.order_histories} /></div>
            </div>
        </ModalLayout>
    );
}