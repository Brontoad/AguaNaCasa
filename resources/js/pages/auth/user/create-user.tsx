import AuthLayout from "@/layouts/auth-layout";
import "resources/css/auth.css";

export default function CreateUser() {
    return (
        <>
            <form id="signup-form">
                <div className="input-field">
                <label>Email</label><br></br>
                <input type="text" id="signupEmail" placeholder="Enter your email" required />
                </div>
                <div className="input-field">
                <label>Password</label><br></br>
                <input type="text" id="signupPass" placeholder="Enter your password" required />
                </div>
                <div className="input-field">
                <label>Full Name</label>
                <br><input type="text" id="fullName" placeholder="Enter your name" required /></br>
                </div>
                <div className="input-field">
                <label>Date of Birth</label>
                <input type="date" id="dateOfBirth" required />
                </div>
                <div className="input-field">
                <label>Mobile Number</label>
                <input type="number" id="mobileNumber" placeholder="Enter mobile number" required />
                </div>
                <div className="input-field">
                <label>Gender</label><br></br>
                <select id="gender" required>
                    <option disabled selected>Select gender</option>
                    <option>Male</option>
                    <option>Female</option>
                </select>
                </div>
                <div className="input-field">
                <label>Occupation</label>
                <input type="text" id="occupation" placeholder="Enter your occupation" required />
                </div>
                <div className="input-field">
                <label>ID Type</label><br></br>
                <select id="idType" required>
                    <option disabled selected>Select ID</option>
                    <option>Philippine passport</option>
                    <option>Driver’s license</option>
                    <option>PhilHealth ID</option>
                    <option>TIN Card</option>
                    <option>Postal ID</option>
                    <option>Voter’s ID</option>
                    <option>Professional Regulation Commission ID</option>
                    <option>Senior Citizen ID</option>
                </select>
                </div>
                <div className="input-field">
                <label>Home Address</label>
                <input type="text" id="homeAddress" placeholder="Enter business address" required />
                </div>
                <div className="input-field">
                <label>Location Photo</label>
                <input type="file" id="locationPhoto" accept="image/*" required />
                </div>
                <div className="input-field">
                <label>Household Contact Number</label>
                <input type="tel" id="homeContactNumber" placeholder="Enter business contact number" required />
                <div className="term">
                    <input type="checkbox" id="termbox" style={{marginRight: "10px"}} /><label>I agree with the <a href="terms.html" target="_blank">Terms and Conditions</a> for signing up for AguaNaCasa</label>
                </div>
                </div>
                <input type="button" className="button" value="Signup" /* onclick="signup()" */ />
            </form>
            <div>
                <center><span className="login">Already have an account?
                <label htmlFor="check" id="loginLabel">Login</label>
                </span></center>
            </div>
        </>
    );
}

CreateUser.layout = (page: any) => <AuthLayout page={page} title="Register New User | Agua Na Casa" header="Login"></AuthLayout>