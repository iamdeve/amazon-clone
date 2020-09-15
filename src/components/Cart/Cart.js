import React from 'react';
import classes from './Cart.module.css';
import DeleteIcon from '@material-ui/icons/Delete';
import { useStateValue } from '../../store/StateProvider';
import { actionTypes } from '../../store/reducer';
import { Link } from 'react-router-dom'
function Cart() {
	const [{ cart }, dispatch] = useStateValue();

	const removeItemFromCart = (id) => {
		dispatch({
			type: actionTypes.REMOVE_FROM_CART,
			itemId: id,
		});
	};
	return (
		<div className={classes.cart__wrapper}>
			<div className={classes.cart__items}>
				{cart.length > 0 ? (
					cart.map((item, id) => {
						return (
							<div key={id} className={classes.item__wrapper}>
								<div className={classes.item__img}>
									<img src={item.images[0]} alt={`item images ${id}`} />
								</div>
								<div className={classes.item__desc}>
									<h5>{item.name}</h5>
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
										&nbsp;{item.rating} ratings
									</div>
								</div>
								<div className={classes.item__price}>
									<h3>${item.price}</h3>
									<button className={classes.remove__btn} onClick={() => removeItemFromCart(item)} title='Delete from Item'>
										<span>
											<DeleteIcon />
										</span>
										<span>Remove From Cart</span>
									</button>
								</div>
							</div>
						);
					})
				) : (
					<h4>Please add some items <Link to="/shop-now">Shop Now</Link></h4>
				)}
			</div>
			<div className={classes.cart__items__totals}></div>
		</div>
	);
}

export default Cart;
