/**
 * Product Table
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
import { Product } from "@agc/model";
import "../../../../css/admin/user.css";

export default function ProductTable({products}: {products: Product[]}) {
    return (
        <table className="table">
            <thead><tr><th>Name</th></tr></thead>
            <tbody>{products.map((product, idx) => (<tr key={`product-table-${idx}`}><td>{product.name}</td></tr>))}</tbody>
        </table>
    );
}