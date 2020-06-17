import React, { useState } from 'react';

//npm packages
import { Link } from 'react-router-dom';

//components
import { Typography, Form, Row, Col, Input, Button } from 'antd';
import logo from '../../img/rental.png';
import {
	MailOutlined,
	UserOutlined,
	PhoneOutlined,
	InfoCircleOutlined,
} from '@ant-design/icons';
import Footer from '../common/Footer/Footer';

//styles
import './Support.css';

//constants
const { Text, Title } = Typography;

const Support = () => {
	const [status, setStatus] = useState(false);
	const activateLoading = () => {
		setStatus(true);
	};

	const onFinish = (values) => {
		console.log(values);
	};
	const onFinishFailed = (errorInfo) => {
		console.log(errorInfo);
		setStatus(false);
	};
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
					<Title level={3}>Having any issue whatsoever?</Title>
					<Text strong className='heading'>
						Get in touch with our support team
					</Text>
				</div>
				<div className='sign-up-card-rappers'>
					<Form
						name='contactform'
						onFinish={onFinish}
						onFinishFailed={onFinishFailed}
					>
						<div className='row-separator'>
							<Row gutter={{ xs: 8, sm: 16, md: 24 }}>
								<Col xs={24} md={12} className='support-column'>
									<Form.Item
										rules={[{ required: true, type: 'text' }]}
										name='name'
									>
										<Input
											placeholder='John Doe'
											className='input-box'
											size='middle'
											prefix={<UserOutlined />}
											allowClear={true}
											onChange={''}
										/>
									</Form.Item>
								</Col>
								<Col xs={24} md={12} className=''>
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
						</div>
						<div className='row-separator'>
							<Row gutter={{ xs: 8, sm: 16, md: 24 }}>
								<Col xs={24} md={24}>
									<Form.Item
										rules={[{ required: true, type: 'text' }]}
										name='subject'
									>
										<Input
											placeholder='Subject'
											className='input-box subject-input'
											size='middle'
											prefix={<InfoCircleOutlined />}
											allowClear={true}
											onChange={''}
										/>
									</Form.Item>
								</Col>
							</Row>
						</div>
						<div className='row-separator'>
							<Row gutter={{ xs: 8, sm: 16, md: 24 }}>
								<Col xs={24} md={24}>
									<Form.Item
										rules={[{ required: true, type: 'text' }]}
										name='message'
									>
										<Input.TextArea
											placeholder='Your message'
											className='input-box subject-input'
											size='middle'
											prefix={<MailOutlined />}
											allowClear={true}
											onChange={''}
											rows={4}
										/>
									</Form.Item>
								</Col>
							</Row>
						</div>
						<div className='row-separator'>
							<Form.Item>
								<Button
									htmlType='submit'
									className='primary-button'
									shape='round'
									size='middle'
									onClick={activateLoading}
									loading={status}
								>
									Send
								</Button>
							</Form.Item>
						</div>
					</Form>
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

export default Support;
