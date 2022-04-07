import React, { Component } from 'react'
import "./Patient1.css";
import Header from "../Assets/Header.svg"
import Profile from '../Assets/ProfileIcon.svg'
import Doc from '../Assets/doctorIcon.svg'
import { right } from '@popperjs/core';
import view from '../Assets/view.svg'
import prinT from '../Assets/Print.svg'
class Patient1 extends Component{
    render() {
        return (
            <div className="Patient1Main">
                <div className="Patient1Header">
                    <img className="Patient1HeaderImg" src={Profile}></img>
                </div>
                <div className="Patient1Details">
                    <p>Patient's Name
                    <br/>Gender</p>
                    <p style={{ color: "#035B96" }}>Patient ID</p>
                    <p className="Patient1Doctor">
                        <img style={{marginRight:"5px"}}src={Doc}></img>
                        Dr. XYZ
                    </p>
                </div>
                <div className="Patient1Table">
                    <p className="Patient1TableHeading"> Previous Consulation</p>
                <table className="Patient1Table2">
                    <thead>
                        <tr  style={{ color:"#035B96",textAlign:"center" }}>
                            <th style={{paddingLeft:"9px",fontWeight:"normal"}}>Date</th>
                            <th style={{paddingLeft:"9px",fontWeight:"normal"}} >Time</th>
                            <th style={{ paddingLeft: "9px",fontWeight:"normal" }}>Print Prescription</th>
                            <th style={{ paddingLeft: "9x",fontWeight:"normal" }}>View Prescription</th>
                            </tr>
                        </thead>
                        <br/>
                    <tbody>
                            <tr style={{border:"2px solid #f4f4f4",borderRadius:"7px"}}>
                                <td style={{ color:"#035B96",textAlign:"center" }}>1</td>
                                <td style={{color:"#035B96",textAlign:"center" }}>Mark</td>
                                <td style={{ color: "#035B96", textAlign: "center" }}><img  src={view}></img></td>
                                <td style={{ color:"#035B96",textAlign:"center" }}><img src={prinT}></img></td>        
                            </tr>
                            
                            <tr style={{border:"2px solid #f4f4f4",borderRadius:"7px"}} >
                                <td style={{ color:"#035B96",textAlign:"center" }}>1</td>
                                <td style={{color:"#035B96",textAlign:"center" }}>Mark</td>
                                <td style={{ color: "#035B96", textAlign: "center" }}><img  src={view}></img></td>
                                <td style={{ color:"#035B96",textAlign:"center" }}><img src={prinT}></img></td>        
                            </tr>
                        </tbody>
                        
                </table>

                </div>
           </div>
           
        )
    }
}

export default Patient1;
