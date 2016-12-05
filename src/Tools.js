import React, { Component } from 'react';
import { Link } from 'react-router';
import NavTab from './NavTab';
import './styles/Tools.scss';

class Tools extends Component {

  render() {
    return (
			<main>
				<div className="main__container">
					<h1>Employee Tools:</h1>
					<nav className="tools__nav">
						<ul className="tools__list">
							<li><a href="https://mail.spectrumtechnology.us/owa/auth/logon.aspx?replaceCurrent=1&url=https%3a%2f%2fmail.spectrumtechnology.us%2fowa%2f" className="navItem__link"><span className="navItem__underline">E-MAIL</span></a></li>
							<li><a href="http://www.seaport.navy.mil/" className="navItem__link"><span className="navItem__underline">SEAPORT</span></a></li>
							<li><a href="https://team.spectrumtechnology.us"  className="navItem__link"><span className="navItem__underline">SHAREPOINT</span></a></li>
						</ul>
					</nav>
				</div>
			</main>
    );
  }
}

export default Tools;

