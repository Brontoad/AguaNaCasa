import { ACCOUNT_ROLE } from "@/pages/config";
import { Product } from "@agc/model";
import { usePage } from "@inertiajs/react";

function addOrderItem() {}

function toggleProductAvailability() {}

function openUpdateProductModal() {}


function UserProductCard({product} : {product: Product}) {
    return (
        <div className="order-card" data-product-id={`${product.id}`}>
            <div className="card-header-row">
                <span>${product.name}</span>
                <span className="card-price">₱{product.price.toFixed(2)}</span>
            </div>
            <div className="card-img"><img src={`${product.name}`} alt={`${product.name}`} /></div>
            <button className="add-to-cart-btn" onClick={() => addOrderItem()}>
                <i className="fas fa-cart-plus"></i> Add to Cart
            </button>
        </div>
    );
}

function StationProductCard({product} : {product: Product}) {
    return (
        <div className="product-card">
            <div className="product-header">
                <h4>{product.name}</h4>
                <span className="price-badge">₱{product.price}</span>
            </div>
            <div className="product-status">
                <div className="availability-toggle active" onClick={() => toggleProductAvailability()}></div>
                <span>{product.is_available ? "Available" : "Not Available"}</span>
            </div>
            <div className="product-actions">
                <button className="edit-price" onClick={() => openUpdateProductModal()}>Edit Price</button>
            </div>
        </div>
    );
}

export default function ProductCard({product} : {product: Product}) {
    const {user} = usePage().props;

    return (
        user.role === ACCOUNT_ROLE.STATION 
            ? <StationProductCard product={product} /> 
            : <UserProductCard product={product} />
    );
}