import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Login from "./components/auth/LoginView";

const root = createRoot(document.querySelector(".main-container"));

root.render(
	<StrictMode>
		<Login></Login>
	</StrictMode>
);
