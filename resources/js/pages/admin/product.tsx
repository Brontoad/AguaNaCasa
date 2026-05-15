import DashboardLayout from "@/layouts/dashboard-layout";

import { Product as ProductModel } from "@agc/model";

import Section from "@/components/section";

import "../../../css/dashboard.css";

import ProductTable from "@/components/admin/table/product";

export default function Product({products}: {products: ProductModel[]}) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div style={{display: "flex", justifyContent: "space-between", marginBottom: "24px"}}><Section icon="bottle-water" title="Products" /></div>   
                    <ProductTable products={products}/>
                </div>
            </div>
        </div>
    );
}

Product.layout = (page: any) => <DashboardLayout page={page} title="Product | Agua Na Casa"></DashboardLayout>