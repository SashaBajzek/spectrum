import React, { Component } from 'react';
import './style.scss';
import { Link } from 'react-router';
import NavTab from './NavTab';

class Footer extends Component {
  render() {
    return (
			<div className="container--dark">
				<footer>
					<div>
						<h3>COMPANY DETAILS</h3>
						<ul className="navGroup--main">
							<NavTab navLink="/AboutUs" content="ABOUT SPECTRUM" />
							<NavTab navLink="/Capabilities" content="CAPABILITIES" />
							<NavTab navLink="/QualityAssurance" content="QUALITY ASSURANCE" />
							<NavTab navLink="/ContactUs" content="CONTACT US" />
						 </ul>
					</div>
					<div>
						<h3>CONTRACT VEHICLE</h3>
						<ul className="navGroup--contract">
							<NavTab navLink="/ContractVehicles/Contracts" content="CONTRACTS" />
							<NavTab navLink="/ContractVehicles/TaskOrders" content="TASK ORDERS" />
							<NavTab navLink="/ContractVehicles/TeamMembers" content="TEAM MEMBERS" />
						</ul>
					</div>
					<div>
						<h3>EMPLOYEE TOOLS</h3>
						<ul className="navGroup--contact">
							<li><a href="https://mail.spectrumtechnology.us/owa/auth/logon.aspx?replaceCurrent=1&url=https%3a%2f%2fmail.spectrumtechnology.us%2fowa%2f"><span>E-MAIL</span></a></li>
							<li><a href="http://www.seaport.navy.mil/" ><span>SEAPORT</span></a></li>
							<li><a href="https://team.spectrumtechnology.us" ><span>SHAREPOINT</span></a></li>
						</ul>
					</div>
					<div>
						<h1><Link to="/">STG, INC.</Link></h1>
						<address>
							12 South Summit Avenue<br />
							Suite 210<br />
							Gaithersburg, MD 20877<br />
							(301) 947-4622
						</address>
					</div>
				</footer>
				<div className="copyright">
					<p>© Spectrum Technology Group, Inc.</p>		
				</div>
      </div> 
    );
  }
}

export default Footer;
