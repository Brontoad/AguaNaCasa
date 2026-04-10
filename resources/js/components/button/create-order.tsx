import { Station } from "@agc/model";

export default function CreateOrderBtn({station} : {station: Station}) {
    return (
        <button className="btn-station btn-order-now" data-id={station.id}>
            <i className="fas fa-shopping-cart"></i> Order Now
        </button>
    );
}