import React, {} from 'react'

//packages


//components
import {Input,Button} from 'antd';




//styles
import "./Dashboard.css"


//constants

 const UpdateProfile = () => {
    return (
        <div className="sign-up-card-rappers">
       <div className="sign-up-container">
                <div><h3>Update profile</h3></div>
                <div className="input-container">
                    <Input placeholder="Address" className="input-box"/>
                </div>
                <div className="input-container">
                    <Input placeholder="Phone" className="input-box" size="middle"/>
                </div>
                <div className="input-container">
                    <Input placeholder="Profile pix" className="input-box" />
                </div>
                <div className="button-container ">
                    <Button className="primary-button" shape="round" size="middle" >
                    Submit
                    </Button>
                </div>
                
         </div>
    </div>
    )
}

export default UpdateProfile;
 