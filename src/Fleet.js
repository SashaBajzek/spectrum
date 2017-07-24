import React, { Component } from 'react';
import './styles/CapabilitySection.scss';

class Fleet extends Component {
  render() {
    return (
			<main className="CapabilitySection">
				<div className="CapabilitySection__container">
					<h1 className="CapabilitySection__heading">FLEET TECHNICAL SERVICES</h1>
					<div className="CapabilitySection__content">
						<ul className="CapabilitySection__list">
							<li className="CapabilitySection__listItem">
								<div className="CapabilitySection__text">
									<h2>Fleet Technical Support</h2>
									<p>Spectrum Technology Group, Inc. personnel provides fleet liaison and maintenance coordination support to the Commander, Submarine Atlantic and Pacific fleets N4 staff, NAVSEA/PEOSUB programmatic offices, Naval Undersea Warfare Centers (NUWC) Newport and Keyport technical communities, Naval Supply Weapons Systems (NAVSUP WSS) and Defense Logistics Agency (DLA) supply communities and all the Major Shipyards with regards to Submarine Sphere Array (SA) and Large Aperture Bow (LAB) array maintenance planning, parts procurement, parts tracking, repair execution and post repair testing.</p>
								</div>
							</li>
							<li className="CapabilitySection__listItem">
								<div className="CapabilitySection__text">
									<h2>Fleet Technical Assist</h2>
									<p>Our personnel also provide on-site support at the Naval Bases or Shipyards for Submarine Sphere or LAB Array and/or signal path troubleshooting, repair execution and post testing evolutions.</p>
								</div>
							</li>
							<li className="CapabilitySection__listItem">
								<div className="CapabilitySection__text">
									<h2>Fleet Reclamation Efforts</h2>
									<p>As part of our mission to provide added value to the government and taxpayer, Spectrum personnel provide hardware reclamation services for deactivated submarines. These services include the removal and pre-screening of hull sensor systems for refurbishment efforts as well as the shipment of the hull sensor assets to the refurbishment sites and storage locations and the associated inventory management of those assets.</p>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</main>
    );
  }
}

export default Fleet;