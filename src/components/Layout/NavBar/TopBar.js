import React, { useState } from 'react';
import classes from './TopBar.module.css';
import { IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Dropdown, DropdownButton, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import PK from '../../../assets/pk.jpg';
// const languages = ['English - EN', 'Español - ES', '简体中文 - ZH', 'Deutsch - DE', 'Português - PT', '繁體中文 - ZH', '한국어 - KO', 'עברית - HE'];
function TopBar() {
	const [focused, setFocused] = useState(false);
	const inputFocusHandler = (e) => {
		setFocused(true);
	};
	const inputBlurHandler = (e) => {
		setFocused(false);
	};
	return (
		<div className={classes.app__topbar_nav_container}>
			<div className={classes.topbar__nav__left}>
				<IconButton>
					<MenuIcon className={classes.top_nav_menu_btn} fontSize='large' />
				</IconButton>
				<div className={classes.topbar__logo}>
					<Link to='/' className={classes.nav__logo__link}>
						<span className={[classes.nav__sprite, classes.nav__logo__base].join(' ')}></span>
					</Link>
				</div>
			</div>
			<div className={classes.topbar__nav__middle}>
				<div className={[classes.topbar__form__container, focused ? classes.Focus : ''].join(' ')}>
					<div className={classes.form__categories}>
						<DropdownButton className={classes.category__dropdown} title='All'>
							<Dropdown.Item as={Link} to='#/action-1'>
								Action
							</Dropdown.Item>
							<Dropdown.Item as={Link} to='#/action-2'>
								Another action
							</Dropdown.Item>
							<Dropdown.Item as={Link} to='#/action-3'>
								Something else
							</Dropdown.Item>
						</DropdownButton>
					</div>
					<div className={classes.from__input}>
						<input onFocus={inputFocusHandler} onBlur={inputBlurHandler} type='search' />
					</div>
					<div className={classes.form__icon}>
						<IconButton>
							<SearchIcon className={classes.from__search__icon} fontSize='large' />
						</IconButton>
					</div>
				</div>
			</div>
			<div className={classes.topbar__nav__right}>
				<div className={classes.language__dropdown}>
					<Button id='language__dropdown'>
						<img className={classes.language__img} src={PK} alt='language img' />
						<span>
							&nbsp; <i className='fa fa-caret-down'></i>
						</span>
					</Button>
					<div className={classes.back__drop}></div>
					<div className={classes.top__bar_dropdown}>
						<div className={classes.top__bar_dropdown__menu}>
							<div className={classes.language__dropdown__1st_step}>
								Change language <Link to='/'>Learn more </Link>
							</div>
							<div className={classes.language__dropdown__2st_step}>English - EN</div>
							<div className='divider'></div>
							<div className={classes.language__dropdown__3st_step}>
								Change currency <Link to=''>Learn more</Link>
							</div>
							<div className={classes.language__dropdown__4st_step}>
								<span>$ - USD - U.S. Dollar</span> <Link to="/">Change</Link>
							</div>
							<img className={classes.language__img} src={PK} alt='language img' /> You are shopping on Amazon.com.
							<div>
								<Link to='/'>Change country/region.</Link>
							</div>
						</div>
					</div>
				</div>

				<div className={classes.account_list}>
					<Button id='account_list'>
						<span className={classes.nav__small_text}>Hello, Sign In</span>
						<span className={classes.nav__big__text}>
							Account &amp; List &nbsp;<i className='fa fa-caret-down'></i>
						</span>
					</Button>
				</div>

				<div className={classes.return}>
					<a href='/'>
						<span className={classes.nav__small_text}>Return</span>
						<span className={classes.nav__big__text}>&amp; Orders</span>
					</a>
				</div>
				<div className={classes.cart}>
					<a href='/'>
						<span className={classes.cart__number}>23</span>
						<span className={[classes.nav__sprite, classes.nav__cart].join(' ')}></span>
						<span className={classes.nav__big__text}>&nbsp; Cart</span>
					</a>
				</div>
			</div>
		</div>
	);
}

export default TopBar;
