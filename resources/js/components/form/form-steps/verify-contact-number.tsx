function moveToNext(idx: number) {

}

function handleBackspace(idx: number) {

}

function verifyOTP() {

}

function resendOTP() {
    
}

function OTPInput({index} : {index: number}) {
    return <input type="text" className="otp-input" maxLength={1} onKeyUp={() => moveToNext(index)} onKeyDown={() => handleBackspace(index)}/>
}

function renderOTPInputs(inputs: number) {
    for (let index = 0; index < inputs; index++) {
        return <OTPInput index={index}></OTPInput>;
    }
}
export default function VerifyContactNumber({updateFormStep} : {updateFormStep: (step: number) => void}) {
    return (
        <>
            <div className="verification-status" id="phoneVerificationStatus">
                <div className="status-icon pending">
                <i className="fas fa-phone"></i>
                </div>
                <div className="status-text">Verify Your Phone</div>
                <div className="status-desc">We've sent a 6-digit code to <span id="phoneDisplay"></span></div>
            </div>

            <div className="otp-container" id="otpContainer">
                {renderOTPInputs(6)}
            </div>

            <div className="timer" id="phoneTimer">
                <i className="fas fa-clock"></i> Code expires in <span id="phoneTimerCount">120</span> seconds
            </div>

            <button type="button" className="btn btn-secondary" onClick={() => resendOTP()} id="resendOtpBtn" disabled>
                <i className="fas fa-redo"></i> Resend Code
            </button>

            <div className="button-group">
                <button type="button" className="btn btn-secondary" onClick={() => updateFormStep(3)}>
                <i className="fas fa-arrow-left"></i> Back
                </button>
                <button type="button" className="btn btn-primary" onClick={() => verifyOTP()} id="verifyOtpBtn">
                Verify Code <i className="fas fa-check"></i>
                </button>
            </div>
        </>
    );
}