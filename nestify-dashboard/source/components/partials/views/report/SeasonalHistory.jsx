// IMPORTED STYLESHEETS
import "../../../../assets/css/partials/views/report/seasonal-history.css";

const SeasonalHistory = function () {
	return (
		<div className="div-report-view-seasonal-history-container">
			<h4>Seasonal History Patterns</h4>
			<div className="div-report-view-seasonal-history-chart-overview-container">
				<ul className="report-view-seasonal-history-chart-legend-list">
					<li className="report-view-seasonal-history-chart-legend-list-item">
						<ion-icon src="/media/icons/icon-dot.svg"></ion-icon>
						<span>American Kestrel</span>
					</li>
					<li className="report-view-seasonal-history-chart-legend-list-item">
						<ion-icon src="/media/icons/icon-dot.svg"></ion-icon>
						<span>Brown Bat</span>
					</li>
					<li className="report-view-seasonal-history-chart-legend-list-item">
						<ion-icon src="/media/icons/icon-dot.svg"></ion-icon>
						<span>Total</span>
					</li>
				</ul>
				<div className="div-report-view-seasonal-history-chart-container"></div>
			</div>
		</div>
	);
};

export default SeasonalHistory;
