import { useState } from "react";
// IMPORTED STYLESHEETS
import "../../../../assets/css/partials/views/dashboard/settings.css";

const Settings = function () {
    const [isDisabled, setIsDisabled] = useState(true);

    const handleSetIsDisabled = () => setIsDisabled((value) => !value);

    return (
        <div className="div-dashboard-view-settings-container">
            <header className="header-dashboard-view-settings-container">
                <h2>BirdBox Configuration</h2>
                <div className="div-header-dashboard-view-settings-edit-container">
                    {isDisabled && (
                        <button onClick={handleSetIsDisabled}>
                            <ion-icon src="/media/icons/icon-edit.svg"></ion-icon>
                            <span>Edit Box</span>
                        </button>
                    )}
                    {isDisabled || (
                        <div className="div-header-dashboard-view-settings-editable-container">
                            <button onClick={handleSetIsDisabled}>
                                <ion-icon src="/media/icons/icon-close.svg"></ion-icon>
                                <span>Close</span>
                            </button>
                            <button>
                                <ion-icon src="/media/icons/icon-save.svg"></ion-icon>
                                <span>Save Changes</span>
                            </button>
                        </div>
                    )}
                </div>
            </header>
            <form className="form-dashboard-view-settings-container" action="" method="PUT">
                <div className="div-form-dashboard-view-settings-multi-input-container">
                    <div className={`div-form-dashboard-view-settings-input-container ${isDisabled ? "disabled" : ""}`}>
                        <label htmlFor="box-name">Box Name</label>
                        <input id="box-name" type="text" name="box-name" placeholder="BirdBox 1" disabled={isDisabled} />
                    </div>
                    <div className={`div-form-dashboard-view-settings-input-container ${isDisabled ? "disabled" : ""}`}>
                        <label htmlFor="location-name">Location Name</label>
                        <input id="location-name" type="text" name="location-name" placeholder="Cornwall Preserve" disabled={isDisabled} />
                    </div>
                </div>
                <div className="div-form-dashboard-view-settings-multi-input-container">
                    <div className={`div-form-dashboard-view-settings-input-container ${isDisabled ? "disabled" : ""}`}>
                        <label htmlFor="latitude">Latitude</label>
                        <input id="latitude" type="text" name="latitude" placeholder="--" disabled={isDisabled} />
                    </div>
                    <div className={`div-form-dashboard-view-settings-input-container ${isDisabled ? "disabled" : ""}`}>
                        <label htmlFor="longitude">Longitude</label>
                        <input id="longitude" type="text" name="longitude" placeholder="--" disabled={isDisabled} />
                    </div>
                </div>
                <div className={`div-form-dashboard-view-settings-input-container ${isDisabled ? "disabled" : ""}`}>
                    <label htmlFor="notes">Notes</label>
                    <textarea id="notes" name="notes" rows="8" placeholder="Additional notes about this box..." disabled={isDisabled}></textarea>
                </div>
            </form>
        </div>
    );
};

export default Settings;
