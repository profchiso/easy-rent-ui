import React, { useState, Fragment } from "react";

//packages
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

//components
import { Button, Row, Col } from "antd";
import { register, login } from "../../actions/userAccountAction";
import ForgotPassword from "./ForgotPassword";
import Login from "./Login";
import Register from "./Register";
import Footer from "../common/Footer/Footer";
import logo from "../../img/rental.png";

//styles
import "./SignUp.css";

//constants

export const SignUp = ({ registerReducer }) => {
	const [view, setView] = useState("sign-in");
	const changeView = (view) => {
		setView(view);
	};

	return (
		<div className='app-container'>
			{localStorage.token ? <Redirect to='/dashboard' /> : null}
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
				{view === "sign-up" ? (
					<Register />
				) : view === "sign-in" ? (
					<Login changeView={changeView} />
				) : view === "forgot-password" ? (
					<Fragment>
						<ForgotPassword changeView={changeView} />
					</Fragment>
				) : (
					<Fragment></Fragment>
				)}
				<div className='sign-up-card-rappers login-container'>
					<Row
						gutter={{ xs: 8, sm: 16, md: 24 }}
						className='sign-up-row'>
						<Col xs={24} md={24}>
							<div>
								{view === "sign-up"
									? "Already have an account?"
									: "Don't have an account?"}
								<Button
									shape='round'
									className='login-link'
									type='link'
									onClick={() => {
										view === "sign-up"
											? changeView("sign-in")
											: changeView("sign-up");
									}}>
									{" "}
									{view === "sign-up" ? "Login" : "Sign up"}
								</Button>
							</div>
						</Col>
					</Row>
				</div>
				<Footer />
			</div>
		</div>
	);
};
const mapStateToProps = (state) => {
	return {
		...state,
	};
};
export default connect(mapStateToProps, { register, login })(SignUp);
