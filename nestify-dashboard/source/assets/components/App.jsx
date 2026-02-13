import { Routes, Route } from "react-router-dom";
// IMPORTED MODULES
import LoginView from "./views/Login";
import SignupView from "./views/Signup";
import DashboardView from "./views/Dashboard";
import ReportView from "./views/Report";
import MapView from "./views/Map";
import ProfileView from "./views/Profile";
import InvalidView from "./views/Invalid";

const App = function () {
    return (
        <Routes>
            <Route path="/" element={<LoginView />} />
            <Route path="/login" element={<LoginView />} />
            <Route path="/signup" element={<SignupView />} />
            <Route path="/dashboard" element={<DashboardView />} />
            <Route path="/report" element={<ReportView />} />
            <Route path="/map" element={<MapView />} />
            <Route path="/profile" element={<ProfileView />} />
            <Route path="*" element={<InvalidView />} />
        </Routes>
    );
};

export default App;
