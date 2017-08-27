import React, { Component } from 'react';
import './styles/Acoustics.scss';

class Acoustics extends Component {
  render() {
    return (
			<main className="CapabilitySection">
				<div className="CapabilitySection__container">
					<h1 className="CapabilitySection__heading">ACOUSTICS</h1>
					<div className="CapabilitySection__content">
						<ul className="CapabilitySection__list">
							<li className="CapabilitySection__listItem">
								<div className="CapabilitySection__image Acoustics__rig"></div>
								<div className="CapabilitySection__text">
									<h2>SUBMARINE ACOUSTICS</h2>
									<p>Since Spectrum Technology Group, Inc’s inception in 1999, submarine acoustics research, development, testing, and evaluation has been a core competency of the company. We have supported the Submarine Acoustic Signatures Maintenance Program (SASMP) for current submarine platforms and new-construction acoustic trials on the USS Virginia (SSN 774) Class submarines. We specialize in the various data acquisition disciplines required to build and maintain the total-ship operational effectiveness that the US Navy’s “silent-service” is known for. These include radiated-noise measurements, platform-noise monitoring, hull and vibration analyses, and assessments that seek to maximize own-ship sensors detection capabilities and to minimize susceptibility to potential threat platforms and sensors for Fleet assets.</p>
								</div>
							</li>
							<li className="CapabilitySection__listItem">
								<div className="CapabilitySection__image Acoustics__sonar"></div>
								<div className="CapabilitySection__text">
									<h2>TOWED ARRAY TEST EQUIPMENT</h2>
									<p>We are extensively involved with towed array test equipment sustainment and modernization. These efforts support diverse performance evaluation requirements for current and new portable acoustic processing systems and any unique measurements that are required on a case wise basis. We help to develop, operate, maintain, and modernize multiple towed array equipment configurations in order to provide consistent functionality for the Navy platforms on which they are deployed.</p>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</main>
    );
  }
}

export default Acoustics;