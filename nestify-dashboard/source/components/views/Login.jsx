import { useEffect } from "react";
// IMPORTED STYLESHEETS
import "../../assets/css/views/login.css";
// IMPORTED MODULES
import Logo from "../partials/Logo";
import LoginForm from "../partials/views/auth/LoginForm";
import Copyright from "../partials/views/auth/Copyright";

const LoginView = function () {
    useEffect(function () {
        document.title = "Nestify | Login";
    }, []);

    return (
        <>
            <div className="div-login-view-container">
                <div className="div-login-view-modal">
                    <Logo></Logo>
                    <LoginForm></LoginForm>
                </div>
                <Copyright></Copyright>
            </div>
        </>
    );
};

export default LoginView;
