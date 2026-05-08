import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SettingsItem, { SettingsItemProps } from "./settings-item";

interface ProfileUserInfoProps {openChangePasswordModal(): void, openResetEmailModal(): void, openResetContactNumber(): void}

export default function ProfileUserInfo({openChangePasswordModal, openResetEmailModal, openResetContactNumber} : ProfileUserInfoProps) {
    const settingsItem: SettingsItemProps[] = [
        {title: "Change Password", subtitle: "Update your password", handlerTitle: "Change", handler: openChangePasswordModal},
        {title: "Reset Email", subtitle: "Edit your email", handlerTitle: "Reset", handler: openResetEmailModal},
        {title: "Reset Contact Number", subtitle: "Edit your contact number", handlerTitle: "Reset", handler: openResetContactNumber}
    ];

    return (
        <div className="info-card">
            <div className="card-header"><h3><FontAwesomeIcon icon={["fas", "lock"]} style={{color: "var(--primary)"}}/> Security</h3></div>
            {settingsItem.map((item, idx) => (<SettingsItem {...item} key={`user-profile-settings-${idx}`} />))}
        </div>
    );
}