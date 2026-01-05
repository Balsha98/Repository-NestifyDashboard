import Logo from "../partials/Logo";
import LoginForm from "../partials/auth/LoginForm";
import LoginCopyright from "../partials/auth/LoginCopyright";

const LoginView = function () {
	return (
		<>
			<div className="div-login-view-container">
				<Logo></Logo>
				<LoginForm></LoginForm>
			</div>
			<LoginCopyright></LoginCopyright>
		</>
	);
};

export default LoginView;
