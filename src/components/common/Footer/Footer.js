import React from "react";

//npm packages
import { Link } from "react-router-dom";

//components

//styles
import "./Footer.css";

//constants

const Footer = () => {
	return (
		<div className='footer-container'>
			<div className='footer-links'>
				<div className='footer-link'>
					<Link to='/' className='footer-anchor'>
						Privacy
					</Link>
				</div>
				<div className='footer-link'>
					<Link to='/support' className='footer-anchor'>
						Support
					</Link>
				</div>
				<div className='footer-link'>
					<Link className='footer-anchor' to='/pricing'>
						Pricing
					</Link>
				</div>
			</div>
			<div className='copyright'>
				&copy; GiftedBrain tech Apps 2019 - {new Date().getFullYear()}
			</div>
		</div>
	);
};
export default Footer;
