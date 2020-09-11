import React from 'react';
import classes from './FooterBottom.module.css';
import { Container } from 'react-bootstrap';

const footer_bottom_links = [
	{
		id: '001',
		text: 'Amazon Music',
		subText: 'Stream millions \n of songs',
		link: '/',
	},
	{
		id: '002',
		text: 'Amazon Advertising',
		subText: 'Find, attract, and \n engage customers',
		link: '/',
	},
	{
		id: '003',
		text: 'Amazon Drive',
		subText: 'Cloud storage \n from Amazon',
		link: '/',
	},
	{
		id: '004',
		text: '6pm',
		subText: 'Score deals \n on fashion brands',
		link: '/',
	},
	{
		id: '005',
		text: 'AbeBooks',
		subText: 'Books, art \n & collectibles',
		link: '/',
	},
	{
		id: '006',
		text: 'ACX',
		subText: 'Audiobook Publishing \n Made Easy',
		link: '/',
	},
	{
		id: '007',
		text: 'Alexa',
		subText: 'Actionable Analytics \n for the Web',
		link: '/',
	},
	{
		id: '008',
		text: 'Alexa',
		subText: 'Sell on Amazon \n Start a Selling Account',
		link: '/',
	},
	{
		id: '009',
		text: 'Amazon Business',
		subText: 'Everything For \n Your Business',
		link: '/',
	},
	{
		id: '010',
		text: 'AmazonGlobal',
		subText: 'Ship Orders \n Internationally',
		link: '/',
	},
	{
		id: '011',
		text: 'Home Services',
		subText: 'Experienced Pros \n Happiness Guarantee',
		link: '/',
	},
	{
		id: '012',
		text: 'Amazon Ignite',
		subText: 'Sell your original Pros \n Digital Educational \n Resources',
		link: '/',
	},
	{
		id: '013',
		text: 'Amazon Rapids',
		subText: 'Fun stories for \n kids on the go',
		link: '/',
	},
	{
		id: '014',
		text: 'Amazon Web Services',
		subText: 'Scalable Cloud \n Computing Services',
		link: '/',
	},
	{
		id: '015',
		text: 'Audible',
		subText: 'Listen to Books & Original \n Audio Performances',
		link: '/',
	},
	{
		id: '016',
		text: 'Book Depository',
		subText: 'Books With Free \n Delivery Worldwide',
		link: '/',
	},
	{
		id: '017',
		text: 'Box Office Mojo',
		subText: 'Find Movie \n Box Office Data',
		link: '/',
	},
	{
		id: '018',
		text: 'ComiXology',
		subText: 'Thousands of \n Digital Comics',
		link: '/',
	},
	{
		id: '019',
		text: 'CreateSpace',
		subText: 'Indie Print Publishing \n Made Easy',
		link: '/',
	},
	{
		id: '020',
		text: 'DPReview',
		subText: 'Digital \n Photography	',
		link: '/',
	},
	{
		id: '021',
		text: 'East Dane',
		subText: "Designer Men's \n Fashion",
		link: '/',
	},
	{
		id: '022',
		text: 'Fabric',
		subText: 'Sewing, Quilting \n & Knitting',
		link: '/',
	},
	{
		id: '023',
		text: 'Goodreads',
		subText: 'Book reviews \n & recommendations',
		link: '/',
	},
	{
		id: '024',
		text: 'IMDb',
		subText: 'Movies, TV \n & Celebrities',
		link: '/',
	},
	{
		id: '025',
		text: 'IMDbPro',
		subText: 'Get Info Entertainment \n & Professionals Need',
		link: '/',
	},
	{
		id: '026',
		text: 'Kindle Direct Publishing',
		subText: 'Indie Digital Publishing \n Made Easy',
		link: '/',
	},
	{
		id: '027',
		text: 'Prime Video Direct',
		subText: 'Video Distribution \n Made Easy',
		link: '/',
	},
	{
		id: '028',
		text: 'Shopbop',
		subText: 'Designer \n Fashion Brandsy',
		link: '/',
	},
	{
		id: '029',
		text: 'Woot!',
		subText: 'Deals and \n Shenanigans',
		link: '/',
	},
	{
		id: '030',
		text: 'Zappos',
		subText: 'Shoes & \n Clothing',
		link: '/',
	},
	{
		id: '031',
		text: 'Ring',
		subText: 'Smart Home \n Security Systems',
		link: '/',
	},
	{
		id: '032',
		text: 'eero WiFi',
		subText: 'Stream 4K Video \n in Every Room',
		link: '/',
	},
	{
		id: '033',
		text: 'Neighbors App',
		subText: 'Real-Time Crime \n & Safety Alerts	',
		link: '/',
	},
	{
		id: '034',
		text: 'Amazon Subscription Boxes',
		subText: 'Top subscription boxes – right to your door',
		link: '/',
	},
	{
		id: '035',
		text: 'PillPack',
		subText: 'Pharmacy Simplified	',
		link: '/',
	},
	{
		id: '036',
		text: 'Amazon Second Chance',
		subText: 'Pass it on, trade it in, \n give it a second life',
		link: '/',
	},
];

function FooterBottom() {
	return (
		<div className={classes.footer__bottom__wrapper}>
			<div className='container'>
				<div className={classes.footer__bottom}>
					{footer_bottom_links.map((links) => (
						<div className={classes.links}>
							<a href={links.link}>
								<span className={classes.text}> {links.text}</span>
								<span className={classes.subText}> {links.subText}</span>
							</a>
						</div>
					))}
				</div>
				<div className={classes.footer__copyright}>
					<ul>
						<li>
							<a href='/'>Conditions of Use</a>
						</li>
						<li>
							<a href='/'>Privacy Notice</a>
						</li>
						<li>
							<a href='/'>Interest-Based Ads</a>
						</li>
					</ul>
					<span>&copy; 1996-{new Date().getFullYear()}, Amazon.com, Inc. or its affiliates</span>
				</div>
			</div>
		</div>
	);
}

export default FooterBottom;
