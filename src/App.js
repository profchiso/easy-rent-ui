import React from 'react';

//npm packages
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

//components

import Landing from './components/Landing/Landing';
import Dashboard from './components/private/dashboard/Dashboard';
import Appartments from './components/appartments/Appartment';
import SignUp from './components/sign-up/SignUp';
import Support from './components/support/Support';
import Pricing from './components/pricing/Pricing';
import store from './store';

//styles
import './App.css';
import 'antd/dist/antd.css';

//constants

const App = () => {
	return (
		<Provider store={store}>
			<Router>
				<Switch>
					<Route exact path='/' component={Landing} />
					<Route exact path='/dashboard' component={Dashboard} />
					<Route exact path='/appartments' component={Appartments} />
					<Route exact path='/sign-up' component={SignUp} />
					<Route exact path='/support' component={Support} />
					<Route exact path='/pricing' component={Pricing} />
				</Switch>
			</Router>
		</Provider>
	);
};

export default App;
