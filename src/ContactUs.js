import React, { Component } from 'react';
import './style.scss';

class ContactUs extends Component {
  render() {
    return (
			<main>
				<h1>Contact Us</h1>
			
				<h2>Location</h2>
				<address>
					Spectrum Technology Group, Inc.<br />
					12 South Summit Avenue<br />
					Suite 210<br />
					Gaithersburg, MD 20877
				</address>
			
				<h2>Phone</h2>
				<p>(301) 947-4622</p>
				<p>(301) 947-4628 (fax)</p>
			
				<h2>E-Mail</h2>
				<p>Dennis Leland, President</p>
				<p>dennis.leland@spectrumtechnology.us</p>
			
			</main>
    );
  }
}

export default ContactUs;