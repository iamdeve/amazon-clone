import React from 'react';
import classes from './Checkout.module.css';
import { TopBar, BottomBar, CustomToaster } from '../Layout/NavBar';
import FooterTop from '../Layout/Footer/FooterTop';
import FooterBottom from '../Layout/Footer/FooterBottom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_51HQQAWL2QqDUeeFIhi7RBSjCZ538rvHf2Nsk9EJx2u4cXne5JnQguw8UKMNaMu7lKM0kun1pmoAL1TSo91UHfSOo00dDP9BK5q');

function Checkout() {
	return (
		<Elements stripe={stripePromise}>
			<>
				<TopBar />
				<BottomBar />
				<CustomToaster toast='We are delivering to your region with limited shipping options. Please expect extended delivery time.' link='/' />
				<div className={classes.checkout__wrapper}>
					<CheckoutForm />
				</div>
				<FooterTop />
				<FooterBottom />
			</>
		</Elements>
	);
}

export default Checkout;
