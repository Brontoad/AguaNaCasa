import { Station } from "@agc/model";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CreateOrderBtn({station, createOrder} : {station: Station, createOrder(): void}) {
    return (
        <button className="btn-station btn-order-now" data-id={station.id} onClick={() => createOrder()}>
            <FontAwesomeIcon icon={["fas", "shopping-cart"]} /> Order Now
        </button>
    );
}