import React, { useState } from 'react';

//packages
import { connect } from 'react-redux';

//components
import { Input, Button, Form } from 'antd';
import { LockOutlined } from '@ant-design/icons';

import { updatePassword } from '../../../actions/dashboardActions';

//styles
import './Dashboard.css';

//constants

const ChangePassword = ({ updatePassword, dashboardReducers }) => {
	const { isPasswordUpdated } = dashboardReducers;
	const [status, setStatus] = useState(false);
	const onFinish = (values) => {
		updatePassword(values);
		if (isPasswordUpdated) {
			setStatus(false);
		}
	};
	const onFinishFailed = (errorInfo) => {
		console.log(errorInfo);
		if (errorInfo.errorFields.length > 0) {
			setStatus(false);
		}
	};
	const activateLoading = () => {
		setStatus(true);
	};
	return (
		<div className='sign-up-card-rappers'>
			<div className='sign-up-container'>
				<div>
					<h3 className='operation-title'>Change password</h3>
				</div>
				<Form
					name='updatePasswordForm'
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
				>
					<div className='input-container'>
						<Form.Item rules={[{ required: true }]} name='oldPassword'>
							<Input placeholder='Old password' className='input-box' />
						</Form.Item>
					</div>
					<div className='input-container'>
						<Form.Item rules={[{ required: true }]} name='newPassword'>
							<Input.Password
								placeholder='New password'
								className='input-box'
								prefix={<LockOutlined />}
							/>
						</Form.Item>
					</div>
					<div className='input-container'>
						<Form.Item rules={[{ required: true }]} name='newConfirmPassword'>
							<Input.Password
								placeholder='Confirm password'
								className='input-box'
								prefix={<LockOutlined />}
							/>
						</Form.Item>
					</div>
					<div className='button-container '>
						<Button
							htmlType='submit'
							className='primary-button'
							shape='round'
							size='middle'
							onClick={activateLoading}
							loading={status}
						>
							{isPasswordUpdated ? 'Password updated' : 'Submit'}
						</Button>
					</div>
				</Form>
			</div>
		</div>
	);
};
const mapStateToProps = (state) => {
	return {
		...state,
	};
};

export default connect(mapStateToProps, { updatePassword })(ChangePassword);
