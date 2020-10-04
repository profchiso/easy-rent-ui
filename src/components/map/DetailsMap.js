/* eslint-disable no-undef */
import React, { Component, useState } from 'react';

//NPM packages
import {
	GoogleMap,
	withScriptjs,
	withGoogleMap,
	Marker,
	InfoWindow,
} from 'react-google-maps';
import moment from 'moment';
import { connect } from 'react-redux';

//components

//styles
import './Map.css';

import mobileMapStyle from './mobileStyle.json';

//images

// import greenCircle from '../../../image/green_circle_marker_wb.png';
// import redCircle from '../../../image/red_circle_marker_wb.png';
// import orangeCircle from '../../../image/orange_circle_marker_wb.png';
// import grayCircle from '../../../image/gray_circle_marker_wb.png';

// global constants
// import {
// 	fetchReports,
// 	fetchSingleReport,
// } from '../../actions/fetchDataActions';
const { InfoBox } = require('react-google-maps/lib/components/addons/InfoBox');

let issueLocation = [];
let lat = 0;
let lng = 0;

const pickCenterlat = (center) => {
	lat = center.latitude;
};
const pickCenterlng = (center) => {
	lng = center.longitude;
};

const checkLocation = (reports) => {
	let hasLocation = reports.filter((report) => {
		return report.data.hasOwnProperty('gps') === true;
	});
	let hasLatLng = hasLocation.filter((report) => {
		return report.data.gps.latitude !== 0 && report.data.gps.longitude !== 0;
	});
	issueLocation = hasLatLng;
};

const dynamicMarker = (issue) => {
	let dateObj = new Date();
	let dateTimeNow = dateObj.toISOString();

	if (
		typeof issue.data.category === 'object'
			? issue.data.category.name.toLowerCase() === 'announcement'
			: issue.data.category.toLowerCase() === 'announcement'
	) {
		return greenCircle;
	} else {
		if (moment(dateTimeNow).diff(moment(issue.created_date), 'hours') <= 24) {
			return redCircle;
		} else if (
			moment(dateTimeNow).diff(moment(issue.created_date), 'days') <= 7
		) {
			return orangeCircle;
		} else {
			return grayCircle;
		}
	}
};

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
			<InfoBox
				position={new google.maps.LatLng(lat, lng)}
				options={{ closeBoxURL: ``, enableEventPropagation: true }}
			>
				<div
					style={{
						backgroundColor: `#2196f3`,
						opacity: 0.75,
						padding: `7px`,
						borderRadius: '50%',
						border: '1px solid #fff',
					}}
				>
					<div style={{ fontSize: `7px`, fontColor: `#08233B` }}></div>
				</div>
			</InfoBox>

			{issueLocation.length &&
				issueLocation.map((issue, i) => (
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
							url: `${dynamicMarker(issue)}`,
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
class DetailsMap extends Component {
	state = {
		single: this.props.single,
	};
	componentDidMount() {
		// console.log('from details map', this.state.single);
	}
	render() {
		console.log('from details map', this.props.singleReport);
		return (
			<div className='mapContainerDiv'>
				{this.props.issues.length > 0
					? checkLocation(this.props.issues)
					: checkLocation(this.props.apiData)}
				{Object.entries(this.props.singleReport).length > 0
					? pickCenterlat({
							latitude: this.props.singleReport.data.gps.latitude,
							longitude: this.props.singleReport.data.gps.longitude,
					  })
					: pickCenterlat({ latitude: 6.605874, longitude: 3.349149 })}

				{Object.entries(this.props.singleReport).length > 0
					? pickCenterlng({
							latitude: this.props.singleReport.data.gps.latitude,
							longitude: this.props.singleReport.data.gps.longitude,
					  })
					: pickCenterlng({ latitude: 6.605874, longitude: 3.349149 })}

				<WrappedMap
					googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAXjl3WWTUKDhCWNQgbLjzqkm6X8X7Vv24&libraries=places`}
					loadingElement={
						<div className='innerMapContainerDiv innerMapContainerDiv-one-report'></div>
					}
					containerElement={
						<div className='innerMapContainerDiv innerMapContainerDiv-one-report'></div>
					}
					mapElement={<div className='innerMapContainerDiv'></div>}
				/>
			</div>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		...state,
	};
};
const actions = {
	fetchReports,
	fetchSingleReport,
};
export default connect(mapStateToProps, actions)(DetailsMap);
