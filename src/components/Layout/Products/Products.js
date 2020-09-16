import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import classes from './Products.module.css';
import ReactImageMagnify from 'react-image-magnify';
import Chip from '@material-ui/core/Chip';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import { useStateValue } from '../../../store/StateProvider';
import { actionTypes } from '../../../store/reducer';
function Products({ product }) {
	// console.log(product.images)
	const [{ cart, total }, dispatch] = useStateValue();
	const [colorBorder, setColorBorder] = useState(1);
	const [qty, setQty] = useState(0);
	const [mainImgUrl, setMainImgUrl] = useState(product.images[0]);
	useEffect(() => {
		return () => {
			setQty(0);
		};
	}, []);
	const changeMainImgHandler = (imgUrl) => {
		setMainImgUrl(imgUrl);
	};
	const addQtyHandler = () => {
		setQty(qty + 1);
		console.log(total, parseFloat(product.price));
		dispatch({
			type: actionTypes.ADD_ITEM_QTY,
			total: total + parseFloat(product.price),
		});
	};
	const deleteQtyHandler = () => {
		if (qty - 1 === -1) {
			console.log(qty - 1 === -1);
			console.log(qty);
			return;
		} else {
			setQty(qty - 1);

			if (qty === 1 && cart.filter((i) => i.id === product.id).length > 0) {
				console.log(total - parseFloat(product.price) - parseFloat(product.shipping));
				dispatch({
					type: actionTypes.REMOVE_ITEM_QTY,
					total: total - parseFloat(product.price) - parseFloat(product.shipping),
				});
			} else {
				console.log(total - parseFloat(product.price));
				dispatch({
					type: actionTypes.REMOVE_ITEM_QTY,
					total: total - parseFloat(product.price),
				});
			}
		}
	};
	const selectColorHandler = (id) => {
		[0, 1, 2].forEach((i) => {
			let prevChip = $(`#chip__color__${i}`)[0];
			prevChip.style.setProperty('border', 'none', '!important');
			prevChip.style.boxShadow = 'none';
		});
		let chip = $(`#chip__color__${id}`)[0];
		console.log(chip);
		chip.style.setProperty('border', '2px solid orange', '!important');
		chip.style.boxShadow = '0 0 0 2px orange';
	};

	const selectSizeHandler = (id) => {
		[0, 1, 2].forEach((i) => {
			let prevChip = $(`#chip__size__${i}`)[0];
			prevChip.style.setProperty('border', 'none', '!important');
			prevChip.style.boxShadow = 'none';
		});
		let chip = $(`#chip__size__${id}`)[0];
		console.log(chip);
		chip.style.setProperty('border', '2px solid orange', '!important');
		chip.style.boxShadow = '0 0 0 2px orange';
	};
	const addToCart = () => {
		setQty(qty + 1);
		dispatch({
			type: actionTypes.ADD_TO_CART,
			item: product,
		});
	};
	return (
		<div className={classes.single__products}>
			<div className='container-fluid'>
				<Row>
					<Col xs='4'>
						<div className={classes.product__images_wrapper}>
							<div className={classes.product__images}>
								{product.images.map((img, id) => (
									<div key={id} className={classes.img__wrap} onMouseEnter={() => changeMainImgHandler(img)}>
										<img src={img} alt={product.link} />
									</div>
								))}
							</div>
							<div className={classes.product__main__images}>
								<ReactImageMagnify
									{...{
										smallImage: {
											alt: product.link,
											isFluidWidth: true,
											src: mainImgUrl,
										},
										largeImage: {
											src: mainImgUrl,
											width: 600,
											height: 400,
										},
									}}
								/>
								{/* <img src={product.images[0]} alt={product.link} /> */}
							</div>
						</div>
					</Col>
					<Col xs='5'>
						<h5>{product.name}</h5>
						<div className={classes.item__rating}>
							{parseInt(product.stars.split('.')[0]) === 4 && parseInt(product.stars.split('.')[1]) ? (
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
							&nbsp;{product.rating} &nbsp; ratings
						</div>
						<div className={classes.divider}></div>

						{product.listPrice ? (
							<div className={classes.list__price}>
								<Row>
									<Col xs='2'>
										<span className={classes.span__auto}>List Price</span>
									</Col>
									<Col xs='10'>
										<span>$ {product.listPrice}</span>
									</Col>
								</Row>
							</div>
						) : (
							''
						)}
						<div className={classes.Price}>
							<Row>
								<Col xs='2'>
									<span className={classes.span__auto}>Price</span>
								</Col>
								<Col xs='10'>
									<span className={classes.product__price}>$ {product.price}</span>{' '}
									{product.shipping ? (
										<span className={classes.shipping__price}>
											$ <span>{product.shipping}</span> Shipping &amp; Import Fees Deposit to Pakistan Details
										</span>
									) : (
										''
									)}
								</Col>
							</Row>
						</div>

						{product.save ? (
							<div className={classes.save__price}>
								<Row>
									<Col xs='2'>
										<span className={classes.span__auto}>Save</span>
									</Col>
									<Col xs='10'>
										<span>{product.save}</span>
									</Col>
								</Row>
							</div>
						) : (
							''
						)}
						<div className={classes.sizes}>
							<Row>
								<Col xs='2'>
									<span className={classes.span__auto}>Sizes</span>
								</Col>
								<Col xs='10'>
									{product.size.map((size, id) => (
										<span key={id} className={classes.size}>
											<Chip id={`chip__size__${id}`} className={classes.chip__border} onClick={() => selectSizeHandler(id)} clickable={true} label={size} style={{ color: '#777' }} />
										</span>
									))}
								</Col>
							</Row>
						</div>
						<div className={classes.colors}>
							<Row>
								<Col xs='2'>
									<span className={classes.span__auto}>Color</span>
								</Col>
								<Col xs='10'>
									{product.color.map((col, id) => (
										<span key={id} className={classes.col}>
											<Chip id={`chip__color__${id}`} className={classes.chip__border} onClick={() => selectColorHandler(id)} clickable={true} label={col.charAt(0).toUpperCase() + col.slice(1)} style={{ color: '#777' }} />
										</span>
									))}
								</Col>
							</Row>
						</div>
						<div className={classes.product_description}>
							<ul>
								{product.description.map((des, id) => {
									return <li key={id}>{des}</li>;
								})}
							</ul>
						</div>
					</Col>
					<Col xs='3'>
						<div className={classes.check__out__wrapper}>
							<div className={classes.share_item}>
								<span>
									<Link to='/'>Share</Link>
								</span>
								<span className={[classes.social_icon, classes.email].join(' ')}></span>
								<span className={[classes.social_icon, classes.facebook].join(' ')}></span>
								<span className={[classes.social_icon, classes.twitter].join(' ')}></span>
								<span className={[classes.social_icon, classes.pinterest].join(' ')}></span>
							</div>

							<div className={classes.check__out}>
								<div className={classes.item__price}>
									<span>Item Price</span>
									<span>${product.price}</span>
								</div>
								<div className={classes.item__shipping}>
									<span>Shipping Price</span>
									<span> + ${product.shipping}</span>
								</div>
								<div className={classes.total__price}>
									<span>Total</span>
									<span>${total.toFixed(2)}</span>
								</div>
								{cart.filter((i) => i.id === product.id).length > 0 ? (

								<div className={classes.qty}>
									<span>Qty</span>
									<span>{qty}</span>
									<div className={classes.qty__handlers}>
										<button onClick={deleteQtyHandler}>-</button>
										<button onClick={addQtyHandler}>+</button>
									</div>
								</div>
								) : null}
								<div className={classes.btn__add__to__card}>
									<button onClick={addToCart}>
										<span className={classes.add__to__cart_icon}></span>
										<span>{cart.filter((i) => i.id === product.id).length > 0 ? 'Added to Card' : 'Add to Cart'}</span>
									</button>
								</div>
								<div className={classes.btn__checout}>
									<button>
										<span className={classes.check__icon}></span>
										<span>Check Out</span>
									</button>
								</div>
								<div className={classes.deliver__add}>
									<span></span> <Link to='/'>Deliver to Pakistan</Link>
								</div>
							</div>
						</div>
					</Col>
				</Row>
			</div>
		</div>
	);
}

export default Products;
