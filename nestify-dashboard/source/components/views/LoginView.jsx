import Logo from "../partials/Logo";
import LoginForm from "../partials/views/auth/LoginForm";
import LoginCopyright from "../partials/views/auth/LoginCopyright";

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
