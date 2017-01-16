import React, { Component } from 'react';
import './styles/CapabilitiesBox.scss';

class CapabilitiesBox extends Component {

  render() {
    return (
			<li className="capabilitiesBox">
				<div className={`capabilitiesBox__background capabilitiesBox__background--${this.props.backgroundImg}`}></div>
				<h3 className="capabilitiesBox__heading">{this.props.heading}</h3>
				<p className="capabilitiesBox__description">{this.props.description}</p>
			</li>
    );
  }
}

export default CapabilitiesBox;
