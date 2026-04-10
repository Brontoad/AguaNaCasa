import { useState } from "react";

import VerifyContactNumber from "./form-steps/verify-contact-number";
import VerifyEmail from "./form-steps/verify-email";
import ConfirmCreateStation from "./form-steps/confirm-create-station";
import StationCredentialsForm from "./form-steps/station-account-credentials";

type CreateStationFormStep = string;

const formSteps: CreateStationFormStep[] = ["Station Info", "Verify Email", "Verify Phone", "Complete"];

export default function CreateStationForm() {
    const [activeStep, setActiveStep] = useState(1);
    
    function renderFormStep(step: number) {
        switch (step) {
            case 2: return <VerifyEmail updateFormStep={setActiveStep}></VerifyEmail>;
            case 3: return <VerifyContactNumber updateFormStep={setActiveStep}></VerifyContactNumber>;
            case 4: return <ConfirmCreateStation></ConfirmCreateStation>;
            default: return <StationCredentialsForm updateFormStep={setActiveStep}></StationCredentialsForm>;
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