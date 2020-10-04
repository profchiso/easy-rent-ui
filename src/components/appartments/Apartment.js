import React, { useState,Component } from "react";

//packages
import { Link } from "react-router-dom";

import {
	GoogleMap,
	withScriptjs,
	withGoogleMap,
	Marker,
	InfoWindow,
} from 'react-google-maps';
import mobileMapStyle from '../map/mobileStyle.json';
import moment from "moment"
//components
import { Row, Col, Menu, Select,Button } from "antd";

import {
	HomeOutlined,
    BarChartOutlined 
	
} from "@ant-design/icons";



import house1 from "../../img/house1.jpg";
import houseMarker from "../../img/rental.png"



//styles
import "./Apartment.css";

//constants
const { Option } = Select;
const { SubMenu } = Menu;


const { InfoBox } = require('react-google-maps/lib/components/addons/InfoBox');

let apartmentLocation = [];
let lat = 6.616865;
let lng = 3.508072;
const google = window.google


const MapMarker = () => {
	 const [selectedIssue, setSelectedIssue] = useState();
	 return (
	 	<GoogleMap
	 		defaultZoom={14}
	 		center={{
				lat: lat,
	 			lng: lng,
	 		}}
			defaultOptions={{
	 			mapTypeControl: false,
	 			styles: mobileMapStyle,
	 		}}
	 	>


	 		{apartmentLocation.length &&
	 			apartmentLocation.map((issue, i) => (
	 				<Marker
	 					key={i}
	 					position={{
	 						lat: issue.data.gps.latitude,
	 						lng: issue.data.gps.longitude,
	 					}}
	 					onClick={() => {
	 						setSelectedIssue(issue);
	 					}}
	 					icon={{
	 						url: `${houseMarker}`,
	 						size: new google.maps.Size(19, 19),
	 						// eslint-disable-next-line no-undef
	 						scaledSize: new google.maps.Size(19, 19),
	 					}}
	 				/>
	 			))}
	 		{selectedIssue && (
	 			<InfoWindow
	 				position={{
	 					lat: selectedIssue.data.gps.latitude,
	 					lng: selectedIssue.data.gps.longitude,
	 				}}
	 				onCloseClick={() => {
	 					setSelectedIssue(null);
	 				}}
	 			>
	 				<div>
	 					<div>
	 						<div className='map-img-container'>
								<img
	 								alt='issue'
	 								className='issue-img'
									src={selectedIssue.data.image_url}
									style={{ width: '100%' }}
	 							/>
	 						</div>
	 						<div className='map-popup-title-div'>
								{selectedIssue.data.title}
	 						</div>
	 						<div className='fade-text map-footer'>
	 							<div>
	 								{typeof selectedIssue.data.category === 'object'
	 									? selectedIssue.data.category.name
	 									: selectedIssue.data.category}
	 							</div>
	 							<div>
	 								{moment(selectedIssue.created_date, 'YYYY-MM-DD').format(
	 									'MMM DD, YYYY'
	 								)}
	 							</div>
	 						</div>
	 					</div>
	 				</div>
				</InfoWindow>
	 		)}
		</GoogleMap>
	 );
};

const WrappedMap = withScriptjs(withGoogleMap(MapMarker));
const SingleApartment =()=> {
   
	return (
		<main className="single-apartment-container">
            <Row>
                <Col>
                    <Menu					
                        mode="horizontal"
                        className='mobile-ant-menu'>
                            <Menu.Item> <Link to="/"><HomeOutlined />Home</Link></Menu.Item>
                            <Menu.Item> <Link to="/apartments"><BarChartOutlined  />Apartments</Link></Menu.Item>
                    </Menu>
                </Col>
            </Row>
            <Row className="apartment-details">
                <Col xs={24} md={14}>
                    <section className="apartment-images-container ">
                        <img
                            alt='example'
                            src={house1}
                            className='single-apartment-image'
                        />
                    </section>
                   
                    
                </Col>
                <Col xs={24} md={10}>
                    <section className="apartment-features-container">
                        <h4>Features</h4>
                        <div>water</div>
                        <div>Alternative power</div>
                        <div>Nepa</div>
                        <div></div>
                    </section>
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
                
                </Col>
            </Row>
            <Row>
                <Col xs={24} md={24}>
                <div className='mapContainerDiv'>
				<WrappedMap
					googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAXjl3WWTUKDhCWNQgbLjzqkm6X8X7Vv24&libraries=places`}
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `400px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
				/>
			</div>
                </Col>
            </Row>
			
		</main>
    );
    
};
export default SingleApartment;
