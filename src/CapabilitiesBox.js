import React, { Component } from 'react';
import { Link } from 'react-router';
import './styles/CapabilitiesBox.scss';

class CapabilitiesBox extends Component {

  render() {
    return (
			<li className="capabilitiesBox">
				<Link to={`/spectrum-technology-group/capabilities/${this.props.capability}`} className="capabilities__link" activeClassName={`capability__navItem--active`}>
					<div className={`capabilitiesBox__background capabilitiesBox__background--${this.props.backgroundImg}`}></div>
					<div className="capabilitiesBox__heading-container">
						<h3 className="capabilitiesBox__heading">{this.props.heading}</h3>
					</div>
				</Link>
			</li>
    );
  }
}

export default CapabilitiesBox;
