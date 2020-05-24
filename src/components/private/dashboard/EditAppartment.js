import React, {} from 'react'

//packages


//components
import {Input,Button} from 'antd';




//styles
import "./Dashboard.css"


//constants

 const EditApartment = () => {

    return (
        <div className="sign-up-card-rappers">
       <div className="sign-up-container">
                <div><h3>Edit appartment</h3></div>
                <div className="input-container">
                    <Input placeholder="Old password" className="input-box"/>
                </div>
                <div className="input-container">
                    <Input placeholder="New password" className="input-box" size="middle"/>
                </div>
                <div className="input-container">
                    <Input placeholder="Confirm password" className="input-box" />
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

export default EditApartment;
 