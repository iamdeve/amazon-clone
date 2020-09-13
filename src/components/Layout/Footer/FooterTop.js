import React from 'react';
import classes from './FooterTop.module.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const footer_links_1 = [
	{ link: 'careers', text: 'Careers' },
	{ link: 'blog', text: 'Blog' },
	{ link: 'about', text: 'About Amazon' },
	{ link: 'invester-relation', text: 'Investor Relations' },
	{ link: 'amazon-devices', text: 'Amazon Devices' },
	{ link: 'tours', text: 'Amazon Tours' },
];
const footer_links_2 = [
	{ link: 'sell-on-amazon', text: 'Sell on Amazon' },
	{ link: 'amazon-business', text: 'Sell on Amazon Business' },
	{ link: 'sell-apps', text: 'Sell Your Apps on Amazon' },
	{ link: 'affiliate', text: 'Become an Affiliate' },
	{ link: 'advertise-product', text: 'Advertise Your Products' },
	{ link: 'self-publish', text: 'Self-Publish with Us' },
	{ link: 'amazon-hub', text: 'Host an Amazon Hub' },
	{ link: 'make-meony', text: '› See More Make Money with Us' },
];
const footer_links_3 = [
	{ link: 'business-card', text: 'Amazon Business Card' },
	{ link: 'shop-with-point', text: 'Shop with Points' },
	{ link: 'reload-balance', text: 'Reload Your Balance' },
	{ link: 'currency-convertor', text: 'Amazon Currency Converter' },
];

const footer_links_4 = [
	{ link: 'covid-19', text: 'Amazon and COVID-19' },
	{ link: 'your-account', text: 'Your Account' },
	{ link: 'your-orders', text: 'Your Orders' },
	{ link: 'shipping-rates-and-policy', text: 'Shipping Rates & Policies' },
	{ link: 'return-replacement', text: 'Returns & Replacements' },
	{ link: 'content-devices', text: 'Manage Your Content and Devices' },
	{ link: 'amazon-assistant', text: 'Amazon Assistant' },
	{ link: 'help', text: 'Help' },
];
function FooterTop() {
	return (
		<>
			<div className={classes.footer__top_container}>
				<Container className={classes.footer__container}>
					<div className={classes.footer__container__wrapper}>
						<Row>
							<Col>
								<div className={classes.gtk__us}>
									<h5>Get to Know Us</h5>
									<ul className={classes.footer__link}>
										{footer_links_1.map((link, id) => (
											<li key={id}>
												<Link to={`/${link.link}`}>{link.text}</Link>
											</li>
										))}
									</ul>
								</div>
							</Col>
							<Col>
								<div className={classes.affiliate__program}>
									<h5>Make Money With Us</h5>
									<ul className={classes.footer__link}>
										{footer_links_2.map((link, id) => (
											<li key={id}>
												<Link to={`/${link.link}`}>{link.text}</Link>
											</li>
										))}
									</ul>
								</div>
							</Col>
							<Col>
								<div className={classes.payment__product}>
									<h5>Amazon Payment Product</h5>
									<ul className={classes.footer__link}>
										{footer_links_3.map((link, id) => (
											<li key={id}>
												<Link to={`/${link.link}`}>{link.text}</Link>
											</li>
										))}
									</ul>
								</div>
							</Col>
							<Col>
								<div className={classes.help__you}>
									<h5>Let Us Help You</h5>
									<ul className={classes.footer__link}>
										{footer_links_4.map((link, id) => (
											<li key={id}>
												<Link to={`/${link.link}`}>{link.text}</Link>
											</li>
										))}
									</ul>
								</div>
							</Col>
						</Row>
					</div>
				</Container>
			</div>
			<div className={classes.footer__footer}>
				<div className={classes.footer__items}>
					<div className={classes.footer__logo}>
						<Link to='/'>
							<span className={[classes.nav__sprite, classes.footer__sprite].join(' ')}></span>
						</Link>
					</div>
					<div className={classes.footer__language_btn}>
						<button className={[classes.btn__footer].join(' ')}>
							<span></span>
							<span>English</span>
							<span></span>
						</button>
					</div>
					<div className={classes.footer__currency}>
						<button className={[classes.btn__footer].join(' ')}>
							<span>$</span> <span>USD - U.S. Dollar</span>​
						</button>
					</div>
					<div className={classes.footer__country}>
						<button className={[classes.btn__footer].join(' ')}>
							<span></span>
							<span>Pakistan</span>
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default FooterTop;
