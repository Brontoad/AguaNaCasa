import { OrderHistory } from "@agc/model";

export default function OrderHistoryTable({orderHistories} : {orderHistories: OrderHistory[]}) {
    return (
        <table className="order-items-table">
            <thead>
                <tr>
                    <th className="text-center">Name</th>
                    <th className="text-center">Date</th>
                    <th className="text-center">Description</th>
                </tr>
            </thead>
            <tbody id="modalOrderHistories">
                {orderHistories.map((orderHistory, idx) => (
                    <tr key={`order-history-table-${idx}`}>
                        <td>{orderHistory.created_at}</td>
                        <td>{orderHistory.description}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}