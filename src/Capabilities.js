import React, { Component } from 'react';
import CapabilitiesBox from './CapabilitiesBox';
import './styles/Capabilities.scss';

class Capabilities extends Component {
  render() {
    return (
			<main className="capabilities">
				<div className="main__container">
					<h1 className="capabilities__heading">CAPABILITIES:</h1>
					<ul className="capabilities__list">
						<CapabilitiesBox heading="Program Management" backgroundImg="VirginiaClassApproaching" description="Short description of our capabilities and what we excel at doing.  Keeping it short and to the point or I can set these boxes up bigger." />
						<CapabilitiesBox heading="Mechanical Engineering and Design" backgroundImg="CanadianVictoriaClassSubmarine" description="Keep in mind that two lined titles have less space.  Keeping it short and to the point or I can set these boxes up bigger." />
						<CapabilitiesBox heading="Modeling and Simulation" backgroundImg="seawolfUnderway" description="Short description of our capabilities and what we excel at doing.  Keeping it short and to the point or I can set these boxes up bigger." />
						<CapabilitiesBox heading="Research, Development, Test and Evaluation" backgroundImg="VirginiaClassUnderway" description="Keep in mind that two lined titles have less space.  Keeping it short and to the point or I can set these boxes up bigger." />
						<CapabilitiesBox heading="Fleet Support" backgroundImg="VirginiaClassApproaching" description="Short description of our capabilities and what we excel at doing.  Keeping it short and to the point or I can set these boxes up bigger." />
						<CapabilitiesBox heading="Network Engineering" backgroundImg="CanadianVictoriaClassSubmarine" description="Short description of our capabilities and what we excel at doing.  Keeping it short and to the point or I can set these boxes up bigger." />
						<CapabilitiesBox heading="Acoustical Engineering" backgroundImg="seawolfUnderway" description="Short description of our capabilities and what we excel at doing.  Keeping it short and to the point or I can set these boxes up bigger." />
						<CapabilitiesBox heading="Technology Assessment" backgroundImg="VirginiaClassUnderway" description="Short description of our capabilities and what we excel at doing.  Keeping it short and to the point or I can set these boxes up bigger." />
						<CapabilitiesBox heading="Information Assurance" backgroundImg="VirginiaClassApproaching" description="Short description of our capabilities and what we excel at doing.  Keeping it short and to the point or I can set these boxes up bigger." />
						<CapabilitiesBox heading="System Design Documentation" backgroundImg="CanadianVictoriaClassSubmarine" description="Keep in mind that two lined titles have less space.  Keeping it short and to the point or I can set these boxes up bigger." />
						<CapabilitiesBox heading="Technical Data Support" backgroundImg="seawolfUnderway" description="Hire us to do awesome work" />	
						<CapabilitiesBox heading="Software Development" backgroundImg="VirginiaClassUnderway" description="Hire us to do awesome work" />
						<CapabilitiesBox heading="Database Management" backgroundImg="VirginiaClassApproaching" description="Hire us to do awesome work" />
					</ul>
					<h1 className="capabilities__heading">RESEARCH</h1>
						<p className="capabilities__section">
							Spectrum Technology Group, Inc. works closely with the Navy research and development efforts and as such has high quality research resources at its disposal as well as the knowledge and experience to back up those resources with a solid grounding in many areas of the sciences and engineering. Before any project can begin the background information is researched and explored to get a better understanding of what advancements have been made in the area of the project and what is needed to make the product work with the best results. Research is a very important part of the development process because it allows for the exploration into proven results and concepts as well as the discovery of new methods of solving problems that may have never been tried before. The in depth research in to new solutions to problems at Spectrum Technology allows for the innovative solutions, that we deliver every day.
						</p>
					<h1 className="capabilities__heading">SUPPORT</h1>
						<p className="capabilities__section">
							Spectrum Technology provides acoustical engineering support and test and evaluation services, primarily at present to the Signatures Department of the Naval Surface Warfare Center Carderock Division (NSWCCD) of the Naval Sea Systems Command (NAVSEA). Our efforts in these areas provide for evaluation of Signature components and Stealth features of naval vessels (foreign and domestic), including innovative conceptual ideas appropriate to development of new technologies and improvement to existing technologies.
						</p>
				</div>
			</main>
    );
  }
}

export default Capabilities;
