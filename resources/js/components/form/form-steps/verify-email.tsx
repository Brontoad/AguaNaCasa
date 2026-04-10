function resendEmailVerification() {

}

export default function VerifyEmail({updateFormStep} : {updateFormStep: (step: number) => void}) {
    return (
        <>
            <div className="verification-status pending" id="emailVerificationStatus">
                <div className="status-icon pending">
                <i className="fas fa-envelope"></i>
                </div>
                <div className="status-text" id="emailStatusText">Verification email sent</div>
                <div className="status-desc" id="emailStatusDesc">Please check your inbox and click the verification link</div>
            </div>

            <div className="form-group">
                <label><i className="fas fa-envelope"></i> Email Address</label>
                <input type="email" id="verifiedEmail" readOnly style={{
                    width: "100%", padding: "15px", 
                    border: "2px solid #e0e0e0", 
                    borderRadius: "10px", 
                    background: "#f8f9fa"
                }} />
            </div>

            <div className="timer" id="emailTimer">
                <i className="fas fa-clock"></i> Resend available in <span id="emailTimerCount">120</span> seconds
            </div>

            <button type="button" className="btn btn-secondary" onClick={() => resendEmailVerification()} id="resendEmailBtn" disabled>
                <i className="fas fa-redo"></i> Resend Verification Email
            </button>

            <div className="button-group">
                <button type="button" className="btn btn-secondary" onClick={() => updateFormStep(2)}>
                <i className="fas fa-arrow-left"></i> Back
                </button>
            </div>
        </>
    )
}