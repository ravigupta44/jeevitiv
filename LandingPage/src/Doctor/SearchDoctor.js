// import { now } from 'mongoose';
import React, { Component } from 'react'; 
import Profile from "../Assets/ProfileIcon.svg"
import ScheduleAppointment from "../Assets/ScheduleAppointment.svg"
import Search from '../Assets/search.svg'
import Tick from "../Assets/Tick.svg"
import './SearchDoctor.css'
class SearchDoctor extends Component {
    render() {
        return (
            <div className="SearchMain">
                <div className="SearchFilter">
                    <input  className="SearchTopL" type="text" placeholder=" Enter Location"></input>
                    <input className="SearchTopH"  type="text" placeholder=" Search Doctors , Hospitals, Clinics"></input>
                </div>
                <div className="SearchFilter">
                    <label className="SearchDocType">Filter</label> 
                    <select style={{marginLeft:"3%"}}>
                        <option value="" disabled selected>Distance</option>      
                    </select>
                    <label className="SearchDocType" style={{marginLeft:"4%"}}>Sort By</label> 
                    <select style={{marginLeft:"1%"}}>
                        <option value="" disabled selected>Relevance</option>  
                    </select>
                </div>
                <div className="SearchHeading">102 Doctors Available in Delhi</div>
                <div className="SearchCard">
                    <div style={{display:"flex",flexDirection:"row"}}>
                        <img className="SearchProfile" src={Profile}></img>
                        <p style={{marginTop:"3%",marginLeft:"5%"}}>
                            <span className="SearchDocName">Dr. Raman</span> <img src={Tick}></img><br />
                            <span className="SearchDocType"> Physician</span><br/><br/>
                            <span className="SearchDocType"> 5 Years of Experience</span>
                            <br />
                            <span className="SearchDocType" style={{fontWeight:"bolder"}}> Janakpuri, New Delhi</span><br/>
                            <span>Clinic Name</span><br />
                            <span className="SearchDocType"> Consultation Fee : Rs. 500</span>
                            <img style={{marginLeft:"20%",marginTop:"3%",width:"50%"}} src={ScheduleAppointment}></img>
                        </p>
                    </div>
                </div>

                <div className="SearchCard">
                    <div style={{display:"flex",flexDirection:"row"}}>
                        <img className="SearchProfile" src={Profile}></img>
                        <p style={{marginTop:"3%",marginLeft:"5%"}}>
                            <span className="SearchDocName">Dr. Raman</span> <img src={Tick}></img><br />
                            <span className="SearchDocType"> Physician</span><br/><br/>
                            <span className="SearchDocType"> 5 Years of Experience</span>
                            <br />
                            <span className="SearchDocType" style={{fontWeight:"bolder"}}> Janakpuri, New Delhi</span>
                            <span>    |Clinic Name</span><br />
                            <span className="SearchDocType"> Consultation Fee : Rs. 500</span>
                            <img style={{marginLeft:"20%",marginTop:"3%",width:"50%"}} src={ScheduleAppointment}></img>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchDoctor;