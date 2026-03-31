/**
 * User Table
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

export default function UserTable() {
    return (
        <div className="table-container">
            <table className="user-table" id="user-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Contact Number</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody id="user-body">
                    <tr>
                        <td>Juan Dela Cruz</td>
                        <td>Guiwan</td>
                        <td>09171234567</td>
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