import { Subscription } from "@agc/model";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SubscriptionCard({subscription} : {subscription : Subscription}) {
    return (
        <div className="simple-sub-card">
            <div className="card-header-simple">
                <div className="station-avatar-small"><FontAwesomeIcon icon={["fas", "tint"]} /></div>
                <h3 className="station-name-simple">{subscription.station.name}</h3>
            </div>
            
            <div className="date-subscribed-row">
                <div>
                    <div className="date-label">Date Subscribed</div>
                    <div className="date-value">{subscription.created_at}</div>
                </div>
            </div>
            
            <div className="view-link"> View Subscription Details <FontAwesomeIcon icon={["fas", "arrow-right"]} /></div>
        </div>
    );
}