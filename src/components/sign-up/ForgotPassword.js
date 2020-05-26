import React from 'react'

//packages

//components
import { Input, Button,Row,Col,} from 'antd';


//styles

//constants



 const ForgotPassword = ({changeView}) => {
    return (
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
    )
}
export default ForgotPassword
