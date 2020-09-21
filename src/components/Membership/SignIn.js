import React, { useState, useEffect } from 'react';
import classes from './SignIn.module.css';
import Helmet from 'react-helmet';
import { Link, useHistory } from 'react-router-dom';
import { auth, provider } from '../../firebase';
import Swal from 'sweetalert2';
import db from '../../firebase';
import { useStateValue } from '../../store/StateProvider';
import { actionTypes } from '../../store/reducer';
function SignIn() {
	const [{ isAuthenticated }, dispatch] = useStateValue();
	const history = useHistory();
	const [help, setHelp] = useState(false);
	const [passwordWrapper, setPasswordWrapper] = useState(false);
	const [signInForm, setSignInForm] = useState({
		email: '',
		password: '',
	});
	const showHelpHandler = () => {
		if (help) {
			setHelp(false);
		} else {
			setHelp(true);
		}
	};

	useEffect(() => {
		var user = auth.currentUser;
		console.log(user);
		if (user !== null || isAuthenticated) {
			history.push('cart');
		}
	}, []);

	const signFormChangeHandler = (e) => {
		const { name, value } = e.target;

		setSignInForm({
			...signInForm,
			[name]: value,
		});
	};
	const continueHandler = () => {
		setPasswordWrapper(true);
	};
	const changeEmailHandler = () => {
		setPasswordWrapper(false);
	};

	const getUserData = async () => {
		const snapshot = await db.collection('users').where('email', '==', signInForm.email).get();
		return snapshot.docs.map((doc) => doc.data());
	};
	const signIn = async () => {
		try {
			let user = await auth.signInWithEmailAndPassword(signInForm.email, signInForm.password);
			if (user) {
				console.log();
				let token = await user.user.getIdToken();
				let data = await getUserData();
				console.log(data);
				data.token = token;
				localStorage.setItem('amzUser', JSON.stringify(data));
				dispatch({
					type: actionTypes.SET_USER_AUTH,
					auth: true,
				});
				dispatch({
					type: actionTypes.SET_USER,
					user: data,
				});
				history.push('/profile');
			}
		} catch (err) {
			console.log(err);
			Swal.fire(err.message, '', 'error');
		}
	};
	return (
		<>
			<div className={classes.signin__wrapper}>
				<Helmet>
					<title>Amazon Sign-In</title>
				</Helmet>
				<div className={classes.signin__header}>
					<a href='http://amazon.com'>
						<span></span>
					</a>
				</div>
				<div className={classes.signin__form__wrapper}>
					<h1>Sign-In</h1>
					{!passwordWrapper ? (
						<div className={classes.form}>
							<label>Email (phone for mobile accounts)</label>
							<input type='email' value={signInForm.email} name='email' onChange={signFormChangeHandler} />
							<button disabled={signInForm.email === ''} onClick={continueHandler} className={[classes.btn__continue, 'btn-custom'].join(' ')}>
								Continue
							</button>
						</div>
					) : null}

					{passwordWrapper ? (
						<div className={classes.form__password}>
							<div className={classes.email}>
								<span>{signInForm.email}</span>&nbsp;{' '}
								<span onClick={changeEmailHandler} className={classes.change__link}>
									change
								</span>
							</div>
							<label> Password</label>
							<input type='password' value={signInForm.password || ''} name='password' onChange={signFormChangeHandler} />
							<button onClick={signIn} className={[classes.btn__sign__in, 'btn-custom'].join(' ')}>
								Sign-In
							</button>
						</div>
					) : null}

					<div className={classes.terms}>
						By continuing, you agree to Amazon's &nbsp;
						<a href='www.amazon.com'>Conditions of Use</a>&nbsp; and&nbsp;
						<a href='www.amazon.com'>Privacy Notice.</a>
					</div>
					<div className={classes.need__help}>
						<span>{help ? <i className='fa fa-caret-down'></i> : <i className='fa fa-caret-right'></i>}</span>
						&nbsp;
						<span onClick={showHelpHandler}>Need Help?</span>
						{help ? (
							<ul className={classes.help__dropdown}>
								<li>
									<Link to='www.amazon.com'>Forgot your password?</Link>
								</li>
								<li>
									<Link to='www.amazon.com'>Other issues with Sign-In</Link>
								</li>
							</ul>
						) : null}
					</div>
				</div>
				<div className={classes.new__account__btn__wrapper}>
					<div className={classes.new__text}>
						<span>New to Amazon?</span>
					</div>
					<div className={classes.new__link}>
						<Link to='/sign-up'>Create your Amazon Account</Link>
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

export default SignIn;
