import { Subscription } from "@agc/model";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SubscriptionCard({subscription, viewSubscription}: {subscription: Subscription, viewSubscription(): void}) {
    return (
        <div className="simple-sub-card" onClick={() => viewSubscription()}>
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
        </div>
    );
}