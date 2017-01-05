import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRedirect, Router, Route, browserHistory, hashHistory } from 'react-router';
import App from './App';
import Home from './Home';
import AboutUs from './AboutUs';
import Capabilities from './Capabilities';
import Services from './Services';
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
		<Router history={browserHistory} onUpdate={() => window.scrollTo(0, 0)}>
			<Route component={App}>
				<Route path="/SpectrumTechnologyGroup/" component={Home} />
				<Route path="/SpectrumTechnologyGroup/about-us" component={AboutUs} />
				<Route path="/SpectrumTechnologyGroup/services" component={Services} >
					<IndexRedirect to="/SpectrumTechnologyGroup/capabilities" />
					<Route path="/SpectrumTechnologyGroup/capabilities" component={Capabilities} />
					<Route path="/SpectrumTechnologyGroup/quality-assurance" component={QualityAssurance} />
				</Route>
				<Route path="/SpectrumTechnologyGroup/contract-vehicles" component={ContractVehicles}>
					<IndexRedirect to="/SpectrumTechnologyGroup/contract-vehicles/contracts" />
					<Route path="/SpectrumTechnologyGroup/contract-vehicles/contracts" component={Contracts} />
					<Route path="/SpectrumTechnologyGroup/contract-vehicles/task-orders" component={TaskOrders} />
					<Route path="/SpectrumTechnologyGroup/contract-vehicles/team-members" component={TeamMembers} >
						<IndexRedirect to="/SpectrumTechnologyGroup/contract-vehicles/team-members/mantech" />
						<Route path="/SpectrumTechnologyGroup/contract-vehicles/team-members/mantech" component={TeamMemberMantech} />
						<Route path="/SpectrumTechnologyGroup/contract-vehicles/team-members/progeny" component={TeamMemberProgeny} />
						<Route path="/SpectrumTechnologyGroup/contract-vehicles/team-members/general-dynamics" component={TeamMemberGenDynamics} />
					</Route>
				</Route>
				<Route path="/SpectrumTechnologyGroup/quality-assurance" component={QualityAssurance} />
				<Route path="/SpectrumTechnologyGroup/contact-us" component={ContactUs} />
				<Route path="/SpectrumTechnologyGroup/tools" component={Tools} />
				<Route path="*" component={Home} />
			</Route>
		</Router>,
  document.getElementById('root')
);