import React from "react";
import "./DoctorsB.css";
import DoctorBenefit from "../../Doctor/DoctorBenefit";

const DoctorsB = () => {
  return (
    <>
      <div class="Drow">
       <a className="overlayy" href="/DoctorBenefit" ></a>

        <div class="Dcolumn1">
          {/* <h2>Column 1</h2> */}
          <h2 className="Dcol1_txt">Benefits for Doctors</h2>
        </div>
        <div class="Dcolumn2">
          <p className="Doc_txt">Accurate patient information</p><br/>
          <p className="Doc_txt">Increased efficiency</p><br/>
          <p className="Doc_txt">Scalability</p><br/>
          <p className="Doc_txt">Security and Support</p><br/>
          <p className="Doc_txt">Better quality of Care</p><br/>
          <p className="Doc_txt">Accessibility</p><br/>
          <p className="Doc_txt">Customization</p>
        </div>
      </div>
    </>
  );
};

export default DoctorsB;
