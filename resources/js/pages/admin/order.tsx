/**
 * Order
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

export default function Order() {
    return (
        <div className="dashboard-wrapper">
            <div className="summary-cards">
                <SummaryCard title="Total Orders" id="total-orders" quantity={24}></SummaryCard>
                <SummaryCard title="Total Pending Orders" id="total-pending-users" quantity={12}></SummaryCard>
                <SummaryCard title="Total Completed Orders" id="total-completed-users" quantity={12}></SummaryCard>
                <SummaryCard title="Total Cancelled Orders" id="total-cancelled-users" quantity={12}></SummaryCard>
            </div>
            
            <div className="tab-container">
                <div className="tab-header">
                    <button className="tab-btn active">Active</button>
                    <button className="tab-btn">Suspended</button>
                </div>
                
                <div id="orders-tab" className="tab-content active">
                    <div className="table-container">
                        <table className="admin-table" id="instant-orders-table">
                            <thead>
                                <tr>
                                    <th>Order ID</th>
                                    <th>Customer</th>
                                    <th>Branch</th>
                                    <th>Type</th>
                                    <th>Date</th>
                                    <th>Location</th>
                                    <th>Quantity</th>
                                    <th>Status</th>
                                    <th>Total Price</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody id="instant-order-body">
                                <tr>
                                    <td>#ORD-001</td>
                                    <td>juan.dela.cruz@email.com</td>
                                    <td>Station 1</td>
                                    <td>Mineral Water</td>
                                    <td>2024-03-15</td>
                                    <td>Guiwan, Zamboanga</td>
                                    <td>3</td>
                                    <td><span className="status-badge processed">Processed</span></td>
                                    <td>-</td>
                                    <td>
                                        <button className="action-btn complete">Complete</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

// Agua Na Casa(c), 2026.