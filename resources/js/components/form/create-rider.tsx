import { useState } from "react";

import VerifyEmail from "./form-steps/verify-email";
import VerifyContactNumber from "./form-steps/verify-contact-number";
import ConfirmCreateRider from "./form-steps/confirm-create-rider";
import RiderCredentialsForm, { RiderCredentials } from "./form-steps/rider-account-credentials";
import RiderDocumentForm from "./form-steps/rider-document";
import VerifyContactNumberRider from "./form-steps/verify-contact-number-rider";
import { usePage } from "@inertiajs/react";

type CreateRiderFormStep = string;

const formSteps: CreateRiderFormStep[] = ["Rider Info", "Verify Phone", "Complete"];

export default function CreateRiderForm() {
    const [activeStep, setActiveStep] = useState(1);
    const {auth} = usePage().props;
    if (!auth.user) {throw new Error("User is not authenticated");} 
    const [riderCredentials, setRiderCredentials] = useState<RiderCredentials>({
        user_id: auth.user.id,
        plate_number: "",
        vehicle: "",
        contact_number: "",
        password: ""
    });

    function renderFormStep(step: number) {
        switch (step) {
            case 2: return <VerifyContactNumberRider riderCredentials={riderCredentials} contactNumber={riderCredentials.contact_number} updateFormStep={setActiveStep}/>
            case 3: return <ConfirmCreateRider/>
            default: return <RiderCredentialsForm updateRiderCredentials={setRiderCredentials} updateFormStep={setActiveStep} />
        }
    }

    return (
        <div className="form-container">
            <div className="progress-steps">
                {formSteps.map((step, idx) => (
                    <div
                        className={`step ${(idx + 1) === activeStep ? "active" : ""}`}
                        key={`create-rider-form-step-${idx}`}
                    >
                        {idx + 1}
                        <span className="step-label">{step}</span>
                    </div>
                ))}
            </div>

            <div className="steps-container">
                <div className="form-step">
                    {renderFormStep(activeStep)}
                </div>
            </div>
        </div>
    );
}