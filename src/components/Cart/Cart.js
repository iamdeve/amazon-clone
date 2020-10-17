import React from 'react';
import classes from './Cart.module.css';
import DeleteIcon from '@material-ui/icons/Delete';
import { TopBar, BottomBar, CustomToaster } from '../Layout/NavBar';
import FooterTop from '../Layout/Footer/FooterTop';
import FooterBottom from '../Layout/Footer/FooterBottom';
import { useStateValue } from '../../store/StateProvider';
import { actionTypes } from '../../store/reducer';
import { Link } from 'react-router-dom';
function Cart() {
	const [{ cart, total }, dispatch] = useStateValue();

	const removeItemFromCart = (id) => {
		dispatch({
			type: actionTypes.REMOVE_FROM_CART,
			itemId: id,
		});
	};
	return (
		<>
			<TopBar />
			<BottomBar />
			<CustomToaster toast='We are delivering to your region with limited shipping options. Please expect extended delivery time.' link='/' />
			<div className={classes.cart__wrapper}>
				<div className={classes.cart__items}>
					{cart && cart.length > 0 ? (
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
										<h3>
											+ ${item.shipping} <span style={{ fontSize: '12px', color: '#ccc' }}>Shipping</span>
										</h3>
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
						<h4>
							Please add some items <Link to='/shop-now'>Shop Now</Link>
						</h4>
					)}
				</div>
				<div className={classes.cart__items__totals}>
					<div className={classes.total__items}>
						<span>Total Items</span>
						<span>{cart?.length} items</span>
					</div>
					<div className={classes.btn__checout}>
						<Link to="checkout">
							<span className={classes.check__icon}></span>
							<span>Check Out</span>
						</Link>
					</div>
					<div className={classes.total__amount}>
						<span>Total Amount</span>
						<span>${total.toFixed(2)}</span>
					</div>
				</div>
			</div>
			<FooterTop />
			<FooterBottom />
		</>
	);
}

export default Cart;
