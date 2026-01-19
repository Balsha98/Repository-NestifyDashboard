import { useState } from "react";
// IMPORTED STYLESHEETS
import "../../../css/partials/modals/upload.css";

const Upload = function ({ onToggleUploadModal }) {
    const [selectTargetBox, setSelectTargetBox] = useState(false);

    const handleSelectTargetBox = () => setSelectTargetBox((value) => !value);

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
                    <div className="div-form-upload-input-container">
                        <label htmlFor="target-file">Target File</label>
                        <input id="target-file" type="text" name="target-file" placeholder="File Name" />
                    </div>
                    <div className="div-form-upload-input-container">
                        <span>Target Box</span>
                        <div className="div-target-box-select-container">
                            <div className="div-selected-target-box-info-container" onClick={handleSelectTargetBox}>
                                <p id="target-box">Choose a BirdBox</p>
                                <ion-icon src="/media/icons/icon-chevron-down.svg"></ion-icon>
                            </div>
                            {selectTargetBox && (
                                <ul className="target-box-options-list">
                                    <li className="target-box-options-list-item active">
                                        <span>Choose a BirdBox</span>
                                        <ion-icon src="/media/icons/icon-selected.svg"></ion-icon>
                                    </li>
                                    <li className="target-box-options-list-item">
                                        <span>Box 1 - Cornwall Preserve</span>
                                        <ion-icon src="/media/icons/icon-selected.svg"></ion-icon>
                                    </li>
                                    <li className="target-box-options-list-item">
                                        <span>Box 2 - Deer Creek Woods East</span>
                                        <ion-icon src="/media/icons/icon-selected.svg"></ion-icon>
                                    </li>
                                    <li className="target-box-options-list-item">
                                        <span>Box 3 - Deer Creek Woods West</span>
                                        <ion-icon src="/media/icons/icon-selected.svg"></ion-icon>
                                    </li>
                                    <li className="target-box-options-list-item">
                                        <span>Box 4 - Ganargua Creek Meadow Preserve</span>
                                        <ion-icon src="/media/icons/icon-selected.svg"></ion-icon>
                                    </li>
                                    <li className="target-box-options-list-item">
                                        <span>Box 5 - Irene Gossin Nature Preserve</span>
                                        <ion-icon src="/media/icons/icon-selected.svg"></ion-icon>
                                    </li>
                                </ul>
                            )}
                        </div>
                    </div>
                    <div className="div-form-upload-notice-container">
                        <p>Please make sure that the desired box matches the box data.</p>
                    </div>
                    <button type="button">
                        <ion-icon src="/media/icons/icon-upload.svg"></ion-icon>
                        <span>Upload Data</span>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Upload;
