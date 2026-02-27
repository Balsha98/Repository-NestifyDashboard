import { Activity, use, useEffect, useState } from "react";
// IMPORTED STYLESHEETS
import "../../css/views/dashboard.css";
import "../../css/responsive/views/dashboard.css";
// IMPORTED MODULES
import PageLoader from "../partials/loaders/Page";
import BirdBoxModal from "../partials/modals/BirdBox";
import UploadModal from "../partials/modals/Upload";
import Nav from "../partials/Nav";
import UploadSign from "../partials/signs/Upload";
import General from "../partials/views/dashboard/General";
import Overview from "../partials/views/dashboard/Overview";
import Analytics from "../partials/views/dashboard/Analytics";
import Gallery from "../partials/views/dashboard/Gallery";
import Maintenance from "../partials/views/dashboard/Maintenance";
import Settings from "../partials/views/dashboard/Settings";
import NotificationModal from "../partials/modals/Notification";

const BOXES = [
    {
        id: 1,
        name: "Cornwall Preserve",
        data: {},
    },
    {
        id: 2,
        name: "Deer Creek Woods East",
        data: {},
    },
    {
        id: 3,
        name: "Deer Creek Woods West",
        data: {},
    },
    {
        id: 4,
        name: "Ganargua Creek Meadow Preserve",
        data: {},
    },
    {
        id: 5,
        name: "Irene Gossin Nature Preserve",
        data: {},
    },
];

const Dashboard = function () {
    const [isViewLoading, setIsViewLoading] = useState(true);
    const [isAddingBox, setIsAddingBox] = useState(false);
    const [birdBoxes, setBirdBoxes] = useState(() => BOXES);
    const [isSelectingBirdBox, setIsSelectingBirdBox] = useState(false);
    const [selectedBirdBox, setSelectedBirdBox] = useState(() => BOXES[0]);
    const [selectedBirdBoxId, setSelectedBirdBoxId] = useState(() => BOXES[0].id);
    const [isUploadingData, setIsUploadingData] = useState(false);
    const [selectedInnerView, setSelectedInnerView] = useState("overview");

    const totalBirdBoxes = birdBoxes.length;

    const handleIsSelectingBirdBox = (e) => {
        setIsSelectingBirdBox((value) => !value);

        const option = e.target.closest("li");

        // Guard clause.
        if (!option) return;

        const optionId = +option.dataset.id;

        // Guard clause.
        if (selectedBirdBox.id === optionId) return;

        setTimeout(() => setSelectedBirdBoxId(optionId), 400);

        setIsViewLoading(true);
    };

    const handleToggleBirdBoxModal = () => setIsAddingBox((value) => !value);

    const handleToggleUploadModal = () => setIsUploadingData((value) => !value);

    const handleToggleInnerView = (e) => setSelectedInnerView(e.target.closest("button").dataset.innerViewName);

    useEffect(() => {
        document.title = "Nestify | Dashboard";

        const loadingTimer = setTimeout(() => setIsViewLoading(false), 800);

        return () => clearTimeout(loadingTimer);
    }, []);

    useEffect(() => {
        const loadingTimer = setTimeout(() => setIsViewLoading(false), 800);

        (async () => {
            // const request = await fetch("URL");
            // const response = await request.json();

            setSelectedBirdBox(birdBoxes.find((box) => box.id === selectedBirdBoxId));
        })();

        return () => clearTimeout(loadingTimer);
    }, [birdBoxes, selectedBirdBox, selectedBirdBoxId]);

    return (
        <>
            <PageLoader isViewLoading={isViewLoading} />
            <Activity mode={isAddingBox ? "visible" : "hidden"}>
                <BirdBoxModal onToggleBirdBoxModal={handleToggleBirdBoxModal} />
            </Activity>
            <Activity mode={isUploadingData ? "visible" : "hidden"}>
                <UploadModal onToggleUploadModal={handleToggleUploadModal} />
            </Activity>
            <Nav />
            <div className="div-main-edge-container">
                <div className="div-dashboard-view-container">
                    <header className="header-dashboard-view-container">
                        <div className="div-header-dashboard-view-birdbox-info-container">
                            <h2>BirdBox {selectedBirdBox.id}</h2>
                            <p>{selectedBirdBox.name}</p>
                        </div>
                        <div className="div-dashboard-view-birdbox-editable-container">
                            <div className="div-birdbox-select-container">
                                <div className="div-selected-birdbox-info-container" onClick={handleIsSelectingBirdBox}>
                                    <div className="div-selected-birdbox-name-container">
                                        <ion-icon src="/media/icons/icon-dot.svg" />
                                        <p>
                                            Box {selectedBirdBox.id} - {selectedBirdBox.name}
                                        </p>
                                    </div>
                                    <ion-icon src={`/media/icons/icon-chevron-${isSelectingBirdBox ? "up" : "down"}.svg`} />
                                </div>
                                {isSelectingBirdBox && (
                                    <ul className="birdbox-options-list">
                                        {BOXES.map(({ id, name }) => {
                                            return (
                                                <li key={id} className={`birdbox-options-list-item ${selectedBirdBox.id === id ? "active" : ""}`} onClick={handleIsSelectingBirdBox} data-id={id}>
                                                    <span>
                                                        Box {id} - {name}
                                                    </span>
                                                    <ion-icon src="/media/icons/icon-selected.svg" />
                                                </li>
                                            );
                                        })}
                                    </ul>
                                )}
                            </div>
                            <button className={`${isAddingBox ? "active" : ""}`} onClick={handleToggleBirdBoxModal}>
                                <ion-icon src="/media/icons/icon-plus.svg" />
                            </button>
                        </div>
                    </header>
                    <Activity mode={totalBirdBoxes ? "hidden" : "visible"}>
                        <UploadSign isUploadingData={isUploadingData} onToggleUploadModal={handleToggleUploadModal} />
                    </Activity>
                    <Activity mode={totalBirdBoxes ? "visible" : "hidden"}>
                        <General isUploadingData={isUploadingData} onToggleUploadModal={handleToggleUploadModal} selectedInnerView={selectedInnerView} onToggleInnerView={handleToggleInnerView} />
                        <Activity mode={selectedInnerView === "overview" ? "visible" : "hidden"}>
                            <Overview onToggleInnerView={handleToggleInnerView} />
                        </Activity>
                        <Activity mode={selectedInnerView === "analytics" ? "visible" : "hidden"}>
                            <Analytics />
                        </Activity>
                        <Activity mode={selectedInnerView === "gallery" ? "visible" : "hidden"}>
                            <Gallery />
                        </Activity>
                        <Activity mode={selectedInnerView === "maintenance" ? "visible" : "hidden"}>
                            <Maintenance />
                        </Activity>
                        <Activity mode={selectedInnerView === "settings" ? "visible" : "hidden"}>
                            <Settings />
                        </Activity>
                    </Activity>
                </div>
            </div>
            <NotificationModal />
        </>
    );
};

export default Dashboard;
