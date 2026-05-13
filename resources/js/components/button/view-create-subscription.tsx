import { Station, UserStation } from "@agc/model";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ViewCreateSubscriptionFormBtn({station, subscribe} : {station: UserStation, subscribe(): void}) {
    const isSubscribed: boolean = station.is_subscribed;
    return (
        <button className={`btn-station btn-subscribe ${isSubscribed ? 'subscribed' : ''}`} data-station={station} onClick={() => subscribe()}>
            <FontAwesomeIcon icon={["fas", isSubscribed ? 'bell-slash' : 'bell']} />
            <span className="subscribe-text">{isSubscribed ? 'Unsubscribe' : 'Subscribe'}</span>
        </button>
    );
}