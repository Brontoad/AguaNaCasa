import AuthLayout from "@/layouts/auth-layout";
import "resources/css/auth.css";

export default function User() {
    return (
        <>
            <form id="login-form">
                <input type="text" id="email" placeholder="Enter your email" />
                <input type="password" id="password" placeholder="Enter your password" />
                <input type="button" className="button" value="Login" /* onclick="login()"  */ />
            </form>
            <div className="signup">
                <span className="signup">Don't have an account?
                <label htmlFor="check" id="signupLabel">Signup</label>
                </span>
            </div>
        </>
    );
}

User.layout = (page: any) => <AuthLayout page={page} title="User Login | Agua Na Casa" header="Login"></AuthLayout>