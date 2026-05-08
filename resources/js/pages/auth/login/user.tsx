import { ACCOUNT_ROLE } from "@/pages/config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useForm } from "@inertiajs/react";
import { FormEvent, useState } from "react";

export default function LoginUser() {
    const [useEmail, setUseEmail] = useState(true);
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        contact_number: '',
        password: '',
        remember: false,
        role: ACCOUNT_ROLE.CUSTOMER,
        use_email: useEmail ? 1 : 0,
    });

    return (
        <div className="login form">
            <center><img src="/assets/aguanacasa_logo_blue.png" width="180px"/></center>
            <header>Customer Login</header>

            <div className="login-toggle">
                <div className={`toggle-option ${useEmail ? 'active' : ''}`} onClick={() => setUseEmail(true)}> <FontAwesomeIcon icon={["fas", "envelope"]} /> Email</div>
                <div className={`toggle-option ${!useEmail ? 'active' : ''}`} onClick={() => setUseEmail(false)}> <FontAwesomeIcon icon={["fas", "phone-alt"]} /> Mobile</div>
            </div>

            <form onSubmit={(e) => {
                    e.preventDefault();
                    post("/login", {
        onError: (errors) => {
            console.log(errors);
        },
    });
                }}>
                <input type="hidden" name="use_email" value={useEmail ? 1 : 0} />

                <div className="login-field-wrapper">
                    {useEmail ? (
                        <input 
                            type="email" 
                            value={data.email}
                            onChange={e => setData('email', e.target.value)} 
                            placeholder="Enter your email" 
                        />
                    ) : (
                        <input 
                            type="tel" 
                            value={data.contact_number}
                            onChange={e => setData('contact_number', e.target.value)} 
                            placeholder="Enter your phone number" 
                        />
                    )}
                    {errors.email && <span className="error">{errors.email}</span>}
                </div>

                <input 
                    type="password" 
                    value={data.password}
                    onChange={e => setData('password', e.target.value)}
                    placeholder="Enter your password" 
                />

                <div className="remember-me">
                    <input 
                        type="checkbox" 
                        id="remember" 
                        checked={data.remember} 
                        onChange={e => setData('remember', e.target.checked)} 
                    />
                    <label htmlFor="remember">Remember Me</label>
                </div>

                <button type="submit" className="button" disabled={processing}>
                    {processing ? 'Logging in...' : 'Login'}
                </button>
            </form>

            <span className="signup">
                <span>Don't have an account? </span>
                <Link className="signup-label" href="/signup/user" as={"label"}>Signup as Customer</Link>
            </span>
        </div>
    );
}