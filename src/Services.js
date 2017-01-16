import React, { Component } from 'react';
import { Link } from 'react-router';
import NavTab from './NavTab';
import './styles/SecondaryNav.scss';
import './styles/Services.scss';

class Services extends Component {
  render() {
    return (
			<div className="services">
				<div className="secondaryNav">
					<nav className="secondaryNav__nav">
						<ul className="secondaryNav__navGroup--main">
							<NavTab classBlock="secondary-nav" navLink="/capabilities" content="CAPABILITIES" />
							<NavTab classBlock="secondary-nav" navLink="/quality-assurance" content="QUALITY ASSURANCE" />
						</ul>
					</nav>
				</div>
				{this.props.children}
			</div>
    );
  }
}

export default Services;