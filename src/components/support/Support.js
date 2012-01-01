import React from 'react';

//npm packages
import { Link } from 'react-router-dom';

//components
import { Typography, Form, Row, Col, Input, Button } from 'antd';
import logo from '../../img/rental.png';
import { MailOutlined, UserOutlined } from '@ant-design/icons';
import Footer from '../common/Footer/Footer';

//styles
import './Support.css';

//constants
const { Text, Title } = Typography;

const Support = () => {
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
				<div className='row-separator'>
					<Title level={3}>Having any issue whatsoever?</Title>
					<Text strong className='heading'>
						Get in touch with our support team
					</Text>
				</div>
				<div className='sign-up-card-rappers'>
					<div className='row-separator'>
						<Form name='regform' onFinish={''} onFinishFailed={''}>
							<Row gutter={{ xs: 8, sm: 16, md: 24 }}>
								<Col xs={24} md={12} className='support-column'>
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
						</Form>
					</div>
					<div className='row-separator'>
						<Form name='regform' onFinish={''} onFinishFailed={''}>
							<Row gutter={{ xs: 8, sm: 16, md: 24 }}>
								<Col xs={24} md={24}>
									<Form.Item
										rules={[{ required: true, type: 'email' }]}
										name='email'
									>
										<Input
											placeholder='Subject'
											className='input-box subject-input'
											size='middle'
											prefix={<MailOutlined />}
											allowClear={true}
											onChange={''}
										/>
									</Form.Item>
								</Col>
							</Row>
						</Form>
					</div>
					<div className='row-separator'>
						<Form name='regform' onFinish={''} onFinishFailed={''}>
							<Row gutter={{ xs: 8, sm: 16, md: 24 }}>
								<Col xs={24} md={24}>
									<Form.Item
										rules={[{ required: true, type: 'email' }]}
										name='email'
									>
										<Input
											placeholder='Your message'
											className='input-box subject-input'
											size='middle'
											prefix={<MailOutlined />}
											allowClear={true}
											onChange={''}
										/>
									</Form.Item>
								</Col>
							</Row>
						</Form>
					</div>
					<div className='row-separator'>
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
					</div>
				</div>
				<div className='row-separator'>
					<Footer />
				</div>
			</div>
		</div>
	);
};

export default Support;
