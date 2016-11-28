import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRedirect, Router, Route, browserHistory, hashHistory } from 'react-router';
import App from './App';
import Home from './Home';
import AboutUs from './AboutUs';
import Capabilities from './Capabilities';
import Contracts from './Contracts';
import TaskOrders from './TaskOrders';
import TeamMembers from './TeamMembers';
import ContractVehicles from './ContractVehicles';
import QualityAssurance from './QualityAssurance';
import ContactUs from './ContactUs';

ReactDOM.render(
		<Router history={browserHistory}>
			<Route component={App}>
				<Route path="/" component={Home} />
				<Route path="/AboutUs" component={AboutUs} />
				<Route path="/Capabilities" component={Capabilities} />
				<Route path="/ContractVehicles" component={ContractVehicles}>
					<IndexRedirect to="/ContractVehicles/Contracts" />
					<Route path="/ContractVehicles/Contracts" component={Contracts} />
					<Route path="/ContractVehicles/TaskOrders" component={TaskOrders} />
					<Route path="/ContractVehicles/TeamMembers" component={TeamMembers} />
				</Route>
				<Route path="QualityAssurance" component={QualityAssurance} />
				<Route path="ContactUs" component={ContactUs} />
				<Route path="*" component={Home} />
			</Route>
		</Router>,
  document.getElementById('root')
);




/*

ReactDOM.render(
		<Router history={browserHistory}>
			<Route component={App}>
				<Route path="/" component={Home} />
				<Route path="/AboutUs" component={AboutUs} />
				<Route path="Capabilities" component={Capabilities} />
				<Route path="Contracts" component={Contracts} />
				<Route path="TaskOrders" component={TaskOrders} />
				<Route path="TeamMembers" component={TeamMembers} />
				<Route path="ContractVehicles" component={ContractVehicles} />
				<Route path="QualityAssurance" component={QualityAssurance} />
				<Route path="ContactUs" component={ContactUs} />
			</Route>
		</Router>,
  document.getElementById('root')
);
*/