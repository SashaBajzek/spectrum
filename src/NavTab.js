import React, { Component } from 'react';
import { Link } from 'react-router';

class NavTab extends Component {

  render() {
    return (
			<li className={`${this.props.classBlock}__navItem`}>
				<Link to={`/spectrum-technology-group${this.props.navLink}`} className={`${this.props.classBlock}__link`} activeClassName={`${this.props.classBlock}__navItem--active`} onClick={this.props.toggleHamburger}><span className={`${this.props.classBlock}__underline`}>{this.props.content}</span></Link>
			</li>
    );
  }
}

export default NavTab;


/* add proptypes */


