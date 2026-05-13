import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm, usePage } from "@inertiajs/react";
import { useState } from "react";

export interface RiderCredentials {
    user_id: string
    plate_number: string,
    vehicle: string,
    password: string,
    contact_number: string
}

export default function RiderCredentialsForm({updateFormStep, updateRiderCredentials}: {updateFormStep(step: number): void, updateRiderCredentials(credentials: RiderCredentials): void}) {
    const {auth} = usePage().props;
    if (!auth.user) {throw new Error("User is not authenticated");} 
    const userId = auth.user.id;
    const { data, setData } = useForm<RiderCredentials>({
        user_id: userId,
        plate_number: "",
        vehicle: "",
        password: "",
        contact_number: ""
    });

    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    const [strengthText, setStrengthText] = useState("Enter a password");
    const [strengthColor, setStrengthColor] = useState("#ccc");
    const [strengthWidth, setStrengthWidth] = useState("0%");

    function checkPasswordStrength(password: string) {
        if (!password) {
            setStrengthText("Enter a password");
            setStrengthWidth("0%");
            setStrengthColor("#ccc");
            return;
        }

        let score = 0;

        if (password.length >= 8) score++;
        if (/[A-Z]/.test(password)) score++;
        if (/[0-9]/.test(password)) score++;
        if (/[^A-Za-z0-9]/.test(password)) score++;

        switch (score) {
            case 0:
            case 1:
                setStrengthText("Weak");
                setStrengthColor("#ff4d4d");
                setStrengthWidth("25%");
                break;

            case 2:
                setStrengthText("Fair");
                setStrengthColor("#ffa500");
                setStrengthWidth("50%");
                break;

            case 3:
                setStrengthText("Good");
                setStrengthColor("#2ecc71");
                setStrengthWidth("75%");
                break;

            case 4:
                setStrengthText("Strong");
                setStrengthColor("#19A7CE");
                setStrengthWidth("100%");
                break;
        }
    }

    const passwordsMatch =
        passwordConfirmation.length > 0 &&
        data.password === passwordConfirmation;

    return (
        <div>
            <form onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <label><FontAwesomeIcon icon={["fas", "id-card"]} /> Plate Number</label>
                  <div className="input-wrapper"><input type="text" placeholder="Enter plate number" onChange={(e) => setData("plate_number", e.target.value)} required/></div>
                </div>

                <div className="form-group">
                  <label><FontAwesomeIcon icon={["fas", "motorcycle"]} /> Vehicle</label>
                  <div className="input-wrapper"><input type="text" placeholder="Enter vehicle type" onChange={(e) => setData("vehicle", e.target.value)} required/></div>
                </div>

                <div className="form-group">
                  <label><FontAwesomeIcon icon={["fas", "phone"]} /> Contact Number</label>
                  <div className="input-wrapper"><input type="tel" placeholder="Enter contact number" onChange={(e) => setData("contact_number", e.target.value)} required/></div>
                </div>

                <div className="form-group">
                    <label><FontAwesomeIcon icon={["fas", "lock"]} /> Password</label>
                    <div className="input-wrapper">
                        <input type="password" placeholder="Create password" onChange={(e) => {setData("password", e.target.value); checkPasswordStrength(e.target.value);}} required/>
                    </div>
                    <div className="password-strength" style={{ height: "5px", background: "#eee", marginTop: "8px", borderRadius: "4px"}}>
                        <div className="strength-bar" style={{ height: "100%", width: strengthWidth, backgroundColor: strengthColor, transition: "width 0.3s ease"}}></div>
                    </div>
                    <div className="strength-text" style={{ fontSize: "12px", color: strengthColor, marginTop: "5px" }}>{strengthText}</div>
                </div>

                <div className="form-group">
                    <label><FontAwesomeIcon icon={["fas", "lock"]} /> Confirm Password</label>
                    <div className="input-wrapper"><input type="password" placeholder="Confirm password" onChange={(e) => setPasswordConfirmation(e.target.value)} required/></div>
                    {passwordConfirmation && (<div style={{ fontSize: "12px", marginTop: "5px", color: passwordsMatch ? "#2ecc71" : "#ff4d4d"}}>{passwordsMatch ? "Passwords match" : "Passwords do not match"}</div>)}
                </div>

                <button type="button" className="btn btn-primary" onClick={() => {
                    if (!passwordsMatch) {alert("Passwords do not match"); return;}

                    updateRiderCredentials(data);
                    updateFormStep(2);
                }}>Continue <FontAwesomeIcon icon={["fas", "arrow-right"]} /></button>
            </form>
        </div>
    );
}