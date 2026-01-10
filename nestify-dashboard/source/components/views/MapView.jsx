import { useState } from "react";
// IMPORTED MODULES
import Nav from "../partials/Nav";
import BirdBoxModal from "../partials/modals/BirdBox";
import LeafletMap from "../partials/views/map/Leaflet";
import BirdBoxesList from "../partials/views/map/BirdBoxes";

const MapView = function () {
	const [isAddingBox, setIsAddingBox] = useState(false);

	const handleToggleBirdBoxModal = () => setIsAddingBox((value) => !value);

	return (
		<>
			<Nav></Nav>
			{isAddingBox && <BirdBoxModal onToggleBirdBoxModal={handleToggleBirdBoxModal}></BirdBoxModal>}
			<div className="div-main-edge-container">
				<div className="div-map-view-container">
					<LeafletMap></LeafletMap>
					<BirdBoxesList isAddingBox={isAddingBox} onToggleBirdBoxModal={handleToggleBirdBoxModal}></BirdBoxesList>
				</div>
			</div>
		</>
	);
};

export default MapView;
