import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from '../components/Home/Home';
function App() {
	return (
		<div className='app'>
			<Switch>
				<Route path='/' exact component={Home} />
			</Switch>
		</div>
	);
}

export default App;
