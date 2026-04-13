/**
 * Station Table
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
import { Station } from "@agc/model";
import "resources/css/admin/user.css";

export default function StationTable({stations}: {stations: Station[]}) {
    return (
        <div className="table-container">
            <table className="station-table" id="station-table">
                <thead>
                    <tr>
                        <th>Station Name</th>
                        <th>Address</th>
                        <th>Contact Number</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody id="station-body">
                    <tr>
                        <td className="editable-cell">Estasyon 1 - Guiwan</td>
                        <td>Guiwan</td>
                        <td className="editable-cell">123 Mabini St., Guiwan, Zamboanga City</td>
                        <td className="editable-cell">09171234567</td>
                        <td className="editable-cell">guiwan.station@aguanacasa.com</td>
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