import React, { Component } from 'react';
import SimpleMap from './GoogleMap';

class TeamMemberMantech extends Component {
  render() {
    return (	
			<div className="teamMember teamMember--ManTech">
				<div className="teamMember__main">
					<h2>MANTECH SYSTEMS ENGINEERING CORPORATION</h2>
					<div className="googleMap teamMember__googleMap">
						<SimpleMap lat={38.279819} lng={-76.465448} />
					</div>
					<h3>Address</h3>
					<div className="teamMember__address">
						46610 Expedition Drive<br />
						Suite 101<br />
						Lexington Park, MD 20653-2112
					</div>
					<h3>Existing SeaPort-e Prime?</h3>
					<p>Yes</p>
					<h3>CAGE Code</h3>
					<p>2U954</p>
					<h3>DUNS</h3>
					<p>17-424-5993</p>
					<h3>EPOC:</h3>
					<p>Mary Pat Pope</p>
					<p>301-862-7415</p>
					<p>Marypat.pope@mantech.com</p>
					<h3>Alternate EPOC:</h3>
					<p>Mary Kreul</p>
					<p>301-862-7331</p>
					<p>mary.kreul@mantech.com</p>
					<h3>Business Ownership</h3>
					<p>Large Business</p>
					<h3>Business Size</h3>
					<p>#14</p>
					<h3>Technical Capability</h3>
					<p>ManTech provides C4I engineering and technical services for multiple DoD initiatives managed by Space and Naval Warfare Systems Command (SPAWAR) PMW-157 and SPAWAR Systems Center Charleston (SSCC) Code 61; technical and engineering support and design, development, integration, test and evaluation (T&E), installation, fielding, certification, maintenance, and logistics to Combat Identification and other Air Traffic Control systems; Reliability and Maintainability (R&M) and System Safety testing as part of large T&E programs; and comprehensive support for the Acoustics and Acoustic Technology Program, which consists of a wide range of technical components including Trials Planning, Radiated Noise, Platform Noise, Sonar Self-Noise, Structureborne Noise, Vulnerability Assessment, Sensor and Processing Systems, and Target Strength and their required capability to perform at-sea, acoustic-sensitive missions.</p>
					<h3>Tasking</h3>
					<p>ManTech Systems Engineering Corporation (ManTech) has the experience, capability, and employee base to cover nearly all tasking in all Zones. Our experience with Department of Defense (DoD) and other Governmental contracts extends back to 1968 and includes work with SPAWAR, NAVAIR, NAVSEA, the U.S. Army, the Marines, the Coast Guard, the Air Force, the Department of State, the Department of Justice, the Internal Revenue Service, and several other Federal, state, and local customers. Our personnel are subject matter experts in the areas of ships and ships systems; Force Level, littoral, surface ship, and undersea warfare and combat systems; ordnance; homeland security; and surface warfare logistics and maintenance. In short, ManTech brings high quality and low risk to support today's warfighter from ordering, storing, monitoring, and delivering materials to researching, developing, installing/implementing, testing, and evaluating software and hardware for large, complex C4I and ships combat systems within the United States and around the world.</p>
					<h3>Functional Area(s)</h3>
					<p>3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8, 3.9, 3.10, 3.11, 3.12, 3.14, 3.15, 3.16, 3.17, 3.18, 3.19, 3.20, 3.21</p>
					<h3>Past Performance</h3>
					<p>N65236-03-D-6829, SPAWAR Systems Center Charleston, Martiza Perez-perez, 843-218-4953</p>
					<p>N00421-04-C-0043, Naval Air Warfare Center Aircraft Division (NAWCAD), St. Inigoes, Greg Penk, 301-995-8212</p>
					<p>N00421-04-C-0096, Reliability & Maintainability (R&M) Division, NAWCAD, Pete Babuchiwski, 301-342-1245</p>
					<p>N00178-04-D-4080/FD01, Naval Surface Warfare Center, Carderock Division, Lisa O'Neill, 301-227-4903</p>
				</div>
			</div>
    );
  }
}

export default TeamMemberMantech;