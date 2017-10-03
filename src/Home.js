import React, { Component } from 'react';
import { Link } from 'react-router';
import './styles/Home.scss';

class Home extends Component {
  render() {
    return (
			<main className="Home">
				<div className="Home__heroImg"></div>
				<div className="Home__background--blackgrey"><h1 className="Home__heroText">SPECTRUM TECHNOLOGY GROUP, INC.</h1></div>
				<div className="Home__shadow">
					<div className="Home__container">
						<p className="Home__content">
							Spectrum Technology Group offers a wide range of technical and administrative services primarily to the U.S. Navy. Our team supports everything from fundamental research and engineering development to information technology and logistics management and more. We strive to provide the highest level of service across all of our core disciplines and to maintain a positive “Fleet First” mindset when tackling our customer’s challenging problems.
						</p>
						<p className="Home__content">
							Everything we do, we do with the men and women who serve our country foremost in our minds. Their safety and mission efficacy is our highest priority.
						</p>
						<div className="Home__links">
							<Link to="/about-us" className="Home__link Home__link--who">
								<div className="Home__link-background--who"></div>
								<div className="Home__link-text">
									<h3 className="Home__link-heading">WHO WE ARE</h3>
									<p className="Home__link-description">Check out what separates the team at Spectrum Technology Group from the competition and learn more about our backstory.</p>
								</div>
							</Link>
							<Link to="/capabilities" className="Home__link Home__link--what">
								<div className="Home__link-background--what"></div>
								<div className="Home__link-text">
									<h3 className="Home__link-heading">WHAT WE DO</h3>
									<p className="Home__link-description">Take a closer look at the capabilities and services Spectrum Technology Group provides for our customers on a daily basis.</p>
								</div>
							</Link>
						</div>
					</div>
				</div>
			</main>
    );
  }
}

export default Home;
