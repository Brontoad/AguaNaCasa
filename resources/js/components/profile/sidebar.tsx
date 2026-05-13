import { USER_PROFILE_SIDEBARS } from "@/config";
import { ACCOUNT_ROLE } from "@/pages/config";
import { IconName } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, usePage } from "@inertiajs/react";

interface ProfileSidebarBtn {tab: string, icon: IconName, title: string, notAllowedTypes: string[]}

const profileSidebarBtns: ProfileSidebarBtn[] = [
    {tab: USER_PROFILE_SIDEBARS.SETTINGS, icon: "user-circle", title: "Profile", notAllowedTypes: []},
    {tab: USER_PROFILE_SIDEBARS.ADDRESS, icon: "map-marked-alt", title: "Addresses", notAllowedTypes: [ACCOUNT_ROLE.STATION, ACCOUNT_ROLE.RIDER]},
    {tab: USER_PROFILE_SIDEBARS.CHANGE_STATION, icon: "store", title: "Station Account", notAllowedTypes: [ACCOUNT_ROLE.STATION, ACCOUNT_ROLE.RIDER]},
    {tab: USER_PROFILE_SIDEBARS.CHANGE_RIDER, icon: "motorcycle", title: "Rider Account", notAllowedTypes: [ACCOUNT_ROLE.STATION, ACCOUNT_ROLE.RIDER]}
];

export default function ProfileSidebar({changeTab} : {changeTab(tab: string): void}) {
    const {auth} = usePage().props;

    return (
        <div className="profile-sidebar">
            <div className="sidebar-nav">
                {profileSidebarBtns.map((sidebarBtn, idx) => (
                    !sidebarBtn.notAllowedTypes.includes(auth.role) && <button className="sidebar-btn" onClick={() => changeTab(sidebarBtn.tab)} key={`profile-sidebar-${idx}`}>
                        <FontAwesomeIcon icon={["fas", sidebarBtn.icon as IconName]} /> {sidebarBtn.title}
                    </button>
                ))}
            </div>
            
            <div className="sidebar-logout">
                <Link className="logout-sidebar-btn" href="/logout" as={"button"}><FontAwesomeIcon icon={["fas", "sign-out-alt"]} /> Logout</Link>
            </div>
        </div>
    );
}