// IMPORTED STYLESHEETS
import "../../../../css/partials/views/dashboard/analytics.css";

const Analytics = function () {
    return (
        <div className="div-dashboard-view-analytics-container">
            <div className="div-dashboard-view-analytics-metrics-container">
                <div className="div-dashboard-view-analytics-trends-container">
                    <h2>Occupancy Trends (Last 7 Days)</h2>
                </div>
                <div className="div-dashboard-view-analytics-species-container">
                    <h2>Identified Species</h2>
                    <ul className="dashboard-view-analytics-species-list">
                        <li className="dashboard-view-analytics-species-list-item">
                            <div className="div-dashboard-view-analytics-species-list-item-info-container">
                                <ion-icon src="/media/icons/icon-dot.svg"></ion-icon>
                                <span>American Kestrel</span>
                            </div>
                            <span>Target</span>
                        </li>
                        <li className="dashboard-view-analytics-species-list-item">
                            <div className="div-dashboard-view-analytics-species-list-item-info-container">
                                <ion-icon src="/media/icons/icon-dot.svg"></ion-icon>
                                <span>Brown Bat</span>
                            </div>
                            <span>Target</span>
                        </li>
                        <li className="dashboard-view-analytics-species-list-item">
                            <div className="div-dashboard-view-analytics-species-list-item-info-container">
                                <ion-icon src="/media/icons/icon-dot.svg"></ion-icon>
                                <span>Other</span>
                            </div>
                            <span>Non-Target</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="div-dashboard-view-analytics-pattern-container">
                <header className="header-dashboard-view-analytics-pattern-container">
                    <h2>Daily Activity Pattern</h2>
                    <p>Peak activity hours for each detected species.</p>
                </header>
            </div>
        </div>
    );
};

export default Analytics;
