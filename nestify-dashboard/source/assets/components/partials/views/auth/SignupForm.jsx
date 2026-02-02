// IMPORTED STYLESHEETS
import "../../../../css/partials/views/auth/signup-form.css";

const SignupForm = function () {
    return (
        <div className="div-signup-view-form-container">
            <header className="header-signup-view-form-container">
                <h2>Conservation Dashboard</h2>
                <p>Create an account to start monitoring your bird boxes.</p>
            </header>
            <form className="form-signup-view-modal" action="" method="POST">
                <div className="div-form-signup-input-container">
                    <label htmlFor="email">
                        <ion-icon src="/media/icons/icon-mail.svg" />
                    </label>
                    <input id="email" type="email" name="email" autoComplete="true" placeholder="Enter your email..." />
                </div>
                <div className="div-form-signup-input-container">
                    <label htmlFor="username">
                        <ion-icon src="/media/icons/icon-user.svg" />
                    </label>
                    <input id="username" type="text" name="username" autoComplete="true" placeholder="Enter your username..." />
                </div>
                <div className="div-form-signup-input-container">
                    <label htmlFor="password">
                        <ion-icon src="/media/icons/icon-password.svg" />
                    </label>
                    <input id="password" type="password" name="password" placeholder="Enter your password..." />
                </div>
                <button type="button">
                    <ion-icon src="/media/icons/icon-sign-in.svg" />
                    <span>Create Account</span>
                </button>
            </form>
            <footer className="footer-signup-view-form-container">
                <p>
                    Already have an account? <a href="/login">Sign In</a>.
                </p>
            </footer>
        </div>
    );
};

export default SignupForm;
