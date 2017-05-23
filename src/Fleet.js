import React, { Component } from 'react';
import './styles/Fleet.scss';

class Fleet extends Component {
  render() {
    return (
			<main className="fleet">
				<div className="fleet__container">
					<h1>FLEET TECHNICAL</h1>
					<div className="fleet__heroImg"></div>
					<div className="fleet__content">
						<p className="fleet__summary">Text summarizing the overall capabilities</p>
						<ul>
							<li className="fleet__listItem">
								<h2>Sphere Array Health</h2>
								<p>Show chart</p>
							</li>
							<li className="fleet__listItem">
								<h2>Testing and Troubleshooting</h2>
								<p>Show chart</p>
							</li>
							<li className="fleet__listItem">
								<h2>LCCA Ship Alts</h2>
								<p>Show chart</p>
							</li>
							<li className="fleet__listItem">
								<h2>Sensor Reclamation</h2>
								<p>Show chart</p>
							</li>
							<li className="fleet__listItem">
								<h2>Towed Array Support</h2>
								<p>Show chart</p>
							</li>
						</ul>
					</div>
				</div>
			</main>
    );
  }
}

export default Fleet;