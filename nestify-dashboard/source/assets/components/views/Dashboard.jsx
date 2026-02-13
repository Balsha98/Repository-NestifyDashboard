import { Activity, useEffect, useState } from "react";
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

const Dashboard = function () {
    const [isViewLoading, setIsViewLoading] = useState(true);
    const [isAddingBox, setIsAddingBox] = useState(false);
    const [selectBirdBox, setSelectBirdBox] = useState(false);
    const [birdBoxData, setBirdBoxData] = useState(() => true);
    const [isUploadingData, setIsUploadingData] = useState(false);
    const [selectedInnerView, setSelectedInnerView] = useState("overview");

    const handleSelectBirdBox = () => setSelectBirdBox((value) => !value);

    const handleToggleBirdBoxModal = () => setIsAddingBox((value) => !value);

    const handleToggleUploadModal = () => setIsUploadingData((value) => !value);

    const handleToggleInnerView = (e) => setSelectedInnerView(e.target.closest("button").dataset.innerViewName);

    useEffect(function () {
        document.title = "Nestify | Dashboard";

        const loadingTimer = setTimeout(() => setIsViewLoading(false), 800);

        return () => clearTimeout(loadingTimer);
    }, []);

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
                            <h2>BirdBox 1</h2>
                            <p>Cornwall Preserve</p>
                        </div>
                        <div className="div-dashboard-view-birdbox-editable-container">
                            <div className="div-birdbox-select-container">
                                <div className="div-selected-birdbox-info-container" onClick={handleSelectBirdBox}>
                                    <div className="div-selected-birdbox-name-container">
                                        <ion-icon src="/media/icons/icon-dot.svg" />
                                        <p>Box 1 - Cornwall Preserve</p>
                                    </div>
                                    <ion-icon src="/media/icons/icon-chevron-down.svg" />
                                </div>
                                {selectBirdBox && (
                                    <ul className="birdbox-options-list">
                                        <li className="birdbox-options-list-item active">
                                            <span>Box 1 - Cornwall Preserve</span>
                                            <ion-icon src="/media/icons/icon-selected.svg" />
                                        </li>
                                        <li className="birdbox-options-list-item">
                                            <span>Box 2 - Deer Creek Woods East</span>
                                            <ion-icon src="/media/icons/icon-selected.svg" />
                                        </li>
                                        <li className="birdbox-options-list-item">
                                            <span>Box 3 - Deer Creek Woods West</span>
                                            <ion-icon src="/media/icons/icon-selected.svg" />
                                        </li>
                                        <li className="birdbox-options-list-item">
                                            <span>Box 4 - Ganargua Creek Meadow Preserve</span>
                                            <ion-icon src="/media/icons/icon-selected.svg" />
                                        </li>
                                        <li className="birdbox-options-list-item">
                                            <span>Box 5 - Irene Gossin Nature Preserve</span>
                                            <ion-icon src="/media/icons/icon-selected.svg" />
                                        </li>
                                    </ul>
                                )}
                            </div>
                            <button className={`${isAddingBox ? "active" : ""}`} onClick={handleToggleBirdBoxModal}>
                                <ion-icon src="/media/icons/icon-plus.svg" />
                            </button>
                        </div>
                    </header>
                    <Activity mode={birdBoxData ? "hidden" : "visible"}>
                        <UploadSign isUploadingData={isUploadingData} onToggleUploadModal={handleToggleUploadModal} />
                    </Activity>
                    <Activity mode={birdBoxData ? "visible" : "hidden"}>
                        <General
                            isUploadingData={isUploadingData}
                            onToggleUploadModal={handleToggleUploadModal}
                            selectedInnerView={selectedInnerView}
                            onToggleInnerView={handleToggleInnerView}
                        />
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
