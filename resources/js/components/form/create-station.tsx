import { useState } from "react";

import VerifyContactNumber from "./form-steps/verify-contact-number";
import VerifyEmail from "./form-steps/verify-email";
import ConfirmCreateStation from "./form-steps/confirm-create-station";
import StationCredentialsForm from "./form-steps/station-account-credentials";
import { LeafletAddress } from "../location-picker";
import VerifyContactNumberStation from "./form-steps/verify-contact-number-station";
import { usePage } from "@inertiajs/react";

type CreateStationFormStep = string;

const formSteps: CreateStationFormStep[] = ["Station Info", "Verify Email", "Verify Phone", "Complete"];

export interface StationCredentials {
    owner_id: string,
    name: string,
    address: LeafletAddress,
    email: string,
    password: string,
    contact_number: string
}

export default function CreateStationForm() {
    const {auth} = usePage().props;
    if (!auth.user) {throw new Error("User is not authenticated");} 
    const [activeStep, setActiveStep] = useState(1);
    const [stationCredentials, setStationCredentials] = useState<StationCredentials>({
        owner_id: auth.user.id,
        name: "",
        address: {label: "", x: 122.0790, y: 6.9214, location: ""},
        email: "",
        password: "",
        contact_number: ""
    });

    function renderFormStep(step: number) {
        switch (step) {
            case 2: return <VerifyEmail email={stationCredentials.email} updateFormStep={setActiveStep}></VerifyEmail>;
            case 3: return <VerifyContactNumberStation stationCredentials={stationCredentials} contactNumber={stationCredentials.contact_number} updateFormStep={setActiveStep}></VerifyContactNumberStation>;
            case 4: return <ConfirmCreateStation></ConfirmCreateStation>;
            default: return <StationCredentialsForm updateStationCredentials={setStationCredentials} updateFormStep={setActiveStep}></StationCredentialsForm>;
        }
    }

    return (
        <div className="form-container">
            <div className="progress-steps">
                {formSteps.map((step, idx) => (
                    <div className={`step ${(idx + 1) === activeStep}`} key={`create-user-form-step-${idx}`}>{idx + 1}
                    <span className="step-label">{step}</span>
                    </div>
                ))}
            </div>

            <div className="steps-container"><div className="form-step">{renderFormStep(activeStep)}</div></div>
        </div>
    );
}