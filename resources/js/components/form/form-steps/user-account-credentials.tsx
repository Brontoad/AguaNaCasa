import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "@inertiajs/react";
import { useState } from "react";
import { UserCredentials } from "../create-user";
import LocationPicker, { LeafletAddress } from "@/components/location-picker"; // Adjust path accordingly

export default function UserAccountCredentialsForm({updateUserCredentials, updateFormStep} : {
  updateUserCredentials(credentials: UserCredentials): void,
  updateFormStep(step: number): void
}) {
  const {data, setData} = useForm<UserCredentials>({
    username: "",
    first_name: "",
    middle_initial: "",
    last_name: "",
    address: "" as unknown as LeafletAddress, // Respecting your Address type expectation
    email: "",
    password: "",
    password_confirmation: "",
    contact_number: ""
  });

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
        setStrengthColor("#19A7CE"); // Matching your project primary color
        setStrengthWidth("100%");
        break;
    }
  }

  return (
    <div>
      <form action={"/user"} method="post" onSubmit={(e) => e.preventDefault()}>
        <div className="form-group">
          <label><FontAwesomeIcon icon={["fas", "user"]} /> Full Name</label>
          <div className="input-wrapper">
            <input type="text" placeholder="First Name" onChange={(e) => setData("first_name", e.target.value)} required />
            <input type="text" placeholder="Middle Initial" onChange={(e) => setData("middle_initial", e.target.value)} required />
            <input type="text" placeholder="Last Name" onChange={(e) => setData("last_name", e.target.value)} required />
          </div>
        </div>

        <div className="form-group">
          <label><FontAwesomeIcon icon={["fas", "user"]} /> Username</label>
          <div className="input-wrapper">
            <input type="text" placeholder="Username" onChange={(e) => setData("username", e.target.value)} required />
          </div>
        </div>

        {/* Updated Address Section with LocationPicker */}
        <div className="form-group">
          <label><FontAwesomeIcon icon={["fas", "map-marker-alt"]} /> Location Selection</label>
          <div className="location-wrapper" style={{ marginTop: '10px', marginBottom: '10px' }}>
            <LocationPicker 
                onAddressSelect={(address: LeafletAddress) => setData("address", address)} 
            />
          </div>
          {data.address && (
            <div style={{ fontSize: '12px', color: '#555', fontStyle: 'italic' }}>
                Selected: {data.address.location}
            </div>
          )}
        </div>

        <div className="form-group">
          <label><FontAwesomeIcon icon={["fas", "envelope"]} /> Email Address</label>
          <div className="input-wrapper">
            <input type="email" name="email" onChange={(e) => setData("email", e.target.value)} placeholder="Email" required />
          </div>
        </div>

        <div className="form-group">
          <label><FontAwesomeIcon icon={["fas", "lock"]} /> Password</label>
          <div className="input-wrapper">
            <input type="password" name="password" onChange={(e) => {
              setData("password", e.target.value);
              checkPasswordStrength(e.target.value);
            }} placeholder="Password" required />
          </div>
          <div className="password-strength" style={{ height: '5px', background: '#eee', marginTop: '8px', borderRadius: '4px' }}>
            <div className="strength-bar" style={{ 
                height: '100%', 
                width: strengthWidth, 
                backgroundColor: strengthColor, 
                transition: 'width 0.3s ease' 
            }}></div>
          </div>
          <div className="strength-text" style={{ fontSize: '12px', color: strengthColor, marginTop: '5px' }}>{strengthText}</div>
        </div>

        <div className="form-group">
          <label><FontAwesomeIcon icon={["fas", "lock"]} /> Confirm Password</label>
          <div className="input-wrapper">
            <input type="password" name="password_confirmation" onChange={(e) => setData("password_confirmation", e.target.value)} placeholder="Confirm your password" required />
          </div>
          {data.password_confirmation && (
            <div style={{ fontSize: "12px", marginTop: "5px", color: data.password === data.password_confirmation ? "#2ecc71" : "#ff4d4d" }}>
              {data.password === data.password_confirmation ? "Passwords match" : "Passwords do not match"}
            </div>
          )}
        </div>

        <div className="form-group">
          <label><FontAwesomeIcon icon={["fas", "phone"]} /> Mobile Number</label>
          <div className="input-wrapper">
            <input type="tel" name="contact_number" onChange={(e) => setData("contact_number", e.target.value)} placeholder="Contact Number" required />
          </div>
        </div>

        <button type="button" className="btn btn-primary" onClick={() => {
          updateUserCredentials(data); 
          updateFormStep(2);
        }}>Continue <FontAwesomeIcon icon={["fas", "arrow-right"]} /></button>
      </form>
    </div>
  );
}