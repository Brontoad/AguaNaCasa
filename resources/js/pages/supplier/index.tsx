import DashboardLayout from "@/layouts/dashboard-layout";
import "resources/css/supplier/index.css";

export default function Index() {
    return (
        <div className="dashboard-wrapper">
            <h2 className="section-title">Active Orders</h2>
            <div className="table-container">
                <table className="supplier-table" id="activeOrdersTable">
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Customer</th>
                            <th>Quantity</th>
                            <th>Location</th>
                            <th>Type</th>
                            <th>Total Price</th>
                            <th>Delivery Type</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody id="activeOrdersBody">
                        <tr>
                            <td>#ORD-001</td>
                            <td>Juan Dela Cruz</td>
                            <td>3 gallons</td>
                            <td>Guiwan, Zamboanga</td>
                            <td>Mineral Water</td>
                            <td>-</td>
                            <td>Instant</td>
                            <td><span className="status-badge pending">Pending</span></td>
                            <td>
                                <button className="action-btn accept" /* onclick="updateOrderStatus(this, 'preparing')" */>Accept</button>
                                <button className="action-btn reject" /* onclick="updateOrderStatus(this, 'cancelled')" */>Reject</button>
                            </td>
                        </tr>
                        <tr>
                            <td>#ORD-002</td>
                            <td>Maria Santos</td>
                            <td>5 gallons</td>
                            <td>Tetuan, Zamboanga</td>
                            <td>Alkaline Water</td>
                            <td>-</td>
                            <td>Subscription</td>
                            <td><span className="status-badge preparing">Preparing</span></td>
                            <td>
                                <button className="action-btn" /* onclick="updateOrderStatus(this, 'delivering')" */>Mark Delivering</button>
                                <button className="action-btn reject" /* onclick="updateOrderStatus(this, 'cancelled')" */>Cancel</button>
                            </td>
                        </tr>
                        <tr>
                            <td>#ORD-003</td>
                            <td>Pedro Reyes</td>
                            <td>2 gallons</td>
                            <td>San Jose, Zamboanga</td>
                            <td>Mineral Water</td>
                            <td>-</td>
                            <td>Instant</td>
                            <td><span className="status-badge delivering">Out for Delivery</span></td>
                            <td>
                                <button className="action-btn accept" /* onclick="updateOrderStatus(this, 'delivered')" */>Mark Delivered</button>
                            </td>
                        </tr>
                        <tr>
                            <td>#ORD-004</td>
                            <td>Anna Flores</td>
                            <td>4 gallons</td>
                            <td>San Jose, Zamboanga</td>
                            <td>Mineral Water</td>
                            <td>-</td>
                            <td>Instant</td>
                            <td><span className="status-badge pending">Pending</span></td>
                            <td>
                                <button className="action-btn accept" /* onclick="updateOrderStatus(this, 'preparing')" */>Accept</button>
                                <button className="action-btn reject" /* onclick="updateOrderStatus(this, 'cancelled')" */>Reject</button>
                            </td>
                        </tr>
                        <tr>
                            <td>#ORD-005</td>
                            <td>Ben Torres</td>
                            <td>6 gallons</td>
                            <td>Tetuan, Zamboanga</td>
                            <td>Alkaline Water</td>
                            <td>-</td>
                            <td>Subscription</td>
                            <td><span className="status-badge preparing">Preparing</span></td>
                            <td>
                                <button className="action-btn" /* onclick="updateOrderStatus(this, 'delivering')" */>Mark Delivering</button>
                                <button className="action-btn reject" /* onclick="updateOrderStatus(this, 'cancelled')" */>Cancel</button>
                            </td>
                        </tr>
                        <tr>
                            <td>#ORD-006</td>
                            <td>Clara Gomez</td>
                            <td>3 gallons</td>
                            <td>Sta. Maria, Zamboanga</td>
                            <td>Mineral Water</td>
                            <td>-</td>
                            <td>Instant</td>
                            <td><span className="status-badge pending">Pending</span></td>
                            <td>
                                <button className="action-btn accept" /* onclick="updateOrderStatus(this, 'preparing')" */>Accept</button>
                                <button className="action-btn reject" /* onclick="updateOrderStatus(this, 'cancelled')" */>Reject</button>
                            </td>
                        </tr>
                        <tr>
                            <td>#ORD-007</td>
                            <td>David Tan</td>
                            <td>8 gallons</td>
                            <td>Guiwan, Zamboanga</td>
                            <td>Alkaline Water</td>
                            <td>-</td>
                            <td>Subscription</td>
                            <td><span className="status-badge preparing">Preparing</span></td>
                            <td>
                                <button className="action-btn" /* onclick="updateOrderStatus(this, 'delivering')" */>Mark Delivering</button>
                                <button className="action-btn reject" /* onclick="updateOrderStatus(this, 'cancelled')" */>Cancel</button>
                            </td>
                        </tr>
                        <tr>
                            <td>#ORD-008</td>
                            <td>Elena Rodriguez</td>
                            <td>2 gallons</td>
                            <td>Tetuan, Zamboanga</td>
                            <td>Mineral Water</td>
                            <td>-</td>
                            <td>Instant</td>
                            <td><span className="status-badge delivering">Out for Delivery</span></td>
                            <td>
                                <button className="action-btn accept" /* onclick="updateOrderStatus(this, 'delivered')" */>Mark Delivered</button>
                            </td>
                        </tr>
                        <tr>
                            <td>#ORD-009</td>
                            <td>Francisco Javier</td>
                            <td>5 gallons</td>
                            <td>San Jose, Zamboanga</td>
                            <td>Alkaline Water</td>
                            <td>-</td>
                            <td>Subscription</td>
                            <td><span className="status-badge pending">Pending</span></td>
                            <td>
                                <button className="action-btn accept" /* onclick="updateOrderStatus(this, 'preparing')" */>Accept</button>
                                <button className="action-btn reject" /* onclick="updateOrderStatus(this, 'cancelled')" */>Reject</button>
                            </td>
                        </tr>
                        <tr>
                            <td>#ORD-010</td>
                            <td>Gloria Santos</td>
                            <td>4 gallons</td>
                            <td>Guiwan, Zamboanga</td>
                            <td>Mineral Water</td>
                            <td>-</td>
                            <td>Instant</td>
                            <td><span className="status-badge preparing">Preparing</span></td>
                            <td>
                                <button className="action-btn" /* onclick="updateOrderStatus(this, 'delivering')" */>Mark Delivering</button>
                                <button className="action-btn reject" /* onclick="updateOrderStatus(this, 'cancelled')" */>Cancel</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            <h2 className="section-title">Orders History</h2>
            
            <div className="sorter-section">
                <span className="sorter-label">Sort by month:</span>
                <select className="sorter-select" id="monthFilter">
                    <option value="">Select month</option>
                    <option value="1">January</option>
                    <option value="2">February</option>
                    <option value="3">March</option>
                    <option value="4">April</option>
                    <option value="5">May</option>
                    <option value="6">June</option>
                    <option value="7">July</option>
                    <option value="8">August</option>
                    <option value="9">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                </select>
                
                <span className="sorter-label">Sort by date:</span>
                <input type="date" className="sorter-date" id="dateFilter" />
                
                <button className="sort-btn" /* onclick="sortHistory()" */>Sort</button>
            </div>
            
            <div className="table-container">
                <table className="supplier-table" id="ordersHistoryTable">
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Customer</th>
                            <th>Quantity</th>
                            <th>Location</th>
                            <th>Type</th>
                            <th>Total Price</th>
                            <th>Delivery Type</th>
                            <th>Status</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody id="ordersHistoryBody">
                        <tr>
                            <td>#ORD-100</td>
                            <td>Ana Lopez</td>
                            <td>4 gallons</td>
                            <td>Guiwan, Zamboanga</td>
                            <td>Mineral Water</td>
                            <td>-</td>
                            <td>Instant</td>
                            <td><span className="status-badge delivered">Delivered</span></td>
                            <td>2024-02-15</td>
                        </tr>
                        <tr>
                            <td>#ORD-099</td>
                            <td>Jose Garcia</td>
                            <td>6 gallons</td>
                            <td>Tumaga, Zamboanga</td>
                            <td>Alkaline Water</td>
                            <td>-</td>
                            <td>Subscription</td>
                            <td><span className="status-badge delivered">Delivered</span></td>
                            <td>2024-02-14</td>
                        </tr>
                        <tr>
                            <td>#ORD-098</td>
                            <td>Luisa Fernandez</td>
                            <td>2 gallons</td>
                            <td>Sta. Maria, Zamboanga</td>
                            <td>Mineral Water</td>
                            <td>-</td>
                            <td>Instant</td>
                            <td><span className="status-badge cancelled">Cancelled</span></td>
                            <td>2024-02-13</td>
                        </tr>
                        <tr>
                            <td>#ORD-097</td>
                            <td>Carlos Mendoza</td>
                            <td>3 gallons</td>
                            <td>San Roque, Zamboanga</td>
                            <td>Mineral Water</td>
                            <td>-</td>
                            <td>Instant</td>
                            <td><span className="status-badge delivered">Delivered</span></td>
                            <td>2024-02-12</td>
                        </tr>
                        <tr>
                            <td>#ORD-096</td>
                            <td>Diana Cruz</td>
                            <td>5 gallons</td>
                            <td>Guiwan, Zamboanga</td>
                            <td>Alkaline Water</td>
                            <td>-</td>
                            <td>Subscription</td>
                            <td><span className="status-badge delivered">Delivered</span></td>
                            <td>2024-02-11</td>
                        </tr>
                        <tr>
                            <td>#ORD-095</td>
                            <td>Erik Santos</td>
                            <td>2 gallons</td>
                            <td>Tetuan, Zamboanga</td>
                            <td>Mineral Water</td>
                            <td>-</td>
                            <td>Instant</td>
                            <td><span className="status-badge delivered">Delivered</span></td>
                            <td>2024-02-10</td>
                        </tr>
                        <tr>
                            <td>#ORD-094</td>
                            <td>Felipe Cruz</td>
                            <td>8 gallons</td>
                            <td>San Jose, Zamboanga</td>
                            <td>Alkaline Water</td>
                            <td>-</td>
                            <td>Subscription</td>
                            <td><span className="status-badge delivered">Delivered</span></td>
                            <td>2024-02-09</td>
                        </tr>
                        <tr>
                            <td>#ORD-093</td>
                            <td>Gina Reyes</td>
                            <td>3 gallons</td>
                            <td>Guiwan, Zamboanga</td>
                            <td>Mineral Water</td>
                            <td>-</td>
                            <td>Instant</td>
                            <td><span className="status-badge delivered">Delivered</span></td>
                            <td>2024-02-08</td>
                        </tr>
                        <tr>
                            <td>#ORD-092</td>
                            <td>Henry Sy</td>
                            <td>6 gallons</td>
                            <td>Tetuan, Zamboanga</td>
                            <td>Alkaline Water</td>
                            <td>-</td>
                            <td>Subscription</td>
                            <td><span className="status-badge cancelled">Cancelled</span></td>
                            <td>2024-02-07</td>
                        </tr>
                        <tr>
                            <td>#ORD-091</td>
                            <td>Isabela Martinez</td>
                            <td>4 gallons</td>
                            <td>Sta. Maria, Zamboanga</td>
                            <td>Mineral Water</td>
                            <td>-</td>
                            <td>Instant</td>
                            <td><span className="status-badge delivered">Delivered</span></td>
                            <td>2024-02-06</td>
                        </tr>
                        <tr>
                            <td>#ORD-090</td>
                            <td>Jorge Lopez</td>
                            <td>5 gallons</td>
                            <td>San Roque, Zamboanga</td>
                            <td>Alkaline Water</td>
                            <td>-</td>
                            <td>Subscription</td>
                            <td><span className="status-badge delivered">Delivered</span></td>
                            <td>2024-02-05</td>
                        </tr>
                        <tr>
                            <td>#ORD-089</td>
                            <td>Karen Tan</td>
                            <td>2 gallons</td>
                            <td>Guiwan, Zamboanga</td>
                            <td>Mineral Water</td>
                            <td>-</td>
                            <td>Instant</td>
                            <td><span className="status-badge delivered">Delivered</span></td>
                            <td>2024-02-04</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

Index.layout = (page: any) => <DashboardLayout page={page} title="Supplier | Agua Na Casa"></DashboardLayout>