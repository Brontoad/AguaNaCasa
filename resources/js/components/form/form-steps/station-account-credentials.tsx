import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";

import LocationPicker, { LeafletAddress } from "@/components/location-picker";

import { StationCredentials } from "../create-station";

export default function StationCredentialsForm({
    updateFormStep,
    updateStationCredentials
}: {
    updateFormStep(step: number): void,
    updateStationCredentials(credentials: StationCredentials): void
}) {
    const {auth} = usePage().props;
    if (!auth.user) {throw new Error("User is not authenticated");} 
    const userId = auth.user.id;
    const { data, setData } = useForm<StationCredentials>({
        owner_id: userId,
        name: "",
        address: "" as unknown as LeafletAddress,
        email: "",
        password: "",
        contact_number: ""
    });

    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    const [strengthText, setStrengthText] = useState("Enter a password");
    const [strengthColor, setStrengthColor] = useState("#ccc");
    const [strengthWidth, setStrengthWidth] = useState("0%");

    useEffect(() => {setData("owner_id", userId)}, []);

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

    return (
        <div>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                    <label><FontAwesomeIcon icon={["fas", "store"]} /> Station Name</label>
                    <div className="input-wrapper"><input type="text" placeholder="Enter station name" onChange={(e) => setData("name", e.target.value)} required/></div>
                </div>

                <div className="form-group">
                  <label><FontAwesomeIcon icon={["fas", "map-marker-alt"]} /> Location Selection</label>
                  <div className="location-wrapper" style={{marginTop: "10px", marginBottom: "10px"}}><LocationPicker onAddressSelect={(address: LeafletAddress) => setData("address", address)} /></div>
                  {data.address && (<div style={{fontSize: "12px", color: "#555", fontStyle: "italic"}}>Selected: {data.address.location}</div>)}
                </div>

                <div className="form-group">
                    <label><FontAwesomeIcon icon={["fas", "envelope"]} /> Email Address</label>
                    <div className="input-wrapper">
                        <input type="email" placeholder="Enter business email" onChange={(e) => setData("email", e.target.value)} required />
                    </div>
                </div>

                <div className="form-group">
                    <label><FontAwesomeIcon icon={["fas", "file-contract"]} />Business License/Permit Number</label>
                    <div className="input-wrapper"><input type="text" id="businessLicense" placeholder="Enter DTI/Business permit number" required /></div>
                </div>

                <div className="file-upload-group">
                <label className="file-upload-label"><FontAwesomeIcon icon={["fas", "file-pdf"]} /> Upload Business Permit (Optional)</label>
                <div className="file-upload-area" id="permitUploadArea">
                    <FontAwesomeIcon icon={["fas", "cloud-upload-alt"]} />
                    <p>Click to upload business permit</p>
                    <small>Supported: JPG, PNG, PDF (Max 5MB)</small>
                    <input type="file" id="permitFile" accept=".jpg,.jpeg,.png,.pdf" />
                </div>
                <div className="file-preview" id="permitPreview">
                    <FontAwesomeIcon icon={["fas", "check-circle"]} />
                    <span id="permitFileName">No file chosen</span>
                    <button type="button"><FontAwesomeIcon icon={["fas", "times"]} /></button>
                </div>
                </div>

                <div className="form-group">
                    <label><FontAwesomeIcon icon={["fas", "phone"]} /> Contact Number</label>
                    <div className="input-wrapper"><input type="tel" placeholder="Enter contact number" onChange={(e) => setData("contact_number", e.target.value)} required /></div>
                </div>

                <div className="form-group">
                    <label><FontAwesomeIcon icon={["fas", "lock"]} /> Password</label>
                    <div className="input-wrapper">
                        <input type="password" placeholder="Create password"
                            onChange={(e) => {
                                setData("password", e.target.value);
                                checkPasswordStrength(e.target.value);
                            }}
                            required/>
                    </div>

                    <div className="password-strength" style={{ height: "5px", background: "#eee", marginTop: "8px", borderRadius: "4px" }}><div className="strength-bar" style={{ height: "100%", width: strengthWidth, backgroundColor: strengthColor, transition: "width 0.3s ease" }}></div></div>
                    <div className="strength-text" style={{ fontSize: "12px", color: strengthColor, marginTop: "5px" }}>{strengthText}</div>
                </div>

                <div className="form-group">
                    <label><FontAwesomeIcon icon={["fas", "lock"]} /> Confirm Password</label>
                    <div className="input-wrapper"><input type="password" placeholder="Confirm password" onChange={(e) => setPasswordConfirmation(e.target.value)} required/></div>

                    {passwordConfirmation && (
                        <div style={{fontSize: "12px", marginTop: "5px", color: password === passwordConfirmation ? "#2ecc71" : "#ff4d4d"}}>
                            {password === passwordConfirmation ? "Passwords match" : "Passwords do not match"}
                        </div>
                    )}
                </div>

                <button type="button" className="btn btn-primary" onClick={() => {
                    updateStationCredentials(data);
                    updateFormStep(2);
                  }}
                >Continue <FontAwesomeIcon icon={["fas", "arrow-right"]} /></button>
            </form>
        </div>
    );
}