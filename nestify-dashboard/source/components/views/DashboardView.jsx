import { useState } from "react";
// IMPORTED MODULES
import Nav from "../partials/Nav";

const DashboardView = function () {
	const [selectBirdBox, setSelectBirdBox] = useState(false);

	const handleSelectBirdBox = function () {
		setSelectBirdBox((value) => !value);
	};

	return (
		<>
			<Nav></Nav>
			<div className="div-main-edge-container">
				<div className="div-dashboard-view-container">
					<header className="header-dashboard-view-container">
						<div className="div-dashboard-view-birdbox-info-container">
							<h2>BirdBox 1</h2>
							<p>Cornwall Preserve</p>
						</div>
						<div className="div-dashboard-view-birdbox-editable-container">
							<div className="div-birdbox-select-container">
								<div className="div-selected-birdbox-info-container" onClick={handleSelectBirdBox}>
									<div className="div-selected-birdbox-name-container">
										<ion-icon src="/media/icons/icon-dot.svg"></ion-icon>
										<p>Box 1 - Cornwall Preserve</p>
									</div>
									<ion-icon src="/media/icons/icon-chevron-down.svg"></ion-icon>
								</div>
								{selectBirdBox && (
									<ul className="birdbox-options-list">
										<li className="birdbox-options-list-item active">
											<span>Box 1 - Cornwall Preserve</span>
											<ion-icon src="/media/icons/icon-selected.svg"></ion-icon>
										</li>
										<li className="birdbox-options-list-item">
											<span>Box 2 - Deer Creek Woods East</span>
											<ion-icon src="/media/icons/icon-selected.svg"></ion-icon>
										</li>
										<li className="birdbox-options-list-item">
											<span>Box 3 - Deer Creek Woods West</span>
											<ion-icon src="/media/icons/icon-selected.svg"></ion-icon>
										</li>
										<li className="birdbox-options-list-item">
											<span>Box 4 - Ganargua Creek Meadow Preserve</span>
											<ion-icon src="/media/icons/icon-selected.svg"></ion-icon>
										</li>
										<li className="birdbox-options-list-item">
											<span>Box 5 - Irene Gossin Nature Preserve</span>
											<ion-icon src="/media/icons/icon-selected.svg"></ion-icon>
										</li>
									</ul>
								)}
							</div>
							<button>
								<ion-icon src="/media/icons/icon-plus.svg"></ion-icon>
							</button>
						</div>
					</header>
				</div>
			</div>
		</>
	);
};

export default DashboardView;
