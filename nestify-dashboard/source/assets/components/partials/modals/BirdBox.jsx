// IMPORTED STYLESHEETS
import "../../../css/partials/modals/birdbox.css";

const BirdBox = function ({ onToggleBirdBoxModal }) {
    return (
        <div className="div-birdbox-modal-container">
            <div className="div-birdbox-modal">
                <header className="header-birdbox-modal">
                    <div className="div-header-birdbox-modal-info-container">
                        <ion-icon src="/media/icons/icon-plus.svg" />
                        <h2>Add BirdBox</h2>
                    </div>
                    <button onClick={onToggleBirdBoxModal}>
                        <ion-icon src="/media/icons/icon-close.svg" />
                    </button>
                </header>
                <form className="form-birdbox-modal" action="" method="POST">
                    <div className="div-form-birdbox-input-container">
                        <label htmlFor="box-name">Box Name *</label>
                        <input id="box-name" type="text" name="box-name" placeholder="Box 1" />
                    </div>
                    <div className="div-form-birdbox-input-container">
                        <label htmlFor="location-name">Location Name *</label>
                        <input id="location-name" type="text" name="location-name" placeholder="Location" />
                    </div>
                    <div className="div-form-birdbox-multi-input-container">
                        <div className="div-form-birdbox-input-container">
                            <label htmlFor="latitude">Latitude</label>
                            <input id="latitude" type="text" name="latitude" placeholder="--" />
                        </div>
                        <div className="div-form-birdbox-input-container">
                            <label htmlFor="longitude">Longitude</label>
                            <input id="longitude" type="text" name="longitude" placeholder="--" />
                        </div>
                    </div>
                    <button type="button">
                        <ion-icon src="/media/icons/icon-selected.svg" />
                        <span>Add BirdBox</span>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default BirdBox;
