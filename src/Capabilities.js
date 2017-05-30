import React, { Component } from 'react';
import { Link } from 'react-router';
import './styles/Capabilities.scss';


const items = [
	{
		id: 'engineering',
		heading: 'Engineering and Design',
		backgroundImg: 'engineering'
	},
	{
		id: 'fleet',
		heading: 'Fleet Technical Support',
		backgroundImg: 'fleet'
	},
	{
		id: 'acoustics',
		heading: 'Acoustics',
		backgroundImg: 'acoustics'
	},
	{
		id: 'materials',
		heading: 'Materials Research',
		backgroundImg: 'materials'
	},
	{
		id: 'energy',
		heading: 'Energy Research',
		backgroundImg: 'energy'
	}
];

class Capabilities extends Component {
  render() {
    return (
			<main className="Capabilities">
				<div className="Capabilities__container">
					<h1 className="Capabilities__heading">CAPABILITIES:</h1>
					<ul className="Capabilities-menu__list">
						{items.map((item, i) => (
							<li className="Capabilities-menu__item" key={item.id}>
								<Link to={`/capabilities/${item.id}`} className="Capabilities-menu__link" activeClassName={`Capabilities-menu__link--active`}>
									<div className={`Capabilities-menu__background Capabilities-menu__background--${item.backgroundImg}`}></div>
									<div className="Capabilities-menu__heading-container">
										<h3 className="Capabilities-menu__heading">{item.heading}</h3>
									</div>
								</Link>
							</li>
						))}
					</ul>
					{this.props.children}
				</div>
			</main>
    );
  }
}

export default Capabilities;