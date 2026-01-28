// IMPORTED STYLESHEETS
import "../../../../css/partials/views/map/leaflet.css";
import "../../../../css/responsive/partials/views/map/leaflet.css";

const Leaflet = function ({ onToggleBirdBoxesList }) {
    return (
        <div className="div-map-view-leaflet-container">
            <button onClick={onToggleBirdBoxesList}>
                <ion-icon src="/media/icons/icon-bird-house.svg"></ion-icon>
            </button>
        </div>
    );
};

export default Leaflet;
