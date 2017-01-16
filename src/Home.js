import React, { Component } from 'react';
import './styles/Home.scss';

class Home extends Component {
  render() {
    return (
			<main className="home">
				<div className="home__heroImg"></div>
				<div className="home__background--blackgrey"><h1 className="home__heroText">SPECTRUM TECHNOLOGY GROUP, INC.</h1></div>
				<div className="home__shadow">
					<div className="home__container--lightgrey">
						<p>
							Spectrum Technology is a young, dynamic company dedicated to providing the government and industry with high-quality services in the areas of applied research, network development and implementation, acoustical engineering, signatures measurement and analysis for naval vessels, web and database programming, and technology management. The support and development Spectrum Technology delivers is becoming more and more viable and important as Net-Centric warfare becomes more predominant.
						</p>
						<p>
							Spectrum Technology has established methods in place for monitoring overall project performance and controlling costs to insure timely submission of contract deliverables and quality outputs. Our technical products and services consistently exceed government specifications in all project areas, and are provided on time or ahead of schedule.
						</p>
						<p>
							We are a qualified small business, subchapter S Corporation in the state of Maryland.
						</p>
						<p>
							Spectrum Technology is a qualified small business, prime contractor under SeaPort Enhanced (Seaport-e). The NAVSEA Warfare Centers (and other government activities) use the web-based, e-business procurement Portal in order to facilitate performance-based service acquisition, leverage buying power, improve business intelligence, and reduce cycle time.
						</p>
						<p>
							Spectrum Technology is customer focused and Fleet support oriented. Our employees pride themselves on providing dependable, timely results and innovative solutions, coupled with ingenuity and exceptional customer support. The company's Past Performance Evaluation scored at a performance rating of 90% or higher in all categories, including 92% both in the professionalism of personnel and in company responsiveness.
						</p>
					</div>
				</div>
			</main>
    );
  }
}

export default Home;
