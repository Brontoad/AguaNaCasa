import { ORDER_STATUS } from "@/pages/config";
import { Order } from "@agc/model";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@inertiajs/react";
import { useState } from "react";
import ViewOrderModal from "../modal/view-order";

interface OrderTableProps {orders: Order[], title: string, partial?: boolean}

function renderOrderStatus(orderStatus: string) {
    switch (orderStatus) {
        case ORDER_STATUS.COMPLETED:
            return <span className="order-status status-ongoing">Completed</span>
        default:
            break;
    }
}

export default function OrderTable({orders, title, partial = false}: OrderTableProps) {
    const [viewOrderModal, setViewOrderModal] = useState<{open: boolean, order?: Order}>({open: false, order: undefined});

    return (
        <div className="info-card">
            <div className="card-header">
                <h3>{title} Orders</h3>

                {partial && <Link
                        className="view-all-btn">
                        View All <FontAwesomeIcon icon={["fas", "arrow-right"]} />
                    </Link>}
            </div>
            
            <table className="table">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Station</th>
                        <th>Total</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order, idx) => (
                        <tr key={`order-table-${idx}`} onClick={() => setViewOrderModal({open: true, order: order})}>
                            <td>{order.created_at}</td>
                            <td>{order.station.name}</td>
                            <td>{`₱${order.total.toFixed(2)}`}</td>
                            <td>{renderOrderStatus(order.status)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
            {viewOrderModal.open && viewOrderModal.order && <ViewOrderModal 
                order={viewOrderModal.order} 
                closeModal={() => setViewOrderModal({open: true, order: viewOrderModal.order})} />}
        </div>
    );
}