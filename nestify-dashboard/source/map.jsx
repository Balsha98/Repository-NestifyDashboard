import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MapView from "./components/views/MapView";

const root = createRoot(document.querySelector(".root"));

root.render(
	<StrictMode>
		<MapView></MapView>
	</StrictMode>
);
