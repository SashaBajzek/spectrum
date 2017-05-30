import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRedirect, Router, Route, browserHistory } from 'react-router';
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
				<Route path="/" component={Home} />
				<Route path="/about-us" component={AboutUs} />
				<Route path="/capabilities" component={Capabilities} >
					<IndexRedirect to="/capabilities/engineering" component={Engineering} />
					<Route path="/capabilities/engineering" component={Engineering} />
					<Route path="/capabilities/fleet" component={Fleet} />
					<Route path="/capabilities/acoustics" component={Acoustics} />
					<Route path="/capabilities/materials" component={Materials} />
					<Route path="/capabilities/energy" component={Energy} />
				</Route>
				<Route path="/contact-us" component={ContactUs} />
				<Route path="*" component={Home} />
			</Route>
		</Router>,
  document.getElementById('root')
);