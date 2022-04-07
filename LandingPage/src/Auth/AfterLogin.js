import "./AfterLogin.css";

import Img from "./jeevitiv.jpg"
import React from 'react';

const AfterLogin = ({setLoginUser}) => {
    return (
        <div className="homepagee">
        <img className="image-after" src={Img} alt='logo'/>
          <h1 className="coming-soon" >Coming Soon...</h1>
          <div  className="button" onClick={() => setLoginUser({})}>Logout</div>
        </div>
    );
};

export default AfterLogin;
