// IMPORTED STYLESHEETS
import "../../../../css/partials/views/invalid/info.css";

const Info = function () {
    return (
        <div className="div-invalid-view-modal-info-container">
            <header className="header-invalid-view-modal-info-container">
                <h2>Requested Page Does Not Exist</h2>
                <p>The page you requested unfortunately does not exist.</p>
            </header>
            <a href="/dashboard">
                <ion-icon src="/media/icons/icon-sign-in.svg" />
                <span>Back to Dashboard</span>
            </a>
        </div>
    );
};

export default Info;
