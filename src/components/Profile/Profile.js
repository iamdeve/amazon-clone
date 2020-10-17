import React, { useEffect, useState } from 'react';
import { TopBar, BottomBar, CustomToaster } from '../Layout/NavBar';
import FooterTop from '../Layout/Footer/FooterTop';
import FooterBottom from '../Layout/Footer/FooterBottom';
import classes from './Profile.module.css';
import { useStateValue } from '../../store/StateProvider';
import db from '../../firebase';
function Profile() {
	const [{ user }, dispatch] = useStateValue();
	const [orders, setOrders] = useState([]);
	useEffect(() => {
		window.scroll({ top: 0, left: 0 });

		db.collection('users')
			.doc(user[0].id)
			.collection('orders')
			.onSnapshot((snapshot) => {
				let orders = snapshot.docs.map((doc) => doc.data());
				setOrders(orders);
			});
	}, []);

	return (
		<>
			<TopBar />
			<BottomBar />
			<CustomToaster toast='We are delivering to your region with limited shipping options. Please expect extended delivery time.' link='/' />
			<div className={classes.profile__wrapper}>
				{orders.map((order, id) => {
					console.log(order);
					return (
						<div key={id} className={classes.orders__list_wrapper}>
							<div className={classes.order__no}>
								<h3>Order Id #{JSON.parse(order.payment).id}</h3>
							</div>
							<div className={classes.orders__list}>
								<div className={classes.total__items}>
									<h3>Total Items {JSON.parse(order.items).length}</h3>

									{JSON.parse(order.items).map((items, id) => (
										<div className={classes.items}>
											<img className={classes.item_imgs} key={id} src={items.images[0]} alt={items.name} />
											<span>{items.name}</span>
										</div>
									))}
								</div>
								<div className={classes.status}>
									<h3>Status</h3>
									<span>{order.status}</span>
								</div>
								<div className={classes.total__amount}>
									<h3>Total Amount</h3>
									<span>{order.total.toFixed(2)}</span>
								</div>
								<div>
									<h3>Date</h3>
									{/* {console.log(new Date(order.date.seconds * 1000))} */}
									<span>{`${new Date(order.date.seconds * 1000).getDate()}/${new Date(order.date.seconds * 1000).getMonth() + 1}/${new Date(order.date.seconds * 1000).getFullYear()}`}</span>
								</div>
							</div>
						</div>
					);
				})}
			</div>
			<FooterTop />
			<FooterBottom />
		</>
	);
}

export default Profile;
