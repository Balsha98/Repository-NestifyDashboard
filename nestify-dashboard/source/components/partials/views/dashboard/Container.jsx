import { useState } from "react";
// IMPORTED STYLESHEETS
import "../../../../assets/css/partials/views/dashboard/container.css";

const Container = function ({ isUploadingData, onToggleUploadModal }) {
	const [selectedInnerView, setSelectedInnerView] = useState("overview");

	const innerViewNames = ["Overview", "Analytics", "Gallery", "Maintenance", "Settings"];

	const handleToggleInnerView = function (e) {
		setSelectedInnerView(e.target.closest("li").dataset.innerViewName);
	};

	return (
		<div className="div-dashboard-general-container">
			<header className="header-dashboard-general-container">
				<ul className="dashboard-general-toggle-list">
					{innerViewNames.map((innerViewName, i) => {
						const lowerCasedName = innerViewName.toLowerCase();

						return (
							<li
								key={i}
								className={`dashboard-general-toggle-list-item ${selectedInnerView === lowerCasedName ? "active" : ""}`}
								onClick={handleToggleInnerView}
								data-inner-view-name={lowerCasedName}
							>
								<span>{innerViewName}</span>
							</li>
						);
					})}
				</ul>
				<div className="div-dashboard-general-actions-container">
					<button>
						<ion-icon src="/media/icons/icon-download.svg"></ion-icon>
						<span>Export Data</span>
					</button>
					<button className={`${isUploadingData ? "active" : ""}`} onClick={onToggleUploadModal}>
						<ion-icon src="/media/icons/icon-upload.svg"></ion-icon>
						<span>Upload Data</span>
					</button>
				</div>
			</header>
		</div>
	);
};

export default Container;
