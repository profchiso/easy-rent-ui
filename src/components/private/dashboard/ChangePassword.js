import React, {} from 'react'

//packages


//components
import {Input,Button,Form} from 'antd';
import {LockOutlined  } from '@ant-design/icons';




//styles
import "./Dashboard.css"


//constants


 const ChangePassword = () => {
    return (
        <div className="sign-up-card-rappers">
          <div className="sign-up-container">
                <div><h3>Change password</h3></div>
                <Form>
                <div className="input-container">
                        <Form.Item
                            rules={[{ required: true,   }]}
                            name="oldPassword"
                            >
                            <Input placeholder="Old password" className="input-box"/>
                    </Form.Item>
                </div>
                <div className="input-container">
                     <Form.Item
                            rules={[{ required: true,  }]}
                            name="newPassword"
                            >
                            <Input.Password placeholder="New password" className="input-box" prefix={<LockOutlined />}/>
                        </Form.Item>
                </div>
                <div className="input-container">
                        <Form.Item
                            rules={[{ required: true,  }]}
                            name="newConfirmPassword"
                            >
                            <Input.Password placeholder="Confirm password" className="input-box" prefix={<LockOutlined />}/>
                        </Form.Item>
                </div>
                <div className="button-container ">
                    <Button htmlType="submit" className="primary-button" shape="round" size="middle" >
                    Submit
                    </Button>
                </div>
                </Form> 
         </div>
    </div>
    )
}
export default ChangePassword
