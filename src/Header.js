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
					<h1 className="header__logo"><Link to="/spectrum-technology-group/" className="header__home" onClick={this.closeHamburger} >STG, INC.</Link></h1>
					<button onClick={this.toggleHamburger} className={`header__hamburger ${this.getHamburgerClass()}`}></button>
					<nav className="header__nav">
					 <ul className="header__navGroup--main header__list">
						<NavTab classBlock="header-nav-main" navLink="/about-us" content="ABOUT SPECTRUM" toggleHamburger={this.closeHamburger} />
						<NavTab classBlock="header-nav-main" navLink="/capabilities" content="CAPABILITIES" toggleHamburger={this.closeHamburger} />
						<NavTab classBlock="header-nav-main" navLink="/contact-us" content="CONTACT US" toggleHamburger={this.closeHamburger} />
					 </ul>
						<div className="header__navGroup--tools">
							<h2 className="header__heading--tools">EMPLOYEE TOOLS</h2>
						 <ul className="header__list">
							<li className="header-nav-tools__navItem"><a href="https://mail.spectrumtechnology.us/owa/auth/logon.aspx?replaceCurrent=1&url=https%3a%2f%2fmail.spectrumtechnology.us%2fowa%2f" className="header-nav-tools__link"><span className="footer-nav__underline">E-MAIL</span></a></li>
							<li className="header-nav-tools__navItem"><a href="http://www.seaport.navy.mil/" className="header-nav-tools__link"><span className="footer-nav__underline">SEAPORT</span></a></li>
							<li className="header-nav-tools__navItem"><a href="https://team.spectrumtechnology.us" className="header-nav-tools__link"><span className="footer-nav__underline">SHAREPOINT</span></a></li>
						 </ul>
						</div>
					</nav>
				</div>
      </header>
    );
  }
}

export default Header;





