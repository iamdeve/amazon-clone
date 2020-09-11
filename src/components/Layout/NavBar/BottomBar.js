import React from 'react';
import classes from './BottomBar.module.css';

const deals_potions = ["Today's Deals", 'Customer', 'Service', 'Gift', 'Cards', 'Registry', 'Sell'];

function BottomBar() {
	return (
		<div className={classes.app__bottom__bar}>
			<div className={classes.bootom__bar__left}>
				<div className={classes.marker}>
					<a href='#' className={classes.bootom__link}>
						<span className={[classes.nav__sprite, classes.bottom__marker].join(' ')}></span>
						<div className={classes.delievery__address}>
							<span>Deliever to</span>
							<span>Pakistan</span>
						</div>
					</a>
				</div>
			</div>
			<div className={classes.bootom__bar__middle}>
				{deals_potions.map((deal, id) => (
					<a key={id} href={`/${deal}`} className={classes.bootom__link}>
						{deal}
					</a>
				))}
			</div>
			<div className={classes.bootom__bar__right}>
				<a href='#' className={classes.bootom__link}>
					Amazon's response to COVID-19
				</a>
			</div>
		</div>
	);
}

export default BottomBar;
