import React, { useEffect } from 'react';
import classes from './Home.module.css';

import Slider from '../Layout/Slider/Slider';
import CustomCarousel from '../Layout/CustomCarousel/CustomCarousel';
import BackToTop from '../Layout/BackToTop/BackToTop';
import { TopBar, BottomBar, CustomToaster } from '../Layout/NavBar';
import FooterTop from '../Layout/Footer/FooterTop';
import FooterBottom from '../Layout/Footer/FooterBottom';
import Slide1 from '../../assets/slider-bg-1.jpg';
import Slide2 from '../../assets/slider-bg-2.jpg';
import Slide3 from '../../assets/slider-bg-3.jpg';
import Slide4 from '../../assets/slider-bg-4.jpg';
import Slide5 from '../../assets/slider-bg-5.jpg';
import Slide6 from '../../assets/slider-bg-6.jpg';
import Slide7 from '../../assets/slider-bg-7.jpg';

import TopCatImg1_1 from '../../assets/top-category-img-1-4.png';
import TopCatImg1_2 from '../../assets/top-category-img-2-4.png';
import TopCatImg1_3 from '../../assets/top-category-img-3-4.png';
import TopCatImg1_4 from '../../assets/top-category-img-4-4.png';
import TopCatImg2 from '../../assets/top-category-img-1.jpg';
import TopCatImg3 from '../../assets/top-category-img-2.jpg';
import TopCatImg4 from '../../assets/top-category-img-3.jpg';

import disocerAmz1 from '../../assets/discover-amz-1.png';
import disocerAmz2 from '../../assets/discover-amz-2.jpg';
import disocerAmz3 from '../../assets/discover-amz-3.jpg';
import disocerAmz4 from '../../assets/discover-amz-4.jpg';
import disocerAmz5 from '../../assets/discover-amz-5.jpg';
import disocerAmz6 from '../../assets/discover-amz-6.jpg';

import products from '../../data';

import { useStateValue } from '../../store/StateProvider';
import { actionTypes } from '../../store/reducer';
const slides = [{ background: Slide1 }, { background: Slide2 }, { background: Slide3 }, { background: Slide4 }, { background: Slide5 }, { background: Slide6 }, { background: Slide7 }];
const top_category_data = [
	{
		heading: 'Shop by Category',
		images: [
			{ img: TopCatImg1_1, title: 'Computer and Accessories' },
			{ img: TopCatImg1_2, title: 'Video Games' },
			{ img: TopCatImg1_3, title: 'Baby' },
			{ img: TopCatImg1_4, title: 'Toy & Games' },
		],
		action: 'Shop Now',
		
	},
	{
		heading: 'Amazon Basics',
		images: [TopCatImg2],
		action: 'See More',
		
	},
	{
		heading: 'Electronics',
		images: [TopCatImg3],
		action: 'See More',
	},

	{
		heading: 'Gifts',
		images: [TopCatImg4],
		action: 'See More',
		
	},
	{
		heading: 'Sign in for the best experience',
		images: [],
		action: 'Sign in securily',
		show:false
	},
];
const discover_amz_data = [{ images: [disocerAmz1] }, { images: [disocerAmz2] }, { images: [disocerAmz3] }, { images: [disocerAmz4] }, { images: [disocerAmz5] }, { images: [disocerAmz6] }];

function Home() {
	useEffect(() => {
		dispatch({
			type: actionTypes.SET_DATA,
			data: products,
		});
		if (isAuthenticated) {
			top_category_data.pop();
		}else{
			top_category_data.splice(3,1)
		}
	}, []);
	const [{ data, isAuthenticated }, dispatch] = useStateValue();

	return (
		<>
			<TopBar />
			<BottomBar />
			<CustomToaster toast='We are delivering to your region with limited shipping options. Please expect extended delivery time.' link='/' />
			<div className={classes.app__home}>
				<Slider slides={slides} topCategoryData={top_category_data} />
				<CustomCarousel data={discover_amz_data} heading='Discover Amazon' customLink='Click to learn more' />
				<div className={classes.app__category__wrapper}>
					{data.map((category, id) => (
						<CustomCarousel key={id} info={false} data={category.products} heading={category.heading} customLink={category.link} />
					))}
				</div>
			</div>
			<BackToTop />
			<FooterTop />
			<FooterBottom />
		</>
	);
}

export default Home;
