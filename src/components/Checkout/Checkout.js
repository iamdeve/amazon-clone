import React from 'react';
import classes from './Checkout.module.css';
import { TopBar, BottomBar, CustomToaster } from '../Layout/NavBar';
import FooterTop from '../Layout/Footer/FooterTop';
import FooterBottom from '../Layout/Footer/FooterBottom';
function Checkout() {
	return (
		<>
			<TopBar />
			<BottomBar />
			<CustomToaster toast='We are delivering to your region with limited shipping options. Please expect extended delivery time.' link='/' />
			<div className={classes.checkout__wrapper}>Checkout</div>
			<FooterTop />
			<FooterBottom />
		</>
	);
}

export default Checkout;
