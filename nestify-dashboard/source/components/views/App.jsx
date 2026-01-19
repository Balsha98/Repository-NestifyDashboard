import { Routes, Route } from "react-router-dom";
// IMPORTED MODULES
import LoginView from "./Login";
import DashboardView from "./Dashboard";
import ReportView from "./Report";
import MapView from "./Map";

const App = function () {
    return (
        <Routes>
            <Route path="/" element={<LoginView />}></Route>
            <Route path="/login" element={<LoginView />}></Route>
            <Route path="/dashboard" element={<DashboardView />}></Route>
            <Route path="/report" element={<ReportView />}></Route>
            <Route path="/map" element={<MapView />}></Route>
        </Routes>
    );
};

export default App;
