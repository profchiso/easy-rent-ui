import React from 'react';

//npm packages
import { Link } from 'react-router-dom';

//components
import { Typography, Button } from 'antd';
import logo from '../../img/rental.png';
import { PhoneOutlined } from '@ant-design/icons';
import Footer from '../common/Footer/Footer';

//styles
import './Pricing.css';

//constants
const { Title } = Typography;

const Pricing = () => {
	return (
		<div className='app-container'>
			<div className='content-container'>
				<div className=''>
					<Link to='/'>
						<img src={logo} alt='logo' className='logo-image' />
					</Link>
				</div>
				<div className='easy-rent-container '>
					<h1 className='easy-rent-text'>
						easy
						<span className='rent-color'>RENT</span>
					</h1>
				</div>
				<div className='row-separator mobile-seperator'>
					<Title level={2}>Choose a plan</Title>
				</div>
				<div className='sign-up-card-rappers plans-wrapper'>
					<div className='row-separator'>
						<div className='plan-container'>
							{/* <div className='includes'>Includes</div> */}
							<div className='plan'>
								<div className='plan-title silver'>Silver</div>
								<div className='addon'>
									<div className='addon-name'>No of Upload</div>
									<div className='addon-value'>10</div>
								</div>
								<div className='addon'>
									<div className='addon-name'>Expires</div>
									<div className='addon-value'>30 days</div>
								</div>
								<div className='addon'>
									<div className='addon-name'>Verification</div>
									<div className='addon-value'>N0</div>
								</div>
								<div className='addon'>
									<div className='addon-name'>Featured</div>
									<div className='addon-value'>N0</div>
								</div>
								<div className='addon'>
									<div className='addon-name'>Price</div>
									<div className='addon-value'>10,000</div>
								</div>
								<div className='addon checkout-btn-container'>
									<Button
										htmlType='submit'
										className='primary-button'
										shape='round'
										block
									>
										Checkout plan
									</Button>
								</div>
							</div>
							<div className='plan'>
								<div className='plan-title gold'>Gold</div>
								<div className='addon'>
									<div className='addon-name'>No of Upload</div>
									<div className='addon-value'>20</div>
								</div>
								<div className='addon'>
									<div className='addon-name'>Expires</div>
									<div className='addon-value'>30 days</div>
								</div>
								<div className='addon'>
									<div className='addon-name'>Verification</div>
									<div className='addon-value'>N0</div>
								</div>
								<div className='addon'>
									<div className='addon-name'>Featured</div>
									<div className='addon-value'>N0</div>
								</div>
								<div className='addon'>
									<div className='addon-name'>Price</div>
									<div className='addon-value'>20,000</div>
								</div>
								<div className='addon checkout-btn-container'>
									<Button
										htmlType='submit'
										className='primary-button'
										shape='round'
										block
									>
										Checkout plan
									</Button>
								</div>
							</div>
							<div className='plan'>
								<div className='plan-title diamond'>Diamond</div>
								<div className='addon'>
									<div className='addon-name'>No of Upload</div>
									<div className='addon-value'>50</div>
								</div>
								<div className='addon'>
									<div className='addon-name'>Expires</div>
									<div className='addon-value'>30 days</div>
								</div>
								<div className='addon'>
									<div className='addon-name'>Verification</div>
									<div className='addon-value'>Yes</div>
								</div>
								<div className='addon'>
									<div className='addon-name'>Featured</div>
									<div className='addon-value'>Yes</div>
								</div>
								<div className='addon'>
									<div className='addon-name'>Price</div>
									<div className='addon-value'>40,000</div>
								</div>
								<div className='addon checkout-btn-container'>
									<Button
										htmlType='submit'
										className='primary-button'
										shape='round'
										block
									>
										Checkout plan
									</Button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='row-separator phone-contact'>
					<PhoneOutlined className='phone-icon' />
					<a href='tel:+2348036009397' className='phone-number'>
						08036009397
					</a>
				</div>
				<div className='row-separator'>
					<Footer />
				</div>
			</div>
		</div>
	);
};

export default Pricing;
