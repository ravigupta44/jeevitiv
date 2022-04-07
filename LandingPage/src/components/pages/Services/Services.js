import React from "react";
import Support from "../../UI/Support";
import banner from "./banner.png";
import image1 from "./image1.png";
import image2 from "./image2.png";
import image3 from "./image3.png";
import image4 from "./image4.png";
import image5 from "./image5.png";
import { Link } from "react-router-dom";
import "./services.css";

function Services() {
  return (
    <div className="service">
      <Support />
      <img src={banner} alt="Services Banner" className="img-fluid w-100" />
      <div className="service-box Container-fluid w-100">
        <div className="paraBox col-md-6 col-12 py-2 py-md-4 px-2 px-md-3">
          <h2 className="paraBox-head text-start">INTEROPERABILITY </h2>
          <p className="paraTxt">
            Interoperability allows the user to migrate their documents on a new
            platform thus not only depriving EHR platforms to become
            monopolistic but also privileging the user to migrate to a better
            platform whenever they deem fit. Interoperability can be ensured by
            simply adhering to EHR guidelines propounded by Ministry of Health
            which involves storing the files in a particular order, format and
            style thus synchronising the operations of all EHR companies in the
            fray. We ensure it by strictly adhering to EHR standards and are
            also trying to leverage the blocking technology to fulfil it making
            it a non zero sum game for both the consumers & providers.
          </p>
        </div>
        <img
          className="service-img col-md-6 col-12 img-fluid py-2 py-md-4 px-2 px-md-3"
          alt="image1"
          align="right"
          src={image1}
        />
      </div>
      <div className="service-box Container-fluid w-100">
        <img
          className="service-img col-md-6 col-12 img-fluid py-2 py-md-4 px-2 px-md-3"
          align="right"
          alt="image2"
          src={image2}
        />
        <div className="paraBox col-md-6 col-12 py-2 py-md-4 px-2 px-md-3">
          <h2 className="paraBox-head text-start">EHR MANAGEMENT SYSTEM </h2>
          <p className="paraTxt">
            An EHR is a real time software which updates and secures the patient
            based information at that instant. While the main purpose of EHRs
            center around containing the medical and treatment files of the
            patients but now most of them go beyond this scope and offer more
            healthcare services while adhering to the EHR standards. An EHR
            management system is a vital part of the healthcare sector as it
            embody the diagnosis, medications, history, reports and all the
            medical files & documents. Bedsides that, it allows the doctor to
            have a better look and make better decisions regarding the patient's
            care. Medical practice management improves the productivity and
            efficiency of the staff and the administrator otherwise which is
            very tedious and time consuming. EHR practices are therefore helpful
            in bridging the gap between the patient and the doctor. Thus, it
            improves the healthcare catering and overall quality of the system.
          </p>
        </div>
      </div>
      <div className="service-box Container-fluid w-100 ">
        <div className="paraBox col-md-6 col-12 py-2 py-md-4 px-2 px-md-3">
          <h2 className="paraBox-head text-start">PATIENT'S ENGAGEMENT </h2>
          <p className="paraTxt">
            Our traditional healthcare system doesn't provides enough engagement
            between the patient and his doctor. A good communication is the key
            for the better treatment and overall well being. Get rid of that
            old-age way of that patient engagement and embrace the new system
            with the changing technology. We provide you the best ways so that
            you don't have to think twice about getting your doctor's opinion.
            With our automated messaging system and chatting options, your
            doctor is just a text away. The notifications and smart scheduling
            system will get you through the procedure with ease. Jeevitiv
            provides you all these facilities for the utmost patient
            satisfaction.
          </p>
        </div>
        <img
          className="service-img col-md-6 col-12 img-fluid py-2 py-md-4 px-2 px-md-3"
          align="right"
          alt="image3"
          src={image3}
        />
      </div>
      <div className="service-box Container-fluid w-100">
        <img
          className="service-img col-md-6 col-12 img-fluid py-2 py-md-4 px-2 px-md-3"
          align="right"
          alt="image4"
          src={image4}
        />
        <div className="paraBox col-md-6 col-12 py-2 py-md-4 px-2 px-md-3">
          <h2 className="paraBox-head text-start">
            {" "}
            ONLINE CONSULTATION OR BOOK YOUR APPOINTMENT{" "}
          </h2>
          <p className="paraTxt">
            Want to stay at your home and get yourself digitally diagnosed?
            Online consultation is the way. Get yourself checked as soon as
            possible using our software. It's safe and secure and you wouldn't
            have to worry about your data. At times, when we can't go out (for
            example during corona), online consultation can be really helpful.
            You can also book your appointment for the next day (or any other
            day) using our software. Without the unnecessary process, we'll get
            you done through it and you can schedule your meet up in no time.
          </p>
        </div>
      </div>
      <div className="service-box Container-fluid w-100">
        <div className="paraBox col-md-6 col-12 py-2 py-md-4 px-2 px-md-3">
          <h2 className="paraBox-head text-start">ELECTRONIC PRESCRIBING</h2>
          <p className="paraTxt">
            E-prescribing is the computer based automatic generation and
            transmission of a medical prescription without the need of the
            traditional paper-pen or faxed prescription. E prescription is the
            best way to get your medication as it improves the accuracy and
            safety of the patient in the process. Handwritten notes are prone to
            mistakes and errors and it can cost you in the long term. But with
            electronic prescription, you can stay at your home and your
            medication will be delivered to you. Our e prescribing software is
            certified and keeps you up to date with all the changing medicines
            and the protocols.
          </p>
        </div>
        <img
          className="service-img col-md-6 col-12 img-fluid py-2 py-md-4 px-2 px-md-3"
          align="right"
          alt="image5"
          src={image5}
        />
      </div>
      <div className="news-footer w-100 d-flex">
        <Link to='#'>News</Link>
        <Link to='#'>Events</Link>
        <Link to='/Podcast'>Podcasts</Link>
        <Link to='/Blogs'>Our Blogs</Link>
      </div>
    </div>
  );
}

export default Services;
