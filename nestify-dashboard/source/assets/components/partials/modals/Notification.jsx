// IMPORTED STYLESHEETS
import "../../../css/partials/modals/notification.css";
import "../../../css/responsive/partials/modals/notification.css";

const Notification = function () {
    return (
        <div className="div-notification-modal-container">
            <div className="div-notification-modal success">
                <ion-icon src="/media/icons/icon-check.svg" />
                <p>Notification message goes here.</p>
            </div>
        </div>
    );
};

export default Notification;
