import StationCard from "@/components/card/station";
import Section from "@/components/section";
import DashboardLayout from "@/layouts/dashboard-layout";
import { Station as StationModel } from "@agc/model";
import "../../../css/dashboard.css";
export default function Station({stations} : {stations: StationModel[]}) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <Section title="Stations" icon="store"/>
                    <div className="cards-grid">
                        {stations.map((station, idx) => (<StationCard key={`station-card-${idx}`} station={station} isSubscribed/>))}
                    </div>
                </div>
            </div>
        </div>
    );
}

Station.layout = (page: any) => <DashboardLayout page={page} title="Station | Agua Na Casa"></DashboardLayout>