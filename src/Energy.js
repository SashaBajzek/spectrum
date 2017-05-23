import React, { Component } from 'react';
import './styles/Energy.scss';

class Energy extends Component {
  render() {
    return (
			<main className="energy">
				<div className="energy__container">
					<h1>ENERGY RESEARCH</h1>
					<div className="energy__heroImg"></div>
					<div className="energy__content">
						<p className="energy__summary">Text summarizing the overall capabilities</p>
						<ul>
							<li className="energy__listItem">Research & Development</li>
							<li className="energy__listItem">Finite Element Analysis</li>
						</ul>
					</div>
				</div>
			</main>
    );
  }
}

export default Energy;