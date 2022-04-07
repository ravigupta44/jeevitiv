import {
  Facebook,
  Instagram,
  Twitter,
  YouTube,
  LinkedIn,
} from "@material-ui/icons";
import React from "react";
import { IconButton } from "@material-ui/core";
import "./ContactUs.css";
import Support from '../../components/UI/Support';

const ContactUs = () => {

  const formSubmitHandler =(e) => {
    e.preventDefault()
  }

    return (
      <div className="Contact">
          <Support/>
          <br/>
          <h1 className='m-md-3 m-2'>CONTACT US</h1>
          <p>
            Feel like contacting us? 
            <br/>
            Submit your queries here and we will get
            back to you as soon as possible.
          </p>

        <div className="contact-details d-md-flex m-md-5 m-3">
            <section className="contact-details__col col-md-7">
            <form  onSubmit={formSubmitHandler}>
              <input
                className="Input1"
                type="text"
                placeholder="Name"
              ></input>
              <br />
              <input
                className="Input1"
                type="text"
                placeholder="Phone no."
              ></input>
              <br />
              <input
                className="Input1"
                type="text"
                placeholder="Email"
              ></input>
              <textarea className="Input2" placeholder="Message"></textarea>
              <button className="d-block  rounded-1">
                SUBMIT
              </button>
          </form>
            </section>
          
          <div className="contact-details__col col-md-5 align-self-end">
          <div className="ContactEmail text-start col-md-6 mx-auto">
              Email: jeevitivindia@gmail.com <br />
              <br />
              Connect with us:
            </div>
            <section className="d-flex contact-social-media justify-content-start my-md-4 my-3 col-md-6 mx-auto">
                <li className="contact-social-media-icons" onClick={() => window.open("https://www.facebook.com/Jeevitiv-103368022000583", "_blank")}>
                  <IconButton >
                    <Facebook/>
                  </IconButton>
                </li>
                <li className="contact-social-media-icons" onClick={() => window.open("https://twitter.com/jeevitiv", "_blank")}>
                  <IconButton >
                    <Twitter />
                  </IconButton>
                </li>
                <li className="contact-social-media-icons" onClick={() => window.open("https://www.instagram.com/jeevitiv/", "_blank")}>
                  <IconButton>
                    <Instagram />
                  </IconButton>
                </li>
                <li className="contact-social-media-icons" onClick={() => window.open("https://www.youtube.com/channel/UCSgsFbo49UXvnTJA73Sm4YQ", "_blank")}>
                  <IconButton>
                    <YouTube />
                  </IconButton>
                </li>
                <li className="contact-social-media-icons" onClick={() => window.open("https://in.linkedin.com/company/jeevitiv", "_blank")}>
                  <IconButton>
                    <LinkedIn />
                  </IconButton>
                </li>
              </section>
          </div>
        </div>
      </div>
    );
  }


export default ContactUs;
