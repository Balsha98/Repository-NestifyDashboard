import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// IMPORTED MODULES
import AppView from "./assets/components/views/App";

const root = createRoot(document.querySelector(".root"));

root.render(
    <StrictMode>
        <BrowserRouter>
            <AppView />
        </BrowserRouter>
    </StrictMode>,
);
