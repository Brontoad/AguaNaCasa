import React from "react";

interface SummaryCardProps {
    icon: React.ReactNode,
    label: string,
    value: string
}

export default function SummaryCard({icon, label, value} : SummaryCardProps) {
    return (
        <div className="summary-card">
            <div className="summary-icon">{icon}</div>
            <div className="summary-label">{label}</div>
            <div className="summary-value">{value}</div>
        </div>
    );
}