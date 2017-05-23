import React, { Component } from 'react';
import './styles/Acoustics.scss';

class Acoustics extends Component {
  render() {
    return (
			<main className="acoustics">
				<div className="acoustics__container">
					<h1>ACOUSTICS</h1>
					<div className="acoustics__sonar"></div>
					<div className="acoustics__rig"></div>
					<div className="acoustics__content">
						<p className="acoustics__summary">Text summarizing the overall capabilities</p>
						<ul>
							<li className="acoustics__listItem">Research & Development</li>
							<li className="acoustics__listItem">Finite Element Analysis</li>
						</ul>
					</div>
				</div>
			</main>
    );
  }
}

export default Acoustics;