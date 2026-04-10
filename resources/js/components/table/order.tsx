import { ORDER_STATUS } from "@/pages/config";
import { Order } from "@agc/model";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link } from "@inertiajs/react";

interface OrderTableProps {
    orders: Order[],
    title: string,
    partial?: boolean
}

function renderOrderStatus(orderStatus: string) {
    switch (orderStatus) {
        case ORDER_STATUS.COMPLETED:
            return <span className="order-status status-ongoing">Completed</span>
        default:
            break;
    }
}
export default function OrderTable({orders, title, partial = false}: OrderTableProps) {
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
                        <th>Items</th>
                        <th>Total</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order, idx) => (
                        <tr key={`order-table-${idx}`}>
                            <td>{order.created_at}</td>
                            <td>{order.station.name}</td>
                            <td>5 Gallons</td>
                            <td>{`₱${order.total.toFixed(2)}`}</td>
                            <td>{renderOrderStatus(order.status)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}