import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import LoginView from "./components/views/LoginView";

const root = createRoot(document.querySelector(".root"));

root.render(
	<StrictMode>
		<LoginView></LoginView>
	</StrictMode>
);
