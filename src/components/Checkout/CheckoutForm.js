import React, { useState, useMemo } from 'react';
import { useStripe, useElements, CardNumberElement, CardCvcElement, CardExpiryElement } from '@stripe/react-stripe-js';
import Button from '@material-ui/core/Button';
import { Grid, Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import './CheckoutForm.css';
import { useStateValue } from '../../store/StateProvider';
import Swal from 'sweetalert2';
const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 0,
		maxWidth: 345,
	},
	checkout__form__container: {
		padding: '2rem',
	},
	form__wrapper: {
		background: '#fff',
		padding: '2rem',
	},
	total__wrapper: {
		padding: '1rem',
		backgroundColor: '#fff',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		margin: '.8rem 0',
	},
}));
const useOptions = () => {
	const options = useMemo(
		() => ({
			style: {
				base: {
					// fontSize,
					color: '#424770',
					border: '1px solid #000',
					letterSpacing: '0.025em',
					fontFamily: 'Source Code Pro, monospace',
					'::placeholder': {
						color: '#aab7c4',
					},
				},
				invalid: {
					color: '#9e2146',
				},
			},
		}),
		[],
	);

	return options;
};
const CheckoutForm = () => {
	const classes = useStyles();
	const stripe = useStripe();
	const elements = useElements();
	const options = useOptions();
	const [{ total }, dispatch] = useStateValue();
	const [formState, setFormState] = useState({
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		coupon: '',
	});
	const inputChangeHandler = (e) => {
		const { name, value } = e.target;
		e.preventDefault();

		setFormState((prevState) => {
			return {
				...prevState,
				[name]: value,
			};
		});
	};

	const handleSubmit = async (event) => {
		// Block native form submission.
		event.preventDefault();

		if (!stripe || !elements) {
			// Stripe.js has not loaded yet. Make sure to disable
			// form submission until Stripe.js has loaded.
			return;
		}

		// Get a reference to a mounted CardElement. Elements knows how
		// to find your CardElement because there can only ever be one of
		// each type of element.
		const cardElement = elements.getElement(CardNumberElement);
		const cardCvcElement = elements.getElement(CardCvcElement);
		const cardExpElement = elements.getElement(CardExpiryElement);

		// Use your card Element with other Stripe.js APIs
		const { error, paymentMethod } = await stripe.createPaymentMethod({
			type: 'card',
			card: elements.getElement(CardNumberElement),
			billing_details: {
				name: event.target.firstName.value + ' ' + event.target.lastName.value,
				email: event.target.email.value,
				phone: event.target.phone.value,
			},
			metadata: {
				coupon: event.target?.coupon?.value,
				total: total,
			},
		});

		if (error) {
			console.log('[error]', error);
			Swal.fire(error, '', 'error');
		} else {
			console.log('[PaymentMethod]', paymentMethod);
			cardElement.clear();
			cardCvcElement.clear();
			cardExpElement.clear();
			console.log(formState);
			setFormState({
				firstName: '',
				lastName: '',
				email: '',
				phone: '',
				coupon: '',
			});
			Swal.fire('Payment Received Successfully', '', 'success');
		}
	};

	return (
		<div className={classes.checkout__form__container}>
			<Grid container spacing={3}>
				<Grid item xs={9}>
					<div className={classes.form__wrapper}>
						<h3>Please Fill the form and checout</h3>
						<form id='paymentForm' onSubmit={handleSubmit}>
							<Grid container spacing={3}>
								<Grid item xs={6}>
									<TextField
										fullWidth
										style={{ width: '100%' }}
										id='outlined-basic'
										label='First Name'
										name='firstName'
										value={formState.firstName}
										onChange={inputChangeHandler}
										required
										InputLabelProps={{
											shrink: true,
										}}
										variant='outlined'
									/>
								</Grid>
								<Grid item xs={6}>
									<TextField
										fullWidth
										style={{ width: '100%' }}
										id='outlined-basic'
										label='Last Name'
										name='lastName'
										value={formState.lastName}
										onChange={inputChangeHandler}
										required
										InputLabelProps={{
											shrink: true,
										}}
										variant='outlined'
									/>
								</Grid>
								<Grid item xs={6}>
									<TextField
										fullWidth
										style={{ width: '100%' }}
										id='outlined-basic'
										name='email'
										label='Email'
										type='email'
										value={formState.email}
										onChange={inputChangeHandler}
										required
										InputLabelProps={{
											shrink: true,
										}}
										variant='outlined'
									/>
								</Grid>
								<Grid item xs={6}>
									<TextField
										fullWidth
										style={{ width: '100%' }}
										id='outlined-basic'
										label='Phone'
										name='phone'
										value={formState.phone}
										onChange={inputChangeHandler}
										required
										InputLabelProps={{
											shrink: true,
										}}
										variant='outlined'
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										fullWidth
										style={{ width: '100%' }}
										id='outlined-basic'
										name='coupon'
										label='Enter coupon / voucher code'
										type='coupon'
										value={formState.coupon}
										onChange={inputChangeHandler}
										required
										InputLabelProps={{
											shrink: true,
										}}
										variant='outlined'
									/>
								</Grid>
								<Grid item xs={12}>
									<label>
										Card number *
										<CardNumberElement
											as={TextField}
											variant='outlined'
											options={options}
											onReady={() => {
												console.log('CardNumberElement [ready]');
											}}
											onChange={() => {
												console.log('CardNumberElement [change]');
											}}
											onBlur={() => {
												console.log('CardNumberElement [blur]');
											}}
											onFocus={() => {
												console.log('CardNumberElement [focus]');
											}}
										/>
									</label>
								</Grid>
								<Grid item xs={12}>
									<label>
										Expiration date *
										<CardExpiryElement
											// options={options}
											onReady={() => {
												console.log('CardNumberElement [ready]');
											}}
											onChange={(event) => {
												console.log('CardNumberElement [change]', event);
											}}
											onBlur={() => {
												console.log('CardNumberElement [blur]');
											}}
											onFocus={() => {
												console.log('CardNumberElement [focus]');
											}}
										/>
									</label>
								</Grid>
								<Grid item xs={12}>
									<label>
										CVC *
										<CardCvcElement
											// options={options}
											onReady={() => {
												console.log('CardNumberElement [ready]');
											}}
											onChange={(event) => {
												console.log('CardNumberElement [change]', event);
											}}
											onBlur={() => {
												console.log('CardNumberElement [blur]');
											}}
											onFocus={() => {
												console.log('CardNumberElement [focus]');
											}}
										/>
									</label>
								</Grid>
								<Button
									disabled={total !== 0}
									id='paymentButton'
									type='submit'
									style={{
										width: '20%',
										margin: 'auto',
										color: '#000',
										backgroundColor: '#f08804',
										fontSize: '15px',
										borderRadius: '5px',
										border: '1px solid #000',
									}}>
									Checkout {`$${total}`}
								</Button>
							</Grid>
						</form>
					</div>
				</Grid>
				<Grid xs={3}>
					<div className={classes.total__wrapper}>
						<Typography variant='h3' component='h4'>
							Total
						</Typography>
						<Typography variant='h1' component='h2'>
							${total}
						</Typography>
					</div>
				</Grid>
			</Grid>
		</div>
	);
};

export default CheckoutForm;
