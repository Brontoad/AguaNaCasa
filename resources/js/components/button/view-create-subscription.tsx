import { Station } from "@agc/model";

export default function ViewCreateSubscriptionFormBtn({station, isSubscribed} : {station: Station, isSubscribed: boolean}) {
    return (
        <button className={`btn-station btn-subscribe ${isSubscribed ? 'subscribed' : ''}`} data-station={station}>
            <i className={`fas ${isSubscribed ? 'fa-bell-slash' : 'fa-bell'}`}></i> 
            <span className="subscribe-text">${isSubscribed ? 'Unsubscribe' : 'Subscribe'}</span>
        </button>
    );
}