import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from '../components/Home/Home';
import { TopBar, BottomBar, CustomToaster } from '../components/Layout/NavBar';
import FooterTop from '../components/Layout/Footer/FooterTop';
import FooterBottom from '../components/Layout/Footer/FooterBottom';
import Shop from '../components/Shop/Shop';
import Cart from '../components/Cart/Cart';
function App() {
	return (
		<div className='app'>
			<TopBar />
			<BottomBar />
			<CustomToaster toast='We are delivering to your region with limited shipping options. Please expect extended delivery time.' link='/' />
			<Switch>
				<Route path='/' exact component={Home} />
				<Route path='/shop-now' exact component={Shop} />
				<Route path='/shop-now/:category' exact component={Shop} />
				<Route path='/shop-now/:category/:product' exact component={Shop} />
				<Route path='/cart' exact component={Cart} />
			</Switch>
			<FooterTop />
			<FooterBottom />
		</div>
	);
}

export default App;
