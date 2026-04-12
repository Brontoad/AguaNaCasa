import { Rider, User } from "@agc/model";
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

export const RIDER_PROFILE_SIDEBARS = {
    SETTINGS: "settings"
}

export default function Profile() {
    const {user} = usePage().props;
    const rider: Rider = user.rider;
    let riderStatistics = [
        {label: "Total Orders", value: `24`},
        {label: "Spent", value: `₱187.2k`},
    ];

    const [activeTab, setActiveTab] = useState("");
    const [updateUserModal, setUpdateUserModal] = useState<{open: boolean, user: User}>({open: true, user: user})
    const [changePasswordModal, setChangePasswordModal] = useState<{open: boolean}>({open: false});
    const [resetEmailModal, setResetEmailModal] = useState<{open: boolean}>({open: false});
    const [resetContactModal, setResetContactNumberModal] = useState<{open: boolean}>({open: false});


    function renderProfileSettings(): React.ReactNode {
        switch (activeTab) {
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
                <div className="row align-items-center">
                    <div className="col-md-8">
                        <ProfileAvatar image={user.first_name} />
                        
                        <div className="profile-info">
                            <h1>{user.first_name}</h1>
                            <p><FontAwesomeIcon icon={["fas", "list-numeric"]} /> {rider.plate_number}</p>
                            <p><FontAwesomeIcon icon={["fas", "car"]} /> {rider.vehicle}</p>
                            <p><FontAwesomeIcon icon={["fas", "envelope"]} /> {user.email}</p>
                            <p><FontAwesomeIcon icon={["fas", "phone"]} /> {user.contact_number}</p>
                            
                            <div className="profile-badges">
                                <ProfileBadge icon={"check-circle"} label="Verified Rider" />
                                <ProfileBadge icon={"calendar-alt"} label="Rider since Jan 2024" />
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="profile-stats">
                            {riderStatistics.map((stats, idx) => (<ProfileStatistics key={idx} {...stats} />))}
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

            {updateUserModal.open && <></>}
            {changePasswordModal.open && <></>}
            {resetEmailModal.open && <></>}
            {resetContactModal.open && <></>}
        </div>);
}

Profile.layout = (page: any) => <DashboardLayout page={page} title="Profile | Agua Na Casa"></DashboardLayout>