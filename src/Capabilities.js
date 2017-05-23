import React, { Component } from 'react';
import CapabilitiesBox from './CapabilitiesBox';
import './styles/Capabilities.scss';

class Capabilities extends Component {
  render() {
    return (
			<main className="capabilities">
				<div className="capabilities__container">
					<h1 className="capabilities__heading">CAPABILITIES:</h1>
					<ul className="capabilities__list">
						<CapabilitiesBox heading="Engineering and Design" backgroundImg="engineering" capability="engineering"/>
						<CapabilitiesBox heading="Fleet Technical Support" backgroundImg="fleet" capability="fleet" />
						<CapabilitiesBox heading="Acoustics" backgroundImg="acoustics" capability="acoustics" />
						<CapabilitiesBox heading="Materials Research" backgroundImg="materials" capability="materials" />
						<CapabilitiesBox heading="Energy Research" backgroundImg="energy" capability="energy" />
					</ul>
					{this.props.children}
				</div>
			</main>
    );
  }
}

export default Capabilities;


/*
<li className="capabilitiesBox">
	<div className={`capabilitiesBox__background capabilitiesBox__background--${this.props.backgroundImg}`}></div>
	<h3 className="capabilitiesBox__heading">{this.props.heading}</h3>
</li>


<Link to={`/spectrum-technology-group${this.props.navLink}`} className={`${this.props.classBlock}__link`} activeClassName={`${this.props.classBlock}__navItem--active`} onClick={this.props.toggleHamburger}>
		<span className={`${this.props.classBlock}__underline`}>{this.props.content}</span>
</Link>

<NavTab classBlock="team-nav" navLink="/contract-vehicles/team-members/mantech" content="MANTECH SYSTEMS ENGINEERING CORPORATION" />

<Link to={`/spectrum-technology-group/capabilties${this.props.capability}`} activeClassName={`capability__navItem--active`}>
	<div className={`capabilitiesBox__background capabilitiesBox__background--${this.props.backgroundImg}`}></div>
	<h3 className="capabilitiesBox__heading">{this.props.heading}</h3>
</Link>


					<Route path="/spectrum-technology-group/capabilities/engineering" component={Engineering} />
					<Route path="/spectrum-technology-group/capabilities/fleet" component={Fleet} />
					<Route path="/spectrum-technology-group/capabilities/acoustics" component={Acoustics} />
					<Route path="/spectrum-technology-group/capabilities/materials" component={Materials} />
					<Route path="/spectrum-technology-group/capabilities/energy" component={Energy} />
*/