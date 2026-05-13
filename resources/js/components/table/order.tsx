import { ORDER_STATUS } from "@/pages/config";
import { Order, OrderItem } from "@agc/model";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, usePage } from "@inertiajs/react";
import { useState } from "react";
import ViewOrderModal from "../modal/view-order";
import { formatTimestamp } from "@/datetime";
import "../../../css/station/order.css";
interface OrderTableProps {orders: Order[], title: string, partial?: boolean}

function renderOrderStatus(orderStatus: string) {
    switch (orderStatus) {
        case ORDER_STATUS.WAITING_FOR_CONFIRMATION: return <span className="order-status status-processing">Waiting Confirmation</span>
        case ORDER_STATUS.TO_PICK_UP: return <span className="order-status status-ongoing">To Pick Up</span>
        case ORDER_STATUS.REFILLING: return <span className="order-status status-ongoing">Refilling</span>
        case ORDER_STATUS.ON_DELIVERY: return <span className="order-status status-ongoing">On Delivery</span>
        case ORDER_STATUS.CANCELLED: return <span className="order-status status-cancelled">Cancelled</span>
        case ORDER_STATUS.COMPLETED: return <span className="order-status status-delivered">Completed</span>
        default: break;
    }
}

function computeTotal(orderItems: OrderItem[], deliveryFee: number) {
    return orderItems.reduce((total, item) => {
        return total + (item.quantity * Number(item.price));
    }, 0) + deliveryFee;
}

export default function OrderTable({orders, title, partial = false}: OrderTableProps) {
    const {auth} = usePage().props;
    console.log(auth);
    const [viewOrderModal, setViewOrderModal] = useState<{open: boolean, order?: Order}>({open: false, order: undefined});
    return (
        <div className="info-card">
            {/* <div className="card-header">
                <h3>{title} Orders</h3>

                {partial && <Link
                        className="view-all-btn">
                        View All <FontAwesomeIcon icon={["fas", "arrow-right"]} />
                    </Link>}
            </div> */}
            
            <table className="table">
                <thead>
                    <tr>
                        <th>Date</th>
                        {(auth?.user || auth?.rider) ? <th>Station</th> : <th>Client</th>}
                        <th>Total</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order, idx) => (
                        <tr key={`order-table-${idx}`} style={{cursor: "pointer"}} onClick={() => setViewOrderModal({open: true, order: order})}>
                            <td>{formatTimestamp(order.created_at)}</td>
                            {(auth?.user || auth?.rider) ? <td>{order.station.name}</td> : <td>{order.client.username}</td>}
                            <td>{`₱${computeTotal(order.order_items, order.delivery_fee).toFixed(2)}`}</td>
                            <td>{renderOrderStatus(order.status)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
            {viewOrderModal.open && viewOrderModal.order && <ViewOrderModal 
                order={viewOrderModal.order} 
                closeModal={() => setViewOrderModal({open: false, order: undefined})} />}
        </div>
    );
}