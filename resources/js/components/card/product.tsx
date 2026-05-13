import { ACCOUNT_ROLE } from "@/pages/config";
import { Product } from "@agc/model";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePage } from "@inertiajs/react";

function UserProductCard({
    product,
    addOrderItem
}: {
    product: Product,
    addOrderItem(product: Product): void
}) {
    return (
        <div className="card" data-product-id={product.id}>
            <div className="card-header-row">
                <span>{product.name}</span>
                <span className="card-price">
                    ₱{Number(product.price).toFixed(2)}
                </span>
            </div>

            <div className="card-img"><img src={"/assets/default-product.png"} alt={product.name}/></div>

            <button className="add-to-cart-btn" onClick={() => addOrderItem(product)}>
                <FontAwesomeIcon icon={["fas", "cart-plus"]} /> Add to Cart
            </button>
        </div>
    );
}

function StationProductCard({product, toggleProductAvailability, openUpdateProductModal}: {
    product: Product, toggleProductAvailability(product: Product): void, openUpdateProductModal(product: Product): void}) {
    return (
        <div className="product-card">
            <div className="product-header">
                <h4>{product.name}</h4>
                <span className="price-badge">₱{Number(product.price).toFixed(2)}</span>
            </div>

            <div className="product-status">
                <div className={`availability-toggle ${product.is_available ? "active" : ""}`} onClick={() => toggleProductAvailability(product)}></div>
                <span>{product.is_available ? "Available" : "Not Available"}</span>
            </div>

            <div className="product-actions">
                <button className="edit-price" onClick={() => openUpdateProductModal(product)}>Edit Price</button>
            </div>
        </div>
    );
}

export default function ProductCard({product, addOrderItem, toggleProductAvailability, openUpdateProductModal}: {
    product: Product, addOrderItem?(product: Product): void, toggleProductAvailability?(product: Product): void, openUpdateProductModal?(product: Product): void}) {
    const { auth } = usePage().props as any;

    return auth.role === ACCOUNT_ROLE.STATION ? (
        <StationProductCard product={product} toggleProductAvailability={toggleProductAvailability ?? (() => alert("Toggling product availability failed."))}
            openUpdateProductModal={openUpdateProductModal ?? (() => alert("Opening update product modal failed."))}/>
    ) : (
        <UserProductCard product={product} addOrderItem={addOrderItem ?? ((product: Product) => alert(`Adding ${product.name} to order failed.`))}/>
    );
}