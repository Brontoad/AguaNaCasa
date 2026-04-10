import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function findStation() {}

export default function FindStationBtn() {
    return (
        <button className="address-action-btn" onClick={() => findStation()}>
            <FontAwesomeIcon icon={["fas", "search"]} style={{backgroundColor: "#19A7CE"}}/> Find Station
        </button>
    );
}