import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/Home';
import Deployment from './pages/Deployment';

const App = () => {
	return (
		<Router>
			<Route exact path="/" component={Home} />
			<Route exact path="/deployment" component={Deployment} />
		</Router>
	);
};

export default App;
