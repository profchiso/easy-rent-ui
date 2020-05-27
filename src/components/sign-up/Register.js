import React,{useState} from 'react'

//packages
import axios from "axios"
import {Redirect} from "react-router-dom"

//components
import { Input, Button,Row,Col,Divider,Form} from 'antd';
import { UserOutlined,MailOutlined,PhoneOutlined ,LockOutlined  } from '@ant-design/icons';

import facebook from "../../img/facebook.png"
import twitter from "../../img/twitter.png"
import google from "../../img/google.png"


//styles

//constants


 const Register = () => {
     const[status,setStatus]=useState(false)
     const[registrationSuccessful,setRegistrationSuccessful] =useState(false)

     const activateLoading=()=>{
         setStatus(true)
     }
    const onFinish = async values => {
        try {
       const res= await  axios.post("https://easy-rent-api.herokuapp.com/easy-rent/api/v1/users/signup",values)
       
       if(res){
           setRegistrationSuccessful(true)

       }

            
        } catch (error) {
            console.log(error)  
        }
      };
      const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
        setStatus(false)
      };
    return (
         <div className="sign-up-card-rappers">
             {registrationSuccessful && <Redirect to="/dashboard"/>}
            <Row gutter={{ xs: 8, sm: 16, md: 24}} className="sign-up-row">
                <Col xs={24} md={24}>
                    <div className="sign-up-container">
                        <div><h3>Sign up</h3></div>
                        <Form
                            name="regform"
                         
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                        >
                        <div className="input-container">
                            <Form.Item
                            rules={[{ required: true,  }]}
                            name="name"
                            >
                                <Input placeholder="Fullname" className="input-box" prefix={<UserOutlined />} allowClear={true}/>
                            </Form.Item>
                        </div>
                        <div className="input-container">
                            <Form.Item
                            rules={[{ required: true,  type: 'email', }]}
                            name="email"
                            >
                                 <Input placeholder="Email" className="input-box" size="middle" prefix={<MailOutlined />} allowClear={true}/>
                            </Form.Item>
                        </div>
                        <div className="input-container">
                            <Form.Item
                            rules={[{ required: true,  }]}
                            name="phone"
                            >
                                <Input placeholder="Phone" className="input-box" prefix={<PhoneOutlined />}  allowClear={true}/>
                            </Form.Item>
                        </div>
                        <div className="input-container">
                            <Form.Item
                            rules={[{ required: true,  }]}
                            name="password"
                            >
                                <Input.Password placeholder="Password" className="input-box" allowClear={true} prefix={<LockOutlined />}/>
                            </Form.Item>
                        </div>
                        <div className="input-container">
                            <Form.Item
                            rules={[{ required: true, }]}
                            name="confirmPassword"
                            >
                                <Input.Password placeholder="Confirm Password" className="input-box" allowClear={true} prefix={<LockOutlined />} />
                            </Form.Item>
                        </div>
                        <div className="button-container ">
                            <Form.Item>
                                <Button htmlType="submit" className="primary-button" shape="round" size="middle" onClick={activateLoading} loading={status} >
                                    Submit
                                </Button>
                            </Form.Item>
                        </div>
                        </Form>
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
