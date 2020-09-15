import data from '../data';
export const initialState = {
	data: [...data],
	authenticate: false,
	user: JSON.parse(localStorage.getItem('amzUser')) ? JSON.parse(localStorage.getItem('amzUser')) : null,
	cart: [],
	total: 0,
};

export const actionTypes = {
	SET_DATA: 'SET_DATA',
	SET_USER: 'SET_USER',
	LOGOUT_USER: 'LOGOUT_USER',
	ADD_TO_CART: 'ADD_TO_CART',
	ADD_ITEM_QTY: 'ADD_ITEM_QTY',
	REMOVE_ITEM_QTY:'REMOVE_ITEM_QTY',
	REMOVE_FROM_CART: 'REMOVE_FROM_CART',
};

const reducer = (state, action) => {
	console.log(action);
	switch (action.type) {
		case actionTypes.SET_USER:
			return {
				...state,
				user: action.user,
			};
		case actionTypes.LOGOUT_USER:
			return {
				...state,
				user: action.user,
			};
		case actionTypes.SET_DATA:
			return {
				...state,
				data: action.data,
			};
		case actionTypes.ADD_TO_CART:
			for (let i = 0; i < state.cart.length; i++) {
				let item = state.cart[i];
				if (item.id === action.item.id) {
					return {
						...state,
						cart: state.cart,
					};
				}
			}
			state.cart.push(action.item);
			state.total = state.total + parseFloat(action.item.price) + (action.item.shipping ? parseFloat(action.item.shipping) : 0);
			return {
				...state,
				cart: state.cart,
			};
		case actionTypes.REMOVE_FROM_CART:
			let cart = state.cart.filter((item) => item.id !== action.itemId.id);
			state.total = state.total - parseFloat(action.itemId.price) - (action.itemId.shipping ? parseFloat(action.itemId.shipping) : 0);
			return {
				...state,
				cart: cart,
			};
		case actionTypes.ADD_ITEM_QTY:
			let total = state.total + parseFloat(action.total);
			return {
				...state,
				total: total,
			};
		case actionTypes.REMOVE_ITEM_QTY:
			let rtotal = state.total - parseFloat(action.total);
			return {
				...state,
				total: rtotal,
			};
		default:
			return state;
	}
};

export default reducer;
