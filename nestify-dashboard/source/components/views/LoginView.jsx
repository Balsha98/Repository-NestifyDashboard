import Logo from "../partials/Logo";
import LoginForm from "../partials/views/auth/LoginForm";
import Copyright from "../partials/views/auth/Copyright";

const LoginView = function () {
	return (
		<>
			<div className="div-login-view-container">
				<Logo></Logo>
				<LoginForm></LoginForm>
			</div>
			<Copyright></Copyright>
		</>
	);
};

export default LoginView;
