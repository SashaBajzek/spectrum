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
						<p>
							Spectrum Technology Group offers a wide range of technical and administrative services primarily to the US Navy. Our team supports everything from fundamental research and engineering development to information technology and logistics management and more. We strive to provide the highest level of service across all of our core disciplines and to maintain a positive “Fleet First” mindset when tackling our customer’s challenging problems.
						</p>
						<p>
							Everything we do, we do with the men and women who serve our country foremost in our minds. Their safety and mission efficacy is our highest priority.
						</p>
						<div className="Home__links">
							<Link to="/about-us" className="Home__link">WHO WE ARE</Link>
							<Link to="/capabilities" className="Home__link">WHAT WE DO</Link>
						</div>
						<div className="Home__logos">
							<img className="Home__logo--SBA" src={"../SBA_8aCertified.svg"} alt="SBA_8a Certification"/>
							<img className="Home__logo--Seaport" src={"../seaport-e.svg"} alt="Seaport Registration"/>
						</div>
					</div>
				</div>
			</main>
    );
  }
}

export default Home;
