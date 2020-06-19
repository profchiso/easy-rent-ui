import React, { useState } from 'react';

//packages
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import TwitterLogin from 'react-twitter-login';

import { connect } from 'react-redux';

//components
import { Input, Button, Row, Col, Divider, Form } from 'antd';
import {
	UserOutlined,
	MailOutlined,
	PhoneOutlined,
	LockOutlined,
} from '@ant-design/icons';
import { register, clearErrorMessage } from '../../actions/userAccountAction';
import {
	facebookAuth,
	twitterAuth,
	googleAuth,
} from '../../actions/oauthActions';

import facebook from '../../img/facebook.png';
import twitter from '../../img/twitter.png';
import google from '../../img/google.png';

//styles

//constants

const Register = ({
	registerReducer,
	register,
	clearErrorMessage,
	oauthReducer,
}) => {
	const { isSuccessful, error } = registerReducer;
	const [status, setStatus] = useState(false);
	const activateLoading = () => {
		setStatus(true);
	};
	const onFinish = (values) => {
		register(values);
		if (isSuccessful) {
			setStatus(false);
		}
	};
	const onFinishFailed = (errorInfo) => {
		setStatus(false);
	};
	const onChange = () => {
		clearErrorMessage();
		setStatus(false);
	};
	const responseFromFacebook = (response) => {
		const userData = {};

		if (response) {
			userData.oauthEmail = response.email;
			userData.facebookId = response.id;
			userData.name = response.name;
			userData.avatar = response.picture.data.url;
			console.log(userData);
			facebookAuth(userData);
		}
	};
	const responseFromGoogle = (response) => {
		console.log(response);
	};

	const responseFromTwitter = (err, data) => {
		console.log(err, data);
	};

	return (
		<div className='sign-up-card-rappers'>
			<Row gutter={{ xs: 8, sm: 16, md: 24 }} className='sign-up-row'>
				<Col xs={24} md={24}>
					<div className='sign-up-container'>
						<div>
							<h3>Sign up</h3>
						</div>
						<div
							className={`${
								error.errMessage ? '' : 'hide-element'
							} err-message`}
						>
							{error.errMessage}
						</div>
						<Form
							name='regform'
							onFinish={onFinish}
							onFinishFailed={onFinishFailed}
						>
							<div className='input-container'>
								<Form.Item rules={[{ required: true }]} name='name'>
									<Input
										placeholder='Fullname'
										className='input-box'
										prefix={<UserOutlined />}
										allowClear={true}
										onChange={onChange}
									/>
								</Form.Item>
							</div>
							<div className='input-container'>
								<Form.Item
									rules={[{ required: true, type: 'email' }]}
									name='email'
								>
									<Input
										placeholder='Email'
										className='input-box'
										size='middle'
										prefix={<MailOutlined />}
										allowClear={true}
										onChange={onChange}
									/>
								</Form.Item>
							</div>
							<div className='input-container'>
								<Form.Item rules={[{ required: true }]} name='phone'>
									<Input
										placeholder='Phone'
										className='input-box'
										prefix={<PhoneOutlined />}
										allowClear={true}
										onChange={onChange}
									/>
								</Form.Item>
							</div>
							<div className='input-container'>
								<Form.Item rules={[{ required: true }]} name='password'>
									<Input.Password
										placeholder='Password'
										className='input-box'
										allowClear={true}
										prefix={<LockOutlined />}
										onChange={onChange}
									/>
								</Form.Item>
							</div>
							<div className='input-container'>
								<Form.Item rules={[{ required: true }]} name='confirmPassword'>
									<Input.Password
										placeholder='Confirm Password'
										className='input-box'
										allowClear={true}
										prefix={<LockOutlined />}
										onChange={onChange}
									/>
								</Form.Item>
							</div>
							<div className='button-container '>
								<Form.Item>
									<Button
										htmlType='submit'
										className='primary-button'
										shape='round'
										size='middle'
										onClick={activateLoading}
										loading={status}
									>
										Submit
									</Button>
								</Form.Item>
							</div>
						</Form>
						<div className='input-container'>
							<Divider>Or sign in with</Divider>
						</div>
						<div className='social-login-container input-container'>
							<div>
								<FacebookLogin
									appId='915689715608678'
									fields='name,email,picture'
									callback={responseFromFacebook}
									cssClass='my-facebook-button-class'
									textButton=''
									icon={
										<img
											src={facebook}
											alt='facebook'
											className='social-icon'
										/>
									}
								/>
							</div>
							<div>
								<TwitterLogin
									authCallback={responseFromTwitter}
									consumerKey={'CONSUMER_KEY'}
									consumerSecret={'CONSUMER_SECRET'}
									callbackUrl={'CALLBACK_URL'}
								>
									<img src={twitter} alt='twitter' className='social-icon' />
								</TwitterLogin>
							</div>
							<div>
								<GoogleLogin
									clientId={
										'658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com'
									}
									onSuccess={responseFromGoogle}
									onFailure={responseFromGoogle}
									className='google-login'
								>
									<img src={google} alt='google' className='social-icon' />
								</GoogleLogin>
							</div>
						</div>
						<div className='term-and condi'>
							<p>
								By using easyRENT, you agree to our Terms
								<br />
								,Data Policy and Cookies Policy .
							</p>
						</div>
					</div>
				</Col>
			</Row>
		</div>
	);
};
const mapStateToProps = (state) => {
	return {
		...state,
	};
};
export default connect(mapStateToProps, {
	register,
	clearErrorMessage,
	facebookAuth,
	twitterAuth,
	googleAuth,
})(Register);
