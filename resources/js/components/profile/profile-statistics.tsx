export default function ProfileStatistics({label, value} : {label: string, value: string}) {
    return (
        <div className="stat-item">
            <span className="stat-value">{value}</span>
            <span className="stat-label">{label}</span>
        </div>
    );
}