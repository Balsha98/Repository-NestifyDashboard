// IMPORTED STYLESHEETS
import "../../../../css/partials/views/profile/password.css";

const Password = function ({ isDisabled }) {
	return (
		<div className="div-profile-view-password-container">
			<header className="header-profile-view-password-container">
				<ion-icon src="/media/icons/icon-password.svg" />
				<h2>Password</h2>
			</header>
			<form className="form-profile-view-password-container" action="" method="POST">
				<div className={`div-form-profile-view-password-input-container ${isDisabled ? "disabled" : ""}`}>
					<label htmlFor="current-password">Current Password</label>
					<input id="current-password" type="password" name="current-password" disabled={isDisabled} />
				</div>
				{isDisabled || (
					<>
						<div className={`div-form-profile-view-password-input-container ${isDisabled ? "disabled" : ""}`}>
							<label htmlFor="new-password">New Password</label>
							<input id="new-password" type="password" name="new-password" disabled={isDisabled} />
							<span>Password must be at least 8 characters.</span>
						</div>
						<div className={`div-form-profile-view-password-input-container ${isDisabled ? "disabled" : ""}`}>
							<label htmlFor="confirm-password">Confirm Password</label>
							<input id="confirm-password" type="password" name="confirm-password" disabled={isDisabled} />
							<span>Password must match.</span>
						</div>
					</>
				)}
			</form>
		</div>
	);
};

export default Password;
