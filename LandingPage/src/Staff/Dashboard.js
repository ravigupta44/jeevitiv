import React, { Component } from "react";
import "./Dashboard.css";
import Settings from "../Assets/settings.svg"
import Question from "../Assets/question.svg"
import button1 from "../Assets/uploadReportButton.svg"
import button2 from "../Assets/prescriptionButton.svg"
import ProfileIcon from "../Assets/ProfileIcon.svg"

class Landing extends Component {

  render() {
    return (
      <div className="staff_dashboard">
        <div className="row1">
          <div className="left_nav">
            <img style={{ marginLeft: "2%", marginRight: "2%", width: "100px" }} src={ProfileIcon}></img>
            <div className="profile">ok</div>
          </div>
          <div className="right_nav" >
            <input className="searchBar" type="search" placeholder="Search..." />
            <img src={Settings} style={{ padding: "5px", marginLeft: "10%" }}  ></img>
            <img src={Question} style={{ padding: "5px", marginLeft: "10%" }}></img>
          </div>
        </div>

        <div className="row3" >
          <div className="inputDiv">
            <p className="inputLabel">Patient ID :
              <span className="input" style={{ marginLeft: "7.50%" }}>
                <input style={{ border: "none" }} type="text" ></input>
              </span>
            </p>

            <p className="inputLabel">Category : 
              <span className="input" style={{ marginLeft: "8%" }} >
                <input style={{ border: "none" }} type="text" ></input>
              </span>
            </p>
          </div>

          <div className="btnDiv">
            <img src={button1} className="btn"></img>
            <img src={button2} className="btn"></img>
          </div>
        </div>

        <div className="entry_table">
          <table class="table">
            <thead>
              <tr className="inputLabel" style={{ backgroundColor: "#F4F4F4" }}>
                <th scope="col">ID</th>
                <th scope="col">Patients Name</th>
                <th scope="col">Time/Date</th>
                <th scope="col">Ailment</th>
                <th scope="col">New/Follow-Up</th>
                <th scope="col">Accept/Reject</th>
                <th scope="col">Time Slot</th>
                <th scope="col">Payment</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
              </tr>

            </tbody>
          </table>
        </div>

      </div>
    );
  }
}

export default Landing;
