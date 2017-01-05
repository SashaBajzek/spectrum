import React, { Component } from 'react';
import SimpleMap from './GoogleMap';

class TeamMemberGenDynamics extends Component {
  render() {
    return (	
			<div className="teamMember teamMember--GenDynamics">
				<div className="teamMember__main">
					<h2>GENERAL DYNAMICS INFORMATION TECHNOLOGY</h2>
					<div className="googleMap teamMember__googleMap">
						<SimpleMap lat={38.873572} lng={-77.312699} />
					</div>
					<h3>Address</h3>
					<div className="teamMember__address">
						3211 Jermantown Road<br />
						Fairfax, VA 22030
					</div>
					<h3>Existing SeaPort-e Prime?</h3>
					<p>Yes</p>
					<h3>CAGE Code</h3>
					<p>07MU1</p>
					<h3>EPOC:</h3>
					<p>Heather Valiga</p>
					<p>(301) 227-1100</p>
					<h3>Alternate EPOC:</h3>
					<p>John Kelly</p>
					<p>(301) 227-4138</p>
					<h3>Business Ownership</h3>
					<p>LB - Large Business</p>
					<h3>Tasking</h3>
					<p>Contractors Progress Report, Technical Reports, Test Plans, System Safety Hazard Analysis, Presentation Material, Still Photos, Video Presentations, Manuals/Brochures, Inventory Reports, Log Books, Schedules, Drawings, data packages, signature trial and test documentation results, prepare and deliver illustrated oral presentations summarizing the results.</p>
					<h3>Functional Area(s)</h3>
					<p>Provide scientific, engineering, and technical management services in support of ship signatures, signature measurement technology and advanced technology programs. There are 17 Signature-related Task Areas, primarily Systems Engineering: Planning Support; analytical support; engineering, analysis and documentation; logistic technical data documentation; system test and evaluation; program planning management support and analysis; support facility planning; data system analysis; technology base R&D support; technical program management; signature control system design & development; signature trial support; signature data analysis; monitoring systems; signature system model development; signature measurement system development; MIS development and IT support.</p>
					<h3>Past Performance</h3>
					<p>Please see: General Dynamics Seaport-E</p>
				</div>
			</div>
    );
  }
}

export default TeamMemberGenDynamics;