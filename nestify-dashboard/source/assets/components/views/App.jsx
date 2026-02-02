import { Routes, Route } from "react-router-dom";
// IMPORTED MODULES
import LoginView from "./Login";
import SignupView from "./Signup";
import DashboardView from "./Dashboard";
import ReportView from "./Report";
import MapView from "./Map";
import InvalidView from "./Invalid";

const App = function () {
    return (
        <Routes>
            <Route path="/" element={<LoginView />} />
            <Route path="/login" element={<LoginView />} />
            <Route path="/signup" element={<SignupView />} />
            <Route path="/dashboard" element={<DashboardView />} />
            <Route path="/report" element={<ReportView />} />
            <Route path="/map" element={<MapView />} />
            <Route path="*" element={<InvalidView />} />
        </Routes>
    );
};

export default App;
