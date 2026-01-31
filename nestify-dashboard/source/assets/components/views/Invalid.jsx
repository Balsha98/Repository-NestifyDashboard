import { useEffect } from "react";
// IMPORTED STYLESHEETS
import "../../css/views/invalid.css";
// IMPORTED MODULES
import Info from "../partials/views/invalid/Info";

const Invalid = function () {
	useEffect(function () {
		document.title = "Nestify | Invalid Route";
	}, []);

	return (
		<div className="div-invalid-view-container">
			<div className="div-invalid-view-modal">
				<Info />
			</div>
		</div>
	);
};

export default Invalid;
