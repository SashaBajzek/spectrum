import React, { Component } from 'react';
import './styles/CapabilitySection.scss';

class Energy extends Component {
  render() {
    return (
			<main className="CapabilitySection">
				<div className="CapabilitySection__container">
					<h1 className="CapabilitySection__heading">ENERGY RESEARCH</h1>
					<div className="CapabilitySection__content">
						<ul className="CapabilitySection__list">
							<li className="CapabilitySection__listItem">
								<div className="CapabilitySection__image CapabilitySection__image--fuelCell"></div>
								<div className="CapabilitySection__text">
									<h2>Energy Storage Technology Research and Development</h2>
									<p>Spectrum Technology Group, Inc. has a team of dedicated individuals providing technical and research support for the Naval Surface Warfare Center Carderock Division (NSWCCD) Advanced Power and Energy Branch (APEB). With the latest trends in ship design and power utilization and distribution needs shipboard energy storage is become more critical than ever before. Our team works on developing novel means for energy storage using traditional electrochemical batteries, power cells, and lithium ion in independent and hybrid power generation schemes for surface ships, facilities, and even man portable versions for deployment alongside marine expeditionary units.</p>
								</div>
							</li>
							<li className="CapabilitySection__listItem">
								<div className="CapabilitySection__image CapabilitySection__image--turbine"></div>
								<div className="CapabilitySection__text">
									<h2>Alternative Energy Research and Development</h2>
									<p>Another trend that is driving the Navy’s energy research is the shift from single sources of power derived from fossil fuels to a more diverse and distributed system utilizing a variety of alternative energy sources. Our personnel provide research and development support for a wide range of alternative energy programs including solar photovoltaic, wind, and wave power generation and the distribution systems for both ship and shore architectures.</p>
								</div>
							</li>
							<li className="CapabilitySection__listItem">
								<div className="CapabilitySection__image CapabilitySection__image--Liion"></div>
								<div className="CapabilitySection__text">
									<h2>Testing Automation and Failure Investigations</h2>
									<p>We have talented people working on providing testing automation to accurately and repeatable assess the hazards and potentials associated with various energy storage technologies. They provide direct support for the U.S. Navy’s Lithium Battery Safety Program and similar programs to identify risks and perform failure investigations when experiments and active systems suffer breakdowns.</p>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</main>
    );
  }
}

export default Energy;