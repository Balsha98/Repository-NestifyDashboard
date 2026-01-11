const LogoFormView = function () {
	return (
		<div className="div-login-view-form-container">
			<header className="header-login-view-form-container">
				<h2>Conservation Dashboard</h2>
				<p>Enter your credentials to access the dashboard.</p>
			</header>
			<form className="form-login-view-container" action="/backend/auth/route" method="POST">
				<div className="div-form-login-input-container">
					<label htmlFor="username">
						<ion-icon src="/media/icons/icon-user.svg"></ion-icon>
					</label>
					<input id="username" type="text" name="username" autoComplete="true" placeholder="Enter your username..." />
				</div>
				<div className="div-form-login-input-container">
					<label htmlFor="password">
						<ion-icon src="/media/icons/icon-password.svg"></ion-icon>
					</label>
					<input id="password" type="password" name="password" placeholder="Enter your password..." />
				</div>
				<button type="button">
					<ion-icon src="/media/icons/icon-sign-in.svg"></ion-icon>
					<span>Sign In</span>
				</button>
			</form>
		</div>
	);
};

export default LogoFormView;
