import React, {useState} from 'react'

//packages
import {Link} from "react-router-dom"
import NaijaStates from 'naija-state-local-government';

//components
import { Row,Col,Affix ,Card ,	Drawer,Button,Select,Slider} from 'antd';
import {EnvironmentOutlined,DollarOutlined,PhoneOutlined,HomeOutlined,MenuOutlined ,CloseOutlined} from '@ant-design/icons'
import house1 from "../../img/house1.jpg"
import house2 from "../../img/house2.jpeg"

//styles
import "./Appartment.css"


//constants
const { Option } = Select;



 const Appartment = () => {
    const [drawerVisible,setDrawerVisible]= useState(false)
    const [selectedState,setSelectedState] = useState("abia")
    const [selectedLGA, setSelectedLGA] =useState("")
    const NIGERIA_STATES=NaijaStates.states()
    let SELECTED_STATE_LGA =NaijaStates.lgas(selectedState)
    console.log(SELECTED_STATE_LGA)

    const showDrawer=()=>{
        setDrawerVisible(!drawerVisible)
    }
    const closeDrawer=()=>{
        setDrawerVisible(false)
    }
    const onStateChange = value => {
        setSelectedState(value)
        SELECTED_STATE_LGA=NaijaStates.lgas(value)
        console.log(selectedState)
       };
     const  onLGAChange = value=>{
        setSelectedLGA(value)
        console.log(selectedLGA)
     }
 
       const onChange=(value)=> {
         console.log('onChange: ', value);
       }
 
       const onAfterChange=(value)=> {
         console.log('onAfterChange: ', value);
       }
    return (
        <div>
            <Row >
                <Col xs={24} md={5} >
                    <Affix>
                        <div className="filter-pane">
                      
                        <div className=" ">
                             <Link to="/" >
                                <h1 className="easy-rent-text  easy-rent-text-mobile">
                                    easy
                                <span className="rent-color">RENT</span>
                                </h1>
                            </Link>
                        </div>
                                        <div className="drawer-container filter-on-big-screen">
                                            {/* <div className="drawer-header filter-drawer-header">
                                                <Link to="/">
                                                <h1 className="easy-rent-text  easy-rent-text-mobile">
                                                    easy
                                                    <span className="rent-color">RENT</span>
                                                </h1>
                                                </Link>
                                            </div> */}
                                            <div className="sign-up-card-rappers filter-pane-box">
                                                <div className="sign-up-container ">
                                                    <div><h3>Customize your search</h3></div>
                                                    <div className="input-container filter">
                                                    <Select
                                                        placeholder="Select state"
                                                        onChange={onStateChange}
                                                        allowClear
                                                        className="input-box"
                                                        value={selectedState}
                                                    >

                                                    {NIGERIA_STATES.map((state)=>{
                                                        return(
                                                            <Option key={state} value={state}>{state}</Option>
                                                        )
                                                    })}

                                                     </Select>
                                                     <h4 className="filter-title">State</h4>
                                                    </div>
                                                    <div className="input-container filter">
                                                    <Select
                                                        placeholder="Select LGA"
                                                        onChange={onLGAChange}
                                                        allowClear
                                                        className="input-box"
                                                        style={{borderRadius:"20px"}}
                                                        
                                                    >
                                                        {SELECTED_STATE_LGA.lgas.map((selectedStateLGAs)=>{
                                                        return(
                                                            <Option key={selectedStateLGAs} value={selectedStateLGAs}>{selectedStateLGAs}</Option>
                                                        )
                                                        })}
                                                     </Select>
                                                        <h4 className="filter-title">LGA</h4>
                                                    </div>
                                                    <div className="input-container filter">
                                                        <Slider
                                                            range={true}
                                                            step={100}
                                                            defaultValue={[20, 50]}
                                                            onChange={onChange}
                                                            onAfterChange={onAfterChange}
                                                            min={0}
                                                            max={100}
                                                        />
                                                        <h4 className="filter-title">Price</h4>
                                                    </div>
                                                    <div className=" filter">
                                                    <Select
                                                        placeholder="Select Type"
                                                        onChange={onStateChange}
                                                        allowClear
                                                        className="input-box"
                                                    >
                                                        <Option value="oneRoom">One room</Option>
                                                        <Option value="oneRoomSelfcon">One room selfcon</Option>
                                                        <Option value="oneRoomAndParlour">One room and parlour</Option>
                                                        <Option value="miniFlat">Mini flat</Option>
                                                            <Option value="twoBedroomFlat">Two bedroom flat</Option>
                                                            <Option value="threeBedroomFlat">Three bedroom flat</Option>
                                                            <Option value="duplex">Duplex</Option>
                                                     </Select>
                                                        <h4 className="filter-title">Type</h4>
                                                    </div>
                                                    <div className="button-container ">
                                                        <Button className="primary-button" shape="round" size="middle" >
                                                        Filter
                                                        </Button>
                                                    </div>
                                                </div>
                                        </div>
                                    </div>














                        </div>
                        <div className="show-on-mobile mobile-menu">
                            <div className="easy-rent-container ">
                                <Link to="/">
                                <h1 className="easy-rent-text  easy-rent-text-mobile">
                                    easy
                                <span className="rent-color">RENT</span>
                                </h1>
                                </Link>
                            </div>
                            <div>
                                <h1 className="easy-rent-text easy-rent-text-mobile">
                               {drawerVisible? <CloseOutlined onClick={closeDrawer}/>:<MenuOutlined  onClick={showDrawer}/>} 
                                <Drawer
                                    placement='left'
                                    closable={false}
                                    onClose={closeDrawer}
                                    visible={drawerVisible}
                                    width="90%"
                                >
                                <div className="drawer-container">
                                            <div className="drawer-header filter-drawer-header">
                                                <Link to="/">
                                                <h1 className="easy-rent-text  easy-rent-text-mobile">
                                                    easy
                                                    <span className="rent-color">RENT</span>
                                                </h1>
                                                </Link>
                                            </div>
                                            <div className="sign-up-card-rappers filter-pane-box">
                                                <div className="sign-up-container ">
                                                    <div><h3>Customize your search</h3></div>
                                                    <div className="input-container filter">
                                                    <Select
                                                        placeholder="Select state"
                                                        onChange={onStateChange}
                                                        allowClear
                                                        className="input-box"
                                                        value={selectedState}
                                                    >

                                                    {NIGERIA_STATES.map((state)=>{
                                                        return(
                                                            <Option key={state} value={state}>{state}</Option>
                                                        )
                                                    })}

                                                     </Select>
                                                     <h4 className="filter-title">State</h4>
                                                    </div>
                                                    <div className="input-container filter">
                                                    <Select
                                                        placeholder="Select LGA"
                                                        onChange={onLGAChange}
                                                        allowClear
                                                        className="input-box"
                                                        style={{borderRadius:"20px"}}
                                                        
                                                    >
                                                        {SELECTED_STATE_LGA.lgas.map((selectedStateLGAs)=>{
                                                        return(
                                                            <Option key={selectedStateLGAs} value={selectedStateLGAs}>{selectedStateLGAs}</Option>
                                                        )
                                                        })}
                                                     </Select>
                                                        <h4 className="filter-title">LGA</h4>
                                                    </div>
                                                    <div className="input-container filter">
                                                        <Slider
                                                            range={true}
                                                            step={100}
                                                            defaultValue={[20, 50]}
                                                            onChange={onChange}
                                                            onAfterChange={onAfterChange}
                                                            min={0}
                                                            max={100}
                                                        />
                                                        <h4 className="filter-title">Price</h4>
                                                    </div>
                                                    <div className=" filter">
                                                    <Select
                                                        placeholder="Select Type"
                                                        onChange={onStateChange}
                                                        allowClear
                                                        className="input-box"
                                                    >
                                                        <Option value="oneRoom">One room</Option>
                                                        <Option value="oneRoomSelfcon">One room selfcon</Option>
                                                        <Option value="oneRoomAndParlour">One room and parlour</Option>
                                                        <Option value="miniFlat">Mini flat</Option>
                                                            <Option value="twoBedroomFlat">Two bedroom flat</Option>
                                                            <Option value="threeBedroomFlat">Three bedroom flat</Option>
                                                            <Option value="duplex">Duplex</Option>
                                                     </Select>
                                                        <h4 className="filter-title">Type</h4>
                                                    </div>
                                                    <div className="button-container ">
                                                        <Button className="primary-button" shape="round" size="middle" >
                                                        Filter
                                                        </Button>
                                                    </div>
                                                </div>
                                        </div>
                                    </div>
                                </Drawer>
                            </h1>
                            </div>
                        </div>
                    </Affix>
                </Col>
                <Col xs={24} md={19} className="card-listing">
                    <div className="appartment-listing-pane">
                        <Card
                            hoverable
                            style={{ width: 250 }}
                            cover={<div className="card-image-container"><img  alt="example" src={house1}className="card-image" /></div>}
                        >
                      
                            <div className="card-descriptions">
                                    <div className="description-icon">
                                    <span content="NGN" class="price NGN">₦</span>
                                    </div>
                                    <div className="price">250,000</div>
                            </div> 
                            <div className="card-descriptions">
                                    <div className="description-icon">
                                        <EnvironmentOutlined />
                                    </div>
                                    <div>126 isawo road abule ago</div>
                            </div> 
                            <div className="card-descriptions">
                                    <div className="description-icon">
                                        <HomeOutlined />
                                    </div>
                                    <div className="">1 bedroom fat</div>
                            </div> 
                            <div className="card-descriptions">
                                    <div className="description-icon">
                                        <PhoneOutlined />   
                                    </div>
                                    <div className=""><a href="tel:08036009397">08036009397</a></div>
                            </div> 
                        </Card>
                        <Card
                            hoverable
                            style={{ width: 250 }}
                            cover={<div className="card-image-container"><img  alt="example" src={house2}className="card-image" /></div>}
                        >
                            <div className="card-descriptions">
                                    <div className="description-icon">
                                        <DollarOutlined />
                                    </div>
                                    <div className="price">250,000</div>
                            </div> 
                            <div className="card-descriptions">
                                    <div className="description-icon">
                                        <EnvironmentOutlined />
                                    </div>
                                    <div>126 isawo road abule ago</div>
                            </div> 
                            <div className="card-descriptions">
                                    <div className="description-icon">
                                        <HomeOutlined />
                                    </div>
                                    <div className="">2 bedroom fat</div>
                            </div> 
                            <div className="card-descriptions">
                                    <div className="description-icon">
                                        <PhoneOutlined />
                                    </div>
                                    <div className=""><a href="tel:08036009397">08036009397</a></div>
                            </div> 
                            
                        </Card>
                        <Card
                            hoverable
                            style={{ width: 250 }}
                            cover={<div className="card-image-container"><img  alt="example" src={house2}className="card-image" /></div>}
                        >
                        <div className="card-descriptions">
                                    <div className="description-icon">
                                    <DollarOutlined />
                                    </div>
                                    <div className="price">250,000</div>
                            </div> 
                            <div className="card-descriptions">
                                    <div className="description-icon">
                                        <EnvironmentOutlined />
                                    </div>
                                    <div>126 isawo road abule ago</div>
                            </div> 
                            <div className="card-descriptions">
                                    <div className="description-icon">
                                        <HomeOutlined />
                                    </div>
                                    <div className="">2 bedroom fat</div>
                            </div> 
                            <div className="card-descriptions">
                                    <div className="description-icon">
                                        <PhoneOutlined />
                                    </div>
                                    <div className=""><a href="tel:08036009397">08036009397</a></div>
                            </div> 
                            
                        </Card>
                        <Card
                            hoverable
                            style={{ width: 250 }}
                            cover={<div className="card-image-container"><img  alt="example" src={house2}className="card-image" /></div>}
                        >
                        <div className="card-descriptions">
                                    <div className="description-icon">
                                    <DollarOutlined />
                                    </div>
                                    <div className="price">250,000</div>
                            </div> 
                            <div className="card-descriptions">
                                    <div className="description-icon">
                                        <EnvironmentOutlined />
                                    </div>
                                    <div>126 isawo road abule ago</div>
                            </div> 
                            <div className="card-descriptions">
                                    <div className="description-icon">
                                        <HomeOutlined />
                                    </div>
                                    <div className="">2 bedroom fat</div>
                            </div> 
                            <div className="card-descriptions">
                                    <div className="description-icon">
                                        <PhoneOutlined />
                                    </div>
                                    <div className=""><a href="tel:08036009397">08036009397</a></div>
                            </div> 
                            
                        </Card>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
export default Appartment
