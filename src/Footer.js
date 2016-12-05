import React, { Component } from 'react';
import './styles/Footer.scss';
import { Link } from 'react-router';
import NavTab from './NavTab';

class Footer extends Component {
  render() {
    return (
			<div className="footer__container--dark">
				<footer className="footer__root">
					<div className="footer__column">
						<h3 className="column__header">COMPANY DETAILS</h3>
						<ul className="footer__list">
							<NavTab navLink="/AboutUs" content="ABOUT SPECTRUM" />
							<NavTab navLink="/Capabilities" content="CAPABILITIES" />
							<NavTab navLink="/QualityAssurance" content="QUALITY ASSURANCE" />
							<NavTab navLink="/ContactUs" content="CONTACT US" />
						 </ul>
					</div>
					<div className="footer__column">
						<h3 className="column__header">CONTRACT VEHICLE</h3>
						<ul className="footer__list">
							<NavTab navLink="/ContractVehicles/Contracts" content="CONTRACTS" />
							<NavTab navLink="/ContractVehicles/TaskOrders" content="TASK ORDERS" />
							<NavTab navLink="/ContractVehicles/TeamMembers" content="TEAM MEMBERS" />
						</ul>
					</div>
					<div className="footer__column">
						<h3 className="column__header">EMPLOYEE TOOLS</h3>
						<ul className="footer__list">
							<li><a href="https://mail.spectrumtechnology.us/owa/auth/logon.aspx?replaceCurrent=1&url=https%3a%2f%2fmail.spectrumtechnology.us%2fowa%2f" className="navItem__link"><span className="navItem__underline">E-MAIL</span></a></li>
							<li><a href="http://www.seaport.navy.mil/" className="navItem__link"><span className="navItem__underline">SEAPORT</span></a></li>
							<li><a href="https://team.spectrumtechnology.us" className="navItem__link"><span className="navItem__underline">SHAREPOINT</span></a></li>
						</ul>
					</div>
					<div className="footer__column">
						<h1 className="footer__logo"><Link to="/" className="navItem__link">STG, INC.</Link></h1>
						<address className="footer__address">
							12 South Summit Avenue<br />
							Suite 210<br />
							Gaithersburg, MD 20877<br />
							(301) 947-4622
						</address>
					</div>
				</footer>
				<div className="footer__copyright">
					<p>© Spectrum Technology Group, Inc.</p>		
				</div>
      </div> 
    );
  }
}

export default Footer;
