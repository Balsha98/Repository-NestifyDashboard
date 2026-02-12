import { useEffect, useState } from "react";
// IMPORTED STYLESHEETS
import "../../css/views/login.css";
// IMPORTED MODULES
import Logo from "../partials/Logo";
import LoginForm from "../partials/views/auth/LoginForm";
import Copyright from "../partials/views/auth/Copyright";
import PageLoader from "../partials/loaders/Page";

const Login = function () {
	const [isViewLoading, setIsViewLoading] = useState(true);

	useEffect(function () {
		document.title = "Nestify | Login";

		const loadingTimer = setTimeout(() => {
			setIsViewLoading(false);
		}, 2000);

		return () => clearTimeout(loadingTimer);
	}, []);

	return (
		<>
			<PageLoader isViewLoading={isViewLoading} />
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
