import DashboardLayout from "@/layouts/dashboard-layout";
import { Rider, StationWithSystemFee } from "@agc/model";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@inertiajs/react";

import Section from "@/components/section";
import RiderTable from "@/components/admin/table/rider";
import StationTable from "@/components/admin/table/station";
import SummaryCard, {SummaryCardProps} from "@/components/card/summary";

import "../../../css/dashboard.css";

interface AdminIndexProps {
    total_users: number, total_stations: number, total_riders: number, revenue: number,
    pending_riders: Rider[], pending_stations: StationWithSystemFee[]}

export default function Index({
    total_users, total_stations, total_riders, revenue, 
    pending_riders, pending_stations}: AdminIndexProps) {
    const adminStatistics: SummaryCardProps[] = [
            {icon: "user", label: "Total User", value: `${total_users}`},
            {icon: "store", label: "Total Stations", value: `${total_stations}`},
            {icon: "motorcycle", label: "Total Riders", value: `${total_riders}`},
            {icon: "peso-sign", label: "Gross Revenue", value: `₱${revenue.toFixed(2)}`},
        ];
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="summary-cards">{adminStatistics.map((stats, idx) => (<SummaryCard {...stats} key={`admin-summary-card-${idx}`}/>))}</div>

                    <div style={{display: "flex", justifyContent: "space-between"}}>
                        <Section icon="motorcycle" title="Pending Riders" />
                        <Link className="edit-btn" as={"button"} href={"/admin/rider"}>View All <FontAwesomeIcon icon={["fas", "arrow-right"]} /></Link>
                    </div>
                    <RiderTable riders={pending_riders}/>
                    
                    <div style={{display: "flex", justifyContent: "space-between"}}> 
                        <Section icon="calendar-check" title="Pending Stations" />
                        <Link className="edit-btn" as={"button"} href={"/admin/station"}>View All <FontAwesomeIcon icon={["fas", "arrow-right"]} /></Link>
                    </div>   
                    <StationTable stations={pending_stations} />
                </div>
            </div>
        </div>
    );
}

Index.layout = (page: any) => <DashboardLayout page={page} title="Home | Agua Na Casa"></DashboardLayout>