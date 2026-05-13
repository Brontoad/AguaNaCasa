/**
 * Rider Table
 * 
 * Created by:  Calulut, Joshua Miguel C.
 *              Jamalul, Mohammad Hud A.
 *              Sueño, Diana S.
 * Tested by:   N/A
 * 
 * Created at:      March 14, 2026
 * Last Edited at:  April 13, 2026
 * Last Tested at:  N/A
 */
import { Rider } from "@agc/model";
import "resources/css/admin/user.css";

export default function RiderTable({riders}: {riders: Rider[]}) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Station</th>
                    <th>Total</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {riders.map((order, idx) => (
                    <tr key={`order-table-${idx}`}>
                        <td>{order.created_at}</td>
                        <td>{order.station.name}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}