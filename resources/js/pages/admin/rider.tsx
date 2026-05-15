import DashboardLayout from "@/layouts/dashboard-layout";

import { Rider as RiderModel } from "@agc/model";

import Section from "@/components/section";

import "../../../css/dashboard.css";

import RiderTable from "@/components/admin/table/rider";

export default function Rider({riders}: {riders: RiderModel[]}) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div style={{display: "flex", justifyContent: "space-between", marginBottom: "24px"}}><Section icon="motorcycle" title="Riders" /></div>   
                    <RiderTable riders={riders}/>
                </div>
            </div>
        </div>
    );
}

Rider.layout = (page: any) => <DashboardLayout page={page} title="Rider | Agua Na Casa"></DashboardLayout>