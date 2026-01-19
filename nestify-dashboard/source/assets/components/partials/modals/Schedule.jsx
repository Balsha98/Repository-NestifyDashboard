import { useState } from "react";
// IMPORTED STYLESHEETS
import "../../../css/partials/modals/schedule.css";

const Schedule = function ({ onToggleScheduleModal }) {
    const [selectMaintenanceType, setSelectMaintenanceType] = useState(false);
    const [selectAssignedTechnician, setSelectAssignedTechnician] = useState(false);
    const [selectPriorityLevel, setSelectPriorityLevel] = useState(false);
    const [isRecurringTask, setIsRecurringTask] = useState(false);

    const handleSelectMaintenanceType = () => setSelectMaintenanceType((value) => !value);

    const handleSelectAssignedTechnician = () => setSelectAssignedTechnician((value) => !value);

    const handleSelectPriorityLevel = () => setSelectPriorityLevel((value) => !value);

    const handleToggleRecurringTask = () => setIsRecurringTask((value) => !value);

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
                <form className="form-schedule-modal" action="" method="">
                    <div className="div-form-schedule-multi-input-container">
                        <div className="div-form-schedule-input-container">
                            <label htmlFor="date">Date</label>
                            <input id="date" type="text" name="date" placeholder="mm/dd/yyyy" />
                        </div>
                        <div className="div-form-schedule-input-container">
                            <label htmlFor="time">Time</label>
                            <input id="time" type="text" name="time" placeholder="--:-- --" />
                        </div>
                    </div>
                    <div className="div-form-schedule-input-container">
                        <span>Maintenance Type</span>
                        <div className="div-maintenance-type-select-container">
                            <div className="div-selected-maintenance-type-info-container" onClick={handleSelectMaintenanceType}>
                                <p id="maintenance-type">Choose a Type</p>
                                <ion-icon src="/media/icons/icon-chevron-down.svg"></ion-icon>
                            </div>
                            {selectMaintenanceType && (
                                <ul className="maintenance-type-options-list">
                                    <li className="maintenance-type-options-list-item active">
                                        <span>Choose a Type</span>
                                        <ion-icon src="/media/icons/icon-selected.svg"></ion-icon>
                                    </li>
                                </ul>
                            )}
                        </div>
                    </div>
                    <div className="div-form-schedule-input-container">
                        <span>Assigned Technician</span>
                        <div className="div-assigned-technician-select-container">
                            <div className="div-selected-assigned-technician-info-container" onClick={handleSelectAssignedTechnician}>
                                <p id="assigned-technician">Choose a Technician</p>
                                <ion-icon src="/media/icons/icon-chevron-down.svg"></ion-icon>
                            </div>
                            {selectAssignedTechnician && (
                                <ul className="assigned-technician-options-list">
                                    <li className="assigned-technician-options-list-item active">
                                        <span>Choose a Technician</span>
                                        <ion-icon src="/media/icons/icon-selected.svg"></ion-icon>
                                    </li>
                                </ul>
                            )}
                        </div>
                    </div>
                    <div className="div-form-schedule-input-container">
                        <span>Priority Level</span>
                        <div className="div-priority-level-select-container">
                            <div className="div-selected-priority-level-info-container" onClick={handleSelectPriorityLevel}>
                                <p id="priority-level">Choose a Priority</p>
                                <ion-icon src="/media/icons/icon-chevron-down.svg"></ion-icon>
                            </div>
                            {selectPriorityLevel && (
                                <ul className="priority-level-options-list">
                                    <li className="priority-level-options-list-item active">
                                        <span>Choose a Priority</span>
                                        <ion-icon src="/media/icons/icon-selected.svg"></ion-icon>
                                    </li>
                                </ul>
                            )}
                        </div>
                    </div>
                    <div className="div-form-schedule-radio-container">
                        <button className={`${isRecurringTask ? "active" : ""}`} onClick={handleToggleRecurringTask} type="button">
                            <ion-icon src="/media/icons/icon-dot.svg"></ion-icon>
                        </button>
                        <p>Set as recurring maintenance?</p>
                    </div>
                    {isRecurringTask && (
                        <div className="div-form-schedule-input-container">
                            <label htmlFor="recurring-days">Recurring Every (Days)</label>
                            <input id="recurring-days" type="text" name="recurring-days" placeholder="30" />
                        </div>
                    )}
                    <div className="div-form-schedule-input-container">
                        <label htmlFor="notes">Notes</label>
                        <textarea id="notes" name="notes" rows="4" placeholder="Additional notes..."></textarea>
                    </div>
                    <button type="button">
                        {/* <ion-icon src="/media/icons/icon-selected.svg"></ion-icon> */}
                        <span>Confirm Schedule</span>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Schedule;
