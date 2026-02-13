// IMPORTED STYLESHEETS
import "../../../../css/partials/views/profile/information.css";

const Information = function ({ isDisabled }) {
	return (
		<div className="div-profile-view-information-container">
			<header className="header-profile-view-information-container">
				<ion-icon src="/media/icons/icon-user.svg" />
				<h2>Profile Information</h2>
			</header>
			<form className="form-profile-view-information-container" action="" method="POST">
				<div className={`div-form-profile-view-information-input-container ${isDisabled ? "disabled" : ""}`}>
					<label htmlFor="username">Username</label>
					<input id="username" type="text" name="username" placeholder="William" disabled={isDisabled} />
				</div>
				<div className={`div-form-profile-view-information-input-container ${isDisabled ? "disabled" : ""}`}>
					<label htmlFor="email">Email Address</label>
					<input id="email" type="email" name="email" placeholder="email@geneseelandtrust.com" disabled={isDisabled} />
				</div>
			</form>
		</div>
	);
};

export default Information;
