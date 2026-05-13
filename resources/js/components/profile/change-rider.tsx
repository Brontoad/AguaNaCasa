import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SettingsItem from "./settings-item";
import { router } from "@inertiajs/react";

export default function ProfileChangeRider({hasRider} : {hasRider: boolean}) {
    return (
        <div className="info-card">
            <div className="card-header"><h3><FontAwesomeIcon icon={["fas", "motorcycle"]} style={{color: "var(--primary)"}}/> Rider Account Management</h3></div>
            {!hasRider ? <SettingsItem title="Create Rider Account" subtitle="Create your rider account here" handlerTitle="Create" handler={() => router.get("/signup/rider")} />
                : <SettingsItem title="Change to Rider" subtitle="Access your rider account here" handlerTitle="Switch" handler={() => router.get("/login/rider")} />}
        </div>
    )
}