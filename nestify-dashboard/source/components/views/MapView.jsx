import { useState } from "react";
// IMPORTED MODULES
import Nav from "../partials/Nav";
import DetailsModal from "../partials/modals/Details";
import BirdBoxModal from "../partials/modals/BirdBox";
import LeafletMap from "../partials/views/map/Leaflet";
import BirdBoxesList from "../partials/views/map/BirdBoxes";

const MapView = function () {
	const [isViewingDetails, setIsViewingDetails] = useState(true);
	const [isAddingBox, setIsAddingBox] = useState(false);

	const handleToggleDetailsModal = () => setIsViewingDetails((value) => !value);

	const handleToggleBirdBoxModal = () => setIsAddingBox((value) => !value);

	return (
		<>
			<Nav></Nav>
			{isViewingDetails && <DetailsModal onToggleDetailsModal={handleToggleDetailsModal}></DetailsModal>}
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
