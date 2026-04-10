import { useState } from "react";

import VerifyEmail from "./form-steps/verify-email";
import VerifyContactNumber from "./form-steps/verify-contact-number";
import RiderCredentialsForm from "./form-steps/rider-account-credentials";
import VehicleCredentialsForm from "./form-steps/vehicle-credentials";
import RiderDocumentForm from "./form-steps/rider-document";
import ConfirmCreateRider from "./form-steps/confirm-create-rider";

type CreateUserFormStep = string;

const formSteps: CreateUserFormStep[] = ["Rider Information", "Vehicle Information", "Verify Email", "Verify Phone", "Documents", "Complete"];

export default function CreateRiderForm() {
    const [activeStep, setActiveStep] = useState(1);
    
    function renderFormStep(step: number) {
        switch (step) {
            case 2: return <VehicleCredentialsForm updateFormStep={setActiveStep}></VehicleCredentialsForm>;
            case 3: return <VerifyEmail updateFormStep={setActiveStep}></VerifyEmail>;
            case 4: return <VerifyContactNumber updateFormStep={setActiveStep}></VerifyContactNumber>;
            case 5: return <RiderDocumentForm updateFormStep={setActiveStep}></RiderDocumentForm>
            case 6: return <ConfirmCreateRider></ConfirmCreateRider>;
            default: return <RiderCredentialsForm updateFormStep={setActiveStep}></RiderCredentialsForm>;
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