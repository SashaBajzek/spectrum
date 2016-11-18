import React, { Component } from 'react';
import './style.scss';
import { Link } from 'react-router';
import { NavTabContainer } from './NavTabContainer';

class Header extends Component {
	
  render() {
    return (
			<div className="container--dark">
				<header>
					<h1><Link to="/">STG, INC.</Link></h1>
					<nav>
					 <ul className="navGroup--main">
						<NavTabContainer navLink="/AboutUs" id="about"  content="About Spectrum" />
						<NavTabContainer navLink="/Capabilities" id="capabilities" content="CAPABILITIES" />
						<NavTabContainer navLink="/ContractVehicles" id="contractVehicle" content="CONTRACT VEHICLE" />
						<NavTabContainer navLink="/QualityAssurance" id="QA" content="QUALITY ASSURANCE" />
					 </ul>
					 <ul className="navGroup--contact">
						<NavTabContainer navLink="/ContactUs" id="contact"  content="CONTACT US" />
						<li><a href="https://mail.spectrumtechnology.us/owa/auth/logon.aspx?replaceCurrent=1&url=https%3a%2f%2fmail.spectrumtechnology.us%2fowa%2f" id="email"><span>E-MAIL</span></a></li>
						<li><a href="http://www.seaport.navy.mil/" id="seaport"><span>SEAPORT</span></a></li>
						<li><a href="https://team.spectrumtechnology.us" id="sharepoint" ><span>SHAREPOINT</span></a></li>
					 </ul>
					</nav>
				</header>
      </div>
    );
  }
}

export default Header;



/*
import React, { Component } from 'react';
import './style.scss';
import { Link } from 'react-router';
import NavTabContainer from './NavTabContainer';

class Header extends Component {
	
  render() {
    return (
			<div className="container--dark">
				<header>
					<h1><Link to="/">STG, INC.</Link></h1>
					<nav>
					 <ul className="navGroup--main">
						<NavTabContainer navLink="/AboutUs" id="about" isActiveQuestion={this.isActive("about")} setActiveTabNow={this.setActiveTab("about")} content="About Spectrum" />
						<NavTabContainer navLink="/Capabilities" id="capabilities" isActiveQuestion={this.isActive(this.id)}  content="CAPABILITIES" />
						<NavTabContainer navLink="/ContractVehicles" id="contractVehicle" isActiveQuestion={this.isActive(this.id)}  content="CONTRACT VEHICLE" />
						<NavTabContainer navLink="/QualityAssurance" id="QA" content="QUALITY ASSURANCE" />
					 </ul>
					 <ul className="navGroup--contact">
						<NavTabContainer navLink="/ContactUs" id="contact" isActiveQuestion={this.isActive(this.id)} content="CONTACT US" />
						<li><a href="https://mail.spectrumtechnology.us/owa/auth/logon.aspx?replaceCurrent=1&url=https%3a%2f%2fmail.spectrumtechnology.us%2fowa%2f" id="email"><span>E-MAIL</span></a></li>
						<li><a href="http://www.seaport.navy.mil/" id="seaport"><span>SEAPORT</span></a></li>
						<li><a href="https://team.spectrumtechnology.us" id="sharepoint" ><span>SHAREPOINT</span></a></li>
					 </ul>
					</nav>
				</header>
      </div>
    );
  }
}

export default Header;
*/