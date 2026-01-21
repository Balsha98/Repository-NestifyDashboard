import { Activity, useEffect, useState } from "react";
// IMPORTED STYLESHEETS
import "../../css/views/map.css";
// IMPORTED MODULES
import Nav from "../partials/Nav";
import DetailsModal from "../partials/modals/Details";
import BirdBoxModal from "../partials/modals/BirdBox";
import LeafletMap from "../partials/views/map/Leaflet";
import BirdBoxesList from "../partials/views/map/BirdBoxes";

const Map = function () {
    const [isViewingDetails, setIsViewingDetails] = useState(false);
    const [isAddingBox, setIsAddingBox] = useState(false);

    const handleToggleDetailsModal = () => setIsViewingDetails((value) => !value);

    const handleToggleBirdBoxModal = () => setIsAddingBox((value) => !value);

    useEffect(function () {
        document.title = "Nestify | Map";
    }, []);

    return (
        <>
            <Nav />
            <Activity mode={isViewingDetails ? "visible" : "hidden"}>
                <DetailsModal onToggleDetailsModal={handleToggleDetailsModal} />
            </Activity>
            <Activity mode={isAddingBox ? "visible" : "hidden"}>
                <BirdBoxModal onToggleBirdBoxModal={handleToggleBirdBoxModal} />
            </Activity>
            <div className="div-main-edge-container">
                <div className="div-map-view-container">
                    <LeafletMap />
                    <BirdBoxesList isAddingBox={isAddingBox} onToggleBirdBoxModal={handleToggleBirdBoxModal} />
                </div>
            </div>
        </>
    );
};

export default Map;
