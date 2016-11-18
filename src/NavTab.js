import React, { Component } from 'react';
import './style.scss';
import { Link } from 'react-router';

class NavTab extends Component {

  render() {
    return (
			<li>
				<Link to={this.props.navLink} activeClassName="active"><span>{this.props.content}</span></Link>
			</li>
    );
  }
}

export default NavTab;