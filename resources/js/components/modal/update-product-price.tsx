import FormModalLayout from "@/layouts/form-modal-layout";
import { Product } from "@agc/model";

export default function UpdateProductPriceModal({product, closeModal, updateProductPrice}: {product: Product, closeModal(): void, updateProductPrice(): void}) {
    return (
        <FormModalLayout
            title="Edit Product Price"
            submit={() => updateProductPrice()}
            submitTitle="Edit"
            handleClose={() => closeModal()}
            link="/product/price"
            method="put">
            <input type="text" name="product_id" hidden={true} />
            
            <div className="form-group">
                <label>Price (₱)</label>
                <input type="number" name="price" defaultValue={product.price} min="0" step="1" />
            </div>
        </FormModalLayout>
    );
}