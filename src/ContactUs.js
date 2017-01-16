import React, { Component } from 'react';
import SimpleMap from './GoogleMap';
import './styles/ContactUs.scss';

class ContactUs extends Component {
  render() {
    return (
			<main className="contactUs">
				<div className="contactUs__container">
					<h1>CONTACT US</h1>
					<h2>Location</h2>
					<div className="googleMap contactUs__googleMap">
						<SimpleMap lat={39.140926} lng={-77.193975} />
					</div>
					<div className="contactUs__address">
						Spectrum Technology Group, Inc.<br />
						12 South Summit Avenue<br />
						Suite 210<br />
						Gaithersburg, MD 20877
					</div>

					<h2>Phone</h2>
					<p>(301) 947-4622</p>
					<p>(301) 947-4628 (fax)</p>

					<h2>E-Mail</h2>
					<p>Dennis Leland, President</p>
					<p>dennis.leland@spectrumtechnology.us</p>
				</div>
			</main>
    );
  }
}

export default ContactUs;