// IMPORTED STYLESHEETS
import "../../../../css/partials/views/map/birdboxes.css";
import "../../../../css/responsive/partials/views/map/birdboxes.css";

const BirdBoxes = function ({ isAddingBox, onToggleBirdBoxModal, isViewingBoxes, onToggleBirdBoxesList }) {
	return (
		<>
			<div className={`div-map-view-birdboxes-list-container ${isViewingBoxes ? "active" : ""}`}>
				<header className="header-map-view-birdboxes-list-container">
					<div className="div-header-map-view-birdboxes-list-info-container">
						<ion-icon src="/media/icons/icon-bird-house.svg" />
						<h2>BirdBoxes</h2>
					</div>
					<button className={`${isAddingBox ? "active" : ""}`} onClick={onToggleBirdBoxModal}>
						<ion-icon src="/media/icons/icon-plus.svg" />
					</button>
				</header>
				<ul className="map-view-birdboxes-list">
					<li className="map-view-birdboxes-list-item">
						<p>BirdBox 1</p>
						<span>Cornwall Preserve</span>
						<a href="#">&nbsp;</a>
					</li>
					<li className="map-view-birdboxes-list-item">
						<p>BirdBox 2</p>
						<span>Deer Creek Woods East</span>
						<a href="#">&nbsp;</a>
					</li>
					<li className="map-view-birdboxes-list-item">
						<p>BirdBox 3</p>
						<span>Deer Creek Woods West</span>
						<a href="#">&nbsp;</a>
					</li>
					<li className="map-view-birdboxes-list-item">
						<p>BirdBox 4</p>
						<span>Ganargua Creek Meadow Preserve</span>
						<a href="#">&nbsp;</a>
					</li>
					<li className="map-view-birdboxes-list-item">
						<p>BirdBox 5</p>
						<span>Irene Gossin Nature Preserve</span>
						<a href="#">&nbsp;</a>
					</li>
				</ul>
				<footer className="footer-map-view-birdboxes-list-container">
					<button onClick={onToggleBirdBoxesList}>
						<ion-icon src="/media/icons/icon-close.svg" />
						<span>Close</span>
					</button>
				</footer>
			</div>
			<div className={`div-map-view-birdboxes-container-overlay ${isViewingBoxes ? "active" : ""}`}>&nbsp;</div>
		</>
	);
};

export default BirdBoxes;
