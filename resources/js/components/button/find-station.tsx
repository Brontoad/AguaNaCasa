import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@inertiajs/react";

export default function FindStationBtn() {
    return (
        <Link href="/station" as={"button"}>
            <FontAwesomeIcon icon={["fas", "search"]} style={{backgroundColor: "var(--primary)"}}/> Find Station
        </Link>
    );
}