import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@inertiajs/react";
import { useState } from "react";

export default function LoginStation() {
    const [useEmail, setUseEmail] = useState(true);

    return (
        <div className="form-layout">
            <center><img src="aguanacasa_logo_blue.png" width="180px"/></center>
            <header>Station Login</header>

            <div className="login-toggle">
                <div className="toggle-option" onClick={() => setUseEmail(!useEmail)}>
                    {useEmail ? <><FontAwesomeIcon icon={["fas", "envelope"]} /> Email </>
                            : <><FontAwesomeIcon icon={["fas", "phone-alt"]} /> Mobile </>}
                </div>
            </div>

            <form>
                <div className="login-field-wrapper">
                    {useEmail ? <input type="email" name="email" placeholder="Enter your email" />
                            : <input type="tel" name="contact_number" placeholder="Enter your phone number" />}
                </div>
                <input type="password" id="password" placeholder="Enter your password" />
                <Link href="/login" as={"button"} className="button">Login</Link>
            </form>

            <span className="signup">
                Don't have an account? <Link id="signupLabel" href="/account/create/station" as={"button"}>Signup as Customer</Link>
            </span>
        </div>
    );
}