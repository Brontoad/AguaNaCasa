import { User } from "@agc/model";
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

import "../../../css/dashboard.css";
import "../../../css/profile.css";
import { USER_PROFILE_SIDEBARS } from "@/config";
import ProfileChangeRider from "@/components/profile/change-rider";
import ProfileChangeStation from "@/components/profile/change-station";

export default function Profile() {
    const {auth} = usePage().props;
    if (!auth.user) {throw new Error("User is not authenticated");}
    const user: User = auth.user;
    let userStatistics = [
        {label: "Total Orders", value: `24`},
        {label: "Spent", value: `₱187.2k`},
    ];

    const [activeTab, setActiveTab] = useState(USER_PROFILE_SIDEBARS.SETTINGS);
    const [updateUserModal, setUpdateUserModal] = useState<{open: boolean, user: User}>({open: true, user: user})
    const [changePasswordModal, setChangePasswordModal] = useState<{open: boolean}>({open: false});
    const [resetEmailModal, setResetEmailModal] = useState<{open: boolean}>({open: false});
    const [resetContactModal, setResetContactNumberModal] = useState<{open: boolean}>({open: false});


    function renderProfileSettings(): React.ReactNode {
        switch (activeTab) {
            case USER_PROFILE_SIDEBARS.ADDRESS:
                return <ProfileAddress />;
            case USER_PROFILE_SIDEBARS.CHANGE_STATION:
                return <ProfileChangeStation hasStation={false} />;
            case USER_PROFILE_SIDEBARS.CHANGE_RIDER:
                return <ProfileChangeRider hasRider={false} />;
            default:
                return <ProfileUserInfo 
                    openChangePasswordModal={() => setChangePasswordModal({open: true})}
                    openResetEmailModal={() => setResetEmailModal({open: true})}
                    openResetContactNumber={() => setResetContactNumberModal({open: true})}/>;
        }
    }

    return (
        <div className="profile-wrapper">
            <div className="profile-header">
                <button className="profile-edit-btn" onClick={() => setUpdateUserModal({open: true, user: user})}>
                    <FontAwesomeIcon icon={["fas", "edit"]} /> Edit
                </button>

                <div className="row align-items-center">
                    <div className="col-md-8">
                        <ProfileAvatar name={user?.first_name ?? "N/A"} changeAvatar={() => {}} />
                        
                        <div className="profile-info">
                            <h1 style={{textTransform: "capitalize"}}>{user.first_name} {user.middle_initial}. {user.last_name}</h1>
                            <p><FontAwesomeIcon icon={["fas", "envelope"]} /> {user.email}</p>
                            <p><FontAwesomeIcon icon={["fas", "phone"]} /> {user.contact_number}</p>
                            
                            <div className="profile-badges">
                                <ProfileBadge icon={"check-circle"} label="Verified User" />
                                <ProfileBadge icon={"calendar-alt"} label="Account since May 2026" />
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="profile-stats">
                            {userStatistics.map((stats, idx) => (<ProfileStatistics key={idx} {...stats} />))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="profile-main">
                <ProfileSidebar changeTab={(tab: string) => setActiveTab(tab)}/>
                <div className="profile-content">{renderProfileSettings()}</div>
            </div>

            {updateUserModal.open && <></>}
            {changePasswordModal.open && <></>}
            {resetEmailModal.open && <></>}
            {resetContactModal.open && <></>}
        </div>);
}

Profile.layout = (page: any) => <DashboardLayout page={page} title="Profile | Agua Na Casa"></DashboardLayout>