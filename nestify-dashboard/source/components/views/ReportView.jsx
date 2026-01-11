// IMPORTED STYLESHEETS
import "../../assets/css/views/report.css";
// IMPORTED MODULES
import Nav from "../partials/Nav";

const ReportView = function () {
	return (
		<>
			<Nav></Nav>
			<div className="div-main-edge-container">
				<div className="div-report-view-container">
					<header className="header-report-view-container">
						<h2>Conservation Report</h2>
						<button>
							<ion-icon src="/media/icons/icon-file.svg"></ion-icon>
							<span>Generate Report</span>
						</button>
					</header>
					<div className="div-report-view-summary-container">
						<h2>January 2026 Summary</h2>
						<ul className="report-view-summary-list">
							<li className="report-view-summary-list-item">
								<p>38</p>
								<span>Total Sightings</span>
							</li>
							<li className="report-view-summary-list-item">
								<p>32</p>
								<span>Total Species</span>
							</li>
							<li className="report-view-summary-list-item">
								<p>2</p>
								<span>Non-Target Species</span>
							</li>
						</ul>
					</div>
					<div className="div-report-view-analytics-container">
						<div className="div-report-view-species-overview-container">
							<div className="div-report-view-specie-overview-container">
								<header className="header-report-view-specie-overview-container">
									<ion-icon src="/media/icons/icon-check.svg"></ion-icon>
									<h4>Target Species</h4>
								</header>
								<ul className="report-view-specie-overview-list">
									<li className="report-view-specie-overview-list-item">
										<p>American Kestrel:</p>
										<span>22 obs</span>
									</li>
									<li className="report-view-specie-overview-list-item">
										<p>Brown Bat:</p>
										<span>14 obs</span>
									</li>
								</ul>
							</div>
							<div className="div-report-view-specie-overview-container">
								<header className="header-report-view-specie-overview-container">
									<ion-icon src="/media/icons/icon-warning.svg"></ion-icon>
									<h4>Non-Target Species</h4>
								</header>
								<ul className="report-view-specie-overview-list">
									<li className="report-view-specie-overview-list-item">
										<p>Other:</p>
										<span>2 obs</span>
									</li>
								</ul>
							</div>
							<div className="div-report-view-specie-overview-container">
								<header className="header-report-view-specie-overview-container">
									<ion-icon src="/media/icons/icon-bird.svg"></ion-icon>
									<h4>American Kestrel Analysis</h4>
								</header>
								<ul className="report-view-specie-overview-list">
									<li className="report-view-specie-overview-list-item">
										<p>Observations:</p>
										<span>22</span>
									</li>
									<li className="report-view-specie-overview-list-item">
										<p>Active Nesting Sights:</p>
										<span>2</span>
									</li>
									<li className="report-view-specie-overview-list-item">
										<p>Average Occupancy:</p>
										<span>6.2 hrs</span>
									</li>
									<li className="report-view-specie-overview-list-item">
										<p>Peak Time:</p>
										<span>8:00 AM</span>
									</li>
								</ul>
							</div>
							<div className="div-report-view-specie-overview-container">
								<header className="header-report-view-specie-overview-container">
									<ion-icon src="/media/icons/icon-bat.svg"></ion-icon>
									<h4>Brown Bat Analysis</h4>
								</header>
								<ul className="report-view-specie-overview-list">
									<li className="report-view-specie-overview-list-item">
										<p>Observations:</p>
										<span>14</span>
									</li>
									<li className="report-view-specie-overview-list-item">
										<p>Active Nesting Sights:</p>
										<span>1</span>
									</li>
									<li className="report-view-specie-overview-list-item">
										<p>Average Occupancy:</p>
										<span>7.4 hrs</span>
									</li>
									<li className="report-view-specie-overview-list-item">
										<p>Peak Time:</p>
										<span>8:00 AM</span>
									</li>
								</ul>
							</div>
						</div>
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
					</div>
				</div>
			</div>
		</>
	);
};

export default ReportView;
