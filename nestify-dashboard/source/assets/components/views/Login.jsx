import { useEffect } from "react";
// IMPORTED STYLESHEETS
import "../../css/views/login.css";
// IMPORTED MODULES
import Logo from "../partials/Logo";
import LoginForm from "../partials/views/auth/LoginForm";
import Copyright from "../partials/views/auth/Copyright";

const Login = function () {
    useEffect(function () {
        document.title = "Nestify | Login";
    }, []);

    return (
        <>
            <div className="div-login-view-container">
                <div className="div-login-view-modal">
                    <Logo />
                    <LoginForm />
                </div>
                <Copyright />
            </div>
        </>
    );
};

export default Login;
