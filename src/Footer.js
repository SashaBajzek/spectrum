import React, { Component } from 'react';
import './styles/Footer.scss';
import { Link } from 'react-router';

const items = [
	{
		id: 'about-us',
		navLink: '/about-us',
		content: 'ABOUT SPECTRUM'
	},
	{
		id: 'capabilities',
		navLink: '/capabilities',
		content: 'CAPABILITIES'
	},
	{
		id: 'contact-us',
		navLink: '/contact-us',
		content: 'CONTACT US'
	}
];

class Footer extends Component {

	year = new Date().getFullYear();
	
  render() {
    return (
			<footer className="Footer">
				<div className="Footer__container--dark">
					<nav className="Footer__nav">
						<div className="Footer__column">
							<h3 className="Footer__header">COMPANY DETAILS</h3>
							<ul className="Footer__list">
								{items.map((item, i) => (
								<li key={item.id}>
									<Link to={`${item.navLink}`} className={`Footer__link`} activeClassName={`Footer__link--active`} onClick={this.closeHamburger}><span className={`Footer__underline`}>{item.content}</span></Link>
								</li>
							))}
							 </ul>
						</div>
						<div className="Footer__column">
							<h3 className="Footer__header">EMPLOYEE TOOLS</h3>
							<ul className="Footer__list">
								<li><a href="https://mail.spectrumtechnology.us/owa/auth/logon.aspx?replaceCurrent=1&url=https%3a%2f%2fmail.spectrumtechnology.us%2fowa%2f" className="Footer__link"><span className="Footer__underline">E-MAIL</span></a></li>
								<li><a href="http://www.seaport.navy.mil/" className="Footer__link"><span className="Footer__underline">SEAPORT</span></a></li>
								<li><a href="https://team.spectrumtechnology.us" className="Footer__link"><span className="Footer__underline">SHAREPOINT</span></a></li>
							</ul>
						</div>
						<div className="Footer__column">
							<h2 className="Footer__logo"><Link to="/" className="Footer__link">STG, INC.</Link></h2>
							<div className="Footer__address">
								12 South Summit Avenue<br />
								Suite 210<br />
								Gaithersburg, MD 20877<br />
								(301) 947-4622
							</div>
						</div>
					</nav>
				</div>
				<div className="Footer__copyright">
					<small>&copy; {this.year} Spectrum Technology Group, Inc.</small>		
				</div>
      </footer> 
    );
  }
}

export default Footer;
