import { useEffect, useState } from "react";
// IMPORTED STYLESHEETS
import "../../css/views/profile.css";
// IMPORTED CUSTOM MODULES
import Nav from "../partials/Nav";
import ProfileInformation from "../partials/views/profile/Information";
import Password from "../partials/views/profile/Password";

const Profile = function () {
	const [isDisabled, setIsDisabled] = useState(true);

	const handleSetIsDisabled = () => setIsDisabled((value) => !value);

	useEffect(function () {
		document.title = "Nestify | Profile";
	}, []);

	return (
		<>
			<Nav />
			<div className="div-main-edge-container">
				<div className="div-profile-view-container">
					<header className="header-profile-view-container">
						<h2>Profile</h2>
						<div className="div-header-profile-view-edit-container">
							{isDisabled && (
								<button onClick={handleSetIsDisabled}>
									<ion-icon src="/media/icons/icon-edit.svg" />
									<span>Edit Profile</span>
								</button>
							)}
							{isDisabled || (
								<div className="div-header-profile-view-editable-container">
									<button onClick={handleSetIsDisabled}>
										<ion-icon src="/media/icons/icon-close.svg" />
										<span>Cancel</span>
									</button>
									<button>
										<ion-icon src="/media/icons/icon-save.svg" />
										<span>Save Changes</span>
									</button>
								</div>
							)}
						</div>
					</header>
					<div className="div-profile-view-overview-container">
						<ProfileInformation isDisabled={isDisabled} />
						<Password isDisabled={isDisabled} />
					</div>
				</div>
			</div>
		</>
	);
};

export default Profile;
