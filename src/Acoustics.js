import React, { Component } from 'react';
import './styles/Acoustics.scss';

class Acoustics extends Component {
  render() {
    return (
			<main className="Acoustics">
				<div className="Acoustics__container">
					<h1>ACOUSTICS</h1>
					<div className="Acoustics__sonar"></div>
					<div className="Acoustics__rig"></div>
					<div className="Acoustics__content">
						<p className="Acoustics__summary">Text summarizing the overall capabilities</p>
						<ul>
							<li className="Acoustics__listItem">Research & Development</li>
							<li className="Acoustics__listItem">Finite Element Analysis</li>
						</ul>
					</div>
				</div>
			</main>
    );
  }
}

export default Acoustics;