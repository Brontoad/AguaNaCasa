/**
 * Rider Management
 * 
 * Created by:  Calulut, Joshua Miguel C.
 *              Jamalul, Mohammad Hud A.
 *              Sueño, Diana S.
 * Tested by:   N/A
 * 
 * Created at:      February 26, 2026
 * Last Edited at:  March 14, 2026
 * Last Tested at:  N/A
 */
import SummaryCard from "@/components/admin/summary-card";
import RiderTable from "@/components/admin/table/rider";
import RiderSearchFilter from "@/components/admin/table/search_filter/rider";

export default function Rider() {
    return (
        <div className="dashboard-wrapper">
            <div className="summary-cards">
                <SummaryCard title="Total Riders" id="total-customers" quantity={24}></SummaryCard>
                <SummaryCard title="Active Riders" id="total-active-riders" quantity={12}></SummaryCard>
                <SummaryCard title="Suspended Riders" id="total-suspended-rides" quantity={12}></SummaryCard>
            </div>
            
            <div className="tab-container">
                <div className="tab-header">
                    <button className="tab-btn active">Active</button>
                    <button className="tab-btn">Suspended</button>
                </div>
                
                <div id="riders-tab" className="tab-content">
                    <RiderSearchFilter></RiderSearchFilter>
                    <RiderTable></RiderTable>
                </div>
            </div>
        </div>
    );
}

// Agua Na Casa(c), 2026.