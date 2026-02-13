import { Activity, useEffect, useState } from "react";
// IMPORTED STYLESHEETS
import "../../css/views/map.css";
import "../../css/responsive/views/map.css";
// IMPORTED MODULES
import PageLoader from "../partials/loaders/Page";
import DetailsModal from "../partials/modals/Details";
import BirdBoxModal from "../partials/modals/BirdBox";
import Nav from "../partials/Nav";
import PigeonMap from "../partials/views/map/Pigeon";
import BirdBoxesList from "../partials/views/map/BirdBoxes";
import NotificationModal from "../partials/modals/Notification";

const Map = function () {
    const [isViewLoading, setIsViewLoading] = useState(true);
    const [isAddingBox, setIsAddingBox] = useState(false);
    const [isViewingDetails, setIsViewingDetails] = useState(false);
    const [isViewingBoxes, setIsViewingBoxes] = useState(false);

    const handleToggleBirdBoxModal = () => setIsAddingBox((value) => !value);

    const handleToggleDetailsModal = () => setIsViewingDetails((value) => !value);

    const handleToggleBirdBoxesList = () => setIsViewingBoxes((value) => !value);

    useEffect(function () {
        document.title = "Nestify | Map";

        const loadingTimer = setTimeout(() => setIsViewLoading(false), 800);

        return () => clearTimeout(loadingTimer);
    }, []);

    return (
        <>
            <PageLoader isViewLoading={isViewLoading} />
            <Activity mode={isAddingBox ? "visible" : "hidden"}>
                <BirdBoxModal onToggleBirdBoxModal={handleToggleBirdBoxModal} />
            </Activity>
            <Activity mode={isViewingDetails ? "visible" : "hidden"}>
                <DetailsModal onToggleDetailsModal={handleToggleDetailsModal} />
            </Activity>
            <Nav />
            <div className="div-main-edge-container">
                <div className="div-map-view-container">
                    <PigeonMap onToggleDetailsModal={handleToggleDetailsModal} onToggleBirdBoxesList={handleToggleBirdBoxesList} />
                    <BirdBoxesList
                        isAddingBox={isAddingBox}
                        onToggleBirdBoxModal={handleToggleBirdBoxModal}
                        isViewingBoxes={isViewingBoxes}
                        onToggleBirdBoxesList={handleToggleBirdBoxesList}
                    />
                </div>
            </div>
            <NotificationModal />
        </>
    );
};

export default Map;
