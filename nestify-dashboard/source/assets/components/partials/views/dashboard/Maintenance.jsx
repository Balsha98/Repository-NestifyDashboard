import { Activity, useState } from "react";
// IMPORTED STYLESHEETS
import "../../../../css/partials/views/dashboard/maintenance.css";
// IMPORTED MODULES
import ScheduleModal from "../../modals/Schedule";

const Maintenance = function () {
    const [isViewingSchedule, setIsViewingSchedule] = useState(false);

    const handleToggleScheduleModal = () => setIsViewingSchedule((value) => !value);

    return (
        <>
            <Activity mode={isViewingSchedule ? "visible" : "hidden"}>
                <ScheduleModal onToggleScheduleModal={handleToggleScheduleModal} />
            </Activity>
            <div className="div-dashboard-view-maintenance-container">
                <div className="div-dashboard-view-maintenance-log-container">
                    <h2>Maintenance Log</h2>
                    <ul className="dashboard-view-maintenance-log-list">
                        <li className="dashboard-view-maintenance-log-list-item" onClick={handleToggleScheduleModal}>
                            <header className="header-dashboard-view-maintenance-log-list-item">
                                <p>Battery Replacement</p>
                                <span>01/13/2026</span>
                            </header>
                            <span>John Doe</span>
                        </li>
                        <li className="dashboard-view-maintenance-log-list-item" onClick={handleToggleScheduleModal}>
                            <header className="header-dashboard-view-maintenance-log-list-item">
                                <p>Battery Replacement</p>
                                <span>01/13/2026</span>
                            </header>
                            <span>John Doe</span>
                        </li>
                    </ul>
                    <button>
                        <ion-icon src="/media/icons/icon-file.svg" />
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
                    <button onClick={handleToggleScheduleModal}>
                        <ion-icon src="/media/icons/icon-settings.svg" />
                        <span>Schedule Maintenance</span>
                    </button>
                </div>
            </div>
        </>
    );
};

export default Maintenance;
