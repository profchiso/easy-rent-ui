
import React ,{useState, Fragment} from 'react'

//packages
import {Link} from "react-router-dom"


//components
import { Input, Button,Row,Col,Divider} from 'antd';
import logo  from "../../img/rental.png"
import facebook from "../../img/facebook.png"
import twitter from "../../img/twitter.png"
import google from "../../img/google.png"



//styles
import "./SignUp.css"

//constants


export const SignUp = () => {
    const[view,setView]= useState("sign-up")
    const changeView=(view)=>{
            setView(view)
    }
   
    return (
            <div className="app-container">
                <div className="content-container">
                <div className="">
                    <Link to="/" >
                        <img src={logo} alt="logo" className="logo-image"/>
                    </Link>
                </div>
                <div className="easy-rent-container ">
                    <h1 className="easy-rent-text">
                        easy
                        <span className="rent-color">RENT</span>
                    </h1>
                </div>
                {view==="sign-up"?
                    <div className="sign-up-card-rappers">
                            <Row gutter={{ xs: 8, sm: 16, md: 24}} className="sign-up-row">
                                <Col xs={24} md={24}>
                                
                                    <div className="sign-up-container">
                                        <div><h3>Sign up</h3></div>
                                        <div className="input-container">
                                            <Input placeholder="Fullname" className="input-box"/>
                                        </div>
                                        <div className="input-container">
                                            <Input placeholder="Email" className="input-box" size="middle"/>
                                        </div>
                                        <div className="input-container">
                                            <Input placeholder="Password" className="input-box" />
                                        </div>
                                        <div className="input-container">
                                            <Input placeholder="Confirm Password" className="input-box" />
                                        </div>
                                       
                                        <div className="button-container ">
                                            <Button className="primary-button" shape="round" size="middle" >
                                            Submit
                                            </Button>
                                        </div>
                                        <div className="input-container">
                                            <Divider>Or sign in with</Divider>
                                        </div>
                                        <div className="social-login-container input-container">
                                            <div><img src={facebook} alt="facebook" className="social-icon"/></div>
                                            <div><img src={twitter} alt="twitter" className="social-icon"/></div>
                                            <div><img src={google} alt="google" className="social-icon"/></div>
                                        </div>
                                        <div className="term-and condi">
                                            <p>By signing up, you agree to our Terms<br/>
                                            ,Data Policy and Cookies Policy . 
                                            </p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                    </div>
:
view==="sign-in"?
                    <div className="sign-up-card-rappers">
                            <Row gutter={{ xs: 8, sm: 16, md: 24}} className="sign-up-row">
                                <Col xs={24} md={24}>
                                    <div className="sign-up-container">
                                        <div><h3>Sign in </h3></div>
                                        <div className="input-container">
                                            <Input placeholder="Phone number" className="input-box"/>
                                        </div>
                                        <div className="input-container">
                                            <Input placeholder="Password" className="input-box" size="middle"/>
                                        </div>
                                        <div>
                                            Forgot your password? click 
                                            <Button shape="round"  className="login-link" type="link" onClick={()=>changeView("forgot-password")}>
                                                Here
                                            </Button>

                                        </div>
                                        <div className="button-container ">
                                            <Button className="primary-button" shape="round" size="middle" >
                                            Login
                                            </Button>
                                        </div>
                                        <div>
                                            <p> By using easyRENT, you agree to our Terms<br/>
                                            ,Data Policy and Cookies Policy . 
                                            </p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                    </div>
                    :
                    view==="forgot-password"?
                    <Fragment>
                    <div className="sign-up-card-rappers">
                            <Row gutter={{ xs: 8, sm: 16, md: 24}} className="sign-up-row">
                                <Col xs={24} md={24}>
                                    <div className="sign-up-container">
                                        <div><h3>Forgot Password</h3></div>
                                        <div className="input-container">
                                            <Input placeholder="Enter your email" className="input-box"/>
                                        </div>
                                        <div className="button-container ">
                                        <Button className="login-link" type="link" shape="round" onClick={()=>changeView("sign-in")}>
                                                back
                                            </Button>
                                            <Button className="primary-button" shape="round" size="middle" >
                                          Retrieve
                                            </Button>
                                        </div>
                                        <div>
                                            <p>By using easyRENT, you agree to our Terms<br/>
                                            ,Data Policy and Cookies Policy . 
                                            </p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                    </div>

                    </Fragment>
                    :
                    <Fragment>

                    </Fragment>
                }
                    <div className="sign-up-card-rappers login-container">
                            <Row gutter={{ xs: 8, sm: 16, md: 24}} className="sign-up-row">
                                <Col xs={24} md={24}>
                                   <div>
                                       {view==="sign-up"?"Already have an accout?":"Don't have an accout?" }
                                       <Button shape="round"  className="login-link" type="link" onClick={
                                           ()=>{view==="sign-up"? changeView("sign-in"):changeView("sign-up")}}> {view==="sign-up"?"Login":"Sign up" }
                                       </Button>
                                    </div>
                                </Col>
                            </Row>
                    </div>
                </div>
            </div>
    )
}
export default SignUp
