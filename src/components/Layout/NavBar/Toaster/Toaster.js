
import React from 'react';
import classes from './Toaster.module.css';
function Toaster({ toast, link }) {
	return (
		<div className={classes.app__toaster}>
			<p>
				{toast} <a href={link}>Learn More</a>
			</p>
		</div>
	);
}

export default Toaster;
