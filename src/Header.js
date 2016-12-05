import React, { Component } from 'react';
import { Link } from 'react-router';
import NavTab from './NavTab';
import './styles/Header.scss';

class Header extends Component {

  render() {
    return (
			<div className="header__container--dark">
				<header className="header__root">
					<h1 className="header__logo"><Link to="/" className="navItem__link">STG, INC.</Link></h1>
					<nav className="header__nav">
					 <ul className="header__navGroup--main header__list">
						<NavTab navLink="/AboutUs" content="ABOUT SPECTRUM" />
						<NavTab navLink="/Capabilities" content="CAPABILITIES" />
						<li>
							<Link to="/ContractVehicles" activeClassName="navItem--active triangle__secondaryNav--active" className="navItem__link"><span className="navItem__underline">CONTRACT VEHICLES</span></Link>
						</li>
						<NavTab navLink="/QualityAssurance" content="QUALITY ASSURANCE" />
					 </ul>
					 <ul className="header__navGroup--contact header__list">
						<NavTab navLink="/ContactUs" content="CONTACT US" />
						<li>
							<Link to="/Tools" activeClassName=" navItem__tools--active navItem--active" className="navItem__link navItem__link--tools"><span className="navItem__border">TOOLS</span></Link>
						</li>
					 </ul>
					</nav>
				</header>
      </div>
    );
  }
}

export default Header;

