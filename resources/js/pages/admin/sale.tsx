import SummaryCard, { SummaryCardProps } from "@/components/card/summary";
import ProductBreakdownChart, { ProductBreakdown } from "@/components/chart/product-breakdown";
import SalesChart, { SalesChartData } from "@/components/chart/sales";
import DateFilter from "@/components/date-filter";
import Section from "@/components/section";
import DashboardLayout from "@/layouts/dashboard-layout";

import "../../../css/dashboard.css";
import "../../../css/sale/chart.css";
export interface SaleProps {
    total_orders: number,
    total_subscriptions: number,
    revenue: number,
    sales: SalesChartData
}
export default function Sale({total_orders, total_subscriptions, revenue, sales}: SaleProps) {
    const salesStatistics: SummaryCardProps[] = [
        {icon: "shopping-cart", label: "Total Orders", value: `${total_orders}`},
        {icon: "shopping-cart", label: "Total Subscriptions", value: `${total_orders}`},
        {icon: "peso-sign", label: "Gross Revenue", value: `₱${revenue.toFixed(2)}`},
        // {icon: "chart-line", label: "Average Order", value: `₱143`},
    ];
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <Section icon="coins" title="Sales" />
                    {/* <DateFilter /> */}
                    <div className="summary-cards">{salesStatistics.map((stats, idx) => (<SummaryCard {...stats} key={`station-summary-card-${idx}`}/>))}</div>
                    <div className="charts-row"><SalesChart title="Total Sales" sales={sales}/></div>
                </div>
            </div>
        </div>
    );
}

Sale.layout = (page: any) => <DashboardLayout page={page} title="Sales | Agua Na Casa"></DashboardLayout>