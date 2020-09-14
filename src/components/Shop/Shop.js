import React, { useEffect, useState } from 'react';
import classes from './Shop.module.css';
import { useParams } from 'react-router-dom';
import { useStateValue } from '../../store/StateProvider';
import CustomCarousel from '../Layout/CustomCarousel/CustomCarousel';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Products from '../Layout/Products/Products';
function Shop() {
	let { category, product } = useParams();
	const [products, setProduct] = useState({});
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
				}
			}
		}
	}, [category, product]);
	return (
		<div className={classes.products_lists_wrapper}>
			<Breadcrumbs className={classes.BreadCrumbs} aria-label='breadcrumb'>
				<Link color='inherit' to='/'>
					Home
				</Link>
				<Link color='inherit' href='/shop-now'>
					All Product
				</Link>
				{category ? (
					<Link color='inherit' href='/shop-now'>
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
			{category === undefined ? (
				data.map((category, id) => <CustomCarousel key={id} info={true} data={category.products} heading={category.heading} customLink={category.link} />)
			) : Object.keys(products).length > 0 ? (
				category !== undefined && product !== undefined ? (
					<div>
						<Products product={products.products.filter((p) => p.id === product)[0]} />
					</div>
				) : (
					<CustomCarousel info={true} data={products.products} heading={products.heading} customLink={products.link} />
				)
			) : null}
		</div>
	);
}

export default Shop;
