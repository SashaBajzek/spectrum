import React, { Component } from 'react';
import { Link } from 'react-router';
import NavTab from './NavTab';
import './styles/SecondaryNav.scss';
import './styles/ContractVehicles.scss';

class ContractVehicles extends Component {
  render() {
    return (
			<div className="contractVehicles">
				<div className="secondaryNav">
					<nav className="secondaryNav__nav">
						<ul className="secondaryNav__navGroup--main">
							<NavTab classBlock="secondary-nav" navLink="/contract-vehicles/contracts" content="CONTRACTS" />
							<NavTab classBlock="secondary-nav" navLink="/contract-vehicles/task-orders" content="TASK ORDERS" />
							<NavTab classBlock="secondary-nav" navLink="/contract-vehicles/team-members" content="TEAM MEMBERS"/>
						</ul>
					</nav>
				</div>
				{this.props.children}
			</div>
    );
  }
}

export default ContractVehicles;
