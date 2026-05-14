import { Rider } from "@agc/model";
import ProfileStatistics from "./profile-statistics";
import ProfileAvatar from "./avatar";
import ProfileBadge from "./badge";

function toggleRiderStatus() {}

export default function RiderProfile({rider} : {rider: Rider}) {
    let stationStatistics = [
        {label: "Total Deiveries", value: `0`},
        {label: "Earnings", value: `₱187.2k`},
        {label: "Rating", value: `4.8⭐`},
    ];

    return (
        <div className="profile-header">
            <div className="rider-status-toggle">
                <span className="status-indicator" id="riderStatusIndicator"></span>
                <span id="riderStatusText">Open</span>
                <button className="status-toggle-btn" onClick={() => toggleRiderStatus()}>Change</button>
            </div> 
            
            <div className="row align-items-center">
                <div className="col-md-8">
                    <ProfileAvatar name={rider.name} changeAvatar={() => {}}/>
                    
                    <div className="profile-info">
                        <h1>{rider.name}</h1>
                        <p><i className="fas fa-phone"></i> {rider.contact_number}</p>
                        
                        {/* <div className="profile-badges">
                            <ProfileBadge icon={<i className="fas fa-check-circle"></i>} label="Verified Rider" />
                            <ProfileBadge icon={<i className="fas fa-calendar-alt"></i>} label="Partner since Jan 2024" />
                        </div> */}
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