import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useStateValue } from '../../store/StateProvider';
import { actionTypes } from '../../store/reducer';
import { auth } from '../../firebase';
function Logout() {
	const history = useHistory();
	const [{ isAuthenticated }, dispatch] = useStateValue();

	useEffect(() => {
		if (isAuthenticated) {
			dispatch({
				type: actionTypes.REMOVE_AUTH,
				auth: false,
			});
			auth.signOut().then(() => {
				history.push('sign-in');
			});
		}else{
            history.push('sign-in');
        }
	}, []);

	return <div></div>;
}
export default Logout;
