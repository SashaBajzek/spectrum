import React, { Component } from 'react';
import { Link } from 'react-router';
import NavTab from './NavTab';
import './styles/TeamMembers.scss';

class TeamMembers extends Component {
  render() {
    return (
			<main>
				<div className="main__container">
					<h1>Team Members</h1>
					<p>In order to assure the Government of high-quality performance under the expanded scope of the solicitation, Spectrum Technology has formed a superb team with demonstrated capabilities and demonstrated performance. The three team partners under our proposal bring a variety of technical, engineering, and management strengths and skills to our proposal.</p>
					<div className="navGroup--teamMembers">
						<nav className="teamMembers__nav">
							<ul className="teamMembers__list">
								<NavTab navLink="/ContractVehicles/TeamMembers/Mantech" content="MANTECH SYSTEMS ENGINEERING CORPORATION" />
								<NavTab navLink="/ContractVehicles/TeamMembers/Progeny" content="PROGENY SYSTEMS CORPORATION" />
								<NavTab navLink="/ContractVehicles/TeamMembers/GeneralDynamics" content="GENERAL DYNAMICS INFORMATION TECHNOLOGY" />
							</ul>
						</nav>
					</div>
					{this.props.children}
				</div>
			</main>
    );
  }
}

export default TeamMembers;