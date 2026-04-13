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

export default function Index() {
    const adminStatistics: SummaryCardProps[] = [
        {label: "Total Stations", icon: "store", value: `100`},
        {label: "Total Orders", icon: "boxes", value: `1500`},
        {label: "Total Users", icon: "user", value: `200`},
        {label: "Total Earnings", icon: "coins", value: `₱100.00`},
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