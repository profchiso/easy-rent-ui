import React from 'react';

//packages

//components
import { Input, Button } from 'antd';

//styles
import './Dashboard.css';

//constants

const AddNewAppartment = () => {
	return (
		<div className='sign-up-card-rappers'>
			<div className='sign-up-container add-appartment-container'>
				<div>
					<h3 className='operation-title'>Add new appartment</h3>
				</div>
				<div className='input-container'>
					<Input placeholder='House Name' className='input-box' />
				</div>
				<div className='input-container'>
					<Input
						placeholder='House Address'
						className='input-box'
						size='middle'
					/>
				</div>
				<div className='input-container'>
					<Input placeholder='House Type' className='input-box' />
				</div>
				<div className='input-container'>
					<Input placeholder='State' className='input-box' />
				</div>
				<div className='input-container'>
					<Input placeholder='LGA' className='input-box' />
				</div>
				<div className='input-container'>
					<Input placeholder='House Image' className='input-box' />
				</div>
				<div className='input-container'>
					<Input placeholder='Toilet Image' className='input-box' />
				</div>
				<div className='input-container'>
					<Input placeholder='Bathroom Image' className='input-box' />
				</div>
				<div className='input-container'>
					<Input placeholder='Min Price' className='input-box' />
				</div>
				<div className='input-container'>
					<Input placeholder='Max Price' className='input-box' />
				</div>
				<div className='button-container '>
					<Button className='primary-button' shape='round' size='middle'>
						Submit
					</Button>
				</div>
			</div>
		</div>
	);
};

export default AddNewAppartment;
