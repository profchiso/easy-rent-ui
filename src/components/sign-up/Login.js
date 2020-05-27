import React from 'react'

//packages

//components
import { Input, Button,Row,Col,} from 'antd';


//styles

//constants

 const Login = ({changeView}) => {
    return (
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
                            Forgot password? click 
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
    )
}
export default Login

