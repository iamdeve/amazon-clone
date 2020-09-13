import data from '../data';
export const initialState = {
	data: [...data],
	authenticate: false,
	user: JSON.parse(localStorage.getItem('amzUser')) ? JSON.parse(localStorage.getItem('amzUser')) : null,
};

export const actionTypes = {
	SET_DATA: 'SET_DATA',
	SET_USER: 'SET_USER',
	LOGOUT_USER: 'LOGOUT_USER',
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

		default:
			return state;
	}
};

export default reducer;
