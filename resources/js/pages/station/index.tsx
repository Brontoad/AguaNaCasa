import Section from "@/components/section";
import OrderTable from "@/components/table/order";
import DashboardLayout from "@/layouts/dashboard-layout";
import { Order, Product, UserStation } from "@agc/model";
import "../../../css/supplier/index.css";
import "../../../css/dashboard.css";
import "../../../css/modal.css";

import { Link, usePage } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import CreateOrderModal from "@/components/modal/create-order";
import { router } from "@inertiajs/react";

export default function Index({pending_orders, products}: {pending_orders: Order[], products: Product[]}) {
    const {auth} = usePage().props;
    if (!auth.station) {throw new Error("User is not authenticated");}
    const [createOrderModal, setCreateOrderModal] = useState<{open: boolean, products: Product[]}>({open: false, products: []})

    function openCreateOrderModal() {
        setCreateOrderModal({open: true, products: []});

        router.get("/station/dashboard", { station_id: auth.station?.id }, {
            preserveState: true, preserveScroll: true,
            only: ["products"],
            onSuccess: (page: any) => { setCreateOrderModal(prev => ({ ...prev, products: page.props.products })); }
        });
    }
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    {/* Create Order Card */}
                    <button className="edit-btn" onClick={() => openCreateOrderModal()}>Create Order <FontAwesomeIcon icon={["fas", "coins"]} /></button>
                
                    <div style={{display: "flex", justifyContent: "space-between", marginBottom: "24px"}}>     
                        <Section icon="clock" title="Pending Orders" />
                        <Link className="edit-btn" as={"button"} href={"/station/order"}>View All <FontAwesomeIcon icon={["fas", "arrow-right"]} /></Link>
                    </div>
                    <OrderTable orders={pending_orders} title="Pending" partial={true}/>
                </div>
            </div>

            {createOrderModal.open && <CreateOrderModal station={auth.station as UserStation} products={products} closeModal={() => setCreateOrderModal({open: false, products: []})}/>}
        </div>
    );
}

Index.layout = (page: any) => <DashboardLayout page={page} title="Agua Na Casa"></DashboardLayout>