import { Station } from "@agc/model";
import ProfileStatistics from "./profile-statistics";
import ProfileAvatar from "./avatar";
import ProfileBadge from "./badge";

function toggleStationStatus() {}

export default function StationProfile({station} : {station: Station}) {
    let stationStatistics = [
        {label: "Total Orders", value: `0`},
        {label: "Revenue", value: `₱187.2k`},
        {label: "Rating", value: `4.8⭐`},
    ];

    return (
        <div className="profile-header">
            <div className="station-status-toggle">
                <span className="status-indicator" id="stationStatusIndicator"></span>
                <span id="stationStatusText">Open</span>
                <button className="status-toggle-btn" onClick={() => toggleStationStatus()}>Change</button>
            </div> 
            
            <div className="row align-items-center">
                <div className="col-md-8">
                    <ProfileAvatar image={station.name} />
                    
                    <div className="profile-info">
                        <h1>{station.name}</h1>
                        <p><i className="fas fa-map-marker-alt"></i> {station.address.suburb}</p>
                        <p><i className="fas fa-phone"></i> {station.contact_number}</p>
                        <p><i className="fas fa-envelope"></i> {station.email}</p>
                        
                        <div className="profile-badges">
                            <ProfileBadge icon={<i className="fas fa-check-circle"></i>} label="Verified Station" />
                            <ProfileBadge icon={<i className="fas fa-calendar-alt"></i>} label="Partner since Jan 2024" />
                        </div>
                    </div>
                </div>
                
                <div className="col-md-4">
                    <div className="profile-stats">
                        {stationStatistics.map((stats, idx) => (<ProfileStatistics key={idx} {...stats} />))}
                    </div>
                </div>
            </div>
        </div>
    );
}