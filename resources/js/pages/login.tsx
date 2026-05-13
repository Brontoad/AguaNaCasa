import { useState } from "react";
import { ACCOUNT_ROLE } from "./config";

import LoginUser from "./auth/login/user";
import LoginStation from "./auth/login/station";
import LoginRider from "./auth/login/rider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName } from "@fortawesome/fontawesome-svg-core";

import "../../css/auth.css";
import { Head, usePage } from "@inertiajs/react";

interface RoleTab {logo: string, role: string};

const roleTabs : Array<RoleTab> = [
    {logo: "user", role: ACCOUNT_ROLE.CUSTOMER},
    {logo: "store", role: ACCOUNT_ROLE.STATION},
    {logo: "motorcycle", role: ACCOUNT_ROLE.RIDER}
];

function renderLogin(roleTab: RoleTab) {
    switch (roleTab.role) {
        case ACCOUNT_ROLE.RIDER:
            return <LoginRider></LoginRider>;
        case ACCOUNT_ROLE.STATION:
            return <LoginStation></LoginStation>;
        default:
            return <LoginUser></LoginUser>;
    }
}
export default function Login({default_active_role_tab}: {default_active_role_tab?: string}) {
    const {toast} = usePage().props;
    const [activeRoleTab, setActiveRoleTab] = useState<RoleTab>(roleTabs.find((tab) => tab.role === default_active_role_tab) ?? roleTabs[0]);
    return (
        <div className="container">
            <Head title="Login | Agua na Casa"/>
            <div className="role-tabs">
                {roleTabs.map((roleTab, i) => (
                    <div className={`role-tab ${roleTab.role === activeRoleTab.role ? 'active' : ''}`} 
                        onClick={() => setActiveRoleTab(roleTab)} 
                        key={`role-tab-${i}`}>
                        <FontAwesomeIcon icon={["fas", roleTab.logo as IconName]} /> {roleTab.role}
                    </div>
                ))}
            </div>
            
            {renderLogin(activeRoleTab)}
        </div>
    );
}