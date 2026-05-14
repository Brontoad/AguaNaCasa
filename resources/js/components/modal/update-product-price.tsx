import FormModalLayout from "@/layouts/form-modal-layout";
import { Product, Station } from "@agc/model";
import { useForm, usePage } from "@inertiajs/react";

export default function UpdateProductPriceModal({
    product,
    closeModal
}: {
    product: Product,
    closeModal(): void,
    updateProductPrice(product: Product): void
}) {
    const {auth} = usePage().props;
    const station: Station = auth.station!;
    const { data, setData, put, processing, transform } = useForm({
        station_id: station.id,
        product_id: product.id,
        price: String(product.price)
    });

    function updateProductPrice(e: any) {
    e.preventDefault();

    transform((data) => ({
        ...data,
        price: Number(data.price)
    }));

    put("/station/product/price", {
        onSuccess: () => closeModal()
    });
}

    return (
        <FormModalLayout
            title="Edit Product Price"
            submit={updateProductPrice}
            submitTitle={processing ? "Saving..." : "Edit"}
            handleClose={() => closeModal()}
            link="/product/price"
            method="put"
        >
            <input type="text" name="product_id" value={data.product_id} hidden readOnly />

            <div className="form-group">
                <label>Price (₱)</label>
                <input type="number" value={data.price} onChange={(e) => setData("price", String(e.target.value))}/>
            </div>
        </FormModalLayout>
    );
}