import data from '../data';
export const initialState = {
	data: [...data],
	authenticate: false,
	user: JSON.parse(localStorage.getItem('amzUser')) ? JSON.parse(localStorage.getItem('amzUser')) : null,
	cart: JSON.parse(sessionStorage.getItem('userCart'))?.cart ? JSON.parse(sessionStorage.getItem('userCart')).cart : [],
	total: JSON.parse(sessionStorage.getItem('userCart'))?.total ? JSON.parse(sessionStorage.getItem('userCart')).total:0,
	isAuthenticated: JSON.parse(localStorage.getItem('amzUser')) ? true : false,
};

export const actionTypes = {
	SET_DATA: 'SET_DATA',
	SET_USER: 'SET_USER',
	SET_USER_AUTH: 'SET_USER_AUTH',
	LOGOUT_USER: 'LOGOUT_USER',
	ADD_TO_CART: 'ADD_TO_CART',
	ADD_ITEM_QTY: 'ADD_ITEM_QTY',
	REMOVE_ITEM_QTY: 'REMOVE_ITEM_QTY',
	REMOVE_FROM_CART: 'REMOVE_FROM_CART',
	REMOVE_AUTH: 'REMOVE_AUTH',
	EMPTY_USER_CART:'EMPTY_USER_CART'
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
			sessionStorage.setItem('userCart', JSON.stringify({cart:state.cart, total:state.total}))
			return {
				...state,
				cart: state.cart,
			};
		case actionTypes.REMOVE_FROM_CART:
			let cart = state.cart.filter((item) => item.id !== action.itemId.id);
			state.total = state.total - parseFloat(action.itemId.price) - (action.itemId.shipping ? parseFloat(action.itemId.shipping) : 0);
			sessionStorage.setItem('userCart', JSON.stringify({cart:state.cart, total:state.total}))
			return {
				...state,
				cart: cart,
			};
		case actionTypes.ADD_ITEM_QTY:
			return {
				...state,
				total: action.total,
			};
		case actionTypes.REMOVE_ITEM_QTY:
			return {
				...state,
				total: action.total,
			};
		case actionTypes.SET_USER_AUTH:
			return{
				...state,
				isAuthenticated: action.auth,
			}
		case actionTypes.REMOVE_AUTH:
			if(!action.auth){
				localStorage.removeItem('amzUser');
			}
			return {
				...state,
				isAuthenticated: action.auth,
			};
		default:
			return state;
	}
};

export default reducer;
