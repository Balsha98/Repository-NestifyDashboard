// IMPORTED MODULES
import Logo from "./Logo";
import Logout from "./modals/Logout";
// IMPORTED STYLESHEETS
import "../../assets/css/partials/nav.css";

const Nav = function () {
	return (
		<div className="div-main-nav-container">
			<div className="div-main-edge-container">
				<Logo></Logo>
				<nav className="main-nav-container">
					<ul className="main-nav-container-list">
						<li className="main-nav-container-list-item active">
							<a href="#">Bird Boxes</a>
						</li>
						<li className="main-nav-container-list-item">
							<a href="#">Report</a>
						</li>
						<li className="main-nav-container-list-item">
							<a href="#">Map</a>
						</li>
					</ul>
					<button>
						<ion-icon src="/media/icons/icon-sign-out.svg"></ion-icon>
						<span>Logout</span>
					</button>
				</nav>
			</div>
		</div>
	);
};

export default Nav;
