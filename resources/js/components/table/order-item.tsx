import { OrderItem } from "@agc/model";

function computeOrderItemTotal(orderItems: OrderItem[]): number {
    return orderItems.reduce((prev, current) => (
        prev + current.quantity * current.product.price
    ), 0)
}

export default function OrderItemTable({orderItems} : {orderItems: OrderItem[]}) {
    return (
        <table className="table order-items-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th className="text-center">Price</th>
                    <th className="text-center">Quantity</th>
                    <th className="text-end">Subtotal</th>
                </tr>
            </thead>
            <tbody>
                {orderItems.map((orderItem, idx) => (
                    <tr key={`order-item-table-${idx}`}>
                        <td>₱{orderItem.product.price.toFixed(2)}</td>
                        <td>{orderItem.quantity}</td>
                        <td>{(orderItem.product.price * orderItem.quantity).toFixed(2)}</td>
                    </tr>
                ))}
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan={3} className="text-end total-label">Total</td>
                    <td className="text-end total-amount" id="modalOrderTotal">₱{computeOrderItemTotal(orderItems).toFixed(2)}</td>
                </tr>
            </tfoot>
        </table>
    );
}