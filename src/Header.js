import React, { Component } from 'react';
import { Link } from 'react-router';
import './styles/Header.scss';


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


class Header extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			menuOpen: false
		}	
	}
	
	toggleHamburger = () => {
		this.setState({
		menuOpen: !this.state.menuOpen
		});
	}
	
	getHamburgerClass () {
			if(this.state.menuOpen) {
				return "menuOpen";
			} else {
				return "menuClosed";
			}
		}

  render() {
    return (
			<header className={`Header ${this.getHamburgerClass()}`}>
				<div className="Header__container--dark">
					<h1 className="Header__logo"><Link to="/" className="Header__heading" onClick={this.toggleHamburger} >STG, INC.</Link></h1>
					<button onClick={this.toggleHamburger} className={`Header__hamburger Header__hamburger--${this.getHamburgerClass()}`}></button>
					<nav className={`Header__nav Header__nav--${this.getHamburgerClass()}`}>
					 <ul className="Header-nav-main">
						{items.map((item, i) => (
							<li className={`Header-nav-main__navItem`} key={item.id}>
								<Link to={`${item.navLink}`} className="Header-nav-main__link" activeClassName="Header-nav-main__navItem--active" onClick={this.toggleHamburger}><span className="Header-nav-main__underline">{item.content}</span></Link>
							</li>
						))}
					 </ul>
						<div className="Header-nav-tools">
							<h2 className="Header-nav-tools__heading">EMPLOYEE TOOLS</h2>
							 <ul className="Header-nav-tools__list">
								<li><a href="https://mail.spectrumtechnology.us/owa/auth/logon.aspx?replaceCurrent=1&url=https%3a%2f%2fmail.spectrumtechnology.us%2fowa%2f" className="Header-nav-tools__link"><span className="Header-nav-tools__underline">E-MAIL</span></a></li>
								<li><a href="http://www.seaport.navy.mil/" className="Header-nav-tools__link"><span className="Header-nav-tools__underline">SEAPORT</span></a></li>
								<li><a href="https://team.spectrumtechnology.us" className="Header-nav-tools__link"><span className="Header-nav-tools__underline">SHAREPOINT</span></a></li>
							 </ul>
						</div>
					</nav>
				</div>
      </header>
    );
  }
}

export default Header;
