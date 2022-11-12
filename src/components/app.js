import { h } from 'preact';
import { Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for `routes` directory
//			<Profile path="/profile/" user="me" />
//			<Profile path="/profile/:user" />

import Home from '../routes/home';
import Events from '../routes/events';
import Servers from '../routes/servers';

const App = () => (
	<div id="app">
		<Header />
		<Router>
			<Home path="/" />
			<Events path="/events" />
			<Servers path="/servers" />
		</Router>
	</div>
)

export default App;
