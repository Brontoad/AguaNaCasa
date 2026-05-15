import { formatTimestamp } from "@/datetime";
import ModalLayout from "@/layouts/modal-layout";
import { SystemFee } from "@agc/model";

export default function ViewSystemFeeModal({systemFees, closeModal}: {systemFees: SystemFee[], closeModal(): void}) {
    return (<ModalLayout
        title="View System Fees"
        handleClose={() => closeModal()}
    >
        <div className="info-card">
            <table className="table">
                <thead>
                    <tr>
                        <th>Amount</th>
                        <th>Due Date</th>
                        <th>Paid</th>
                    </tr>
                </thead>
                <tbody>
                    {systemFees.map((systemFee, idx) => (
                        <tr key={`order-table-${idx}`} style={{cursor: "pointer"}}>
                            <td>₱{systemFee.amount}</td>
                            <td>{formatTimestamp(systemFee.due_date)}</td>
                            <td>{systemFee.paid ? "Paid": "Not Paid"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </ModalLayout>)
}