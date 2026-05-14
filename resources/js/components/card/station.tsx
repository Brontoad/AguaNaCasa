import { STATION_STATUS } from "@/pages/config";
import { Station, UserStation } from "@agc/model";
import CreateOrderBtn from "../button/create-order";
import ViewCreateSubscriptionFormBtn from "../button/view-create-subscription";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function renderStationStatus(status: string) {
    switch (status) {
        case STATION_STATUS.OPEN:
            return <i className="fas fa-clock"></i>
        case STATION_STATUS.BUSY:
            return <i className="fas fa-hourglass-half"></i>
        default:
            return <i className="fas fa-ban"></i>
    }
}

export default function StationCard({station, createOrder, subscribe} : {station: UserStation, createOrder(station: UserStation): void, subscribe(station: UserStation): void}) {
    return (
        <div className="station-card">
            <div className="card-header-station">
                <div className="station-picture"><i className={station.name}></i></div>
                <div className="station-name-section">
                    <h3>{station.name}</h3>
                    <div className="station-location">
                        <FontAwesomeIcon icon={["fas", "map-marker-alt"]} /> {station.address.location}
                        <span className="distance-badge"><FontAwesomeIcon icon={["fas", "walking"]} /> {station.distance.toFixed(2)} km</span>
                    </div>
                </div>
            </div>
            <div className="card-body-station">
                <div className="station-meta">
                    <div className="status-badge-station ${statusInfo.className}">{renderStationStatus(station.status)}</div>
                </div>
                {/* <div className="rating-chip">
                    <FontAwesomeIcon icon={["fas", "star"]} /> {station.rating}
                    <span style={{marginLeft: "4px", fontWeight: "400"}}>({station.reviews} reviews)</span>
                </div> */}
            </div>
            <div className="card-actions">
                <CreateOrderBtn station={station} createOrder={() => createOrder(station)}/>
                <ViewCreateSubscriptionFormBtn station={station} subscribe={() => subscribe(station)}/>
            </div>
        </div>
    );
}