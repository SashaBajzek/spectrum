import React, { Component } from 'react';

class CapabilitiesBox extends Component {

  render() {
    return (
			<li className="capability__box">
				<div className={`capability__background capability__background--${this.props.backgroundImg}`}></div>
				<h3 className="capability__heading">{this.props.heading}</h3>
				<p className="capability__description">{this.props.description}</p>
			</li>
    );
  }
}

export default CapabilitiesBox;
