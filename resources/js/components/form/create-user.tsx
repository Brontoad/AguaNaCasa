import { useState } from "react";

import VerifyContactNumber from "./form-steps/verify-contact-number";
import ConfirmCreateUser from "./form-steps/confirm-create-user";

import AccountCredentialsForm from "./form-steps/user-account-credentials";
import VerifyEmail from "./form-steps/verify-email";
import { LeafletAddress } from "../location-picker";
import { usePage } from "@inertiajs/react";

type CreateUserFormStep = string;

export interface UserCredentials {
  username: string,
  first_name: string,
  middle_initial: string,
  last_name: string,
  address: LeafletAddress,
  email: string,
  password: string,
  password_confirmation: string,
  contact_number: string
}

const formSteps: CreateUserFormStep[] = ["Account", "Verify Email", "Verify Phone", "Complete"];
export default function CreateUserForm() {
  const [activeStep, setActiveStep] = useState(1);
  const [userCredentials, setUserCredentials] = useState<UserCredentials>({
    username: "",
    first_name: "",
    middle_initial: "",
    last_name: "",
    address: {label: "", x: 122.0790, y: 6.9214, location: ""},
    email: "",
    password: "",
    password_confirmation: "",
    contact_number: ""
  });

  function renderFormStep(step: number) {
    switch (step) {
      case 2: return <VerifyEmail email={userCredentials.email} updateFormStep={setActiveStep}></VerifyEmail>;
      case 3: return <VerifyContactNumber userCredentials={userCredentials} contactNumber={userCredentials.contact_number} updateFormStep={setActiveStep}></VerifyContactNumber>;
      case 4: return <ConfirmCreateUser userCredentials={userCredentials}></ConfirmCreateUser>;
      default: return <AccountCredentialsForm updateUserCredentials={setUserCredentials} updateFormStep={setActiveStep}></AccountCredentialsForm>;
    }
  }

  return (
    <div className="form-container">
      <div className="progress-steps">
        {formSteps.map((step, idx) => (<div className={`step ${(idx + 1) === activeStep}`} key={`create-user-form-step-${idx}`}>{idx + 1}<span className="step-label">{step}</span></div>))}
      </div>

      <div className="steps-container"><div className="form-step">{renderFormStep(activeStep)}</div></div>
    </div>
  );
}