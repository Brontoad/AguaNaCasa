import { SystemFee } from "@agc/model";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SettingsItem from "./settings-item";
import { router, usePage } from "@inertiajs/react";
import { formatTimestamp } from "@/datetime";
import { useEffect, useState } from "react";
import ViewSystemFeeModal from "../modal/view-system-fee";

import "../../../css/modal.css";
import axios from "axios";

export default function ProfileSystemFees() {
    const [systemFees, setSystemFees] = useState<SystemFee[]>([]);
    const [latestSystemFee, setLatestSystemFee] = useState<SystemFee | undefined>();
    const [viewSystemFeeModal, setViewSystemFeeModal] = useState<{open: boolean, systemFees: SystemFee[]}>({open: false, systemFees: []});

    async function fetchSystemFees() {
        try {
            const res = await axios.get("/system_fee");
            setSystemFees(res.data.system_fees);
            setLatestSystemFee(res.data.latest_system_fee);
        } catch (err) { console.error("Error fetching system fees:", err); }
    }

    useEffect(() => {fetchSystemFees()}, []);
    return (
        <>
            <div className="info-card">
                <div className="card-header"><h3><FontAwesomeIcon icon={["fas", "coins"]} style={{color: "var(--primary)"}}/> System Fee Management</h3></div>
                <SettingsItem title="View System Fees" subtitle={`View your system fees. Last Paid: ${latestSystemFee ? formatTimestamp(latestSystemFee.updated_at): 'N/A'}`} handlerTitle="View" handler={() => setViewSystemFeeModal({open: true, systemFees: systemFees})} />
                <SettingsItem title="Pay System Fee" subtitle="Pay your latest system fee. Cost: P150.00" handlerTitle="Pay" handler={() => router.put("/system_fee/pay", {system_fee_id: systemFees[0]?.id})} />
            </div>

            {viewSystemFeeModal.open && <ViewSystemFeeModal systemFees={viewSystemFeeModal.systemFees} closeModal={() => setViewSystemFeeModal({open: false, systemFees: viewSystemFeeModal.systemFees})}/>}
        </>
    );
}