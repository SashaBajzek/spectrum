import React, { Component } from 'react';
import './styles/Home.scss';

class Home extends Component {
  render() {
    return (
			<main className="home">
				<div className="home__heroImg"></div>
				<div className="home__background--blackgrey"><h1 className="home__heroText">SPECTRUM TECHNOLOGY GROUP, INC.</h1></div>
				<div className="home__shadow">
					<div className="home__container">
						<p>
							Spectrum Technology Group offers a wide range of technical and administrative services primarily to the US Navy. Our team supports everything from fundamental research and engineering development to information technology and logistics management and more. We strive to provide the highest level of service across all of our core disciplines and to maintain a positive “Fleet First” mindset when tackling our customer’s challenging problems.
						</p>
						<p>
							Everything we do, we do with the men and women who serve our country foremost in our minds. Their safety and mission efficacy is our highest priority.
						</p>
						<div className="home__logos">
							<img className="home__logo--SBA" src={"../SBA_8aCertified.svg"} alt="SBA_8a Certification"/>
							<img className="home__logo--Seaport" src={"../seaport-e.svg"} alt="Seaport Registration"/>
						</div>
					</div>
				</div>
			</main>
    );
  }
}

export default Home;
