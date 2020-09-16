import React from 'react';
import classes from './SignIn.module.css';
function SignIn() {
	return (
		<div className={classes.signin__wrapper}>
			<div className={classes.signin__header}>
				<a href='http://amazon.com'>
					<span></span>
				</a>
			</div>
			<div className={classes.signin__form__wrapper}>
				<h3>Sign-In</h3>
				<div className={classes.form}>
					<label>Email (phone for mobile accounts)</label>
					<input type='email' />
					<button className={[classes.btn__continue, 'btn-custom'].join(' ')}>Continue</button>
				</div>
				<div className={classes.terms}>
					By continuing, you agree to Amazon's &nbsp;
					<a href='www.amazon.com'>Conditions of Use</a>&nbsp; and&nbsp;
					<a href='www.amazon.com'>Privacy Notice.</a>
				</div>
				<div className={classes.need__help}>
					<span>
						<i className='fa fa-caret-right'></i>
					</span>
					&nbsp;
					<span>Need Help?</span>
				</div>
			</div>
		</div>
	);
}

export default SignIn;
