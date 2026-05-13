import { Product as ProductModel, Station } from "@agc/model";
import { useState } from "react";
import { router, usePage } from "@inertiajs/react";

import ProductCard from "@/components/card/product";
import Section from "@/components/section";
import DashboardLayout from "@/layouts/dashboard-layout";

import UpdateProductPriceModal from "@/components/modal/update-product-price";


import "../../../css/supplier/product.css";
import "../../../css/dashboard.css";
import "../../../css/modal.css";

export default function Product({products}: {products: ProductModel[]}) {
    const {auth} = usePage().props;
    const station: Station = auth.station!;
    const [updateProductPriceModal, setUpdateProductPriceModal] = useState<{open: boolean, product?: ProductModel}>({open: false, product: undefined});
    
    function updateProductPrice(product: ProductModel) {
        router.put(`/station/product/price`, {
            station_id: station.id, product_id: product.id, price: product.price
        }, {
            onSuccess: () => { setUpdateProductPriceModal({open: false, product: undefined}); },
            onError: (errors) => {
                console.log(errors);
                alert("Failed to update product price.");
            }
        });
    }

    function toggleProductAvailability(product: ProductModel): void {
        router.put(`/station/product/is_available`, {station_id: station.id, product_id: product.id, is_available: !product.is_available}, {
            onError: (errors) => {
                console.log(errors);
                alert("Failed to update product availability.");
            }
        });
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div style={{marginBottom: "10px"}}><Section icon="bottle-water" title="Products" /></div>
                    <div className="station-products-grid">
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
                updateProductPrice={() => updateProductPrice(updateProductPriceModal.product!)}
                closeModal={() => setUpdateProductPriceModal({open: false, product: undefined})}/>}
        </div>
    )
}

Product.layout = (page: any) => <DashboardLayout page={page} title="Products | Agua Na Casa"></DashboardLayout>