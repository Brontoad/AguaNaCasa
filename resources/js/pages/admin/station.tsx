import DashboardLayout from "@/layouts/dashboard-layout";

import { StationWithSystemFee } from "@agc/model";
import Section from "@/components/section";

import "../../../css/dashboard.css";

import StationTable from "@/components/admin/table/station";

export default function Station({stations}: {stations: StationWithSystemFee[]}) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div style={{display: "flex", justifyContent: "space-between", marginBottom: "24px"}}><Section icon="store" title="Stations" /></div>   
                    <StationTable stations={stations} />
                </div>
            </div>
        </div>
    );
}

Station.layout = (page: any) => <DashboardLayout page={page} title="Station | Agua Na Casa"></DashboardLayout>