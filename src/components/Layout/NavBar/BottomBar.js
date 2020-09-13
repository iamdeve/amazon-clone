import React from 'react';
import classes from './BottomBar.module.css';
import { Link } from 'react-router-dom';
const deals_potions = ["Today's Deals", 'Customer', 'Service', 'Gift', 'Cards', 'Registry', 'Sell'];

function BottomBar() {
	return (
		<div className={classes.app__bottom__bar}>
			<div className={classes.bootom__bar__left}>
				<div className={classes.marker}>
					<Link to='/' className={classes.bootom__link}>
						<span className={[classes.nav__sprite, classes.bottom__marker].join(' ')}></span>
						<div className={classes.delievery__address}>
							<span>Deliver to</span>
							<span>Pakistan</span>
						</div>
					</Link>
				</div>
			</div>
			<div className={classes.bootom__bar__middle}>
				{deals_potions &&
					deals_potions.map((deal, id) => {
						let link = ''
						if (deal === "Today's Deals") {
							link = `/${deal.split("'")[0].trim().toLowerCase()}-${deal.split(' ')[1].trim().toLowerCase()}`;
						}
						return (
							<Link key={id} to={link} className={classes.bootom__link}>
								{deal}
							</Link>
						);
					})}
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
