import React, { Component } from 'react';
import './styles/Materials.scss';

class Engineering extends Component {
  render() {
    return (
			<main className="materials">
				<div className="materials__container">
					<h1>MATERIALS RESEARCH</h1>
					<div className="materials__heroImg"></div>
					<div className="materials__content">
						<p className="materials__summary">Text summarizing the overall capabilities</p>
						<ul>
							<li className="materials__listItem">Research & Development</li>
							<li className="materials__listItem">Finite Element Analysis</li>
						</ul>
					</div>
				</div>
			</main>
    );
  }
}

export default Engineering;