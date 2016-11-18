import React, { Component } from 'react';
import './style.scss';
import { Link } from 'react-router';
import NavTab from './NavTab';

class Header extends Component {
	
  render() {
    return (
			<div className="container--dark">
				<header>
					<h1><Link to="/">STG, INC.</Link></h1>
					<nav>
					 <ul className="navGroup--main">
						<NavTab navLink="/AboutUs" content="About Spectrum" />
						<NavTab navLink="/Capabilities" content="CAPABILITIES" />
						<NavTab navLink="/ContractVehicles" content="CONTRACT VEHICLE" />
						<NavTab navLink="/QualityAssurance" content="QUALITY ASSURANCE" />
					 </ul>
					 <ul className="navGroup--contact">
						<NavTab navLink="/ContactUs" content="CONTACT US" />
						<li><a href="https://mail.spectrumtechnology.us/owa/auth/logon.aspx?replaceCurrent=1&url=https%3a%2f%2fmail.spectrumtechnology.us%2fowa%2f"><span>E-MAIL</span></a></li>
						<li><a href="http://www.seaport.navy.mil/" ><span>SEAPORT</span></a></li>
						<li><a href="https://team.spectrumtechnology.us" ><span>SHAREPOINT</span></a></li>
					 </ul>
					</nav>
				</header>
      </div>
    );
  }
}

export default Header;

