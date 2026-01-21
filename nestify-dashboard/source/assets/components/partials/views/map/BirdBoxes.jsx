// IMPORTED STYLESHEETS
import "../../../../css/partials/views/map/birdboxes.css";

const BirdBoxes = function ({ isAddingBox, onToggleBirdBoxModal }) {
    return (
        <div className="div-map-view-birdboxes-list-container">
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
        </div>
    );
};

export default BirdBoxes;
