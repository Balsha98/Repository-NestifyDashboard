// IMPORTED STYLESHEETS
import "../../../../assets/css/partials/views/dashboard/maintenance.css";

const Maintenance = function () {
    return (
        <div className="div-dashboard-view-maintenance-container">
            <div className="div-dashboard-view-maintenance-log-container">
                <h2>Maintenance Log</h2>
                <ul className="dashboard-view-maintenance-log-list">
                    <li className="dashboard-view-maintenance-log-list-item">
                        <header className="header-dashboard-view-maintenance-log-list-item">
                            <p>Battery Replacement</p>
                            <span>01/13/2026</span>
                        </header>
                        <span>John Doe</span>
                    </li>
                    <li className="dashboard-view-maintenance-log-list-item">
                        <header className="header-dashboard-view-maintenance-log-list-item">
                            <p>Battery Replacement</p>
                            <span>01/13/2026</span>
                        </header>
                        <span>John Doe</span>
                    </li>
                </ul>
                <button>
                    <ion-icon src="/media/icons/icon-file.svg"></ion-icon>
                    <span>View Full Log</span>
                </button>
            </div>
            <div className="div-dashboard-view-maintenance-schedule-container">
                <h2>Maintenance Schedule</h2>
                <ul className="dashboard-view-maintenance-schedule-list">
                    <li className="dashboard-view-maintenance-schedule-list-item">
                        <p>Battery Replacement</p>
                        <span>01/13/2026</span>
                    </li>
                </ul>
                <button>
                    <ion-icon src="/media/icons/icon-settings.svg"></ion-icon>
                    <span>Schedule Maintenance</span>
                </button>
            </div>
        </div>
    );
};

export default Maintenance;
