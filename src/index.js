import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, hashHistory } from 'react-router';
import App from './App';
import Home from './Home';
import AboutUs from './AboutUs';
import Capabilities from './Capabilities';
import ContractVehicles from './ContractVehicles';
import QualityAssurance from './QualityAssurance';
import ContactUs from './ContactUs';

ReactDOM.render(
		<Router history={browserHistory}>
			<Route component={App}>
				<Route path="/" component={Home} />
				<Route path="/AboutUs" component={AboutUs} />
				<Route path="Capabilities" component={Capabilities} />
				<Route path="ContractVehicles" component={ContractVehicles} />
				<Route path="QualityAssurance" component={QualityAssurance} />
				<Route path="ContactUs" component={ContactUs} />
			</Route>
		</Router>,
  document.getElementById('root')
);
