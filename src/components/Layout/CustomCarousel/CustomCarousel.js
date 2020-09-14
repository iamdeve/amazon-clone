import React from 'react';
import classes from './CustomCarousel.module.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';
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
function CustomCarousel({ info, data, heading, customLink, deviceType }) {
	return (
		<div className={classes.custom__carousel__container}>
			<div className={classes.category__header}>
				<h4>{heading} &nbsp;</h4>
				<Link to={`/shop-now/${heading.toLowerCase().split(' ').join('-')}`}>Click to learn more</Link>
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
							{info ? (
								<div className={classes.item__info__wrapper}>
									<div className={classes.item__rating}>
										{parseInt(item.stars.split('.')[0]) === 4 && parseInt(item.stars.split('.')[1]) ? (
											<span>
												<span style={{ color: '#febd69' }} className='fa fa-star'></span>
												<span style={{ color: '#febd69' }} className='fa fa-star'></span>
												<span style={{ color: '#febd69' }} className='fa fa-star'></span>
												<span style={{ color: '#febd69' }} className='fa fa-star'></span>
												<span style={{ color: '#febd69' }} className='fa fa-star-half'></span>
											</span>
										) : (
											<span>
												<span style={{ color: '#febd69' }} className='fa fa-star'></span>
												<span style={{ color: '#febd69' }} className='fa fa-star'></span>
												<span style={{ color: '#febd69' }} className='fa fa-star'></span>
												<span style={{ color: '#febd69' }} className='fa fa-star'></span>
												<span style={{ color: 'white' }} className='fa fa-star'></span>
											</span>
										)}
										&nbsp;{item.rating}
									</div>
									<div className={classes.item__name}>{`${item.name.split(' ')[0]} ${item.name.split(' ')[1]} ${item.name.split(' ')[2]}`}</div>
									<div className={classes.item__name}>${item.price}</div>
									<div className={classes.item__add__to__cart}>
										<button className={classes.btn__add_to__cart}>
											<span></span> <span>Add to Cart</span>
										</button>
									</div>
									<div className={classes.item__view__product}>
										<Link to={`/shop-now/${heading.toLowerCase().split(' ').join('-')}/${item.id}`} title="View Product" className={classes.btn__view__product}>
											<span></span> <span></span>
										</Link>
									</div>
								</div>
							) : null}
							<Link to={`/shop-now/${heading.toLowerCase().split(' ').join('-')}/${item.id}`}>
								<img src={item.images[0]} alt={`car_img${id}`} />
							</Link>
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
