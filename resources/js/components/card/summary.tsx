import { IconName } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface SummaryCardProps {icon: IconName, label: string, value: string}

export default function SummaryCard({icon, label, value} : SummaryCardProps) {
    return (
        <div className="summary-card">
            <h3>{label}</h3>
            <div className="number">{value}</div>
        </div>
    );
}