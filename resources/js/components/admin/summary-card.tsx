import "resources/css/admin/index.css";

export default function SummaryCard({
    title,
    id,
    quantity
}: {
    title: string,
    id: string,
    quantity: number
}) {
    return (
        <div className="summary-card">
            <h3>{title}</h3>
            <div className="number" id={id}>{quantity}</div>
        </div>
    );
}