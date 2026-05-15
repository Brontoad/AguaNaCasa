/**
 * Rider Table
 * 
 * Created by:  Calulut, Joshua Miguel C.
 *              Jamalul, Mohammad Hud A.
 *              Sueño, Diana S.
 * Tested by:   N/A
 * 
 * Created at:      March 14, 2026
 * Last Edited at:  April 13, 2026
 * Last Tested at:  N/A
 */
import { Rider } from "@agc/model";
import "../../../../css/admin/user.css";
import "../../../../css/modal.css";
import { useState } from "react";
import ViewRiderModal from "@/components/modal/view-rider";

export default function RiderTable({riders}: {riders: Rider[]}) {
    const [viewRiderModal, setViewRiderModal] = useState<{open: boolean, rider?: Rider}>({open: false, rider: undefined});
    return (
        <div className="info-card">
        <table className="table">
            <thead>
                <tr>
                    <th>Plate Number</th>
                    <th>Vehicle</th>
                    <th>Contact Number</th>
                </tr>
            </thead>
            <tbody>
                {riders.map((rider, idx) => (
                    <tr key={`rider-table-${idx}`} onClick={() => setViewRiderModal({open: true, rider: rider})}>
                        <td>{rider.plate_number}</td>
                        <td>{rider.vehicle}</td>
                        <td>{rider.contact_number}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        {viewRiderModal.open && viewRiderModal.rider && <ViewRiderModal rider={viewRiderModal.rider} closeModal={() => setViewRiderModal({open: false, rider: undefined})}/>}
        </div>
    );
}