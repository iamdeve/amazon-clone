import React, { useEffect, useState } from 'react';
import classes from './Shop.module.css';
import { useParams } from 'react-router-dom';
import { useStateValue } from '../../store/StateProvider';
import CustomCarousel from '../Layout/CustomCarousel/CustomCarousel';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Products from '../Layout/Products/Products';
import { Row, Col } from 'react-bootstrap';
function Shop() {
	let { category, product } = useParams();
	const [products, setProduct] = useState({});
	const [filteredProducts, setFilteredProducts] = useState({});
	const [minPriceRange, setMinPriceRange] = useState(1);
	const [maxPriceRange, setMaxPriceRange] = useState(500);
	const [ratingRange, setRatingRange] = useState(0);
	const [{ data }, dispatch] = useStateValue();

	useEffect(() => {
		if (category !== undefined) {
			window.scrollTo(0, 0);
			category = category
				.split('-')
				.map((cat) => {
					return cat.charAt(0).toUpperCase() + cat.slice(1);
				})
				.join(' ');

			for (let i = 0; i < data.length; i++) {
				if (data[i].heading === category) {
					console.log(data[i]);
					setProduct(data[i]);
					setFilteredProducts(data[i]);
				}
			}
		}
	}, [category, product]);

	const minPriceChangeFilterHandler = (e) => {
		setMinPriceRange(e.target.value);
		let prdcts = products.products.filter((item) => parseFloat(item.price) >= parseFloat(e.target.value));
		// console.log(prdcts)
		setFilteredProducts({ ...products, products: [...prdcts] });
	};
	const maxPriceChangeFilterHandler = (e) => {
		setMaxPriceRange(e.target.value);
		let prdcts = products.products.filter((item) => parseFloat(item.price) >= parseFloat(minPriceRange) && parseFloat(item.price) <= parseFloat(e.target.value));
		// console.log(prdcts)
		setFilteredProducts({ ...products, products: [...prdcts] });
	};
	const ratingChangeFilterHandler = (e) => {
		setRatingRange(e.target.value);
		let ratings = products.products.filter((item) => parseFloat(item.rating.split(',').join('')) >= parseFloat(e.target.value));
		// console.log(prdcts)
		setFilteredProducts({ ...products, products: [...ratings] });
	};
	return (
		<div className={classes.products_lists_wrapper}>
			<Breadcrumbs className={classes.BreadCrumbs} aria-label='breadcrumb'>
				<Link color='inherit' to='/'>
					Home
				</Link>
				<Link color='inherit' to='/shop-now'>
					All Product
				</Link>
				{category ? (
					<Link color='inherit' to='/shop-now'>
						{category
							? category
									.split('-')
									.map((cat) => {
										return cat.charAt(0).toUpperCase() + cat.slice(1);
									})
									.join(' ')
							: ''}
					</Link>
				) : null}

				{category ? (
					<Typography color='textPrimary'>
						{product && Object.keys(products).length > 0
							? `${products.products.filter((p) => p.id === product)[0].name.split(' ')[0]} ${products.products.filter((p) => p.id === product)[0].name.split(' ')[1]} ${products.products.filter((p) => p.id === product)[0].name.split(' ')[2]}`
							: ''}
					</Typography>
				) : null}
			</Breadcrumbs>

			{category !== undefined && product === undefined ? (
				<div className={classes.product__filter}>
					<Row>
						<Col>
							<div className={[classes.price__range]}>
								<label>Filter By Price Min</label>
								<input onChange={minPriceChangeFilterHandler} type='range' value={minPriceRange} step='1' min='1' max='500' />
								<span>$ {minPriceRange}</span>
							</div>
						</Col>
						<Col>
							<div className={[classes.price__range]}>
								<label>Filter By Price Max</label>
								<input onChange={maxPriceChangeFilterHandler} type='range' value={maxPriceRange} step='1' min='1' max='500' />
								<span>$ {maxPriceRange}</span>
							</div>
						</Col>
						<Col>
							<div className={[classes.rating__range]}>
								<label>Filter By Rating</label>
								<input onChange={ratingChangeFilterHandler} type='range' value={ratingRange} step='100' min='1' max='100100' />
								<span>{ratingRange}</span>
							</div>
						</Col>
					</Row>
				</div>
			):null}
			{category === undefined ? (
				data.map((category, id) => <CustomCarousel key={id} info={true} data={category.products} heading={category.heading} customLink={category.link} />)
			) : Object.keys(products).length > 0 ? (
				category !== undefined && product !== undefined ? (
					<div>
						<Products product={products.products.filter((p) => p.id === product)[0]} />
					</div>
				) : (
					<CustomCarousel info={true} data={filteredProducts.products} heading={products.heading} customLink={products.link} />
				)
			) : null}
		</div>
	);
}

export default Shop;
