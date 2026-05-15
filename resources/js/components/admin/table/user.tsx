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
import { User } from "@agc/model";
import "../../../../css/admin/user.css";

export default function UserTable({users}: {users: User[]}) {
    return (
        <div className="table-container">
            <table className="user-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Contact Number</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, idx) => (
                        <tr key={`user-table-${idx}`}>
                            <td>{`${user.last_name}, ${user.first_name} ${user.middle_initial}.`}</td>
                            <td>{user.email}</td>
                            <td>{user.contact_number}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}