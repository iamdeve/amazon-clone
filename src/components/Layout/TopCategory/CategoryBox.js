import React from 'react';
import classes from './CategoryBox.module.css';
import { Link } from 'react-router-dom';

function CategoryBox({ heading, images, footer, id }) {
	return (
		<div className={classes.category__box}>
			<div>
				<div className={classes.category__box__header}>
					<h4>{heading}</h4>
				</div>
				<div className={classes.category__box__img}>
					{images.length > 1 ? (
						<div className={classes.group__images}>
							{images.map((img, id) => (
								<div key={id} className={classes.group__box}>
									<img key={id} className={classes.group__box__img} src={img.img} alt={heading} />
									<div className={classes.title}>{img.title}</div>
								</div>
							))}
						</div>
					) : images.length > 0 ? (
						<img className={classes.cat__box_img} src={images[0]} alt={heading} />
					) : (
						<button className='btn-custom'>{footer}</button>
					)}
				</div>
			</div>
			<div className={classes.category__box__footer}>{id === 3 ? null : <Link to='/shop-now'>{footer}</Link>}</div>
		</div>
	);
}

export default CategoryBox;
