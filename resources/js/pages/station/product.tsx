import { Product as ProductModel } from "@agc/model";
import { useState } from "react";

import ProductCard from "@/components/card/product";
import Section from "@/components/section";
import DashboardLayout from "@/layouts/dashboard-layout";

import product from "@/routes/product";
import UpdateProductPriceModal from "@/components/modal/update-product-price";

function toggleProductAvailability(product: ProductModel): void {}

export default function Product({products}: {products: ProductModel[]}) {
    const [updateProductPriceModal, setUpdateProductPriceModal] = useState<{open: boolean, product?: ProductModel}>({open: false, product: undefined});
    
    function updateProductPrice() {}

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <Section icon="bottle-water" title="Products" />
                    <div className="products-grid">
                        {products.map((product, idx) => (
                            <ProductCard product={product} 
                                toggleProductAvailability={() => toggleProductAvailability(product)} 
                                openUpdateProductModal={() => setUpdateProductPriceModal({open: true, product: product})}
                                key={`station-product-card-${idx}`}/>
                        ))}
                    </div>
                </div>
            </div>

            {updateProductPriceModal.open && updateProductPriceModal.product && <UpdateProductPriceModal 
                product={updateProductPriceModal.product} 
                updateProductPrice={() => updateProductPrice()}
                closeModal={() => setUpdateProductPriceModal({open: false, product: undefined})}/>}
        </div>
    )
}

Product.layout = (page: any) => <DashboardLayout page={page} title="Products | Agua Na Casa"></DashboardLayout>