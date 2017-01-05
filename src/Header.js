import React, { Component } from 'react';
import { Link } from 'react-router';
import NavTab from './NavTab';
import './styles/Header.scss';

class Header extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			menuMainOpen: false
		}	
	}
	
	toggleHamburger = () => {
		if (this.state.menuMainOpen) {
			this.setState({
			menuMainOpen: false
			});
		} else {
			this.setState({
			menuMainOpen: true
			});
		}
	}
	
	closeHamburger = () => {
		this.setState({
		menuMainOpen: false
		});
	}
	
	getHamburgerClass () {
			if(this.state.menuMainOpen === true) {
				return "menuOpen";
			} else {
				return "menuClosed";
			}
		}

  render() {
    return (
			<header className={`header ${this.getHamburgerClass()}`}>
				<div className="header__container--dark">
					<h1 className="header__logo"><Link to="/SpectrumTechnologyGroup/" className="header__home" onClick={this.closeHamburger} >STG, INC.</Link></h1>
					<button onClick={this.toggleHamburger} className={`header__hamburger ${this.getHamburgerClass()}`}></button>
					<nav className="header__nav">
					 <ul className="header__navGroup--main header__list">
						<NavTab classBlock="header-nav-main" navLink="/about-us" content="ABOUT SPECTRUM" toggleHamburger={this.closeHamburger} />
			
						<li className="header-nav-main__navItem">
							<Link to="/SpectrumTechnologyGroup/services" activeClassName="header-nav-main__navItem--active triangle__secondaryNav--active header-nav-main__navItem--services-active" className="header-nav-main__link" ><span className="header-nav-main__underline">SERVICES</span></Link>

							{/* Mobile Only Services Menu */}			
								<ul className="services-nav__list--mobile-only">
									<NavTab classBlock="secondary-nav-mobile" navLink="/capabilities" content="CAPABILITIES" toggleHamburger={this.closeHamburger} />
									<NavTab classBlock="secondary-nav-mobile" navLink="/quality-assurance" content="QUALITY ASSURANCE" toggleHamburger={this.closeHamburger} />
								</ul>
			
						</li>
			
						
			
			
			
			
						<li className="header-nav-main__navItem">
							<Link to="/SpectrumTechnologyGroup/contract-vehicles" activeClassName="header-nav-main__navItem--active triangle__secondaryNav--active header-nav-main__navItem--contract-active" className="header-nav-main__link" ><span className="header-nav-main__underline">CONTRACT VEHICLES</span></Link>
			
							{/* Mobile Only Contract Vehicles Menu */}
							<ul className="contract-vehicles-nav__list--mobile-only">
								<NavTab classBlock="secondary-nav-mobile" navLink="/contract-vehicles/contracts" content="CONTRACTS" toggleHamburger={this.closeHamburger} />
								<NavTab classBlock="secondary-nav-mobile" navLink="/contract-vehicles/task-orders" content="TASK ORDERS" toggleHamburger={this.closeHamburger}  />
								<NavTab classBlock="secondary-nav-mobile" navLink="/contract-vehicles/team-members" content="TEAM MEMBERS" toggleHamburger={this.closeHamburger}  />
							</ul>
			
			
						</li>
					 </ul>
					 <ul className="header__navGroup--contact header__list">
						<NavTab classBlock="header-nav-contact" navLink="/contact-us" content="CONTACT US" toggleHamburger={this.closeHamburger} />
						<li className="header-nav-contact__navItem">
							<Link to="/SpectrumTechnologyGroup/tools" activeClassName="header-nav-contact__tools--active header-nav-contact__navItem--active" className="header-nav-contact__link header-nav-contact__link--tools"><span className="header-nav-contact__border" onClick={this.closeHamburger} >TOOLS</span></Link>
						</li>
					 </ul>
					</nav>
				</div>
      </header>
    );
  }
}

export default Header;





