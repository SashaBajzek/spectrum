import React, { Component } from 'react';
import './style.scss';
import { Link } from 'react-router';

class NavTab extends Component {
	isActiveQuestion (id) {
		return this.props.currentTab === id;
	}
	
  render() {
		const { setActive } = this.props;
    return (
			<li>
				<Link to={this.props.navLink} onClick={() => setActive(this.props.id)} className={this.isActiveQuestion(this.props.id) ? 'active': ''}><span>{this.props.content}</span></Link>
			</li>
    );
  }
}

export default NavTab;