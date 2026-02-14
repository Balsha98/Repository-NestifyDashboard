// IMPORTED STYLESHEETS
import "../../../css/partials/modals/logout.css";

const Logout = function ({ onToggleLogoutModal }) {
    return (
        // prettier-ignore
        <div className="div-logout-modal-container">
			<div className="div-logout-modal">
				<header className="header-logout-modal">
					<ion-icon src="/media/icons/icon-sign-out.svg" />
					<h2>Logout?</h2>
				</header>
				<div className="div-logout-modal-info-container">
					<p>Are you sure you want to logout from the Conservation Dashboard?</p>
					<p>You are currently logged in as: <span>Username</span></p>
				</div>
                <footer className="footer-logout-modal">
                    <button onClick={onToggleLogoutModal}>
                        <ion-icon src="/media/icons/icon-close.svg" />
                        <span>Cancel</span>
                    </button>
                    <a href="/logout">
                        <ion-icon src="/media/icons/icon-sign-out.svg" />
                        <span>Logout</span>
                    </a>
                </footer>
			</div>
		</div>
    );
};

export default Logout;
