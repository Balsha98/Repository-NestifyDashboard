import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// IMPORTED MODULES
import AppView from "./assets/components/App";

const root = createRoot(document.querySelector(".root"));

root.render(
	<StrictMode>
		<AppView />
	</StrictMode>,
);
