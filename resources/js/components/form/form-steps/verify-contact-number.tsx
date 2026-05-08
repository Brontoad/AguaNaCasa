import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import { router } from "@inertiajs/react";
import { UserCredentials } from "../create-user";

function verifyOTP() {}
function resendOTP() {}

const OTP_DIGITS: number = 6;

export default function VerifyContactNumber({userCredentials, contactNumber, updateFormStep} : {userCredentials: UserCredentials, contactNumber: string, updateFormStep(step: number): void}) {
    const [OTP, setOTP] = useState("");
    const [OTPIndex, setOTPIndex] = useState(0);
    const OTPInputRefs = useRef<(HTMLInputElement | null)[]>([]);

    function OTPInput({index} : {index: number}) {
        return <input type="text"  ref={(el) => {OTPInputRefs.current[index] = el}} className="otp-input" maxLength={1} onInput={(e) => {
            if ((e.target as HTMLInputElement).value.length > 0) { 
                setOTP((prev) => {
                    const prevSplit = prev.split("");
                    prevSplit[index] = (e.target as HTMLInputElement).value;
                    return prevSplit.join();
                });
                if (index < OTPInputRefs.current.length - 1) { setOTPIndex(index + 1); }
            }
        }}
        onKeyDown={(e) => { if (e.key === "Backspace" && !OTPInputRefs.current[index]?.value && index > 0) { setOTPIndex(index - 1); } }}/>
    }   

    function renderOTPInputs(inputs: number) {
        const OTPInputs = [];
        for (let index = 0; index < inputs; index++) { OTPInputs.push(<OTPInput index={index} key={`otp-input-${index}`}/>);}
        return OTPInputs;
    }

    useEffect(() => {if (OTPInputRefs.current[OTPIndex]) { OTPInputRefs.current[OTPIndex].focus() }}, [OTPIndex]);

    const handleSubmission = () => {
        // Assume OTP is correct and just send the data
        router.post('/user', userCredentials as any, {
            onSuccess: () => {updateFormStep(4);},
            onError: (errors) => {console.error("Submission failed:", errors);}
        });
    };

    return (
        <>
            <div className="verification-status" id="phoneVerificationStatus">
                <div className="status-icon pending"><FontAwesomeIcon icon={["fas", "phone"]} /></div>
                <div className="status-text">Verify Your Phone</div>
                <div className="status-desc">We've sent a 6-digit code to <span id="phoneDisplay">{contactNumber}</span></div>
            </div>

            <div className="otp-container" id="otpContainer">{renderOTPInputs(OTP_DIGITS)}</div>
            <div className="timer" id="phoneTimer"><FontAwesomeIcon icon={["fas", "clock"]} /> Code expires in <span id="phoneTimerCount">120</span> seconds</div>

            <button type="button" className="btn btn-secondary" onClick={() => resendOTP()} id="resendOtpBtn" disabled><FontAwesomeIcon icon={["fas", "redo"]} /> Resend Code</button>

            <div className="button-group">
                <button type="button" className="btn btn-secondary" onClick={() => updateFormStep(3)}><FontAwesomeIcon icon={["fas", "arrow-left"]} />Back</button>
                <button type="button" className="btn btn-primary" onClick={() => handleSubmission()} id="verifyOtpBtn">Verify Code <FontAwesomeIcon icon={["fas", "check"]} /></button>
            </div>
        </>
    );
}