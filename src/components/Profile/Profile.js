import React from 'react';
import { TopBar, BottomBar, CustomToaster } from '../Layout/NavBar';
import FooterTop from '../Layout/Footer/FooterTop';
import FooterBottom from '../Layout/Footer/FooterBottom';
import classes from './Profile.module.css'
function Profile() {
	return (
		<>
			<TopBar />
			<BottomBar />
			<CustomToaster toast='We are delivering to your region with limited shipping options. Please expect extended delivery time.' link='/' />
			<div className={classes.profile__wrapper}>
                Profile
            </div>
			<FooterTop />
			<FooterBottom />
		</>
	);
}

export default Profile;
