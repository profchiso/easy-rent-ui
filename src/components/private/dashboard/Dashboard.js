import React, { useState, Fragment } from "react";

//packages
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

//components
import { Row, Col, Affix, Card, Drawer, Avatar, Menu, Button } from "antd";
import {
	EnvironmentOutlined,
	DollarOutlined,
	PhoneOutlined,
	HomeOutlined,
	MenuOutlined,
	CloseOutlined,
	SettingOutlined,
	PlusOutlined,
	EditOutlined,
	LoginOutlined,
	BarChartOutlined,
} from "@ant-design/icons";
import Footer from "../../common/Footer/Footer";
import house1 from "../../../img/house1.jpg";
import house2 from "../../../img/house2.jpeg";
import user from "../../../img/chinedu.jpeg";
import AddNewAppartment from "./AddNewAppartment";
import UpdateProfile from "./UpdateProfile";
import ChangePassword from "./ChangePassword";
import EditAppartment from "./EditAppartment";
import { logout } from "../../../actions/userAccountAction";
import { updatePassword } from "../../../actions/dashboardActions";

//styles
import "./Dashboard.css";

//constants
const { SubMenu } = Menu;

const Dashboard = ({ registerReducer, logout, updatePassword }) => {
	const [drawerVisible, setDrawerVisible] = useState(false);
	const [view, setView] = useState("all-appartment");
	const loggedInUser = JSON.parse(localStorage.getItem("user"));

	const showDrawer = () => {
		setDrawerVisible(!drawerVisible);
	};
	const closeDrawer = () => {
		setDrawerVisible(false);
	};
	const handleClick = (e) => {
		console.log("click ", e.key);
		if (e.key === "logout") {
			logout();
		}
	};
	const changeView = (view) => {
		setView(view);
		setDrawerVisible(false);
	};
	return (
		<div>
			{!localStorage.token && <Redirect to='/sign-up' />}
			<Row>
				<Col xs={24} md={5}>
					<Affix>
						<div className='filter-pane dashboard-filter-pane'>
							<div className='drawer-container'>
								<div className='drawer-header dashboard-drawer-header'>
									<Link to='/'>
										<h1 className='easy-rent-text  easy-rent-text-mobile'>
											easy
											<span className='rent-color'>
												RENT
											</span>
										</h1>
									</Link>
									<h1 className='easy-rent-text  easy-rent-text-mobile'>
										<Avatar src={user} />
									</h1>
								</div>
								<div className='ant-menu-container'>
									<Menu
										onClick={handleClick}
										mode='inline'
										className='mobile-ant-menu'>
										<SubMenu
											key='sub1'
											title={
												<span>
													<HomeOutlined />
													<span>Appartment</span>
												</span>
											}>
											<Menu.Item
												key='add-new'
												onClick={() =>
													changeView("add-new")
												}>
												<PlusOutlined /> Add new
											</Menu.Item>
											<Menu.Item
												key='my-appartments'
												onClick={() =>
													changeView("my-appartments")
												}>
												<BarChartOutlined />
												My appartments
											</Menu.Item>
										</SubMenu>
										<SubMenu
											key='sub2'
											icon={<SettingOutlined />}
											title='Accout setting'>
											<Menu.Item
												key='password'
												onClick={() =>
													changeView("password")
												}>
												<EditOutlined />
												Password
											</Menu.Item>
											<Menu.Item
												key='profile'
												onClick={() =>
													changeView("profile")
												}>
												<EditOutlined />
												Profile
											</Menu.Item>
											<Menu.Item key='logout'>
												<LoginOutlined />
												Logout
											</Menu.Item>
										</SubMenu>
									</Menu>
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
											<div className='drawer-header dashboard-drawer-header'>
												<Link to='/'>
													<h1 className='easy-rent-text  easy-rent-text-mobile'>
														easy
														<span className='rent-color'>
															RENT
														</span>
													</h1>
												</Link>
												<h1 className='easy-rent-text  easy-rent-text-mobile'>
													<Avatar src={user} />
												</h1>
											</div>
											<div className='ant-menu-container'>
												<Menu
													onClick={handleClick}
													mode='inline'
													className='mobile-ant-menu'>
													<SubMenu
														key='sub1'
														title={
															<span>
																<HomeOutlined />
																<span>
																	Appartment
																</span>
															</span>
														}>
														<Menu.Item
															key='add-new'
															onClick={() =>
																changeView(
																	"add-new"
																)
															}>
															<PlusOutlined /> Add
															new
														</Menu.Item>
														<Menu.Item
															key='my-appartments'
															onClick={() =>
																changeView(
																	"my-appartments"
																)
															}>
															<BarChartOutlined />
															My appartments
														</Menu.Item>
													</SubMenu>
													<SubMenu
														key='sub2'
														icon={
															<SettingOutlined />
														}
														title='Accout setting'>
														<Menu.Item
															key='password'
															onClick={() =>
																changeView(
																	"password"
																)
															}>
															<EditOutlined />
															Password
														</Menu.Item>
														<Menu.Item
															key='profile'
															onClick={() =>
																changeView(
																	"profile"
																)
															}>
															<EditOutlined />
															Profile
														</Menu.Item>
														<Menu.Item key='logout'>
															<LoginOutlined />
															Logout
														</Menu.Item>
													</SubMenu>
												</Menu>
											</div>
										</div>
										<div className='footer-on-side-bar'>
											<Footer />
										</div>
									</Drawer>
								</h1>
							</div>
						</div>
					</Affix>
				</Col>
				<Col
					xs={24}
					md={19}
					className={`card-listing ${
						view === "all-appartment" || view === "my-appartments"
							? ""
							: "center"
					}`}>
					{view === "all-appartment" || view === "my-appartments" ? (
						<div className='appartment-listing-pane appartment-listing-wrapper'>
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
										<span
											content='NGN'
											className='price NGN'>
											₦
										</span>
									</div>
									<div className='price'>250,000</div>
								</div>
								<div className='card-descriptions'>
									<div className='description-icon'>
										<EnvironmentOutlined />
									</div>
									<div>233 IKD road Ilupeju</div>
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
										<a href='tel:08036009397'>
											08036009397
										</a>
									</div>
								</div>
								<div className='actions'>
									<div>
										<Button
											shape='round'
											onClick={() =>
												changeView("edit-appartment")
											}
											className='login-link'
											type='link'>
											Edit
										</Button>
									</div>
									<div>
										<Button
											shape='round'
											className='login-link'
											type='link'>
											Delete
										</Button>
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
									<div className='price'>350,000</div>
								</div>
								<div className='card-descriptions'>
									<div className='description-icon'>
										<EnvironmentOutlined />
									</div>
									<div>1 coca road abule Anthony</div>
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
										<a href='tel:08036009397'>
											08036009397
										</a>
									</div>
								</div>
								<div className='actions'>
									<div>
										<Button
											shape='round'
											onClick={() =>
												changeView("edit-appartment")
											}
											className='login-link'
											type='link'>
											Edit
										</Button>
									</div>
									<div>
										<Button
											shape='round'
											className='login-link'
											type='link'>
											Delete
										</Button>
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
									<div className='price'>250,000</div>
								</div>
								<div className='card-descriptions'>
									<div className='description-icon'>
										<EnvironmentOutlined />
									</div>
									<div>100 isawo road Yaba</div>
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
										<a href='tel:08036009397'>
											08036009397
										</a>
									</div>
								</div>
								<div className='actions'>
									<div>
										<Button
											shape='round'
											onClick={() =>
												changeView("edit-appartment")
											}
											className='login-link'
											type='link'>
											Edit
										</Button>
									</div>
									<div>
										<Button
											shape='round'
											className='login-link'
											type='link'>
											Delete
										</Button>
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
									<div className='price'>250,000</div>
								</div>
								<div className='card-descriptions'>
									<div className='description-icon'>
										<EnvironmentOutlined />
									</div>
									<div>100 isawo road Yaba</div>
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
										<a href='tel:08036009397'>
											08036009397
										</a>
									</div>
								</div>
								<div className='actions'>
									<div>
										<Button
											shape='round'
											onClick={() =>
												changeView("edit-appartment")
											}
											className='login-link'
											type='link'>
											Edit
										</Button>
									</div>
									<div>
										<Button
											shape='round'
											className='login-link'
											type='link'>
											Delete
										</Button>
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
									<div className='price'>250,000</div>
								</div>
								<div className='card-descriptions'>
									<div className='description-icon'>
										<EnvironmentOutlined />
									</div>
									<div>100 isawo road Yaba</div>
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
										<a href='tel:08036009397'>
											08036009397
										</a>
									</div>
								</div>
								<div className='actions'>
									<div>
										<Button
											shape='round'
											onClick={() =>
												changeView("edit-appartment")
											}
											className='login-link'
											type='link'>
											Edit
										</Button>
									</div>
									<div>
										<Button
											shape='round'
											className='login-link'
											type='link'>
											Delete
										</Button>
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
									<div className='price'>250,000</div>
								</div>
								<div className='card-descriptions'>
									<div className='description-icon'>
										<EnvironmentOutlined />
									</div>
									<div>100 isawo road Yaba</div>
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
										<a href='tel:08036009397'>
											08036009397
										</a>
									</div>
								</div>
								<div className='actions'>
									<div>
										<Button
											shape='round'
											onClick={() =>
												changeView("edit-appartment")
											}
											className='login-link'
											type='link'>
											Edit
										</Button>
									</div>
									<div>
										<Button
											shape='round'
											className='login-link'
											type='link'>
											Delete
										</Button>
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
									<div className='price'>250,000</div>
								</div>
								<div className='card-descriptions'>
									<div className='description-icon'>
										<EnvironmentOutlined />
									</div>
									<div>100 isawo road Yaba</div>
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
										<a href='tel:08036009397'>
											08036009397
										</a>
									</div>
								</div>
								<div className='actions'>
									<div>
										<Button
											shape='round'
											onClick={() =>
												changeView("edit-appartment")
											}
											className='login-link'
											type='link'>
											Edit
										</Button>
									</div>
									<div>
										<Button
											shape='round'
											className='login-link'
											type='link'>
											Delete
										</Button>
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
									<div className='price'>250,000</div>
								</div>
								<div className='card-descriptions'>
									<div className='description-icon'>
										<EnvironmentOutlined />
									</div>
									<div>100 isawo road Yaba</div>
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
										<a href='tel:08036009397'>
											08036009397
										</a>
									</div>
								</div>
								<div className='actions'>
									<div>
										<Button
											shape='round'
											onClick={() =>
												changeView("edit-appartment")
											}
											className='login-link'
											type='link'>
											Edit
										</Button>
									</div>
									<div>
										<Button
											shape='round'
											className='login-link'
											type='link'>
											Delete
										</Button>
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
									<div className='price'>250,000</div>
								</div>
								<div className='card-descriptions'>
									<div className='description-icon'>
										<EnvironmentOutlined />
									</div>
									<div>100 isawo road Yaba</div>
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
										<a href='tel:08036009397'>
											08036009397
										</a>
									</div>
								</div>
								<div className='actions'>
									<div>
										<Button
											shape='round'
											onClick={() =>
												changeView("edit-appartment")
											}
											className='login-link'
											type='link'>
											Edit
										</Button>
									</div>
									<div>
										<Button
											shape='round'
											className='login-link'
											type='link'>
											Delete
										</Button>
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
									<div className='price'>250,000</div>
								</div>
								<div className='card-descriptions'>
									<div className='description-icon'>
										<EnvironmentOutlined />
									</div>
									<div>4 fadeyi street orile</div>
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
										<a href='tel:08036009397'>
											08036009397
										</a>
									</div>
								</div>
								<div className='actions'>
									<div>
										<Button
											shape='round'
											onClick={() =>
												changeView("edit-appartment")
											}
											className='login-link'
											type='link'>
											Edit
										</Button>
									</div>
									<div>
										<Button
											shape='round'
											className='login-link'
											type='link'>
											Delete
										</Button>
									</div>
								</div>
							</Card>
						</div>
					) : view === "add-new" ? (
						<Fragment>
							<AddNewAppartment />
						</Fragment>
					) : view === "password" ? (
						<Fragment>
							<ChangePassword />
						</Fragment>
					) : view === "profile" ? (
						<Fragment>
							<UpdateProfile />
						</Fragment>
					) : view === "edit-appartment" ? (
						<Fragment>
							<EditAppartment />
						</Fragment>
					) : (
						<Fragment></Fragment>
					)}
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
export default connect(mapStateToProps, { logout, updatePassword })(Dashboard);
