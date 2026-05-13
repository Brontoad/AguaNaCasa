import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@inertiajs/react";

export default function FindStationBtn() {
    return (
        <Link href="/user/station" as={"button"} className="address-action-btn">
            <FontAwesomeIcon icon={["fas", "search"]} /> Find Station
        </Link>
    );
}