import React, { Component } from 'react';
import './styles/Materials.scss';

class Engineering extends Component {
  render() {
    return (
			<main className="CapabilitySection">
				<div className="CapabilitySection__container">
					<h1 className="CapabilitySection__heading">MARINE MATERIALS</h1>
					<div className="CapabilitySection__content">
						<ul className="CapabilitySection__list">
							<li className="CapabilitySection__listItem">
								<div className="CapabilitySection__image CapabilitySection__image--marine"></div>
								<div className="CapabilitySection__text">
									<p>Spectrum Technology Group, Inc. provides scientific, technical, programmatic, and engineering services in the development, test, and evaluation of marine materials for submarines, unmanned underwater vehicles, surface ships, and weapons systems. Our emphasis is on meeting Navy requirements for advanced applications, providing more cost-effective solutions, and improving material selection processes. Multiple program areas are involved, including electrochemical power sources, magneto restrictive alloys and composites, and non-metallic materials such as signature coatings to assess suitability for use in naval environments. We also provide scientific services in analyzing data from mechanical testing and performance of metal alloys in applied magnetic fields.</p>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</main>
    );
  }
}

export default Engineering;