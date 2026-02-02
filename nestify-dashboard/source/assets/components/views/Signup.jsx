import { useEffect } from "react";
// IMPORTED STYLESHEETS
import "../../css/views/signup.css";
// IMPORTED MODULES
import Logo from "../partials/Logo";
import SignupForm from "../partials/views/auth/SignupForm";
import Copyright from "../partials/views/auth/Copyright";

const Signup = function () {
    useEffect(function () {
        document.title = "Nestify | Signup";
    }, []);

    return (
        <>
            <div className="div-signup-view-container">
                <div className="div-signup-view-modal">
                    <Logo />
                    <SignupForm />
                </div>
                <Copyright />
            </div>
        </>
    );
};

export default Signup;
