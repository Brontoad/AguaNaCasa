import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ACCOUNT_ROLE, ORDER_STATUS } from "@/pages/config";
import { Order } from "@agc/model";
import { createPortal } from "react-dom";

import ModalLayout from "@/layouts/modal-layout";
import OrderItemTable from "../table/order-item";
import OrderHistoryTable from "../table/order-history";
import { usePage } from "@inertiajs/react";

import "../../../css/order/view-order.css";
import { router } from "@inertiajs/react";
import { formatTimestamp } from "@/datetime";
import AssignOrderToRiderModal from "./assign-order-to-rider";
import CancelOrderModal from "./cancel-order";
import TrackOrderModal from "./track-order";

export default function ViewOrderModal({order, closeModal} : {order: Order, closeModal(): void}) {
    const {auth} = usePage().props;
    const [assignOrderToRiderModal, setAssignOrderToRiderModal] = useState<{open: boolean, orderId: string, riderId: string}>({open: false, orderId: "", riderId: ""})
    const [cancelOrderModal, setCancelOrderModal] = useState<{open: boolean, orderId: string}>({open: false, orderId: ""});
    const [trackOrderModal, setTrackOrderModal] = useState<{open: boolean, order?: Order}>({open: false, order: undefined});

    function updateOrderStatus(action: "confirm" | "pick_up" | "refill" | "deliver") { router.put(`/order/${action}/${order.id}`); }
    function cancelOrder(reason: string) {router.put(`/order/cancel/${cancelOrderModal.orderId}`, {reason: reason})}
    function assignOrderToRider(riderId: string) {router.put(`/order/confirm/${assignOrderToRiderModal.orderId}`, {rider_id: riderId});}
    function renderUpdateOrderStatusBtn(order: Order): React.ReactNode {
        switch (order.status) {
            case ORDER_STATUS.WAITING_FOR_CONFIRMATION: return <button className="save-btn waiting" key={"save-btn"} onClick={() => setAssignOrderToRiderModal({open: true, orderId: order.id, riderId: ""})}>Confirm Order</button>
            case ORDER_STATUS.REFILLING: return <button className="save-btn refilling" key={"refill-btn"} onClick={() => updateOrderStatus("refill")}>Finish Refilling</button>
            case ORDER_STATUS.ON_DELIVERY: return <button className="save-btn delivery" key={"deliver-btn"} onClick={() => updateOrderStatus("deliver")}>Deliver Order</button>
            default: return <></>
        }
    }

    return createPortal(
        <ModalLayout
            title="Order Details"
            handleClose={() => closeModal()}    
            actionButtons={[
                auth.role === ACCOUNT_ROLE.STATION && renderUpdateOrderStatusBtn(order),
                auth.role === ACCOUNT_ROLE.RIDER && <button className="save-btn" key={"track-btn"} onClick={() => setTrackOrderModal({order: order, open: true})}>Track Order</button>,
                order.status === ORDER_STATUS.WAITING_FOR_CONFIRMATION &&
                    <button className="btn-cancel" key={"cancel-btn"} onClick={() => setCancelOrderModal({open: true, orderId: order.id})}>Cancel Order</button>
            ]}
        >
            <div className="order-info-grid">
                <div className="order-info-item"><label>Order Date</label><p>{formatTimestamp(order.created_at)}</p></div>
                <div className="order-info-item"><label>Status</label><span className="status-badge" style={{textTransform: "capitalize"}}>{order.status.replace(/_/g, " ")}</span></div>
                <div className="order-info-item">{auth?.user || auth?.rider ? 
                    <><label>Station</label><p>{order.station.name}</p></> :
                    <><label>Customer</label><p>{order.client.username}</p></>}</div>
                {order.is_subscription && <div className="order-info-item full-width">
                    <p><FontAwesomeIcon icon={["fas", "shopping-bag"]} /> From Subscription</p>
                </div>}
            </div>

            <div className="order-items-section">
                <h6><FontAwesomeIcon icon={["fas", "boxes"]} /> Items</h6>
                <div className="table-wrapper"><OrderItemTable orderItems={order.order_items} deliveryFee={order.delivery_fee}/></div>
            </div>

            <div className="order-histories-section">
                <h6><FontAwesomeIcon icon={["fas", "boxes"]} /> Order History</h6>
                <div className="table-wrapper"><OrderHistoryTable orderHistories={order.order_histories} /></div>
            </div>

            {assignOrderToRiderModal.open && <AssignOrderToRiderModal 
                orderId={assignOrderToRiderModal.orderId}
                confirmOrder={(riderId: string) => assignOrderToRider(riderId)} 
                closeModal={() => setAssignOrderToRiderModal({open: false, orderId:"", riderId: ""})}/>}
            {cancelOrderModal.open && <CancelOrderModal 
                orderId={cancelOrderModal.orderId} 
                cancelOrder={(reason: string) => cancelOrder(reason)} 
                closeModal={() => setCancelOrderModal({open: false, orderId: ""})} />}
            {trackOrderModal.open && trackOrderModal.order && <TrackOrderModal
                order={trackOrderModal.order}
                closeModal={() => setTrackOrderModal({open: false, order: undefined})} />}
        </ModalLayout>, document.body
    );
}