import { Subscription } from "@agc/model";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../../css/subscription/card.css";
import { formatTimestamp, formatTimestampWithoutTime } from "@/datetime";
import { usePage } from "@inertiajs/react";
import { ACCOUNT_ROLE } from "@/pages/config";

export default function SubscriptionCard({subscription, viewSubscription}: {subscription: Subscription, viewSubscription(): void}) {
    const {auth} = usePage().props;
    return (
        <div className="simple-sub-card" onClick={() => viewSubscription()}>
            <div className="card-header-simple">
                <div className="station-avatar-small"><FontAwesomeIcon icon={["fas", "tint"]} /></div>
                <h3 className="station-name-simple">{auth.role === ACCOUNT_ROLE.CUSTOMER ? subscription.station.name : subscription.subscriber.username}</h3> 
            </div>
            
            <div style={{display: "flex", justifyContent: "space-between"}}>
            <div className="date-subscribed-row">
                <div>
                    <div className="date-label">Date Subscribed</div>
                    <div className="date-value">{formatTimestampWithoutTime(subscription.created_at)}</div>
                </div>
            </div>
                <div className="date-subscribed-row">
                    <div>
                        <div className="date-label">Every</div>
                        <div className="date-value">{subscription.pickup_days.join(", ")}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}