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
								<div className="CapabilitySection__image CapabilitySection__image--sphere"></div>
								<div className="CapabilitySection__text">
									<h2>Fleet Technical Support</h2>
									<p>Spectrum Technology Group, Inc. personnel provides Fleet liaison and maintenance coordination for the Submarine Sphere Array (SA) and Large Aperture Bow (LAB) array. We provide this support for the Commander, Submarine Atlantic and Pacific Fleet’s N4 staff, NAVSEA/PEOSUB programmatic offices, Naval Undersea Warfare Centers (NUWC) Newport and Keyport technical communities, Naval Supply Weapons Systems (NAVSUP WSS), Defense Logistics Agency (DLA) supply communities, and all the Major Shipyards. Our services include array maintenance planning, parts procurement, parts tracking, repair execution and post repair testing.</p>
								</div>
							</li>
							<li className="CapabilitySection__listItem">
								<div className="CapabilitySection__image CapabilitySection__image--dryDock"></div>
								<div className="CapabilitySection__text">
									<h2>Fleet Technical Assist</h2>
									<p>Our personnel can also provide on-site support at Naval Bases and Shipyards for Submarine Sphere and LAB Array including, but not limited to signal path troubleshooting, repair execution, and post testing evolutions.</p>
								</div>
							</li>
							<li className="CapabilitySection__listItem">
								<div className="CapabilitySection__image CapabilitySection__image--reclaim"></div>
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