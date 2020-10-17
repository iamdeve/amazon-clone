import React from 'react';
import classes from './TopCategory.module.css';
import CategoryBox from './CategoryBox';
function TopCategory({ topCategoryData }) {
	return (
		<div className={classes.top__categories}>
			<div className='container-fluid'>
				<div className='row'>
					{topCategoryData.map((data, id) => (
						<div key={id} className='col-sm-3'>
							<CategoryBox id={id} heading={data.heading} images={data.images} show={data.show} footer={data.action} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default TopCategory;
