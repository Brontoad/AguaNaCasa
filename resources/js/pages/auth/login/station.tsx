import { ACCOUNT_ROLE } from "@/pages/config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useForm } from "@inertiajs/react";
import { useState } from "react";

export default function LoginStation() {
    const [useEmail, setUseEmail] = useState(true);

    const { data, setData, post, processing, errors } = useForm({
        email: '',
        contact_number: '',
        password: '',
        remember: false,
        role: ACCOUNT_ROLE.STATION,
        use_email: useEmail ? 1 : 0,
    });

    return (
        <div className="login form">
            <center><img src="/assets/aguanacasa_logo_blue.png" width="180px" /></center>
            <header>Station Login</header>
            <div className="login-toggle">
                <div
                    className={`toggle-option ${useEmail ? 'active' : ''}`}
                    onClick={() => {
                        setUseEmail(true);
                        setData("use_email", 1);
                    }}
                >
                    <FontAwesomeIcon icon={["fas", "envelope"]} /> Email
                </div>

                <div className={`toggle-option ${!useEmail ? 'active' : ''}`} onClick={() => {
                        setUseEmail(false);
                        setData("use_email", 0);
                    }}
                >
                    <FontAwesomeIcon icon={["fas", "phone-alt"]} /> Mobile
                </div>
            </div>

            <form
                onSubmit={(e) => {
                    e.preventDefault();

                    post("/login", {
                        
                        onError: (errors) => {
                            console.log(errors);
                        },
                    });
                }}
            >
                <input type="hidden" name="use_email" value={useEmail ? 1 : 0}/>

                <div className="login-field-wrapper">
                    {useEmail ? (<>
                        <input type="email" value={data.email} onChange={(e) => setData("email", e.target.value)} placeholder="Enter your email" />
                        {errors.email && (<span className="error">{errors.email}</span>)}
                    </>) : (<>
                        <input type="tel" value={data.contact_number} onChange={(e) => setData("contact_number", e.target.value)} placeholder="Enter your phone number"/>
                        {errors.contact_number && (<span className="error">{errors.contact_number}</span>)}
                    </>)}
                </div>

                <input type="password" value={data.password} onChange={(e) => setData("password", e.target.value)} placeholder="Enter your password" />
                {errors.password && (<span className="error">{errors.password}</span>)}

                <div className="remember-me">
                    <input type="checkbox" id="remember" checked={data.remember} onChange={(e) => setData("remember", e.target.checked)}/>
                    <label htmlFor="remember">Remember Me</label>
                </div>

                <button type="submit" className="button" disabled={processing}>{processing ? "Logging in..." : "Login"}</button>
            </form>
        </div>
    );
}