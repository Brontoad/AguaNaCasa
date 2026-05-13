import Section from "@/components/section";
import OrderTable from "@/components/table/order";
import DashboardLayout from "@/layouts/dashboard-layout";
import { Order } from "@agc/model";
import "../../../css/rider/index.css";
import "../../../css/dashboard.css";

export default function Index({pending_orders}: {pending_orders: Order[]}) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <Section icon="clock" title="Pending Orders" />
                    <OrderTable orders={pending_orders} title="Pending" partial={true}/>
                </div>
            </div>
        </div>
    );
}

Index.layout = (page: any) => <DashboardLayout page={page} title="Rider | Agua Na Casa"></DashboardLayout>