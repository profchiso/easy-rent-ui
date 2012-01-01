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
				<div className='sign-up-card-rappers'>
					<div className='row-separator'>
						<div className='plan-container'>
							<div>Free</div>
							<div>Silver</div>
							<div>Gold</div>
							<div>Diamond</div>
						</div>
						{/* <Form name='regform' onFinish={''} onFinishFailed={''}>
							<Row gutter={{ xs: 8, sm: 16, md: 24 }}>
								<Col xs={24} md={6} className='support-column'>
									<Form.Item
										rules={[{ required: true, type: 'text' }]}
										name='email'
									>
										<Input
											placeholder='Name'
											className='input-box'
											size='middle'
											prefix={<UserOutlined />}
											allowClear={true}
											onChange={''}
										/>
									</Form.Item>
								</Col>
								<Col xs={24} md={6} className=''>
									<Form.Item
										rules={[{ required: true, type: 'email' }]}
										name='email'
									>
										<Input
											placeholder='johndoe@mail.com'
											className='input-box'
											size='middle'
											prefix={<MailOutlined />}
											allowClear={true}
											onChange={''}
										/>
									</Form.Item>
								</Col>
							</Row>
						</Form> */}
					</div>

					{/* <div className='row-separator'>
						<Button
							htmlType='submit'
							className='primary-button'
							shape='round'
							size='middle'
							onClick={''}
							loading={''}
						>
							Send
						</Button>
					</div> */}
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
