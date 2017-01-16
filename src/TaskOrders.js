import React, { Component } from 'react';
import './styles/TaskOrders.scss';

class TaskOrders extends Component {
  render() {
    return (
			<main className="taskOrders">	
				<div className="taskOrders__container">
					<h1 className="taskOrders__heading--main">TASK ORDERS</h1>
					<ul className="taskOrders__list">
						<li>
							<h2 className="taskOrders__heading--contractNo">N00178-14-D-7932 - J101</h2>
							<h3 className="taskOrders__heading--mod">Mod 05</h3>
							<a className="taskOrders__link" href="../Task1 PDF 7932-J10105_Redacted.pdf">
								<span>Click for full pdf</span>
								<img className="taskOrders__image" src="../Task1 7932-J10105_Redacted.png" alt="N00178-14-D-7932 - J101" />
							</a>
						</li>
						<li>
							<h2 className="taskOrders__heading--contractNo">N00178-14-D-7932 - FD01</h2>
							<h3 className="taskOrders__heading--mod">Mod 01</h3>
							<a className="taskOrders__link" href="../Task2 PDF 7932-FD0101_Redacted.pdf"><span>Click for full pdf</span><img className="taskOrders__image" src="../Task2 7932-FD0101_Redacted.png" alt="N00178-14-D-7932 - FD01" /></a>
						</li>
						<li>
							<h2 className="taskOrders__heading--contractNo">N00178-08-D-5597 - FD01</h2>
							<h3 className="taskOrders__heading--mod">Mod 56</h3>
							<a className="taskOrders__link" href="../Task3 PDF 5597-FD0156_Redacted.pdf"><span>Click for full pdf</span><img className="taskOrders__image" src="../Task3 5597-FD0156_Redacted.png" alt="N00178-08-D-5597 - FD01" /></a>
						</li>
					</ul>
				</div>
			</main>
    );
  }
}

export default TaskOrders;