import { useState } from "react";
// IMPORTED STYLESHEETS
import "../../../../assets/css/partials/views/dashboard/gallery.css";

const Gallery = function () {
    const [galleryLayout, setGalleryLayout] = useState("grid");

    const handleToggleGalleryLayout = (e) => setGalleryLayout(e.target.closest("button").dataset.layout);

    return (
        <div className="div-dashboard-view-gallery-container">
            <header className="header-dashboard-view-gallery-container">
                <h2>Collected Images</h2>
                <div className="div-header-dashboard-view-gallery-info-container">
                    <span>6 Images</span>
                    <div className="div-header-dashboard-view-gallery-toggle-container">
                        <button className={`${galleryLayout === "grid" ? "active" : ""}`} onClick={handleToggleGalleryLayout} data-layout="grid">
                            <ion-icon src="/media/icons/icon-grid.svg"></ion-icon>
                        </button>
                        <button className={`${galleryLayout === "list" ? "active" : ""}`} onClick={handleToggleGalleryLayout} data-layout="list">
                            <ion-icon src="/media/icons/icon-list.svg"></ion-icon>
                        </button>
                    </div>
                </div>
            </header>
            <ul className="dashboard-view-gallery-list">
                <li className="dashboard-view-gallery-list-item">
                    <div className="div-dashboard-view-gallery-list-item-image-container">
                        <span>American Kestrel</span>
                        <ion-icon src="/media/icons/icon-camera.svg"></ion-icon>
                    </div>
                    <div className="div-dashboard-view-gallery-list-item-image-details-container">
                        <div className="div-dashboard-view-gallery-list-item-image-timestamp-container"></div>
                        <div className="div-dashboard-view-gallery-list-item-image-description-container"></div>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Gallery;
