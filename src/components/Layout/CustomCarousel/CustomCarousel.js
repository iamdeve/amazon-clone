import React from 'react';
import classes from './CustomCarousel.module.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {Link} from 'react-router-dom'
import UAParser from 'ua-parser-js';
const responsive = {
	superLargeDesktop: {
		// the naming can be any, depends on you.
		breakpoint: { max: 4000, min: 3000 },
		items: 6,
	},
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 6,
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 4,
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
	},
};
// const CustomRightArrow = ({ onClick, ...rest }) => {
// 	const {
// 		onMove,
// 		carouselState: { currentSlide, deviceType },
// 	} = rest;
// 	// onMove means if dragging or swiping in progress.
// 	return (
// 		<button className='btn' onClick={() => onClick()}>
// 			asdf
// 		</button>
// 	);
// };
// const CustomLeftArrow = ({ onClick, ...rest }) => {
// 	const {
// 		onMove,
// 		carouselState: { currentSlide, deviceType },
// 	} = rest;
// 	// onMove means if dragging or swiping in progress.
// 	return (
// 		<button className='btn' onClick={() => onClick()}>
// 			asdf
// 		</button>
// 	);
// };
function CustomCarousel({ data, heading, customLink, deviceType }) {
	return (
		<div className={classes.custom__carousel__container}>
			<div className={classes.category__header}>
				<h4>{heading} &nbsp;</h4>
				<Link to={customLink}>Click to learn more</Link>
			</div>
			<Carousel
				// nextArrow={<CustomRightArrow />}
				// prevArrow={<CustomLeftArrow />}
				swipeable={true}
				// draggable={true}
				// showDots={false}
				// ssr={true} // means to render carousel on server-side.
				infinite={true}
				// autoPlay={true}
				autoPlaySpeed={4000}
				keyBoardControl={true}
				// customTransition='all .5'
				transitionDuration={500}
				containerClass='carousel-container'
				removeArrowOnDeviceType={['tablet', 'mobile']}
				dotListClass='custom-dot-list-style'
				ssr
				// partialVisbile
				deviceType={deviceType}
				itemClass='image-item'
				responsive={responsive}>
				{data.map((item, id) => {
					return (
						<div key={id} className={classes.car_img}>
							<a href='/'>
								<img src={item.images[0]} alt={`car_img${id}`} />
							</a>
						</div>
					);
				})}
			</Carousel>
		</div>
	);
}

CustomCarousel.getInitialProps = ({ req }) => {
	let userAgent;
	if (req) {
		userAgent = req.headers['user-agent'];
	} else {
		userAgent = navigator.userAgent;
	}
	const parser = new UAParser();
	parser.setUA(userAgent);
	const result = parser.getResult();
	const deviceType = (result.device && result.device.type) || 'desktop';
	return { deviceType };
};

export default CustomCarousel;
