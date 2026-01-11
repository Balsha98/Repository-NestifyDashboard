import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ReportView from "./components/views/ReportView";

const root = createRoot(document.querySelector(".root"));

root.render(
	<StrictMode>
		<ReportView />
	</StrictMode>
);
