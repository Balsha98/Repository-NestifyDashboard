import { Activity, useState } from "react";
// IMPORTED STYLESHEETS
import "../../../../css/partials/views/dashboard/overview.css";
// IMPORTED MODULES
import ImageModal from "../../modals/Image";

const Overview = function ({ onToggleInnerView }) {
    const [isViewingImage, setIsViewingImage] = useState(false);

    const handleToggleImageModal = () => setIsViewingImage((value) => !value);

    return (
        <>
            <Activity mode={isViewingImage ? "visible" : "hidden"}>
                <ImageModal onToggleImageModal={handleToggleImageModal} />
            </Activity>
            <div className="div-dashboard-view-overview-container">
                <div className="div-dashboard-view-overview-statistics-container">
                    <div className="div-dashboard-view-overview-location-overview-container">
                        <header className="header-dashboard-view-overview-location-overview-container">
                            <ion-icon src="/media/icons/icon-location.svg" />
                            <h4>Location</h4>
                        </header>
                        <ul className="dashboard-view-overview-location-overview-list">
                            <li className="dashboard-view-overview-location-overview-list-item">
                                <p>Cornwall Preserve</p>
                            </li>
                            <li className="dashboard-view-overview-location-overview-list-item">
                                <p>42.8584, -78.7342</p>
                            </li>
                        </ul>
                        <a href="/map">
                            <ion-icon src="/media/icons/icon-location.svg" />
                            <span>View on Map</span>
                        </a>
                    </div>
                    <div className="div-dashboard-view-overview-statistics-overview-container">
                        <header className="header-dashboard-view-overview-statistics-overview-container">
                            <ion-icon src="/media/icons/icon-chart.svg" />
                            <h4>Statistics</h4>
                        </header>
                        <ul className="dashboard-view-overview-statistics-overview-list">
                            <li className="dashboard-view-overview-statistics-overview-list-item">
                                <p>Total Sightings:</p>
                                <span>16</span>
                            </li>
                            <li className="dashboard-view-overview-statistics-overview-list-item">
                                <p>Avg. Occupancy:</p>
                                <span>6.2 hrs</span>
                            </li>
                        </ul>
                    </div>
                    <div className="div-dashboard-view-overview-battery-overview-container">
                        <header className="header-dashboard-view-overview-battery-overview-container">
                            <ion-icon src="/media/icons/icon-battery.svg" />
                            <h4>Battery</h4>
                        </header>
                        <div className="div-dashboard-view-overview-battery-overview-info-container">
                            <span>80%</span>
                            <div className="div-dashboard-view-overview-battery-overview-percentage-container">
                                <span>&nbsp;</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="div-dashboard-view-overview-recent-images-container">
                    <header className="header-dashboard-view-overview-recent-images-container">
                        <div className="div-header-dashboard-view-overview-recent-images-info-container">
                            <ion-icon src="/media/icons/icon-camera.svg" />
                            <h4>Recent Images</h4>
                        </div>
                        <button onClick={onToggleInnerView} data-inner-view-name="gallery">
                            <span>View All</span>
                        </button>
                    </header>
                    <ul className="dashboard-view-overview-recent-images-list">
                        <li className="dashboard-view-overview-recent-images-list-item" onClick={handleToggleImageModal}>
                            <ion-icon src="/media/icons/icon-camera.svg" />
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Overview;
