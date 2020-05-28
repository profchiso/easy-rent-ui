import React,{useState} from 'react'

//packages

import {connect} from "react-redux"

//components
import { Input, Button,Row,Col,Form} from 'antd';
import {MailOutlined ,LockOutlined  } from '@ant-design/icons';
import {login,clearErrorMessage} from "../../actions/userAccountAction"



//styles

//constants

 const Login = ({changeView,registerReducer,login,clearErrorMessage}) => {
    const{isSuccessful,error}=registerReducer
    const[status,setStatus]=useState(false)
   
    const activateLoading=()=>{
        setStatus(true)
    }
   const onFinish =  values => {
       login(values)
       if(isSuccessful){
           setStatus(false) 
       }else if(error.errMessage ){
        setStatus(false)  
       }
   };
     const onFinishFailed = errorInfo => {
         console.log(errorInfo)
       setStatus(false)
     };
     const onChange=()=>{
        clearErrorMessage()
        setStatus(false) 
     }
    return (
       <div className="sign-up-card-rappers">
            <Row gutter={{ xs: 8, sm: 16, md: 24}} className="sign-up-row">
                <Col xs={24} md={24}>
                    <div className="sign-up-container">
                        <div><h3>Sign in </h3></div>
                        <div className={`${error.errMessage ? "":"hide-element"} err-message `}>{error.errMessage}</div>
                        <Form
                            name="loginform"
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                        
                        >
                        <div className="input-container">
                            <Form.Item
                            rules={[{ required: true,  type: 'email', }]}
                            name="email"
                            >
                                 <Input placeholder="Email" className="input-box" size="middle" prefix={<MailOutlined />} allowClear={true} onChange={onChange}/>
                            </Form.Item>
                        </div>
                        <div className="input-container">
                             <Form.Item
                                rules={[{ required: true,  }]}
                                 name="password"
                            >
                                <Input.Password placeholder="Password" className="input-box" allowClear={true} prefix={<LockOutlined />} onChange={onChange}/>
                            </Form.Item>
                        </div>
                        <div>
                            Forgot password? click 
                            <Button shape="round"  className="login-link" type="link" onClick={()=>changeView("forgot-password")}>
                                Here
                            </Button>
                        </div>
                        <div className="button-container ">
                            <Button htmlType="submit" className="primary-button" shape="round" size="middle" onClick={activateLoading} loading={status} >
                            Login
                            </Button>
                        </div>
                        </Form>
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
const mapStateToProps=(state)=>{
    return{
        ...state
    }
}
export default connect(mapStateToProps,{login,clearErrorMessage}) (Login)

