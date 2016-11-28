import React, { Component } from 'react';
import './style.scss';
import { Link } from 'react-router';
import NavTab from './NavTab';

class ContractVehicles extends Component {
  render() {
    return (
			<div>
				<div className="navGroup--contractVehicles">
					<nav>
						<ul>
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
