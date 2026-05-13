import { Product } from "@agc/model";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function OrderFormProductCard({product, addProductToCart}: {
    product: Product, addProductToCart(product: Product): void
}) {
    return (
        <div className="order-product-card">
            <div onClick={() => addProductToCart(product)}>
                <div className="order-product-name">{product.name}</div>
                <div className="order-product-price">₱{product.price}/gal</div>
            </div>
        </div>
    )
}