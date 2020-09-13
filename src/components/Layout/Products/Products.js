import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import classes from './Products.module.css';
import ReactImageMagnify from 'react-image-magnify';
function Products({ product }) {
	// console.log(product.images)
	const [mainImgUrl, setMainImgUrl] = useState(product.images[0]);
	const changeMainImgHandler = (imgUrl) => {
		setMainImgUrl(imgUrl);
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
										<span>List Price</span>
									</Col>
									<Col xs='2'>
										<span>{product.listPrice}</span>
									</Col>
								</Row>
							</div>
						) : (
							''
						)}
						<div className={classes.Price}>
							<Row>
								<Col xs='2'>
									<span>Price</span>
								</Col>
								<Col xs='2'>
									<span>{product.price}</span>
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
					<Col xs='3'>asdf</Col>
				</Row>
			</div>
		</div>
	);
}

export default Products;
