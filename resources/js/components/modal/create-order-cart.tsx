import { OrderItem } from "@agc/model";

function updateOrderItemQuantity() {

}

function removeOrderItem() {

}

function viewConfirmCreateOrderModal() {

}

export default function CreateOrderCart({orderItems} : {orderItems: OrderItem[]}) {
    return (
        <div className="cart-panel">
            <div className="cart-header">
                <h3><i className="fas fa-shopping-cart"></i> Your Order</h3>
                <span className="cart-badge" id="cartItemCount">{orderItems.length}</span>
            </div>
            <div className="cart-items" id="cartItems">
                {orderItems.length === 0 ? 
                    <div className="empty-cart">
                        <i className="fas fa-shopping-bag" style={{fontSize: "48px", opacity:  "0.5"}}></i>
                        <p>Your cart is empty</p>
                        <small>Add items from the menu</small>
                    </div> : orderItems.map((orderItem, idx) => (
                        <div className="cart-item" key={`cart-item-${idx}`}>
                            <div className="cart-item-info">
                                <div className="cart-item-name">${orderItem.product.name}</div>
                                <div className="cart-item-details">₱${orderItem.product.price.toFixed(2)}</div>
                            </div>
                            <div className="cart-item-price">₱${orderItem.product.price * orderItem.quantity}</div>
                            <div className="cart-item-actions">
                                <button className="cart-qty-btn" onClick={() => updateOrderItemQuantity()}>-</button>
                                <span className="cart-qty">${orderItem.quantity}</span>
                                <button className="cart-qty-btn" onClick={() => updateOrderItemQuantity()}>+</button>
                                <button className="remove-item" onClick={() => removeOrderItem()}><i className="fas fa-trash"></i></button>
                            </div>
                        </div>
                    ))}
            </div>
            <div className="cart-summary">
                <div className="summary-row">
                    <span>Subtotal</span>
                    <span id="cartSubtotal">₱0</span>
                </div>
                <div className="summary-row">
                    <span>Delivery Fee (₱5/gal)</span>
                    <span id="cartDeliveryFee">₱0</span>
                </div>
                <div className="summary-row total">
                    <span>Total</span>
                    <span id="cartTotal">₱0</span>
                </div>
                <button className="checkout-btn" onClick={() => viewConfirmCreateOrderModal()}>
                    <i className="fas fa-credit-card"></i> Checkout
                </button>
            </div>
        </div>
    );
}