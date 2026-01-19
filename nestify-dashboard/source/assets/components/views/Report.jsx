// IMPORTED STYLESHEETS
import "../../css/views/report.css";
// IMPORTED MODULES
import Nav from "../partials/Nav";
import Summary from "../partials/views/report/Summary";
import SpeciesOverview from "../partials/views/report/SpeciesOverview";
import SeasonalHistory from "../partials/views/report/SeasonalHistory";

const ReportView = function () {
    return (
        <>
            <Nav />
            <div className="div-main-edge-container">
                <div className="div-report-view-container">
                    <header className="header-report-view-container">
                        <h2>Conservation Report</h2>
                        <button>
                            <ion-icon src="/media/icons/icon-file.svg"></ion-icon>
                            <span>Generate Report</span>
                        </button>
                    </header>
                    <Summary />
                    <div className="div-report-view-analytics-container">
                        <SpeciesOverview />
                        <SeasonalHistory />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ReportView;
