/**
 * Station Management
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
import StationSearchFilter from "@/components/admin/table/search_filter/station";
import StationTable from "@/components/admin/table/station";

export default function Station() {
    return (
        <div className="dashboard-wrapper">
            <div className="summary-cards">
                <SummaryCard title="Total Stations" id="total-customers" quantity={24}></SummaryCard>
                <SummaryCard title="Active Stations" id="total-active-stations" quantity={12}></SummaryCard>
                <SummaryCard title="Suspended Stations" id="total-suspended-stations" quantity={12}></SummaryCard>
            </div>
            
            <div className="tab-container">
                <div className="tab-header">
                    <button className="tab-btn active">Active</button>
                    <button className="tab-btn">Suspended</button>
                </div>
                
                <div id="stations-tab" className="tab-content">
                    <StationSearchFilter></StationSearchFilter>
                    <StationTable></StationTable>
                </div>
                
                <div id="riders-tab" className="tab-content">
                    <div className="filter-section">
                        <div className="filter-group">
                            <label><i className="fas fa-search"></i> Search Rider:</label>
                            <input type="text" id="riderSearch" placeholder="Enter rider name..." />
                        </div>
                        <div className="filter-group">
                            <label><i className="fas fa-map-marker-alt"></i> Assigned Barangay:</label>
                            <select id="riderBarangay">
                                <option value="all">All Barangays</option>
                                <option value="Guiwan">Guiwan</option>
                                <option value="Tetuan">Tetuan</option>
                                <option value="San Jose">San Jose</option>
                                <option value="Tumaga">Tumaga</option>
                                <option value="Sta. Maria">Sta. Maria</option>
                                <option value="San Roque">San Roque</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div className="filter-group">
                            <label><i className="fas fa-filter"></i> Status:</label>
                            <select id="riderStatus">
                                <option value="all">All Status</option>
                                <option value="active">Active</option>
                                <option value="busy">Busy</option>
                                <option value="offline">Offline</option>
                            </select>
                        </div>
                        <div className="filter-actions">
                            <button className="filter-btn clear">Clear Filters</button>
                        </div>
                    </div>
                    
                    <div className="table-container">
                        <table className="users-table" id="ridersTable">
                            <thead>
                                <tr>
                                    <th>Rider Name</th>
                                    <th>Assigned Barangay</th>
                                    <th>Service Area</th>
                                    <th>Contact Number</th>
                                    <th>Email</th>
                                    <th>Vehicle Type</th>
                                    <th>Plate Number</th>
                                    <th>Status</th>
                                    <th>Current Load</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody id="ridersBody">
                                <tr>
                                    <td className="editable-cell">Andres Bonifacio</td>
                                    <td>Guiwan</td>
                                    <td>Guiwan, San Jose</td>
                                    <td className="editable-cell">09171234501</td>
                                    <td className="editable-cell">andres.bonifacio@rider.com</td>
                                    <td className="editable-cell">Motorcycle</td>
                                    <td className="editable-cell">ABC-1234</td>
                                    <td><span className="status-badge active">Active</span></td>
                                    <td className="editable-cell">2 orders</td>
                                    <td>
                                        <button className="action-btn edit">Edit</button>
                                        <button className="action-btn delete">Delete</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="editable-cell">Jose Rizal</td>
                                    <td>Tetuan</td>
                                    <td>Tetuan, Tumaga</td>
                                    <td className="editable-cell">09181234502</td>
                                    <td className="editable-cell">jose.rizal@rider.com</td>
                                    <td className="editable-cell">Motorcycle</td>
                                    <td className="editable-cell">XYZ-5678</td>
                                    <td><span className="status-badge busy">Busy</span></td>
                                    <td className="editable-cell">4 orders</td>
                                    <td>
                                        <button className="action-btn edit">Edit</button>
                                        <button className="action-btn delete">Delete</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="editable-cell">Emilio Aguinaldo</td>
                                    <td>San Jose</td>
                                    <td>San Jose, Guiwan</td>
                                    <td className="editable-cell">09191234503</td>
                                    <td className="editable-cell">emilio.aguinaldo@rider.com</td>
                                    <td className="editable-cell">Motorcycle</td>
                                    <td className="editable-cell">DEF-9012</td>
                                    <td><span className="status-badge offline">Offline</span></td>
                                    <td className="editable-cell">0 orders</td>
                                    <td>
                                        <button className="action-btn edit">Edit</button>
                                        <button className="action-btn delete">Delete</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="editable-cell">Gabriela Silang</td>
                                    <td>Tumaga</td>
                                    <td>Tumaga, Tetuan</td>
                                    <td className="editable-cell">09201234504</td>
                                    <td className="editable-cell">gabriela.silang@rider.com</td>
                                    <td className="editable-cell">Motorcycle</td>
                                    <td className="editable-cell">GHI-3456</td>
                                    <td><span className="status-badge active">Active</span></td>
                                    <td className="editable-cell">1 order</td>
                                    <td>
                                        <button className="action-btn edit">Edit</button>
                                        <button className="action-btn delete">Delete</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="editable-cell">Lapu-Lapu</td>
                                    <td>Sta. Maria</td>
                                    <td>Sta. Maria, San Roque</td>
                                    <td className="editable-cell">09211234505</td>
                                    <td className="editable-cell">lapu.lapu@rider.com</td>
                                    <td className="editable-cell">Motorcycle</td>
                                    <td className="editable-cell">JKL-7890</td>
                                    <td><span className="status-badge busy">Busy</span></td>
                                    <td className="editable-cell">3 orders</td>
                                    <td>
                                        <button className="action-btn edit">Edit</button>
                                        <button className="action-btn delete">Delete</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="editable-cell">Melchora Aquino</td>
                                    <td>San Roque</td>
                                    <td>San Roque, Guiwan</td>
                                    <td className="editable-cell">09221234506</td>
                                    <td className="editable-cell">melchora.aquino@rider.com</td>
                                    <td className="editable-cell">Motorcycle</td>
                                    <td className="editable-cell">MNO-1234</td>
                                    <td><span className="status-badge active">Active</span></td>
                                    <td className="editable-cell">2 orders</td>
                                    <td>
                                        <button className="action-btn edit">Edit</button>
                                        <button className="action-btn delete">Delete</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="editable-cell">Antonio Luna</td>
                                    <td>Guiwan</td>
                                    <td>Guiwan, Tetuan</td>
                                    <td className="editable-cell">09231234507</td>
                                    <td className="editable-cell">antonio.luna@rider.com</td>
                                    <td className="editable-cell">Motorcycle</td>
                                    <td className="editable-cell">PQR-5678</td>
                                    <td><span className="status-badge active">Active</span></td>
                                    <td className="editable-cell">1 order</td>
                                    <td>
                                        <button className="action-btn edit">Edit</button>
                                        <button className="action-btn delete">Delete</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="editable-cell">Gregoria de Jesus</td>
                                    <td>Tetuan</td>
                                    <td>Tetuan, Tumaga</td>
                                    <td className="editable-cell">09241234508</td>
                                    <td className="editable-cell">gregoria.dejesus@rider.com</td>
                                    <td className="editable-cell">Motorcycle</td>
                                    <td className="editable-cell">STU-9012</td>
                                    <td><span className="status-badge offline">Offline</span></td>
                                    <td className="editable-cell">0 orders</td>
                                    <td>
                                        <button className="action-btn edit">Edit</button>
                                        <button className="action-btn delete">Delete</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="editable-cell">Diego Silang</td>
                                    <td>San Jose</td>
                                    <td>San Jose, Guiwan</td>
                                    <td className="editable-cell">09251234509</td>
                                    <td className="editable-cell">diego.silang@rider.com</td>
                                    <td className="editable-cell">Motorcycle</td>
                                    <td className="editable-cell">VWX-3456</td>
                                    <td><span className="status-badge busy">Busy</span></td>
                                    <td className="editable-cell">3 orders</td>
                                    <td>
                                        <button className="action-btn edit">Edit</button>
                                        <button className="action-btn delete">Delete</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="editable-cell">Trinidad Tecson</td>
                                    <td>Tumaga</td>
                                    <td>Tumaga, Tetuan</td>
                                    <td className="editable-cell">09261234510</td>
                                    <td className="editable-cell">trinidad.tecson@rider.com</td>
                                    <td className="editable-cell">Motorcycle</td>
                                    <td className="editable-cell">YZA-7890</td>
                                    <td><span className="status-badge active">Active</span></td>
                                    <td className="editable-cell">2 orders</td>
                                    <td>
                                        <button className="action-btn edit">Edit</button>
                                        <button className="action-btn delete">Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}