import React from 'react'

//packages

//components
import { Input, Button,Row,Col,Divider} from 'antd';
import facebook from "../../img/facebook.png"
import twitter from "../../img/twitter.png"
import google from "../../img/google.png"


//styles

//constants


 const Register = () => {
    return (
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
    )
}
export default Register
