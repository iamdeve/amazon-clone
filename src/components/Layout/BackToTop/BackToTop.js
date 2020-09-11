import React from 'react';
import classes from './BackToTop.module.css';
import { withRouter } from 'react-router-dom';
function BackToTop() {
	const backToTopHandler = () => {
		window.scrollTo(0, 0);
	};
	return (
		<div onClick={backToTopHandler} className={classes.app__back_to_top}>
			Back To Top
		</div>
	);
}

export default withRouter(BackToTop);
