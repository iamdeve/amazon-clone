import React, { useState, useEffect } from 'react';
import classes from './SignUp.module.css';
import Helmet from 'react-helmet';
import { Link, useHistory } from 'react-router-dom';
import { auth, provider } from '../../firebase';
import db from '../../firebase';
import Swal from 'sweetalert2';
import {useStateValue } from '../../store/StateProvider';
function SignUp() {
    let history = useHistory();
    const [ { isAuthenticated } , dispatch] = useStateValue()
	const [signUpForm, setSignUpForm] = useState({
		fullName: '',
		email: '',
		password: '',
	});
	useEffect(() => {
		var user = auth.currentUser;
		console.log(user);
		if (user !== null || isAuthenticated) {
			history.push('/profile');
		}
	}, []);
	const signUpFormChangeHandler = (e) => {
		const { name, value } = e.target;

		setSignUpForm({
			...signUpForm,
			[name]: value,
		});
	};

	const SignUp = () => {
		auth.createUserWithEmailAndPassword(signUpForm.email, signUpForm.password)
			.then((result) => {
				db.collection('users')
					.add({ ...signUpForm })
					.then((user) => {
						history.push('/sign-in');
					})
					.catch((err) => {
						console.log(err.message);
						Swal.fire('This email already exists', 'Please use another email', 'error');
					});
			})
			.catch((err) => {
				console.log(err.message);
				Swal.fire(err.message, '', 'error');
			});
	};
	return (
		<>
			<div className={classes.SignUp__wrapper}>
				<Helmet>
					<title>Amazon Sign-Up</title>
				</Helmet>
				<div className={classes.SignUp__header}>
					<a href='http://amazon.com'>
						<span></span>
					</a>
				</div>
				<div className={classes.SignUp__form__wrapper}>
					<h1>Sign-Up</h1>
					<div className={classes.form}>
						<label>Full Name</label>
						<input type='text' value={signUpForm.fullName} name='fullName' onChange={signUpFormChangeHandler} />
					</div>
					<div className={classes.form}>
						<label>Email</label>
						<input type='email' value={signUpForm.email} name='email' onChange={signUpFormChangeHandler} />
					</div>
					<div className={classes.form}>
						<label>Password</label>
						<input type='password' value={signUpForm.password || ''} name='password' onChange={signUpFormChangeHandler} />
						<button onClick={SignUp} className={[classes.btn__sign__in, 'btn-custom'].join(' ')}>
							Sign-In
						</button>
					</div>
				</div>
				<div className={classes.new__account__btn__wrapper}>
					<div className={classes.new__text}>
						<span>Already Have Account?</span>
					</div>
					<div className={classes.new__link}>
						<Link to='/sign-in'>Go to Sign In</Link>
					</div>
				</div>
				<div className={[classes.divider__wrapper, 'divider__custom'].join(' ')}></div>
				<div className={classes.bottom__link}>
					<ul>
						<li>
							<Link to='/condition-of-use'>Conditions of Use</Link>
						</li>
						<li>
							<Link to='/privacy-notice'>Privacy Notice</Link>
						</li>
						<li>
							<Link to='/help'>Help</Link>
						</li>
					</ul>
				</div>
				<div className={classes.footer}>
					<p>
						<small>© 1996-{new Date().getUTCFullYear()}, Amazon.com, Inc. or its affiliates</small>
					</p>
				</div>
			</div>
		</>
	);
}

export default SignUp;
