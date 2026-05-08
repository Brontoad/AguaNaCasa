/**
 * Admin Home
 * 
 * Created by:  Calulut, Joshua Miguel C.
 *              Jamalul, Mohammad Hud A.
 *              Sueño, Diana S.
 * Tested by:   N/A
 * 
 * Created at:      February 26, 2026
 * Last Edited at:  April 13, 2026
 * Last Tested at:  N/A
 */
import SummaryCard, { SummaryCardProps } from "@/components/card/summary";
import DashboardLayout from "@/layouts/dashboard-layout";

interface AdminIndexProps {total_stations: number, total_orders: number, total_users: number, total_earnings: number};

export default function Index({total_stations, total_orders, total_users, total_earnings}: AdminIndexProps) {
    const adminStatistics: SummaryCardProps[] = [
        {label: "Total Stations", icon: "store", value: `${total_stations}`},
        {label: "Total Orders", icon: "boxes", value: `${total_orders}`},
        {label: "Total Users", icon: "user", value: `${total_users}`},
        {label: "Total Earnings", icon: "coins", value: `₱${total_earnings}`},
    ];

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="summary-cards">
                        {adminStatistics.map((stats, idx) => <SummaryCard key={`admin-statistics-${idx}`} {...stats}/>)}
                    </div>
                </div>
            </div>
        </div>
    );
}

Index.layout = (page: any) => <DashboardLayout page={page} title="Admin | Agua Na Casa"></DashboardLayout>

// Agua Na Casa(c), 2026.