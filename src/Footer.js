import React, { Component } from 'react';
import './styles/Footer.scss';
import { Link } from 'react-router';
import NavTab from './NavTab';

class Footer extends Component {

	year = new Date().getFullYear();
	
  render() {
    return (
			<footer className="footer">
				<div className="footer__container--dark">
					<nav className="footer__nav">
						<div className="footer__column">
							<h3 className="column__header">COMPANY DETAILS</h3>
							<ul className="footer__list">
								<NavTab classBlock="footer-nav" navLink="/about-us" content="ABOUT SPECTRUM" />
								<NavTab classBlock="footer-nav" navLink="/capabilities" content="CAPABILITIES" />
								<NavTab classBlock="footer-nav" navLink="/quality-assurance" content="QUALITY ASSURANCE" />
								<NavTab classBlock="footer-nav" navLink="/contact-us" content="CONTACT US" />
							 </ul>
						</div>
						<div className="footer__column">
							<h3 className="column__header">CONTRACT VEHICLE</h3>
							<ul className="footer__list">
								<NavTab classBlock="footer-nav" navLink="/contract-vehicles/contracts" content="CONTRACTS" />
								<NavTab classBlock="footer-nav" navLink="/contract-vehicles/task-orders" content="TASK ORDERS" />
								<NavTab classBlock="footer-nav" navLink="/contract-vehicles/team-members" content="TEAM MEMBERS" />
							</ul>
						</div>
						<div className="footer__column">
							<h3 className="column__header">EMPLOYEE TOOLS</h3>
							<ul className="footer__list">
								<li><a href="https://mail.spectrumtechnology.us/owa/auth/logon.aspx?replaceCurrent=1&url=https%3a%2f%2fmail.spectrumtechnology.us%2fowa%2f" className="footer-nav__link"><span className="footer-nav__underline">E-MAIL</span></a></li>
								<li><a href="http://www.seaport.navy.mil/" className="footer-nav__link"><span className="footer-nav__underline">SEAPORT</span></a></li>
								<li><a href="https://team.spectrumtechnology.us" className="footer-nav__link"><span className="footer-nav__underline">SHAREPOINT</span></a></li>
							</ul>
						</div>
						<div className="footer__column">
							<h2 className="footer__logo"><Link to="/SpectrumTechnologyGroup/" className="footer-nav__link">STG, INC.</Link></h2>
							<div className="footer__address">
								12 South Summit Avenue<br />
								Suite 210<br />
								Gaithersburg, MD 20877<br />
								(301) 947-4622
							</div>
						</div>
					</nav>
				</div>
				<div className="footer__copyright">
					<small>&copy; {this.year} Spectrum Technology Group, Inc.</small>		
				</div>
      </footer> 
    );
  }
}

export default Footer;
