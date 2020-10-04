import React, { Component } from "react";

//packages
import { Link } from "react-router-dom";

//components
import { Result,Button } from "antd";
import notfound from "../../../img/404.svg";

//style
import "./NotFound.css";

//constants
const NotFound =() => {
    return (
      <main className="not-found-container">
        <div className="page-not-found">
        <Result
          icon={<img src={notfound} alt="Not found" width="40%" />}
          title="Sorry, the page you visited does not exist."
          extra={
            <Link to="/">
              <Button
              shape='round'
              className='login-link'
              type='link'
              >
              Back to home
            </Button>
          </Link>
          }
        />
        </div>
      </main>
    );
  
}
export default NotFound;
