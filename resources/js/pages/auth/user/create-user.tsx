import AuthLayout from "@/layouts/auth-layout";
import { VEHICLE_TYPES } from "@/pages/config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@inertiajs/react";
import { useState } from "react";
import "../../../../css/auth.css";

export default function CreateUser() {
    const [isCheckedTerms, setIsCheckedTerms] = useState(false);

    return (
        <div className="registration form" id="registrationForm">
            <div className="role-indicator" id="roleIndicator"><FontAwesomeIcon icon={["fas", "user"]} /> Signing up as Customer</div>
      
            <form>
                <div className="input-field">
                    <label>First Name</label>
                    <input type="text" name="first_name" placeholder="First Name" required />
                </div>
                <div className="input-field">
                    <label>Middle Initial</label>
                    <input type="text" name="middle_initial" required />
                </div>
                <div className="input-field">
                    <label>Last Name</label>
                    <input type="text" name="last_name" placeholder="Last Name" required />
                </div>
                <div className="input-field">
                    <label>Email</label>
                    <input type="email" name="email" placeholder="Email" required />
                </div>
                <div className="input-field">
                    <label>Mobile Number</label>
                    <input type="tel" name="contact_number" placeholder="Mobile Number" required />
                </div>
                <div className="input-field">
                    <label>Password</label>
                    <input type="password" name="password" placeholder="Password" required />
                </div>
                
                <div className="term">
                <input type="checkbox" defaultChecked={false} onChange={() => setIsCheckedTerms(!isCheckedTerms)}/>
                    <label>I agree with the <a href="terms.html" target="_blank">Terms and Conditions</a></label>
                </div>
                
                <button className="button" type="submit" disabled={!isCheckedTerms}>Sign Up</button>
            </form>

            <center><Link className="login" href="/login">Already have an account? Login</Link></center>
        </div> 
    );
}

CreateUser.layout = (page: any) => <AuthLayout page={page} title="Register New User | Agua Na Casa" header="Customer Signup"></AuthLayout>