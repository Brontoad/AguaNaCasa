import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@inertiajs/react";
import { useState } from "react";

export default function VerifyEmail({email, updateFormStep} : {email: string, updateFormStep(step: number): void}) {
    const [canResendEmail, setCanResendEmail] = useState(false);
    return (
        <>
            <div className="verification-status pending" id="emailVerificationStatus">
                <div className="status-icon pending"><FontAwesomeIcon icon={["fas", "envelope"]} /></div>
                <div className="status-text">Verification email sent</div>
                <div className="status-desc">Please check your inbox and click the verification link</div>
            </div>

            <div className="form-group">
                <label> Email Address</label>
                <input type="email" defaultValue={email} readOnly style={{
                    width: "100%", padding: "15px", 
                    border: "2px solid #e0e0e0", 
                    borderRadius: "10px", 
                    background: "#f8f9fa" 
                }} />
            </div>

            <div className="timer"><FontAwesomeIcon icon={["fas", "lock"]} /> Resend available in 120 seconds</div>
            

            <div className="button-group">
                <button onClick={() => updateFormStep(3)} className="btn btn-secondary" disabled={canResendEmail}><FontAwesomeIcon icon={["fas", "redo"]} /> Verify Email</button>
            {/* <Link  as={"button"} onClick={() => updateFormStep(3)} className="btn btn-secondary" disabled={!canResendEmail}><FontAwesomeIcon icon={["fas", "redo"]} /> Resend Verification Email</Link> */}
                <button type="button" className="btn btn-secondary"><FontAwesomeIcon icon={["fas", "arrow-left"]} /> Back</button>
            </div>
        </>
    )
}