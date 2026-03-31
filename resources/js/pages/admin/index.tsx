/**
 * Admin Home
 * 
 * Created by:  Calulut, Joshua Miguel C.
 *              Jamalul, Mohammad Hud A.
 *              Sueño, Diana S.
 * Tested by:   N/A
 * 
 * Created at:      February 26, 2026
 * Last Edited at:  March 13, 2026
 * Last Tested at:  N/A
 */
import SummaryCard from "@/components/admin/summary-card";
import DashboardLayout from "@/layouts/dashboard-layout";

export default function Index() {
    return (
        <div className="dashboard-wrapper">
            <div className="summary-cards">
                <SummaryCard title="Total Instant Orders" quantity={30} id="total-instant-orders"></SummaryCard>
                <SummaryCard title="Total Subscriptions" quantity={30} id="total-subscriptions"></SummaryCard>
            </div>
            
            <div className="filter-section">
                <div className="filter-group">
                    <label>Filter by Station:</label>
                    <select id="station-filter">
                        <option value="all">All Stations</option>
                        <option value="Station 1">Station 1 - Guiwan</option>
                        <option value="Station 2">Station 2 - Tetuan</option>
                        <option value="Station 3">Station 3 - San Jose</option>
                        <option value="Station 4">Station 4 - Tumaga</option>
                    </select>
                </div>
                <div className="filter-group">
                    <label>Date Range:</label>
                    <input type="date" id="start-date" />
                    <span>to</span>
                    <input type="date" id="end-date" />
                </div>
                <button className="filter-btn">Apply Filters</button>
            </div>
            
            <h2 className="section-title">Pending Subscription Orders</h2>
            <div className="table-container">
                <table className="admin-table" id="pending-subscription-table">
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Date</th>
                            <th>Expiry Date</th>
                            <th>Email</th>
                            <th>Sub Type</th>
                            <th>Location</th>
                            <th>Months</th>
                            <th>Quantity</th>
                            <th>Status</th>
                            <th>Total Price</th>
                            <th>Type</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody id="pendingSubscriptionsBody">
                        <tr>
                            <td>#SUB-001</td>
                            <td>2024-03-01</td>
                            <td>2024-06-01</td>
                            <td>maria.santos@email.com</td>
                            <td>Weekly</td>
                            <td>Tetuan, Zamboanga</td>
                            <td>3</td>
                            <td>5</td>
                            <td><span className="status-badge pending">Pending</span></td>
                            <td>-</td>
                            <td>Alkaline</td>
                            <td>
                                <button className="action-btn process">Proceed</button>
                            </td>
                        </tr>
                        <tr>
                            <td>#SUB-002</td>
                            <td>2024-03-02</td>
                            <td>2024-06-02</td>
                            <td>juan.dela.cruz@email.com</td>
                            <td>Monthly</td>
                            <td>Guiwan, Zamboanga</td>
                            <td>3</td>
                            <td>3</td>
                            <td><span className="status-badge pending">Pending</span></td>
                            <td>-</td>
                            <td>Mineral</td>
                            <td>
                                <button className="action-btn process">Proceed</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            <h2 className="section-title">Ongoing Subscription Orders</h2>
            <div className="table-container">
                <table className="admin-table" id="ongoing-subscription-table">
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Date</th>
                            <th>Expiry Date</th>
                            <th>Email</th>
                            <th>Sub Type</th>
                            <th>Location</th>
                            <th>Months</th>
                            <th>Quantity</th>
                            <th>Status</th>
                            <th>Total Price</th>
                            <th>Type</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody id="ongoingSubscriptionsBody">
                        <tr>
                            <td>#SUB-003</td>
                            <td>2024-03-01</td>
                            <td>2024-06-01</td>
                            <td>pedro.reyes@email.com</td>
                            <td>Weekly</td>
                            <td>San Jose, Zamboanga</td>
                            <td>3</td>
                            <td>4</td>
                            <td><span className="status-badge ongoing">Ongoing</span></td>
                            <td>-</td>
                            <td>Mineral</td>
                            <td>
                                <button className="action-btn complete">Complete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>#SUB-004</td>
                            <td>2024-03-02</td>
                            <td>2024-05-02</td>
                            <td>ana.lopez@email.com</td>
                            <td>Weekly</td>
                            <td>Guiwan, Zamboanga</td>
                            <td>2</td>
                            <td>4</td>
                            <td><span className="status-badge ongoing">Ongoing</span></td>
                            <td>-</td>
                            <td>Alkaline</td>
                            <td>
                                <button className="action-btn complete">Complete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            <h2 className="section-title">Pending Product Orders</h2>
            <div className="table-container">
                <table className="admin-table" id="product-order-table">
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Email</th>
                            <th>Item</th>
                            <th>Quantity</th>
                            <th>Status</th>
                            <th>Total Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody id="productOrdersBody">
                        <tr>
                            <td>#PROD-001</td>
                            <td>ana.lopez@email.com</td>
                            <td>Water Dispenser</td>
                            <td>1</td>
                            <td><span className="status-badge processed">Processed</span></td>
                            <td>-</td>
                            <td>
                                <button className="action-btn complete">Complete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>#PROD-002</td>
                            <td>ben.torres@email.com</td>
                            <td>Water Pump</td>
                            <td>1</td>
                            <td><span className="status-badge processed">Processed</span></td>
                            <td>-</td>
                            <td>
                                <button className="action-btn complete">Complete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            <div className="pdf-header">
                <h2 className="section-title" style={{margin: 0}}>Generated Sub Orders</h2>
                <button className="generate-pdf-btn">
                    <i className="fas fa-file-pdf"></i> Generate PDF
                </button>
            </div>

            <div className="table-container">
                <table className="admin-table" id="generate-suborder-table">
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Date</th>
                            <th>Location</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>
                    <tbody id="generated-suborder-body">
                        <tr>
                            <td>#SUB-003</td>
                            <td>pedro.reyes@email.com</td>
                            <td>Mineral</td>
                            <td>2024-03-15</td>
                            <td>San Jose, Zamboanga</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>#SUB-003</td>
                            <td>pedro.reyes@email.com</td>
                            <td>Mineral</td>
                            <td>2024-03-22</td>
                            <td>San Jose, Zamboanga</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>#SUB-003</td>
                            <td>pedro.reyes@email.com</td>
                            <td>Mineral</td>
                            <td>2024-03-29</td>
                            <td>San Jose, Zamboanga</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>#SUB-004</td>
                            <td>ana.lopez@email.com</td>
                            <td>Alkaline</td>
                            <td>2024-03-15</td>
                            <td>Guiwan, Zamboanga</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>#SUB-004</td>
                            <td>ana.lopez@email.com</td>
                            <td>Alkaline</td>
                            <td>2024-03-22</td>
                            <td>Guiwan, Zamboanga</td>
                            <td>4</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

Index.layout = (page: any) => <DashboardLayout page={page} title="Admin | Agua Na Casa"></DashboardLayout>

// Agua Na Casa(c), 2026.