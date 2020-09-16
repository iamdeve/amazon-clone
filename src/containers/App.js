import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from '../components/Home/Home';

import Shop from '../components/Shop/Shop';
import Cart from '../components/Cart/Cart';
import SignIn from "../components/Membership/SignIn";
function App() {
	return (
		<div className='app'>
			
			<Switch>
				<Route path='/' exact component={Home} />
				<Route path='/shop-now' exact component={Shop} />
				<Route path='/shop-now/:category' exact component={Shop} />
				<Route path='/shop-now/:category/:product' exact component={Shop} />
				<Route path='/cart' exact component={Cart} />
				<Route path='/sign-in' exact component={SignIn} />
			</Switch>

		</div>
	);
}

export default App;
