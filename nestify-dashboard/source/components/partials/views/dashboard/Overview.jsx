// IMPORTED STYLESHEETS
import "../../../../assets/css/partials/views/dashboard/overview.css";

const Overview = function () {
    return (
        <div className="div-dashboard-view-overview-container">
            <div className="div-dashboard-view-overview-statistics-container">
                <div className="div-dashboard-view-overview-location-overview-container">
                    <header className="header-dashboard-view-overview-location-overview-container">
                        <ion-icon src="/media/icons/icon-location.svg"></ion-icon>
                        <h4>Location</h4>
                    </header>
                    <ul className="dashboard-view-overview-location-overview-list">
                        <li className="dashboard-view-overview-location-overview-list"></li>
                    </ul>
                </div>
                <div className="div-dashboard-view-overview-statistics-overview-container">
                    <header className="header-dashboard-view-overview-statistics-overview-container">
                        <ion-icon src="/media/icons/icon-chart.svg"></ion-icon>
                        <h4>Statistics</h4>
                    </header>
                    <ul className="dashboard-view-overview-statistics-overview-list">
                        <li className="dashboard-view-overview-statistics-overview-list"></li>
                    </ul>
                </div>
                <div className="div-dashboard-view-overview-battery-overview-container">
                    <header className="header-dashboard-view-overview-battery-overview-container">
                        <ion-icon src="/media/icons/icon-battery.svg"></ion-icon>
                        <h4>Battery</h4>
                    </header>
                    <ul className="dashboard-view-overview-battery-overview-list">
                        <li className="dashboard-view-overview-battery-overview-list"></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Overview;
