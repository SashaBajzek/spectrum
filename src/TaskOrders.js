import React, { Component } from 'react';
import './style.scss';

class TaskOrders extends Component {
  render() {
    return (
			<main>	
				<h1>Task Orders</h1>
			
				<h2>N00178-14-D-7932 - J101</h2>
				<h3>Mod 05</h3>
				<a href="../Task1 PDF 7932-J10105_Redacted.pdf">Click for full pdf</a>
				<img src="../Task1 7932-J10105_Redacted.png" alt="N00178-14-D-7932 - J101" height="600"/>
			
				<h2>N00178-14-D-7932 - FD01</h2>
				<h3>Mod 01</h3>
				<a href="../Task2 PDF 7932-FD0101_Redacted.pdf">Click for full pdf</a>
				<img src="../Task2 7932-FD0101_Redacted.png" alt="N00178-14-D-7932 - FD01" height="600"/>
			
				<h2>N00178-08-D-5597 - FD01</h2>
				<h3>Mod 56</h3>
				<a href="../Task3 PDF 5597-FD0156_Redacted.pdf">Click for full pdf</a>
				<img src="../Task3 5597-FD0156_Redacted.png" alt="N00178-08-D-5597 - FD01" height="600"/>
			</main>
    );
  }
}

export default TaskOrders;