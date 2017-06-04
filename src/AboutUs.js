import React, { Component } from 'react';
import './styles/AboutUs.scss';

const items = [
	{
		id: 'mission',
		heading: 'OUR MISSION',
		description: 'To deliver the very best engineering services and technical support to our customers on-time and under budget.'
	},
	{
		id: 'vision',
		heading: 'OUR VISION',
		description: 'To change the paradigm of defense contracting from “What can I do to increase my bottom line?” to “What can I do to best support our service members and allies?”.'
	},
	{
		id: 'people',
		heading: 'OUR PEOPLE',
		description: 'From fundamental research to engineering development, we are a team of experts in a diverse range of disciplines with a singular focus to deliver the very best work without compromise.'
	},
	{
		id: 'origins',
		heading: 'OUR ORIGINS',
		description: 'Spectrum Technology was founded in 1999 by its President, Dennis Leland, after he had completed 30 years of service for the U.S. Government on critical Navy programs. He saw an opportunity in his specialty of Acoustic Engineering Analysis and decided to make the leap into business. Starting as a one-man operation, Spectrum Technology Group, Inc. has since grown, along with its reputation for good service by great people.'
	}
];



class AboutUs extends Component {
  render() {
    return (
			<main className="AboutUs">
				<div className="AboutUs__heroImg"></div>
				<div className="AboutUs__shadow">
					<div className="AboutUs__container">
						<div className="AboutUs__quickFacts">
							<h3 className="quickFacts__heading">QUICK FACTS ABOUT SPECTRUM:</h3>
							<ul className="quickFacts__list">
								<li className="quickFacts__item">
									<h4>FOUNDED</h4>
									<p>1999</p>
								</li>
								<li className="quickFacts__item">
									<h4>CONTRACTS</h4>
									<p>3</p>
								</li>
								<li className="quickFacts__item">
									<h4>EMPLOYEES</h4>
									<p>31</p>
								</li>
							</ul>
						</div>
						<ul className="AboutUs__list">
							{items.map((item, i) => (
								<li className="AboutUs__item" key={item.id}>
									<div className={`AboutUs__logo AboutUs__logo--${item.id}`}></div>
									<div className="AboutUs__text">
										<h2 className="AboutUs__heading">{item.heading}</h2>
										<p>{item.description}</p>
									</div>
								</li>
							))}
							<li className="AboutUs__item">
								<div className="AboutUs__logo AboutUs__logo--contracts"></div>
								<div className="AboutUs__text">
									<h2 className="AboutUs__heading">CURRENT CONTRACTS AND TASK ORDERS</h2>
									<ul className="AboutUs__contracts-list">
										<li>N00178-14-D-7932 – J101 (Mod 08)</li>
										<li>N00178-14-D-7932 – FD01 (Mod 04)</li>
										<li>N00178-14-D-5597 – FD01 (Mod 59)</li>
									</ul>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</main>
      
    );
  }
}

export default AboutUs;