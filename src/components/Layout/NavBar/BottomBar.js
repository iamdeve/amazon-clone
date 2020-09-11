import React from 'react';
import classes from './BottomBar.module.css';
import { Link } from 'react-router-dom'
const deals_potions = ["Today's Deals", 'Customer', 'Service', 'Gift', 'Cards', 'Registry', 'Sell'];

function BottomBar() {
	return (
		<div className={classes.app__bottom__bar}>
			<div className={classes.bootom__bar__left}>
				<div className={classes.marker}>
					<Link to='/' className={classes.bootom__link}>
						<span className={[classes.nav__sprite, classes.bottom__marker].join(' ')}></span>
						<div className={classes.delievery__address}>
							<span>Deliever to</span>
							<span>Pakistan</span>
						</div>
					</Link>
				</div>
			</div>
			<div className={classes.bootom__bar__middle}>
				{deals_potions.map((deal, id) => (
					<Link key={id} to={`/${deal}`} className={classes.bootom__link}>
						{deal}
					</Link>
				))}
			</div>
			<div className={classes.bootom__bar__right}>
				<Link to='/' className={classes.bootom__link}>
					Amazon's response to COVID-19
				</Link>
			</div>
		</div>
	);
}

export default BottomBar;
