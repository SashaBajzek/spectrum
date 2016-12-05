import React, { Component } from 'react';
import { Link } from 'react-router';

class NavTab extends Component {

  render() {
    return (
			<li className="navItem">
				<Link to={this.props.navLink} className="navItem__link" activeClassName="navItem--active"><span className="navItem__underline">{this.props.content}</span></Link>
			</li>
    );
  }
}

export default NavTab;