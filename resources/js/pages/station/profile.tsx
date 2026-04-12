import { Station, User } from "@agc/model";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePage } from "@inertiajs/react";
import { useState } from "react";

import ProfileAvatar from "@/components/profile/avatar";
import ProfileBadge from "@/components/profile/badge";
import ProfileStatistics from "@/components/profile/profile-statistics";
import ProfileSidebar from "@/components/profile/sidebar";
import ProfileUserInfo from "@/components/profile/user-info";
import ProfileAddress from "@/components/profile/address";
import DashboardLayout from "@/layouts/dashboard-layout";

const STATION_PROFILE_SIDEBARS = {
    ADDRESS: "profile_info",
    SETTINGS: "settings"
}

export default function Profile() {
    const {user} = usePage().props;
    const station: Station = user.station;

    let stationStatistics = [
        {label: "Total Orders", value: `0`},
        {label: "Revenue", value: `₱187.2k`},
        {label: "Rating", value: `${station.rating}⭐`},
    ];

    const [activeTab, setActiveTab] = useState("");
    const [updateStationModal, setUpdateStationModal] = useState<{open: boolean, user: User}>({open: true, user: user})
    const [changePasswordModal, setChangePasswordModal] = useState<{open: boolean}>({open: false});
    const [resetEmailModal, setResetEmailModal] = useState<{open: boolean}>({open: false});
    const [resetContactModal, setResetContactNumberModal] = useState<{open: boolean}>({open: false});


    function renderProfileSettings(): React.ReactNode {
        switch (activeTab) {
            case STATION_PROFILE_SIDEBARS.ADDRESS:
                return <ProfileAddress />;
            default:
                return <ProfileUserInfo 
                    openChangePasswordModal={() => setChangePasswordModal({open: true})}
                    openResetEmailModal={() => setResetEmailModal({open: true})}
                    openResetContactNumber={() => setResetContactNumberModal({open: true})}/>;
        }
    }

    function changeStationStatus() {}

    return (
        <div className="profile-wrapper">
            <div className="profile-header">
                <div className="station-status-toggle">
                    <span className="status-indicator"></span><span>{station.status}</span>
                    <button className="status-toggle-btn" onClick={() => changeStationStatus()}>Change</button>
                </div>

                <div className="row align-items-center">
                    <div className="col-md-8">
                        <ProfileAvatar image={station.name} />
                        
                        <div className="profile-info">
                            <h1>{user.first_name}</h1>
                            <p><FontAwesomeIcon icon={["fas", "map-marker-alt"]} /> {station.address.city}</p>
                            <p><FontAwesomeIcon icon={["fas", "envelope"]} /> {station.email}</p>
                            <p><FontAwesomeIcon icon={["fas", "phone"]} /> {station.contact_number}</p>
                            
                            <div className="profile-badges">
                                <ProfileBadge icon={"check-circle"} label="Verified Station" />
                                <ProfileBadge icon={"calendar-alt"} label="Partner since Jan 2024" />
                            </div>
                        </div>
                    </div>

                    <button className="edit-btn" onClick={() => setUpdateStationModal({open: true, user: user})}>
                        <FontAwesomeIcon icon={["fas", "edit"]} /> Edit
                    </button>

                    <div className="col-md-4">
                        <div className="profile-stats">
                            {stationStatistics.map((stats, idx) => (<ProfileStatistics key={idx} {...stats} />))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="profile-main">
                <ProfileSidebar changeTab={(tab: string) => setActiveTab(tab)}/>

                <div className="profile-content">
                    {renderProfileSettings()}
                </div>
            </div>

            {updateStationModal.open && <></>}
            {changePasswordModal.open && <></>}
            {resetEmailModal.open && <></>}
            {resetContactModal.open && <></>}
        </div>);
}

Profile.layout = (page: any) => <DashboardLayout page={page} title="Profile | Agua Na Casa"></DashboardLayout>