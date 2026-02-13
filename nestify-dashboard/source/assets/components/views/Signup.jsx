import { useEffect, useState } from "react";
// IMPORTED STYLESHEETS
import "../../css/views/signup.css";
// IMPORTED MODULES
import Logo from "../partials/Logo";
import SignupForm from "../partials/views/auth/SignupForm";
import Copyright from "../partials/views/auth/Copyright";
import PageLoader from "../partials/loaders/Page";

const Signup = function () {
    const [isViewLoading, setIsViewLoading] = useState(true);

    useEffect(function () {
        document.title = "Nestify | Signup";

        const loadingTimer = setTimeout(() => setIsViewLoading(false), 800);

        return () => clearTimeout(loadingTimer);
    }, []);

    return (
        <>
            <PageLoader isViewLoading={isViewLoading} />
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
