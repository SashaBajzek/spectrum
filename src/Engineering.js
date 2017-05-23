import React, { Component } from 'react';
import './styles/Engineering.scss';

class Engineering extends Component {
  render() {
    return (
			<main className="engineering">
				<div className="engineering__container">
					<h1>ENGINEERING AND DESIGN</h1>
					<div className="engineering__content">
						<ul className="engineering__list">
							<li className="engineering__listItem">
								<div className="engineering__image engineering__image--design"></div>
								<div className="engineering__text">
									<h2>Design</h2>
									<p>Spectrum Technology Group, Inc. has a number of highly skilled employees who specialize in the engineering and design of defense related hardware and systems. Using Computer Aided Design and Engineering (CAD/CAE) software and techniques we ensure that our designs meet or exceed the requirements placed on them all while being operator friendly and easy to maintain.</p>
								</div>
							</li>
							<li className="engineering__listItem">
								<div className="engineering__image engineering__image--FEA"></div>
								<div className="engineering__text">
									<h2>Finite Element Analysis</h2>
									<p>We believe in solving problems early in the design process and to do this we make extensive use of Finite Element Analysis (FEA). All of our designs undergo rigorous modelling and simulation to understand the structural and thermal behavior they exhibit during operation and under critical loading. These results allow us to evaluate the impacts design choices have on the system and how to best optimize structure to best meet the requirements.</p>
								</div>
							</li>
							<li className="engineering__listItem">
								<div className="engineering__image engineering__image--CFD"></div>
								<div className="engineering__text">
									<h2>Computational Fluid Dynamics</h2>
									<p>Our extensive use of modelling and simulation doesn’t just end where the structure meets the surrounding medium! We utilize Computational Fluid Dynamics (CFD) software to perform detailed analysis of fluid flow, air flow, and the thermal transport mechanisms in a variety of fluids and gases. The results of these studies can be integrated into the structural models or used directly to make changes in the overall design. The goal of all of this modelling and simulation is to reduce the amount of hardware that needs to be developed and tested during the design phases and streamline the path to production, installation, or alteration.</p>
								</div>
							</li>
							<li className="engineering__listItem">
								<div className="engineering__image engineering__image--shock"></div>
								<div className="engineering__text">
									<h2>Shock Analysis</h2>
									<p>One of the most challenging aspects of the design of defense related hardware and systems is ensuring survivability and recovery or in some cases operability during shock events. These events happen over a very short timeframe and involve tremendous fluctuations in both pressure and accelerations on an object and adjacent systems. To properly analyze and design for shock loadings our team uses very detailed modelling of the fluid and structure, its interaction, and an understanding of the non-linear and strain rate dependent properties of materials to assess and inform design decisions.</p>
									</div>
							</li>
							<li className="engineering__listItem">
								<div className="engineering__image engineering__image--electronic"></div>
								<div className="engineering__text">
									<h2>Electronic Systems and Enclosures</h2>
									<p>Electronic hardware and their enclosures used on inboard and outboard submarine systems come with very stringent requirements and involve balancing thermal, structural, and electronic considerations during the design process. These challenging systems require all aspects of our design, engineering, and modelling capabilities to be used together to create effective solutions for a variety of applications. Our team works closely with our customers to develop the complete electronics system starting from cabling diagrams and interface requirements, through hardware and electronics selection and design, all the way to installation and alteration support.</p>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</main>
    );
  }
}

export default Engineering;