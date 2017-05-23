import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRedirect, Router, Route, browserHistory, hashHistory } from 'react-router';
import App from './App';
import Home from './Home';
import AboutUs from './AboutUs';
import Capabilities from './Capabilities';
import Engineering from './Engineering';
import Fleet from './Fleet';
import Acoustics from './Acoustics';
import Materials from './Materials';
import Energy from './Energy';
import ContactUs from './ContactUs';

ReactDOM.render(
		<Router history={browserHistory} onUpdate={() => window.scrollTo(0, 0)}>
			<Route component={App}>
				<Route path="/spectrum-technology-group/" component={Home} />
				<Route path="/spectrum-technology-group/about-us" component={AboutUs} />
				<Route path="/spectrum-technology-group/capabilities" component={Capabilities} >
					<IndexRedirect to="/spectrum-technology-group/capabilities/engineering" component={Engineering} />
					<Route path="/spectrum-technology-group/capabilities/engineering" component={Engineering} />
					<Route path="/spectrum-technology-group/capabilities/fleet" component={Fleet} />
					<Route path="/spectrum-technology-group/capabilities/acoustics" component={Acoustics} />
					<Route path="/spectrum-technology-group/capabilities/materials" component={Materials} />
					<Route path="/spectrum-technology-group/capabilities/energy" component={Energy} />
				</Route>
				<Route path="/spectrum-technology-group/contact-us" component={ContactUs} />
				<Route path="*" component={Home} />
			</Route>
		</Router>,
  document.getElementById('root')
);