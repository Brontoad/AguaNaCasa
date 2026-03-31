/**
 * Create Order Form
 * 
 * Created by:  Calulut, Joshua Miguel C.
 *              Jamalul, Mohammad Hud A.
 * Tested by:   N/A
 * 
 * Created at:      February 27, 2026
 * Last Edited at:  February 27, 2026
 * Last Tested at:  N/A
 */
export default function CreateOrder() {
    return (
        <>
            <div id="mineral-form">
                <center>
                    <h3>Add Order</h3>
                    <form id="myForm1">
                        <table>
                            <td>OrderID:</td><td><input type="text" name="orderId"></input></td><tr></tr>
                            <td>Email:</td><td><input type="email" name="email"></input></td><tr></tr>
                            <td>Type:</td><td><input type="text" name="type"></input></td><tr></tr>
                            <td>Qty:</td><td><input type="number" name="qty"></input></td><tr></tr>
                            <td colSpan={2}>
                                <center>
                                    <select className="mb-2.5 w-80" id="station" required>
                                        <option>Select Station</option>
                                        <option>Station 1</option>
                                        <option>Station 2</option>
                                        <option>Station 3</option>
                                        <option>Station 4</option>
                                    </select>
                                </center>
                            </td><tr></tr>
                            <td>Location:</td><td><input type="text" name="loc"></input></td><tr></tr>
                            <td>Date:</td><td><input type="date" name="date"></input></td><tr></tr>
                            <td colSpan={2}><center><button type="submit">Order Now</button></center></td>
                        </table>
                    </form>
                </center>
            </div>
        </>
    );
}

// Agua Na Casa(c), 2026.