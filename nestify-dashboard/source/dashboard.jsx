import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import DashboardView from "./components/views/DashboardView";

const root = createRoot(document.querySelector(".root"));

root.render(
	<StrictMode>
		<DashboardView />
	</StrictMode>
);
