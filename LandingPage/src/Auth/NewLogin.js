import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import "./DoctorPatient.css";
import Doctor from "../Assets/Doctor.svg"
import Btn1 from "../Assets/Log in with e-mail.svg"
import Btn2 from "../Assets/Log in with phone.svg"
import lock from "../Assets/lock.svg"
class NewLogin extends Component{
    constructor() {
        super()
        this.state = {
            redirectToDoctorSignup:false
        }
    }
    render() {
        return (
            <div className="authMain">
                
                <div className="authHeading">
                    <Link to="/login"className="authFirstHeading" >Login</Link>
                    <p className="authSecondHeading">|</p>
                    <p className="authSecondHeading">SignUp</p>
                </div>

                <p style={{ fontSize: "24px", textAlign: "center", marginTop: "5%" }}> <img src={lock}></img></p>
                <div className="authButtonsDiv">
                    <Link to="/doctorSignup">
                        <img className="authButtons" src={Btn1} ></img>
                    </Link>
                    <br />
                    <Link to="/patientSignup">
                        <img className="authButtons" src={Btn2}></img>
                    </Link>

                    {/* <p style={{ fontSize: "18px", textAlign: "center", marginTop: "4%" }}>OR</p> */}
                    {/* <img className="authGoogleLogin" src={Google}></img> */}
                </div>
            </div>
        )
    }
}

export default NewLogin;
