import { STATION_STATUS } from "@/pages/config";
import { Station } from "@agc/model";
import CreateOrderBtn from "../button/create-order";
import ViewCreateSubscriptionFormBtn from "../button/view-create-subscription";

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

export default function StationCard({station, isSubscribed} : {station: Station, isSubscribed: boolean}) {
    return (
        <div className="station-card">
            <div className="card-header-station">
                <div className="station-picture">
                    <i className={station.name}></i>
                </div>
                <div className="station-name-section">
                    <h3>{station.name}</h3>
                    <div className="station-location">
                        <i className="fas fa-map-marker-alt"></i> {station.address.city}
                        <span className="distance-badge"><i className="fas fa-walking"></i> 0.8 km</span>
                    </div>
                </div>
            </div>
            <div className="card-body-station">
                <div className="station-meta">
                    <div className="status-badge-station ${statusInfo.className}">
                        {renderStationStatus(station.status)}
                    </div>
                </div>
                <div className="rating-chip">
                    <i className="fas fa-star"></i> ${station.rating}
                    <span style={{marginLeft: "4px", fontWeight: "400"}}>(${station.reviews} reviews)</span>
                </div>
            </div>
            <div className="card-actions">
                <CreateOrderBtn station={station} />
                <ViewCreateSubscriptionFormBtn station={station} isSubscribed={isSubscribed} />
            </div>
        </div>
    );
}