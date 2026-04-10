export default function ProfileBadge({icon, label}: {icon: React.ReactNode, label: string}) {
    return (<span className="badge-verified">{icon} {label}</span>);
}