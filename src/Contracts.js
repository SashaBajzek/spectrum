import React, { Component } from 'react';
import './styles/Contracts.scss';

class Contracts extends Component {
  render() {
    return (
			<main className="contracts">
				<div className="main__container">
					<h1 className="contracts__heading--main">CONTRACTS</h1>
					<h2 className="contracts__heading--secondary">N00178-14-D-7932</h2>
					<img className="contracts__image" src="../N0017814D7932redacted.jpg" alt="N00178-14-D-7932" />
					<h2 className="contracts__heading--secondary">N00178-08-D-5597</h2>
					<img className="contracts__image" src="../08D5597redacted.jpg" alt="N00178-08-D-5597" />
				</div>
			</main>
    );
  }
}

export default Contracts;