import React, { Component } from 'react';
import { Link } from 'react-router';
import NavTab from './NavTab';
import './styles/SecondaryNav.scss';

class ContractVehicles extends Component {
  render() {
    return (
			<div>
				<div className="secondaryNav__root">
					<nav className="secondaryNav__nav">
						<ul className="secondaryNav__navGroup--main">
							<NavTab navLink="/ContractVehicles/Contracts" content="CONTRACTS" />
							<NavTab navLink="/ContractVehicles/TaskOrders" content="TASK ORDERS" />
							<NavTab navLink="/ContractVehicles/TeamMembers" content="TEAM MEMBERS"/>
						</ul>
					</nav>
				</div>
				{this.props.children}
			</div>
    );
  }
}

export default ContractVehicles;
