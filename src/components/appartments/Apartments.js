import React, { useState } from "react";

//packages
import { Link } from "react-router-dom";
import NaijaStates from "naija-state-local-government";

//components
import { Row, Col, Affix, Card, Drawer, Button, Select, Slider } from "antd";
import {
	EnvironmentOutlined,
	DollarOutlined,
	PhoneOutlined,
	HomeOutlined,
	MenuOutlined,
	CloseOutlined,
} from "@ant-design/icons";
import house1 from "../../img/house1.jpg";
import house2 from "../../img/house2.jpeg";
import Footer from "../common/Footer/Footer";

//styles
import "./Apartment.css";

//constants
const { Option } = Select;

const Apartment = () => {
	const [drawerVisible, setDrawerVisible] = useState(false);
	const [selectedState, setSelectedState] = useState("abia");
	const [selectedLGA, setSelectedLGA] = useState();
	const NIGERIA_STATES = NaijaStates.states();

	const showDrawer = () => {
		setDrawerVisible(!drawerVisible);
	};
	const closeDrawer = () => {
		setDrawerVisible(false);
	};
	const onStateChange = (value) => {
		if (value !== "" && value !== undefined) {
			setSelectedState(value);
		}
	};
	const onLGAChange = (value) => {
		if (value !== "" && value !== undefined) {
			setSelectedLGA(value);
			console.log(selectedLGA);
		}
	};

	const onChange = (value) => {
		console.log("onChange: ", value);
	};

	const onAfterChange = (value) => {
		console.log("onAfterChange: ", value);
	};
	const onHouseTypeChange = (value) => {
		console.log(value);
	};
	return (
		<main>
			<Row>
				<Col xs={24} md={5}>
					<Affix>
						<div className='filter-pane  dashboard-filter-pane'>
							<div className='app-name '>
								<Link to='/'>
									<h1 className='easy-rent-text  easy-rent-text-mobile'>
										easy
										<span className='rent-color'>RENT</span>
									</h1>
								</Link>
							</div>
							<div className='drawer-container filter-on-big-screen'>
								<div className='sign-up-card-rappers filter-pane-box appartment-filter-pane'>
									<div className='sign-up-container '>
										<div>
											<h3>Customize your search</h3>
										</div>
										<div className='input-container filter'>
											<div>
												<h4 className='filter-title'>
													State
												</h4>
											</div>
											<div>
												<Select
													placeholder='Select state'
													onChange={onStateChange}
													allowClear={true}
													className='input-box'
													onSelect={onStateChange}
													style={{
														borderRadius: "20px",
														width: "100%",
													}}>
													{NIGERIA_STATES.map(
														(state) => {
															return (
																<Option
																	key={state}
																	value={
																		state
																	}>
																	{state}
																</Option>
															);
														}
													)}
												</Select>
											</div>
										</div>
										<div className='input-container filter'>
											<div>
												<h4 className='filter-title'>
													LGA
												</h4>
											</div>
											<div>
												<Select
													placeholder='Select LGA'
													onChange={onLGAChange}
													onSelect={onLGAChange}
													allowClear={true}
													className='input-box'
													style={{
														borderRadius: "20px",
														width: "100%",
													}}>
													{(selectedState !== "" ||
														selectedState !==
															undefined) &&
														NaijaStates.lgas(
															selectedState
														).lgas.map(
															(
																selectedStateLGAs
															) => {
																return (
																	<Option
																		key={
																			selectedStateLGAs
																		}
																		value={
																			selectedStateLGAs
																		}>
																		{
																			selectedStateLGAs
																		}
																	</Option>
																);
															}
														)}
												</Select>
											</div>
										</div>
										<div className='input-container filter'>
											<div>
												<h4 className='filter-title'>
													Price
												</h4>
											</div>
											<div>
												<Slider
													range={true}
													step={100}
													defaultValue={[20, 50]}
													onChange={onChange}
													onAfterChange={
														onAfterChange
													}
													min={0}
													max={100}
												/>
											</div>
										</div>
										<div className='input-container filter'>
											<div>
												<h4 className='filter-title'>
													Type
												</h4>
											</div>
											<div>
												<Select
													placeholder='Select Type'
													onChange={onHouseTypeChange}
													onSelect={onHouseTypeChange}
													allowClear={true}
													className='input-box'
													style={{
														borderRadius: "20px",
														width: "100%",
													}}>
													<Option value='oneRoom'>
														One room
													</Option>
													<Option value='oneRoomSelfcon'>
														One room selfcon
													</Option>
													<Option value='oneRoomAndParlour'>
														One room and parlour
													</Option>
													<Option value='miniFlat'>
														Mini flat
													</Option>
													<Option value='twoBedroomFlat'>
														Two bedroom flat
													</Option>
													<Option value='threeBedroomFlat'>
														Three bedroom flat
													</Option>
													<Option value='duplex'>
														Duplex
													</Option>
												</Select>
											</div>
										</div>

										<div className='button-container '>
											<Button
												className='primary-button'
												shape='round'
												size='middle'>
												Filter
											</Button>
										</div>
									</div>
								</div>
							</div>
							<div className='footer-on-side-bar'>
								<Footer />
							</div>
						</div>
						<div className='show-on-mobile mobile-menu'>
							<div className='easy-rent-container '>
								<Link to='/'>
									<h1 className='easy-rent-text  easy-rent-text-mobile'>
										easy
										<span className='rent-color'>RENT</span>
									</h1>
								</Link>
							</div>
							<div>
								<h1 className='easy-rent-text easy-rent-text-mobile'>
									{drawerVisible ? (
										<CloseOutlined onClick={closeDrawer} />
									) : (
										<MenuOutlined onClick={showDrawer} />
									)}
									<Drawer
										placement='left'
										closable={false}
										onClose={closeDrawer}
										visible={drawerVisible}
										width='90%'>
										<div className='drawer-container'>
											<div className='drawer-header filter-drawer-header'>
												<Link to='/'>
													<h1 className='easy-rent-text  easy-rent-text-mobile'>
														easy
														<span className='rent-color'>
															RENT
														</span>
													</h1>
												</Link>
											</div>
											<div className='sign-up-card-rappers filter-pane-box '>
												<div className='sign-up-container '>
													<div>
														<h3>
															Customize your
															search
														</h3>
													</div>
													<div className='input-container filter'>
														<div>
															<h4 className='filter-title'>
																State
															</h4>
														</div>
														<div>
															<Select
																placeholder='Select state'
																onChange={
																	onStateChange
																}
																allowClear={
																	true
																}
																className='input-box'
																onSelect={
																	onStateChange
																}
																style={{
																	borderRadius:
																		"20px",
																	width:
																		"100%",
																}}>
																{NIGERIA_STATES.map(
																	(state) => {
																		return (
																			<Option
																				key={
																					state
																				}
																				value={
																					state
																				}>
																				{
																					state
																				}
																			</Option>
																		);
																	}
																)}
															</Select>
														</div>
													</div>
													<div className='input-container filter'>
														<div>
															<h4 className='filter-title'>
																LGA
															</h4>
														</div>
														<div>
															<Select
																placeholder='Select LGA'
																onChange={
																	onLGAChange
																}
																allowClear={
																	true
																}
																className='input-box'
																style={{
																	borderRadius:
																		"20px",
																	width:
																		"100%",
																}}>
																{(selectedState !==
																	"" ||
																	selectedState !==
																		undefined) &&
																	NaijaStates.lgas(
																		selectedState
																	).lgas.map(
																		(
																			selectedStateLGAs
																		) => {
																			return (
																				<Option
																					key={
																						selectedStateLGAs
																					}
																					value={
																						selectedStateLGAs
																					}>
																					{
																						selectedStateLGAs
																					}
																				</Option>
																			);
																		}
																	)}
															</Select>
														</div>
													</div>

													<div className='input-container filter'>
														<div>
															<h4 className='filter-title'>
																Price
															</h4>
														</div>
														<div>
															<Slider
																range={true}
																step={100}
																defaultValue={[
																	20,
																	50,
																]}
																onChange={
																	onChange
																}
																onAfterChange={
																	onAfterChange
																}
																min={0}
																max={100}
															/>
														</div>
													</div>
													<div className='input-container filter'>
														<div>
															<h4 className='filter-title'>
																Type
															</h4>
														</div>
														<div>
															<Select
																placeholder='Select Type'
																onChange={
																	onHouseTypeChange
																}
																onSelect={
																	onHouseTypeChange
																}
																allowClear={
																	true
																}
																className='input-box'
																style={{
																	borderRadius:
																		"20px",
																	width:
																		"100%",
																}}>
																<Option value='oneRoom'>
																	One room
																</Option>
																<Option value='oneRoomSelfcon'>
																	One room
																	selfcon
																</Option>
																<Option value='oneRoomAndParlour'>
																	One room and
																	parlour
																</Option>
																<Option value='miniFlat'>
																	Mini flat
																</Option>
																<Option value='twoBedroomFlat'>
																	Two bedroom
																	flat
																</Option>
																<Option value='threeBedroomFlat'>
																	Three
																	bedroom flat
																</Option>
																<Option value='duplex'>
																	Duplex
																</Option>
															</Select>
														</div>
													</div>
													<div className='button-container '>
														<Button
															className='primary-button'
															shape='round'
															size='middle'>
															Filter
														</Button>
													</div>
												</div>
											</div>
											<div className='footer-on-side-bar'>
												<Footer />
											</div>
										</div>
									</Drawer>
								</h1>
							</div>
						</div>
					</Affix>
				</Col>
				<Col xs={24} md={19} className='card-listing'>
					<div className='appartment-listing-pane appartment-listing-wrapper'>
						<Link to="/apartment/1">
						<Card
							hoverable
							className='apartment'
							cover={
								<div className='card-image-container'>
									<img
										alt='example'
										src={house1}
										className='card-image'
									/>
								</div>
							}>
							<div className='card-descriptions'>
								<div className='description-icon'>
									<span content='NGN' className='price NGN'>
										₦
									</span>
								</div>
								<div className='price'>450,000</div>
							</div>
							<div className='card-descriptions'>
								<div className='description-icon'>
									<EnvironmentOutlined />
								</div>
								<div>4 bale ave V.I</div>
							</div>
							<div className='card-descriptions'>
								<div className='description-icon'>
									<HomeOutlined />
								</div>
								<div className=''>1 bedroom fat</div>
							</div>
							<div className='card-descriptions'>
								<div className='description-icon'>
									<PhoneOutlined />
								</div>
								<div className=''>
									<a href='tel:08036009397'>08036009397</a>
								</div>
							</div>
						</Card>
						</Link>

						<Link to="/apartment/2">
						<Card
							hoverable
							className='apartment'
							cover={
								<div className='card-image-container'>
									<img
										alt='example'
										src={house2}
										className='card-image'
									/>
								</div>
							}>
							<div className='card-descriptions'>
								<div className='description-icon'>
									<DollarOutlined />
								</div>
								<div className='price'>250,000</div>
							</div>
							<div className='card-descriptions'>
								<div className='description-icon'>
									<EnvironmentOutlined />
								</div>
								<div>13 Benson Road Orile</div>
							</div>
							<div className='card-descriptions'>
								<div className='description-icon'>
									<HomeOutlined />
								</div>
								<div className=''>2 bedroom fat</div>
							</div>
							<div className='card-descriptions'>
								<div className='description-icon'>
									<PhoneOutlined />
								</div>
								<div className=''>
									<a href='tel:08036009397'>08036009397</a>
								</div>
							</div>
						</Card>
						</Link>
						<Link to="/apartment/3">
						<Card
							hoverable
							className='apartment'
							cover={
								<div className='card-image-container'>
									<img
										alt='example'
										src={house2}
										className='card-image'
									/>
								</div>
							}>
							<div className='card-descriptions'>
								<div className='description-icon'>
									<DollarOutlined />
								</div>
								<div className='price'>200,000</div>
							</div>
							<div className='card-descriptions'>
								<div className='description-icon'>
									<EnvironmentOutlined />
								</div>
								<div>34 isawo road abule Ikorodu</div>
							</div>
							<div className='card-descriptions'>
								<div className='description-icon'>
									<HomeOutlined />
								</div>
								<div className=''>2 bedroom fat</div>
							</div>
							<div className='card-descriptions'>
								<div className='description-icon'>
									<PhoneOutlined />
								</div>
								<div className=''>
									<a href='tel:08036009397'>08036009397</a>
								</div>
							</div>
						</Card>
						</Link>
						<Link to="/apartment/4">
						<Card
							hoverable
							className='apartment'
							cover={
								<div className='card-image-container'>
									<img
										alt='example'
										src={house2}
										className='card-image'
									/>
								</div>
							}>
							<div className='card-descriptions'>
								<div className='description-icon'>
									<DollarOutlined />
								</div>
								<div className='price'>200,000</div>
							</div>
							<div className='card-descriptions'>
								<div className='description-icon'>
									<EnvironmentOutlined />
								</div>
								<div>35 Deji street ketu</div>
							</div>
							<div className='card-descriptions'>
								<div className='description-icon'>
									<HomeOutlined />
								</div>
								<div className=''>2 bedroom fat</div>
							</div>
							<div className='card-descriptions'>
								<div className='description-icon'>
									<PhoneOutlined />
								</div>
								<div className=''>
									<a href='tel:08036009397'>08036009397</a>
								</div>
							</div>
						</Card>
						</Link>
						<Card
							hoverable
							className='apartment'
							cover={
								<div className='card-image-container'>
									<img
										alt='example'
										src={house2}
										className='card-image'
									/>
								</div>
							}>
							<div className='card-descriptions'>
								<div className='description-icon'>
									<DollarOutlined />
								</div>
								<div className='price'>200,000</div>
							</div>
							<div className='card-descriptions'>
								<div className='description-icon'>
									<EnvironmentOutlined />
								</div>
								<div>35 Deji street ketu</div>
							</div>
							<div className='card-descriptions'>
								<div className='description-icon'>
									<HomeOutlined />
								</div>
								<div className=''>2 bedroom fat</div>
							</div>
							<div className='card-descriptions'>
								<div className='description-icon'>
									<PhoneOutlined />
								</div>
								<div className=''>
									<a href='tel:08036009397'>08036009397</a>
								</div>
							</div>
						</Card>
						<Card
							hoverable
							className='apartment'
							cover={
								<div className='card-image-container'>
									<img
										alt='example'
										src={house2}
										className='card-image'
									/>
								</div>
							}>
							<div className='card-descriptions'>
								<div className='description-icon'>
									<DollarOutlined />
								</div>
								<div className='price'>200,000</div>
							</div>
							<div className='card-descriptions'>
								<div className='description-icon'>
									<EnvironmentOutlined />
								</div>
								<div>35 Deji street ketu</div>
							</div>
							<div className='card-descriptions'>
								<div className='description-icon'>
									<HomeOutlined />
								</div>
								<div className=''>2 bedroom fat</div>
							</div>
							<div className='card-descriptions'>
								<div className='description-icon'>
									<PhoneOutlined />
								</div>
								<div className=''>
									<a href='tel:08036009397'>08036009397</a>
								</div>
							</div>
						</Card>
						<Card
							hoverable
							className='apartment'
							cover={
								<div className='card-image-container'>
									<img
										alt='example'
										src={house2}
										className='card-image'
									/>
								</div>
							}>
							<div className='card-descriptions'>
								<div className='description-icon'>
									<DollarOutlined />
								</div>
								<div className='price'>200,000</div>
							</div>
							<div className='card-descriptions'>
								<div className='description-icon'>
									<EnvironmentOutlined />
								</div>
								<div>35 Deji street ketu</div>
							</div>
							<div className='card-descriptions'>
								<div className='description-icon'>
									<HomeOutlined />
								</div>
								<div className=''>2 bedroom fat</div>
							</div>
							<div className='card-descriptions'>
								<div className='description-icon'>
									<PhoneOutlined />
								</div>
								<div className=''>
									<a href='tel:08036009397'>08036009397</a>
								</div>
							</div>
						</Card>
						<Card
							hoverable
							className='apartment'
							cover={
								<div className='card-image-container'>
									<img
										alt='example'
										src={house2}
										className='card-image'
									/>
								</div>
							}>
							<div className='card-descriptions'>
								<div className='description-icon'>
									<DollarOutlined />
								</div>
								<div className='price'>200,000</div>
							</div>
							<div className='card-descriptions'>
								<div className='description-icon'>
									<EnvironmentOutlined />
								</div>
								<div>35 Deji street ketu</div>
							</div>
							<div className='card-descriptions'>
								<div className='description-icon'>
									<HomeOutlined />
								</div>
								<div className=''>2 bedroom fat</div>
							</div>
							<div className='card-descriptions'>
								<div className='description-icon'>
									<PhoneOutlined />
								</div>
								<div className=''>
									<a href='tel:08036009397'>08036009397</a>
								</div>
							</div>
						</Card>
						<Card
							hoverable
							className='apartment'
							cover={
								<div className='card-image-container'>
									<img
										alt='example'
										src={house2}
										className='card-image'
									/>
								</div>
							}>
							<div className='card-descriptions'>
								<div className='description-icon'>
									<DollarOutlined />
								</div>
								<div className='price'>200,000</div>
							</div>
							<div className='card-descriptions'>
								<div className='description-icon'>
									<EnvironmentOutlined />
								</div>
								<div>35 Deji street ketu</div>
							</div>
							<div className='card-descriptions'>
								<div className='description-icon'>
									<HomeOutlined />
								</div>
								<div className=''>2 bedroom fat</div>
							</div>
							<div className='card-descriptions'>
								<div className='description-icon'>
									<PhoneOutlined />
								</div>
								<div className=''>
									<a href='tel:08036009397'>08036009397</a>
								</div>
							</div>
						</Card>
						<Card
							hoverable
							className='apartment'
							cover={
								<div className='card-image-container'>
									<img
										alt='example'
										src={house2}
										className='card-image'
									/>
								</div>
							}>
							<div className='card-descriptions'>
								<div className='description-icon'>
									<DollarOutlined />
								</div>
								<div className='price'>200,000</div>
							</div>
							<div className='card-descriptions'>
								<div className='description-icon'>
									<EnvironmentOutlined />
								</div>
								<div>35 Deji street ketu</div>
							</div>
							<div className='card-descriptions'>
								<div className='description-icon'>
									<HomeOutlined />
								</div>
								<div className=''>2 bedroom fat</div>
							</div>
							<div className='card-descriptions'>
								<div className='description-icon'>
									<PhoneOutlined />
								</div>
								<div className=''>
									<a href='tel:08036009397'>08036009397</a>
								</div>
							</div>
						</Card>
						<Card
							hoverable
							className='apartment'
							cover={
								<div className='card-image-container'>
									<img
										alt='example'
										src={house2}
										className='card-image'
									/>
								</div>
							}>
							<div className='card-descriptions'>
								<div className='description-icon'>
									<DollarOutlined />
								</div>
								<div className='price'>200,000</div>
							</div>
							<div className='card-descriptions'>
								<div className='description-icon'>
									<EnvironmentOutlined />
								</div>
								<div>35 Deji street ketu</div>
							</div>
							<div className='card-descriptions'>
								<div className='description-icon'>
									<HomeOutlined />
								</div>
								<div className=''>2 bedroom fat</div>
							</div>
							<div className='card-descriptions'>
								<div className='description-icon'>
									<PhoneOutlined />
								</div>
								<div className=''>
									<a href='tel:08036009397'>08036009397</a>
								</div>
							</div>
						</Card>
						<Card
							hoverable
							className='apartment'
							cover={
								<div className='card-image-container'>
									<img
										alt='example'
										src={house2}
										className='card-image'
									/>
								</div>
							}>
							<div className='card-descriptions'>
								<div className='description-icon'>
									<DollarOutlined />
								</div>
								<div className='price'>200,000</div>
							</div>
							<div className='card-descriptions'>
								<div className='description-icon'>
									<EnvironmentOutlined />
								</div>
								<div>35 Deji street ketu</div>
							</div>
							<div className='card-descriptions'>
								<div className='description-icon'>
									<HomeOutlined />
								</div>
								<div className=''>2 bedroom fat</div>
							</div>
							<div className='card-descriptions'>
								<div className='description-icon'>
									<PhoneOutlined />
								</div>
								<div className=''>
									<a href='tel:08036009397'>08036009397</a>
								</div>
							</div>
						</Card>
						<Card
							hoverable
							className='apartment'
							cover={
								<div className='card-image-container'>
									<img
										alt='example'
										src={house2}
										className='card-image'
									/>
								</div>
							}>
							<div className='card-descriptions'>
								<div className='description-icon'>
									<DollarOutlined />
								</div>
								<div className='price'>200,000</div>
							</div>
							<div className='card-descriptions'>
								<div className='description-icon'>
									<EnvironmentOutlined />
								</div>
								<div>35 Deji street ketu</div>
							</div>
							<div className='card-descriptions'>
								<div className='description-icon'>
									<HomeOutlined />
								</div>
								<div className=''>2 bedroom fat</div>
							</div>
							<div className='card-descriptions'>
								<div className='description-icon'>
									<PhoneOutlined />
								</div>
								<div className=''>
									<a href='tel:08036009397'>08036009397</a>
								</div>
							</div>
						</Card>
						<Card
							hoverable
							className='apartment'
							cover={
								<div className='card-image-container'>
									<img
										alt='example'
										src={house2}
										className='card-image'
									/>
								</div>
							}>
							<div className='card-descriptions'>
								<div className='description-icon'>
									<DollarOutlined />
								</div>
								<div className='price'>200,000</div>
							</div>
							<div className='card-descriptions'>
								<div className='description-icon'>
									<EnvironmentOutlined />
								</div>
								<div>35 Deji street ketu</div>
							</div>
							<div className='card-descriptions'>
								<div className='description-icon'>
									<HomeOutlined />
								</div>
								<div className=''>2 bedroom fat</div>
							</div>
							<div className='card-descriptions'>
								<div className='description-icon'>
									<PhoneOutlined />
								</div>
								<div className=''>
									<a href='tel:08036009397'>08036009397</a>
								</div>
							</div>
						</Card>
					</div>
				</Col>
			</Row>
		</main>
	);
};
export default Apartment;
