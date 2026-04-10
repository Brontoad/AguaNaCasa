import { useState } from "react";
import { ACCOUNT_ROLE } from "./config";

import LoginUser from "./auth/login/user";
import LoginStation from "./auth/login/station";
import LoginRider from "./auth/login/rider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName } from "@fortawesome/fontawesome-svg-core";

interface RoleTab {logo: string, role: string};

const roleTabs : Array<RoleTab> = [
    {logo: "user", role: ACCOUNT_ROLE.CUSTOMER},
    {logo: "motorcycle", role: ACCOUNT_ROLE.RIDER},
    {logo: "store", role: ACCOUNT_ROLE.STATION},
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
export default function Login() {
    const [activeRoleTab, setActiveRoleTab] = useState<RoleTab>(roleTabs[0]);

    return (
        <div className="container">
            <div className="role-tabs">
                {roleTabs.map((roleTab, i) => (
                    <div className={`capitalize role-tab ${roleTab.role === activeRoleTab.role ? 'active' : ''}`} 
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