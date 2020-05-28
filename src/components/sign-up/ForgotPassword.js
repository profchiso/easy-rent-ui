import React,{useState} from 'react'

//packages
import {connect} from "react-redux"

//components
import { Input, Button,Row,Col,Form} from 'antd';
import {MailOutlined , } from '@ant-design/icons';
import {register} from "../../actions/userAccountAction"


//styles

//constants

 const ForgotPassword = ({changeView,registerReducer,forgotPassword}) => {
    const{isSuccessful,passwordResetResponse}=registerReducer
    const[status,setStatus]=useState(false)
    const activateLoading=()=>{
        setStatus(true)
    }
    const onFinish =  values => {
        forgotPassword(values)
         if(isSuccessful){
             setStatus(false) 
         }
    };
      const onFinishFailed = errorInfo => {
        setStatus(false)
      };
    return (
        <div className="sign-up-card-rappers">
            <Row gutter={{ xs: 8, sm: 16, md: 24}} className="sign-up-row">
                <Col xs={24} md={24}>
                    <div className="sign-up-container">
                        <div><h3>Forgot Password</h3></div>
                        <div className={`${passwordResetResponse.message ? "":"hide-element"}`}>{passwordResetResponse.message}</div>
                        <Form
                            name="passwordform"
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                        >
                            <div className="input-container">
                                <Form.Item
                                    rules={[{ required: true,  type: 'email', }]}
                                    name="email"
                                >
                                    <Input placeholder="Email" className="input-box" size="middle" prefix={<MailOutlined />} allowClear={true}/>
                                </Form.Item>
                            </div>
                            <div className="button-container ">
                            <Form.Item>
                                    <Button className="login-link" type="link" shape="round" onClick={()=>changeView("sign-in")}>
                                        back
                                    </Button>
                            
                                    <Button htmlType="submit" className="primary-button" shape="round" size="middle" onClick={activateLoading} loading={status} >
                                        Retrieve
                                    </Button>
                                </Form.Item>
                            </div>
                        </Form>
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
const mapStateToProps=(state)=>{
    return{
        ...state
    }
}
export default connect(mapStateToProps,{register}) (ForgotPassword)
