import SummaryCard, { SummaryCardProps } from "@/components/card/summary";
import ProductBreakdownChart from "@/components/chart/product-breakdown";
import SalesChart from "@/components/chart/sales";
import DateFilter from "@/components/date-filter";
import Section from "@/components/section";
import DashboardLayout from "@/layouts/dashboard-layout";

export default function Sale() {
    const salesStatistics: SummaryCardProps[] = [
        {icon: "shopping-cart", label: "Total Orders", value: `156`},
        {icon: "tint", label: "Gallons Sold", value: `892`},
        {icon: "peso-sign", label: "Gross Revenue", value: `₱22,300`},
        {icon: "chart-line", label: "Average Order", value: `₱143`},
    ];
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <Section icon="coins" title="Pending Orders" />
                    <DateFilter />
                    <div className="summary-cards">
                        {salesStatistics.map((stats, idx) => (<SummaryCard {...stats} key={`station-summary-card-${idx}`}/>))}
                    </div>

                    <div className="charts-row">
                        <SalesChart title="Daily Sales"/>
                        <ProductBreakdownChart title="Product Breakdown" />
                    </div>
                </div>
            </div>
        </div>
    );
}

Sale.layout = (page: any) => <DashboardLayout page={page} title="Sales | Agua Na Casa"></DashboardLayout>