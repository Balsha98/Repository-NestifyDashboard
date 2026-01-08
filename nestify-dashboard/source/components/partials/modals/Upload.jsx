// IMPORTED STYLESHEETS
import "../../../assets/css/partials/modals/upload.css";

const Upload = function ({ onToggleUploadModal }) {
	return (
		<div className="div-upload-modal-container">
			<div className="div-upload-modal">
				<header className="header-upload-modal">
					<div className="div-header-upload-modal-info-container">
						<ion-icon src="/media/icons/icon-upload.svg"></ion-icon>
						<h2>Upload Data to BirdBox</h2>
					</div>
					<button onClick={onToggleUploadModal}>
						<ion-icon src="/media/icons/icon-close.svg"></ion-icon>
					</button>
				</header>
				<form className="form-upload-modal" action="" method="POST">
					<div className="div-form-input-container">
						<label htmlFor="target-file">Target File</label>
						<input id="target-file" type="text" name="target-file" placeholder="File" />
					</div>
					<div className="div-form-input-container">
						<label htmlFor="location-name">Target Box</label>
						<input id="location-name" type="text" name="location-name" placeholder="Location" />
					</div>
					<button className="btn-form-upload-submit" type="button">
						<ion-icon src="/media/icons/icon-upload.svg"></ion-icon>
						<span>Upload Data</span>
					</button>
				</form>
			</div>
		</div>
	);
};

export default Upload;
