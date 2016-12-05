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
import TeamMemberMantech from './TeamMemberMantech';
import TeamMemberProgeny from './TeamMemberProgeny';
import TeamMemberGenDynamics from './TeamMemberGenDynamics';
import ContractVehicles from './ContractVehicles';
import QualityAssurance from './QualityAssurance';
import ContactUs from './ContactUs';
import Tools from './Tools';

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
					<Route path="/ContractVehicles/TeamMembers" component={TeamMembers} >
						<IndexRedirect to="/ContractVehicles/TeamMembers/Mantech" />
						<Route path="/ContractVehicles/TeamMembers/Mantech" component={TeamMemberMantech} />
						<Route path="/ContractVehicles/TeamMembers/Progeny" component={TeamMemberProgeny} />
						<Route path="/ContractVehicles/TeamMembers/GeneralDynamics" component={TeamMemberGenDynamics} />
					</Route>
				</Route>
				<Route path="/QualityAssurance" component={QualityAssurance} />
				<Route path="/ContactUs" component={ContactUs} />
				<Route path="/Tools" component={Tools} />
				<Route path="*" component={Home} />
			</Route>
		</Router>,
  document.getElementById('root')
);