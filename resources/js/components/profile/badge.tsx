import { IconName } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProfileBadge({icon, label}: {icon: React.ReactNode, label: string}) {
    return (<span className="badge-verified"><FontAwesomeIcon icon={["fas", icon as IconName]} /> {label}</span>);
}