import React, { Component } from 'react';
import ContactMap from './ContactMap';
import './styles/ContactUs.scss';

class ContactUs extends Component {
  render() {
    return (
			<main className="ContactUs">
				<div className="ContactUs__container">
					<h1>CONTACT US</h1>
					<div className="ContactUs__container--indent">
					<h2>Headquarters</h2>
						<div className="ContactUs__googleMap">
							<iframe src="https://www.google.com/maps/embed/v1/place?q=12+South+Summit+Avenue+Suite+210+Gaithersburg,+MD+20877
								&zoom=15
								&key=AIzaSyDA-dUCznWPRVR2kEBvkcazqw6iLsj1yGU">
							</iframe>
						</div>

						<div className="ContactUs__address">
							Spectrum Technology Group, Inc.<br />
							12 South Summit Avenue<br />
							Suite 210<br />
							Gaithersburg, MD 20877
						</div>

						<h2>Phone</h2>
						<p>(301) 947-4622</p>
						<p>(301) 947-4628 (fax)</p>

						<h2>E-Mail</h2>
						<a  href="mailto:info@spectrumtechnology.us" className="ContactUs__email"><span className="ContactUs__underline">info@spectrumtechnology.us</span></a>

						<h2>Office Locations</h2>
					</div>
					<ContactMap />

					<h3>Map Key</h3>
					<ul className="ContactUs__legend">
						<li className="ContactUs__legend-item">
							<div className="ContactUs__star"></div>
							<p>Spectrum Headquarters</p>
						</li>
						<li className="ContactUs__legend-item">
							<div className="ContactUs__rectangle"></div>
							<p>Spectrum Presence</p>
						</li>
					</ul>	
				</div>
			</main>
    );
  }
}

export default ContactUs;