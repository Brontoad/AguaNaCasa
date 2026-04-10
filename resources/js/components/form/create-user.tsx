import { useState } from "react";

import VerifyContactNumber from "./form-steps/verify-contact-number";
import ConfirmCreateUser from "./form-steps/confirm-create-user";

import AccountCredentialsForm from "./form-steps/user-account-credentials";
import VerifyEmail from "./form-steps/verify-email";

type CreateUserFormStep = string;

const formSteps: CreateUserFormStep[] = ["Account", "Verify Email", "Verify Phone", "Complete"];

export default function CreateUserForm() {
  const [activeStep, setActiveStep] = useState(1);

  function renderFormStep(step: number) {
    switch (step) {
      case 2: return <VerifyEmail updateFormStep={setActiveStep}></VerifyEmail>;
      case 3: return <VerifyContactNumber updateFormStep={setActiveStep}></VerifyContactNumber>;
      case 4: return <ConfirmCreateUser></ConfirmCreateUser>;
      default: return <AccountCredentialsForm updateFormStep={setActiveStep}></AccountCredentialsForm>;
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