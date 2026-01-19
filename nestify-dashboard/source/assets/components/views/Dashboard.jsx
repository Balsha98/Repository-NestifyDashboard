import { useEffect, useState } from "react";
// IMPORTED STYLESHEETS
import "../../css/views/dashboard.css";
// IMPORTED MODULES
import Nav from "../partials/Nav";
import BirdBoxModal from "../partials/modals/BirdBox";
import UploadModal from "../partials/modals/Upload";
import UploadSign from "../partials/signs/Upload";
import Container from "../partials/views/dashboard/Container";
import Overview from "../partials/views/dashboard/Overview";
import Analytics from "../partials/views/dashboard/Analytics";
import Gallery from "../partials/views/dashboard/Gallery";
import Maintenance from "../partials/views/dashboard/Maintenance";
import Settings from "../partials/views/dashboard/Settings";

const Dashboard = function () {
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
    }, []);

    return (
        <>
            <Nav></Nav>
            {isAddingBox && <BirdBoxModal onToggleBirdBoxModal={handleToggleBirdBoxModal}></BirdBoxModal>}
            {isUploadingData && <UploadModal onToggleUploadModal={handleToggleUploadModal}></UploadModal>}
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
                                        <ion-icon src="/media/icons/icon-dot.svg"></ion-icon>
                                        <p>Box 1 - Cornwall Preserve</p>
                                    </div>
                                    <ion-icon src="/media/icons/icon-chevron-down.svg"></ion-icon>
                                </div>
                                {selectBirdBox && (
                                    <ul className="birdbox-options-list">
                                        <li className="birdbox-options-list-item active">
                                            <span>Box 1 - Cornwall Preserve</span>
                                            <ion-icon src="/media/icons/icon-selected.svg"></ion-icon>
                                        </li>
                                        <li className="birdbox-options-list-item">
                                            <span>Box 2 - Deer Creek Woods East</span>
                                            <ion-icon src="/media/icons/icon-selected.svg"></ion-icon>
                                        </li>
                                        <li className="birdbox-options-list-item">
                                            <span>Box 3 - Deer Creek Woods West</span>
                                            <ion-icon src="/media/icons/icon-selected.svg"></ion-icon>
                                        </li>
                                        <li className="birdbox-options-list-item">
                                            <span>Box 4 - Ganargua Creek Meadow Preserve</span>
                                            <ion-icon src="/media/icons/icon-selected.svg"></ion-icon>
                                        </li>
                                        <li className="birdbox-options-list-item">
                                            <span>Box 5 - Irene Gossin Nature Preserve</span>
                                            <ion-icon src="/media/icons/icon-selected.svg"></ion-icon>
                                        </li>
                                    </ul>
                                )}
                            </div>
                            <button className={`${isAddingBox ? "active" : ""}`} onClick={handleToggleBirdBoxModal}>
                                <ion-icon src="/media/icons/icon-plus.svg"></ion-icon>
                            </button>
                        </div>
                    </header>
                    {birdBoxData || <UploadSign isUploadingData={isUploadingData} onToggleUploadModal={handleToggleUploadModal} />}
                    {birdBoxData && (
                        <>
                            <Container
                                isUploadingData={isUploadingData}
                                onToggleUploadModal={handleToggleUploadModal}
                                selectedInnerView={selectedInnerView}
                                onToggleInnerView={handleToggleInnerView}
                            />
                            {selectedInnerView === "overview" && <Overview onToggleInnerView={handleToggleInnerView} />}
                            {selectedInnerView === "analytics" && <Analytics />}
                            {selectedInnerView === "gallery" && <Gallery />}
                            {selectedInnerView === "maintenance" && <Maintenance />}
                            {selectedInnerView === "settings" && <Settings />}
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default Dashboard;
