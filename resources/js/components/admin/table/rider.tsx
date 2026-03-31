/**
 * Rider Table
 * 
 * Created by:  Calulut, Joshua Miguel C.
 *              Jamalul, Mohammad Hud A.
 *              Sueño, Diana S.
 * Tested by:   N/A
 * 
 * Created at:      March 14, 2026
 * Last Edited at:  March 14, 2026
 * Last Tested at:  N/A
 */
import "resources/css/admin/user.css";

export default function RiderTable() {
    return (
        <div className="table-container">
            <table className="rider-table" id="rider-table">
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
                <tbody id="rider-body">
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
                </tbody>
            </table>
        </div>
    );
}