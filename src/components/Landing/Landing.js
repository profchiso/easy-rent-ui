import React, { useState, Fragment } from 'react';

//packages
import { Link } from 'react-router-dom';

//components
import { Typography, Button, Steps, Row, Col } from 'antd';
import logo from '../../img/rental.png';

//styles
import './Landing.css';

//constants
const { Text, Title } = Typography;
const { Step } = Steps;

const Landing = () => {
	const [view, setView] = useState(0);
	const changeView = () => {
		setView(view + 1);
	};
	const backToHome = () => {
		setView(0);
	};
	return (
		<div className='app-container'>
			<div className='content-container'>
				<div className=''>
					<Link to='/' onClick={backToHome}>
						<img src={logo} alt='logo' className='logo-image' />
					</Link>
				</div>
				<div className='easy-rent-container '>
					<h1 className='easy-rent-text'>
						easy
						<span className='rent-color'>RENT</span>
					</h1>
				</div>
				{view === 0 ? (
					<Fragment>
						<div className='content-section'>
							<Title level={3}>Your rent made easy!!!</Title>
							<Text strong className='heading'>
								Get you appartment with these three simple steps.
							</Text>
							<div className='content-section steps'>
								<Steps>
									<Step
										status='process'
										title='Search'
										description='Search for appartment in your desired location.'
									/>
									<Step
										status='process'
										title='Pay'
										description='Make payment for your desired appartment.'
									/>
									<Step
										status='process'
										title='Pack-in'
										description='Locate and pack-in to your desired appartment.'
									/>
								</Steps>
							</div>
						</div>
						<div className='content-section button-container '>
							<Button
								className='primary-button'
								shape='round'
								size='large'
								onClick={changeView}
							>
								Get started
							</Button>
						</div>
					</Fragment>
				) : view === 1 ? (
					<Fragment>
						<div className='card-rappers'>
							<Row gutter={{ xs: 8, sm: 16, md: 24 }}>
								<Col xs={24} md={12}>
									<div className=' button-container '>
										<Link to='/appartments'>
											<Button
												className='primary-button'
												shape='round'
												size='large'
												onClick={changeView}
											>
												I want to rent.
											</Button>
										</Link>
									</div>
								</Col>
								<Col xs={24} md={12}>
									<div className='button-container '>
										<Link to='/sign-up'>
											<Button
												className='primary-button'
												shape='round'
												size='large'
												onClick={changeView}
											>
												I have house to let.
											</Button>
										</Link>
									</div>
								</Col>
							</Row>
						</div>
					</Fragment>
				) : (
					<Fragment></Fragment>
				)}
			</div>
		</div>
	);
};

export default Landing;
