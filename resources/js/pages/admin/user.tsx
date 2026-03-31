/**
 * User
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
import UserSearchFilter from "@/components/admin/table/search_filter/user";
import UserTable from "@/components/admin/table/user";
import DashboardLayout from "@/layouts/dashboard-layout";

import "resources/css/admin/user.css";

export default function User() {
    return (
        <div className="dashboard-wrapper">
            <div className="summary-cards">
                <SummaryCard title="Total Users" id="total-users" quantity={24}></SummaryCard>
                <SummaryCard title="Active Users" id="total-active-users" quantity={12}></SummaryCard>
                <SummaryCard title="Suspended Users" id="total-suspended-users" quantity={12}></SummaryCard>
            </div>
            
            <div className="tab-container">
                <div className="tab-header">
                    <button className="tab-btn active">Active</button>
                    <button className="tab-btn">Suspended</button>
                </div>
                
                <div id="users-tab" className="tab-content active">
                    <UserSearchFilter></UserSearchFilter>
                    <UserTable></UserTable>
                </div>
            </div>
        </div>
    );
}

User.layout = (page: any) => <DashboardLayout page={page} title="Users | Agua Na Casa"></DashboardLayout>

// Agua Na Casa(c), 2026.