/**
 * Subscription Table
 * 
 * Created by:  Calulut, Joshua Miguel C.
 *              Jamalul, Mohammad Hud A.
 * Tested by:   N/A
 * 
 * Created at:      February 27, 2026
 * Last Edited at:  February 27, 2026
 * Last Tested at:  N/A
 */
export default function SubscriptionTable() {
    return (
        <div id="table-wrapper">
            <table border={1} id="subscription-table">
                <tr>
                    <th>OrderID</th>
                    <th>Email</th>
                    <th>Water Type</th>
                    <th>Subscription Type</th>
                    <th>Quantity</th>
                    <th>Months</th>
                    <th>Location</th>
                    <th>date</th>
                    <th>Total Price</th>
                    <th>Status</th>
                </tr>
            </table>
        </div>
    )
}

// Agua Na Casa(c), 2026.