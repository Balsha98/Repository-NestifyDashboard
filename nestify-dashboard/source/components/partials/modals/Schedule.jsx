// IMPORTED STYLESHEETS
import "../../../assets/css/partials/modals/schedule.css";

const Schedule = function ({ onToggleScheduleModal }) {
    return (
        <div className="div-schedule-modal-container">
            <div className="div-schedule-modal">
                <header className="header-schedule-modal">
                    <div className="div-header-schedule-modal-info-container">
                        <ion-icon src="/media/icons/icon-date.svg"></ion-icon>
                        <h2>Schedule Maintenance</h2>
                    </div>
                    <button onClick={onToggleScheduleModal}>
                        <ion-icon src="/media/icons/icon-close.svg"></ion-icon>
                    </button>
                </header>
            </div>
        </div>
    );
};

export default Schedule;
