import DashboardLayout from "@/layouts/dashboard-layout";
import "resources/css/rider/index.css";

export default function Index() {
    return (
        <div className="dashboard-wrapper">
            <div className="rider-name-section" id="riderNameSection">
                <h1 id="riderDisplayName">Water Boy Account</h1>
                <p id="riderFullName">Loading rider information...</p>
                <div className="rider-badge">
                    <i className="fas fa-motorcycle"></i> Active Rider
                </div>
            </div>
            
            <h2 className="section-title">Ongoing Orders</h2>
            <div className="table-container">
                <table className="rider-table" id="ongoingOrdersTable">
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Branch</th>
                            <th>Email</th>
                            <th>Quantity</th>
                            <th>Type</th>
                            <th>Date</th>
                            <th>Location</th>
                            <th>Total Price</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody id="ongoingOrdersBody">
                        <tr>
                            <td>#ORD-001</td>
                            <td>Guiwan Branch</td>
                            <td>juan.dela.cruz@email.com</td>
                            <td>3 gallons</td>
                            <td>Mineral Water</td>
                            <td>2024-03-15</td>
                            <td>Guiwan, Zamboanga</td>
                            <td>-</td>
                            <td><span className="status-badge processed">Processed</span></td>
                            <td>
                                <button className="action-btn" /* onclick="completeOrder(this)" */>Complete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>#ORD-002</td>
                            <td>Tetuan Branch</td>
                            <td>maria.santos@email.com</td>
                            <td>5 gallons</td>
                            <td>Alkaline Water</td>
                            <td>2024-03-15</td>
                            <td>Tetuan, Zamboanga</td>
                            <td>-</td>
                            <td><span className="status-badge processed">Processed</span></td>
                            <td>
                                <button className="action-btn" /* onclick="completeOrder(this)" */>Complete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>#ORD-003</td>
                            <td>San Jose Branch</td>
                            <td>pedro.reyes@email.com</td>
                            <td>2 gallons</td>
                            <td>Mineral Water</td>
                            <td>2024-03-15</td>
                            <td>San Jose, Zamboanga</td>
                            <td>-</td>
                            <td><span className="status-badge processed">Processed</span></td>
                            <td>
                                <button className="action-btn" /* onclick="completeOrder(this)" */>Complete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>#ORD-004</td>
                            <td>Guiwan Branch</td>
                            <td>anna.flores@email.com</td>
                            <td>4 gallons</td>
                            <td>Mineral Water</td>
                            <td>2024-03-15</td>
                            <td>Guiwan, Zamboanga</td>
                            <td>-</td>
                            <td><span className="status-badge processed">Processed</span></td>
                            <td>
                                <button className="action-btn" /* onclick="completeOrder(this)" */>Complete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>#ORD-005</td>
                            <td>Tetuan Branch</td>
                            <td>ben.torres@email.com</td>
                            <td>6 gallons</td>
                            <td>Alkaline Water</td>
                            <td>2024-03-14</td>
                            <td>Tetuan, Zamboanga</td>
                            <td>-</td>
                            <td><span className="status-badge processed">Processed</span></td>
                            <td>
                                <button className="action-btn" /* onclick="completeOrder(this)" */>Complete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            <h2 className="section-title">Today's Completed Orders</h2>
            <div className="table-container">
                <table className="rider-table" id="completedOrdersTable">
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Branch</th>
                            <th>Email</th>
                            <th>Quantity</th>
                            <th>Type</th>
                            <th>Date</th>
                            <th>Location</th>
                            <th>Total Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody id="completedOrdersBody">
                        <tr>
                            <td>#ORD-100</td>
                            <td>Guiwan Branch</td>
                            <td>ana.lopez@email.com</td>
                            <td>4 gallons</td>
                            <td>Mineral Water</td>
                            <td>2024-03-15</td>
                            <td>Guiwan, Zamboanga</td>
                            <td>-</td>
                            <td><span className="status-badge completed">Completed</span></td>
                        </tr>
                        <tr>
                            <td>#ORD-099</td>
                            <td>Tumaga Branch</td>
                            <td>jose.garcia@email.com</td>
                            <td>6 gallons</td>
                            <td>Alkaline Water</td>
                            <td>2024-03-15</td>
                            <td>Tumaga, Zamboanga</td>
                            <td>-</td>
                            <td><span className="status-badge completed">Completed</span></td>
                        </tr>
                        <tr>
                            <td>#ORD-098</td>
                            <td>Sta. Maria Branch</td>
                            <td>luisa.fernandez@email.com</td>
                            <td>2 gallons</td>
                            <td>Mineral Water</td>
                            <td>2024-03-15</td>
                            <td>Sta. Maria, Zamboanga</td>
                            <td>-</td>
                            <td><span className="status-badge completed">Completed</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            <h2 className="section-title">Order Logs</h2>
            <div className="table-container">
                <table className="rider-table" id="orderLogsTable">
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Branch</th>
                            <th>Email</th>
                            <th>Quantity</th>
                            <th>Type</th>
                            <th>Date</th>
                            <th>Location</th>
                            <th>Total Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody id="orderLogsBody">
                        <tr>
                            <td>#ORD-097</td>
                            <td>San Roque Branch</td>
                            <td>carlos.mendoza@email.com</td>
                            <td>3 gallons</td>
                            <td>Mineral Water</td>
                            <td>2024-03-14</td>
                            <td>San Roque, Zamboanga</td>
                            <td>-</td>
                            <td><span className="status-badge completed">Completed</span></td>
                        </tr>
                        <tr>
                            <td>#ORD-096</td>
                            <td>Guiwan Branch</td>
                            <td>diana.cruz@email.com</td>
                            <td>5 gallons</td>
                            <td>Alkaline Water</td>
                            <td>2024-03-14</td>
                            <td>Guiwan, Zamboanga</td>
                            <td>-</td>
                            <td><span className="status-badge completed">Completed</span></td>
                        </tr>
                        <tr>
                            <td>#ORD-095</td>
                            <td>Tetuan Branch</td>
                            <td>erik.santos@email.com</td>
                            <td>2 gallons</td>
                            <td>Mineral Water</td>
                            <td>2024-03-13</td>
                            <td>Tetuan, Zamboanga</td>
                            <td>-</td>
                            <td><span className="status-badge completed">Completed</span></td>
                        </tr>
                        <tr>
                            <td>#ORD-094</td>
                            <td>San Jose Branch</td>
                            <td>felipe.cruz@email.com</td>
                            <td>8 gallons</td>
                            <td>Alkaline Water</td>
                            <td>2024-03-13</td>
                            <td>San Jose, Zamboanga</td>
                            <td>-</td>
                            <td><span className="status-badge completed">Completed</span></td>
                        </tr>
                        <tr>
                            <td>#ORD-093</td>
                            <td>Guiwan Branch</td>
                            <td>gina.reyes@email.com</td>
                            <td>3 gallons</td>
                            <td>Mineral Water</td>
                            <td>2024-03-12</td>
                            <td>Guiwan, Zamboanga</td>
                            <td>-</td>
                            <td><span className="status-badge completed">Completed</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            <div className="contact-note">
                <h1>
                    <i className="fas fa-phone-alt"></i>
                    Note: Please contact admin for any problems and concerns. Call <a href="tel:+639271715761">0927 171 5761</a>
                </h1>
            </div>
        </div>
    );
}

Index.layout = (page: any) => <DashboardLayout page={page} title="Rider | Agua Na Casa"></DashboardLayout>