import data from '../data';
export const initialState = {
	data: [...data],
	authenticate: false,
	user: JSON.parse(localStorage.getItem('amzUser')) ? JSON.parse(localStorage.getItem('amzUser')) : null,
	cart: [],
};

export const actionTypes = {
	SET_DATA: 'SET_DATA',
	SET_USER: 'SET_USER',
	LOGOUT_USER: 'LOGOUT_USER',
	ADD_TO_CART: 'ADD_TO_CART',
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
			return {
				...state,
				cart: state.cart.push(action.data),
			};
		default:
			return state;
	}
};

export default reducer;
