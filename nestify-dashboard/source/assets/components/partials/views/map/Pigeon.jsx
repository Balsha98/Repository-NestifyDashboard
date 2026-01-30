// IMPORTED MODULES
import { Map, Marker } from "pigeon-maps";
// IMPORTED STYLESHEETS
import "../../../../css/partials/views/map/pigeon.css";
import "../../../../css/responsive/partials/views/map/pigeon.css";

const Pigeon = function ({ onToggleDetailsModal, onToggleBirdBoxesList }) {
    const rochester = [43.156578, -77.608849];

    return (
        <div className="div-map-view-pigeon-container">
            <Map center={rochester} zoom={8} attribution="OpenStreetMap">
                <Marker anchor={rochester} onClick={onToggleDetailsModal}>
                    <ion-icon src="/media/icons/icon-marker.svg"></ion-icon>
                </Marker>
            </Map>
            <button onClick={onToggleBirdBoxesList}>
                <ion-icon src="/media/icons/icon-bird-house.svg"></ion-icon>
            </button>
        </div>
    );
};

export default Pigeon;
