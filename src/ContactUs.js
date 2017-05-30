import React, { Component } from 'react';
import SimpleMap from './GoogleMap';
import './styles/ContactUs.scss';

class ContactUs extends Component {
  render() {
    return (
			<main className="ContactUs">
				<div className="ContactUs__container">
					<h1>CONTACT US</h1>
					<h2>Headquarters</h2>
					<div className="GoogleMap ContactUs__googleMap">
						<SimpleMap lat={39.140926} lng={-77.193975} />
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
					
					<div className="ContactUs__map"></div>
				</div>
			</main>
    );
  }
}

export default ContactUs;