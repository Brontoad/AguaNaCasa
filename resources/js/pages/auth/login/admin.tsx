import AuthLayout from "@/layouts/auth-layout";
import { Head } from "@inertiajs/react";

/**
 * Admin Login
 * 
 * Created by:  Calulut, Joshua Miguel C.
 *              Jamalul, Mohammad Hud A.
 *              Sueño, Diana S.
 * Tested by:   N/A
 * 
 * Created at:      February 26, 2026
 * Last Edited at:  March 14, 2026
 * Last Tested at:  N/A
 */
import "../../../../css/signup.css";
import "../../../../css/auth.css";

import { useForm } from "@inertiajs/react";

export default function LoginAdmin() {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
        password: "",
    });

    function submit(e: React.FormEvent) {
        e.preventDefault();
        post("/login");
    }

    return (
        <div className="login form"> 
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    post("/login/admin", {
                        onError: (errors) => {
                            console.log(errors);
                        },
                    });
                }}
            >
                <div className="login-field-wrapper">
                    <input type="email" value={data.email} onChange={(e) => setData("email", e.target.value)} placeholder="Email" required />
                    {errors.email && <span className="error">{errors.email}</span>}
                </div>

                <div className="login-field-wrapper">
                    <input type="password" value={data.password} onChange={(e) => setData("password", e.target.value)} placeholder="Password" required />
                    {errors.password && <span className="error">{errors.password}</span>}
                </div>

                <button type="submit" className="button" disabled={processing}>
                    {processing ? "Logging in..." : "Login"}
                </button>
            </form>
        </div>
    );
}

LoginAdmin.layout = (page: any) => <AuthLayout title="Admin Login | Agua Na Casa" page={page} header="Admin Login"></AuthLayout>

// Agua Na Casa(c), 2026.