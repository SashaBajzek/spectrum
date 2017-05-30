import React, { Component } from 'react';
import './styles/AboutUs.scss';

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
						<h1>OUR MISSION</h1>
						<p>
							Spectrum Technology Group, Inc. is a growth-oriented and dynamic company of professionals who provide specialized services to the U.S. Navy in technical, scientific, engineering, acquisition and program support areas. Our objective is to assist the Navy with finding or developing innovative and cost-effective, and high-quality solutions, including the investigation for adaptation of non-traditional concepts and equipment for use in extreme environments. The company has the capability and flexibility to quickly support our customers in response to evolving program and personnel requirements, either on site at a government facility or at the company corporate headquarters and offsite locations.

						</p>

						<h1>OUR VISION</h1>
						<p>
							At Spectrum Technology Group, Inc. we aim to deliver the best and most cost-effective solutions to the challenges our customers face. Our goal is to save both time and money by utilizing our team of engineers, scientists, and information technology specialists to come up with creative and innovative solutions to the needs presented to us. By being a very flexible team we can quickly work on many aspects of a problem at once integrating the many disciplines into a general solution to the problem at hand. Because of our close ties to Navy Research, we have developed a “Fleet First” mentality, placing the needs of the individual sailor and the fleet as a whole above other concerns. This methodology allows for our products and services to be especially tailored to sailors and allows them to be integrated and operated with little compatibility delays. At Spectrum Technology Group, Inc. close attention is paid to the details in our work and in the requests of the customer. This attitude allows for the products and services to be delivered on time and to be completed to the full extent of the requirements. 
						</p>

						<h1>OUR PEOPLE</h1>
						<p>
							Spectrum Technology Group, Inc. is at present a small company of under 40 people competing against the nation's biggest and most well-known companies for contracts. In light of this Spectrum Technology has been very successful in the past at getting contracts and maintaining them for its size. This is only possible because of our people. Spectrum is made of up talented, hardworking, and creative people from many diverse backgrounds and age groups. Because of this diversity each person can bring different skills and abilities together to benefit the company as a whole and allow the company to tackle many different problems and contracts cost effectively and efficiently. Spectrum also is distinguished by the large geographic diversity of its employees, spread out across the nation working at customer facilities and company offices alike this has allowed us to respond quickly to customer needs for onsite assistance and allows for an expanded work period for tasking across different time zones. 
						</p>
			
						<h1>OUR ORIGINS</h1>
						<p>
							Spectrum Technology is a relatively young company having been founded in 1999 by its President, Mr. Dennis Leland, after he had completed 30 years of work for the U.S. Government on critical Navy programs primarily the Acoustic Trials program at the NSWCCD. His experience led him to see an opportunity in his specialty of Acoustic Engineering and Analysis. Starting as a one-man operation Spectrum Technology Group, Inc. soon began to expand and as the company grew so did its reputation for good service by great people. This idea is a very important one for Spectrum Technology and continues to be one of its biggest selling points.
						</p>
						
						<h1>CURRENT CONTRACTS AND TASK ORDERS</h1>
						<ul>
							<li>N00178-14-D-7932 – J101 (Mod 08)</li>
							<li>N00178-14-D-7932 – FD01 (Mod 04)</li>
							<li>N00178-14-D-5597 – FD01 (Mod 59)</li>
						</ul>
					</div>
				</div>
			</main>
      
    );
  }
}

export default AboutUs;