import React, { Component } from 'react'
import "./CreateNewPassword.css";
import Button from "../Assets/Reset.svg"


class CreateNewPassword extends Component{
    render() {
        return (
            <div className="createNewPasswordMain">
                <p className="createNewPasswordHeading">Create New Password</p>
                <div className="createNewPasswordDetails">
                    <form>
                        <div>
                            <label className="createNewPasswordInputLabel">Password</label> <br/>
                            <input className="createNewPasswordInputId" type="password"/>
                        </div>
                        <div>
                            <label className="createNewPasswordInputLabel">Confirm Password</label> <br/>
                            <input className="createNewPasswordInputPass" type="password"></input> 
                        </div>
                       
                        <div className="createNewPasswordSubmit">
                            <img className="createNewPasswordSubmitBtn" src={Button}></img>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default CreateNewPassword;
