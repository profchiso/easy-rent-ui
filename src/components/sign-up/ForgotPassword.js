import React, { useState } from "react";

//packages
import { connect } from "react-redux";

//components
import { Input, Button, Row, Col, Form } from "antd";
import { MailOutlined } from "@ant-design/icons";
import {
	forgotPassword,
	clearErrorMessage,
} from "../../actions/userAccountAction";

//styles

//constants

const ForgotPassword = ({
	changeView,
	registerReducer,
	forgotPassword,
	clearErrorMessage,
}) => {
	const { passwordResetResponse } = registerReducer;
	const [status, setStatus] = useState(false);

	const onFinish = (values) => {
		setStatus(true);
		forgotPassword(values);
		if (passwordResetResponse.errMessage !== "") {
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
	return (
		<div className='sign-up-card-rappers'>
			<Row gutter={{ xs: 8, sm: 16, md: 24 }} className='sign-up-row'>
				<Col xs={24} md={24}>
					<div className='sign-up-container'>
						<div>
							<h3>Forgot Password</h3>
						</div>
						<div
							className={`${
								passwordResetResponse.errMessage
									? ""
									: "hide-element"
							}`}>
							{passwordResetResponse.errMessage}
						</div>
						<Form
							name='passwordform'
							onFinish={onFinish}
							onFinishFailed={onFinishFailed}>
							<div className='input-container'>
								<Form.Item
									rules={[{ required: true, type: "email" }]}
									name='email'>
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
							<div className='button-container '>
								<Form.Item>
									<Button
										className='login-link'
										type='link'
										shape='round'
										onClick={() => changeView("sign-in")}>
										back
									</Button>

									<Button
										htmlType='submit'
										className='primary-button'
										shape='round'
										size='middle'
										loading={status}>
										Retrieve
									</Button>
								</Form.Item>
							</div>
						</Form>
						<div>
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
export default connect(mapStateToProps, { forgotPassword, clearErrorMessage })(
	ForgotPassword
);
