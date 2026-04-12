import { IconName } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface SummaryCardProps {icon: IconName, label: string, value: string}

export default function SummaryCard({icon, label, value} : SummaryCardProps) {
    return (
        <div className="summary-card">
            <div className="summary-icon"><FontAwesomeIcon icon={["fas", icon]}/></div>
            <div className="summary-label">{label}</div>
            <div className="summary-value">{value}</div>
        </div>
    );
}