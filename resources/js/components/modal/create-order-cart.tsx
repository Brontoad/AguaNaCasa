import { OrderItem, Product } from "@agc/model";
import { CreateOrderItem } from "./create-order";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function viewConfirmCreateOrderModal() {

}

export default function CreateOrderCart({orderItems, addQuantity, removeQuantity, removeProductFromCart, distance} : {
    orderItems: CreateOrderItem[], 
    addQuantity(productId: string): void, removeQuantity(productId: string): void, 
    removeProductFromCart(product: Product): void,
    distance: number}) {

    const subtotal = orderItems.reduce((total, orderItem) =>
        total + (orderItem.product.price * orderItem.quantity), 0
    );
    const deliveryFee = distance * 5;
    const total = subtotal + deliveryFee;

    return (
        <div className="cart-panel">
            <div className="cart-header">
                <h3><FontAwesomeIcon icon={["fas", "shopping-cart"]} style={{fontSize: "48px", opacity:  "0.5"}} /> Your Order</h3>
                <span className="cart-badge" id="cartItemCount">{orderItems.length}</span>
            </div>
            <div className="cart-items" id="cartItems">
                {orderItems.length === 0 ? 
                    <div className="empty-cart">
                        <FontAwesomeIcon icon={["fas", "shopping-bag"]} style={{fontSize: "48px", opacity:  "0.5"}}></FontAwesomeIcon>
                        <p>Your cart is empty</p>
                        <small>Add items from the menu</small>
                    </div> : orderItems.map((orderItem, idx) => (
                        <div className="cart-item" key={`cart-item-${idx}`}>
                            <div className="cart-item-info">
                                <div className="cart-item-name">{orderItem.product.name}</div>
                                <div className="cart-item-details">₱{orderItem.product.price.toFixed(2)}</div>
                            </div>
                            <div className="cart-item-price">₱{orderItem.product.price * orderItem.quantity}</div>
                            <div className="cart-item-actions">
                                <button className="cart-qty-btn" onClick={(e) => {
                                    e.preventDefault();
                                    removeQuantity(orderItem.product.id);
                                }}>-</button>
                                <span className="cart-qty">{orderItem.quantity}</span>
                                <button className="cart-qty-btn" onClick={(e) => {
                                    e.preventDefault(); 
                                    addQuantity(orderItem.product.id);
                                }}>+</button>
                                <button className="remove-item" onClick={(e) => {
                                    e.preventDefault();
                                    removeProductFromCart(orderItem.product);
                                }}><FontAwesomeIcon icon={["fas", "trash"]}/></button>
                            </div>
                        </div>
                    ))}
            </div>
            <div className="cart-summary">
                <div className="summary-row"><span>Subtotal</span><span id="cartSubtotal">₱{subtotal.toFixed(2)}</span></div>
                <div className="summary-row"><span>Delivery Fee (₱5/gal)</span><span id="cartDeliveryFee">₱{deliveryFee.toFixed(2)}</span></div>
                <div className="summary-row total"><span>Total</span><span id="cartTotal">₱{total.toFixed(2)}</span></div>
            </div>
        </div>
    );
}