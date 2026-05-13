import { OrderItem } from "@agc/model";

function computeOrderItemTotal(orderItems: OrderItem[], deliveryFee: number): number {
    return orderItems.reduce((prev, current) => (
        prev + current.quantity * Number(current.price)
    ), 0) + deliveryFee
}

export default function OrderItemTable({orderItems, deliveryFee} : {orderItems: OrderItem[], deliveryFee: number}) {
    return (
        <table className="table order-items-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th className="text-end">Price</th>
                    <th className="text-end">Quantity</th>
                    <th className="text-end">Subtotal</th>
                </tr>
            </thead>
            <tbody>
                {orderItems.map((orderItem, idx) => (
                    <tr key={`order-item-table-${idx}`}>
                        <td>{orderItem.product_name}</td>
                        <td className="text-end">₱{Number(orderItem.price).toFixed(2)}</td>
                        <td className="text-end">{orderItem.quantity}</td>
                        <td className="text-end">₱{(Number(orderItem.price) * orderItem.quantity).toFixed(2)}</td>
                    </tr>
                ))}
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan={3} className="text-end total-label">Delivery Fee</td>
                    <td className="text-end total-amount" id="modalOrderTotal">₱{deliveryFee.toFixed(2)}</td>
                </tr>
                <tr>
                    <td colSpan={3} className="text-end total-label">Total</td>
                    <td className="text-end total-amount" id="modalOrderTotal">₱{computeOrderItemTotal(orderItems, deliveryFee).toFixed(2)}</td>
                </tr>
            </tfoot>
        </table>
    );
}