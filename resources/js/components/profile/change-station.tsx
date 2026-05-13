import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { router } from "@inertiajs/react";
import SettingsItem from "./settings-item";

export default function ProfileChangeStation({hasStation}: {hasStation: boolean}) {
    return (
        <div className="info-card">
            <div className="card-header"><h3><FontAwesomeIcon icon={["fas", "store"]} style={{color: "var(--primary)"}}/> Station Account Management</h3></div>
            {!hasStation ? <SettingsItem title="Create Station Account" subtitle="Create your station account here" handlerTitle="Create" handler={() => router.get("/signup/station")} />
            : <SettingsItem title="Change to Station" subtitle="Access your rider account here" handlerTitle="Switch" handler={() => router.get("/login/station")} />}
        </div>
    )
}