import AuthLayout from "@/layouts/auth-layout";
import { VEHICLE_TYPES } from "@/pages/config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, usePage } from "@inertiajs/react";
import { useState } from "react";
import "../../../../css/auth.css"

export default function CreateStation() {
    const {auth} = usePage().props;

    const [isCheckedTerms, setIsCheckedTerms] = useState(false);

    return (
        <div className="registration form">
            <header>Station Signup</header>
            <div className="role-indicator"><FontAwesomeIcon icon={["fas", "user"]} /> Signing up as Rider</div>
        
            <form>
                <input type="hidden" name="owner_id" defaultValue={auth.user?.id}/>
                <div className="input-field">
                    <label>Vehicle Type</label>
                    <select name="vehicle">
                        <option value="">Select vehicle type</option>
                        {Object.entries(VEHICLE_TYPES).map((type, idx) => (<option value={type} className="capitalize" key={`vehicle-type-${idx}`}>{type}</option>))}
                    </select>
                </div>
                <div className="input-field">
                    <label>Plate Number</label>
                    <input type="text" name="plate_number" placeholder="Enter driver's license number" />
                </div>
                <div className="input-field">
                    <label>License Photo</label>
                    <input type="file" name="license" accept="image/*" />
                </div>
                
                <div className="term">
                <input type="checkbox" defaultChecked={false} onChange={(e) => setIsCheckedTerms(!isCheckedTerms)}/>
                    <label>I agree with the <a href="terms.html" target="_blank">Terms and Conditions</a></label>
                </div>
                
                <button className="button" type="submit" disabled={!isCheckedTerms}>Sign Up</button>
            </form>

            <div>
                <center><Link className="login" href="/login">Already have an account? Login</Link></center>
            </div>
        </div> 
    );
}

CreateStation.layout = (page: any) => <AuthLayout page={page} title="Register New Rider | Agua Na Casa" header="Login"></AuthLayout>