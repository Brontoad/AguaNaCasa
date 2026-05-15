/**
 * Station Table
 * 
 * Created by:  Calulut, Joshua Miguel C.
 *              Jamalul, Mohammad Hud A.
 *              Sueño, Diana S.
 * Tested by:   N/A
 * 
 * Created at:      March 14, 2026
 * Last Edited at:  March 14, 2026
 * Last Tested at:  N/A
 */
import { Station, StationWithSystemFee } from "@agc/model";
import "../../../../css/admin/user.css";
import { formatTimestamp } from "@/datetime";
import { useState } from "react";
import ViewStationModal from "@/components/modal/view-station";

export default function StationTable({stations}: {stations: StationWithSystemFee[]}) {
    const [viewStationModal, setViewStationModal] = useState<{open: boolean, station?: Station}>({open: false, station: undefined});
    return (
        <div className="info-card">
        <table className="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Contact Number</th>
                    <th>Email</th>
                    <th>Last Paid</th>
                </tr>
            </thead>
            <tbody>
                {stations.map((station, idx) => (
                    <tr key={`station-table-${idx}`} onClick={() => setViewStationModal({open: true, station: station})}>
                        <td>{station.name}</td>
                        <td>{station.address.location}</td>
                        <td>{station.contact_number}</td>
                        <td>{station.email}</td>
                        <td>{formatTimestamp(station.last_paid_at)}</td>
                    </tr>
                ))}
            </tbody>
        </table>

        {viewStationModal.open && viewStationModal.station && <ViewStationModal station={viewStationModal.station} closeModal={() => setViewStationModal({open: false, station: undefined})}/>}
        </div>
    );
}