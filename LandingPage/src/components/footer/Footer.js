import "./Footer.css";

import {
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  YouTube,
} from "@material-ui/icons";
import React, { Fragment } from "react";

import { IconButton } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import ShowMoreText from "react-show-more-text";
import footerLogo from "../../Assets/footer-logo.svg";

const Footer = () => {
  const formSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <Fragment>
      <div className="FooterMain">
        <div className=" FooterColumn text-start d-sm-flex flex-wrap mt-0 ">
          <div className=" FooterColumn__des col-lg-4 col-md-8 col-sm-12 p-md-3 p-2">
            <img src={footerLogo} alt="" className="w-75 " />
            <br/><br/>

            <section className="AboutJeevitiv ">
              <ShowMoreText
                lines={6}
                more="READ MORE"
                less="SHOW LESS"
                anchorClass="showMoreText"
                expanded={false}
                width={250}
                className="show-more-content"
              >
                Jeevitiv is a KPI(Key Performance Indicator) driven healthcare firm which aims to provides
                the best healthcare services currently available in the country.
                We strive and work for the optimum well being of everyone.
                Register yourself with us and revolutionize the health system.
              </ShowMoreText>
            </section>
            <section className="d-flex social-media mt-4 w-100">
              <li
                className="social-media-icons"
                onClick={() =>
                  window.open(
                    "https://www.facebook.com/Jeevitiv-103368022000583",
                    "_blank"
                  )
                }
              >
                <IconButton>
                  <Facebook />
                </IconButton>
              </li>
              <li
                className="social-media-icons"
                onClick={() =>
                  window.open("https://twitter.com/jeevitiv", "_blank")
                }
              >
                <IconButton>
                  <Twitter />
                </IconButton>
              </li>
              <li
                className="social-media-icons"
                onClick={() =>
                  window.open("https://www.instagram.com/jeevitiv/", "_blank")
                }
              >
                <IconButton>
                  <Instagram />
                </IconButton>
              </li>
              <li
                className="social-media-icons"
                onClick={() =>
                  window.open(
                    "https://www.youtube.com/channel/UCSgsFbo49UXvnTJA73Sm4YQ",
                    "_blank"
                  )
                }
              >
                <IconButton>
                  <YouTube />
                </IconButton>
              </li>
              <li
                className="social-media-icons"
                onClick={() =>
                  window.open(
                    "https://in.linkedin.com/company/jeevitiv",
                    "_blank"
                  )
                }
              >
                <IconButton>
                  <LinkedIn />
                </IconButton>
              </li>
            </section>
          </div>
          <div className=" FooterColumn__des col-lg-2 col-md-4 col-sm-12 p-3">
            <p className="mb-0 link-description text-decoration-underline">
              Links
            </p>
            <nav className="FooterLinks d-md-flex  flex-column">
              <NavLink exact activeClassName="active" to="/">
                Home {""}
              </NavLink>

              <NavLink exact activeClassName="active " to="/About">
                Company {""}
              </NavLink>

              <NavLink activeClassName="active" to="/FAQ">
                FAQs {""}
              </NavLink>

              <NavLink activeClassName="active" to="/pricing">
                Pricing {""}
              </NavLink>

              <NavLink activeClassName="active" to="/Blogs">
                Blogs {""}
              </NavLink>

              <NavLink activeClassName="active" to="/Careers">
                Careers {""}
              </NavLink>

              <NavLink activeClassName="active" to="/terms">
                Terms & Conditions {""}
              </NavLink>

              <NavLink activeClassName="active" to="/ ">
                Privacy Policy {""}
              </NavLink>

              <NavLink activeClassName="active" to="/Help ">
                Help {""}
              </NavLink>

              <NavLink exact activeClassName="active" to="/Podcast">
                Podcast {""}
              </NavLink>
            </nav>
          </div>
          <div className="FooterColumn__des col-lg-2 col-md-4 col-sm-12 p-3">
            <p className="mb-0 link-description text-decoration-underline">
              Services
            </p>
            <nav className="d-md-flex flex-column FooterLinks">
              <NavLink activeClassName="active " to="/Services" exact={true}>
                Quality Consultation {""}
              </NavLink>

              <NavLink activeClassName="active" exact={true} to="/Services">
                Qualified Doctors {""}
              </NavLink>

              <NavLink activeClassName="active" exact={true} to="/Services">
                Electronic Prescribing Interoperability {""}
              </NavLink>

              <NavLink activeClassName="active" exact={true} to="/Services">
                Doctor's Benefits {""}
              </NavLink>

              <NavLink activeClassName="active" exact={true} to="/Services">
                Patient's Benefits {""}
              </NavLink>
            </nav>
          </div>
          <form
            className=" FooterColumn__des col-lg-4 col-md-8 col-sm-12 p-1 p-md-3 "
            onSubmit={formSubmitHandler}
          >
            <span className="link-description">Need Help?</span>
            <br />
            <input
              className="Input1"
              type="text"
              placeholder="your name"
            ></input>
            <br />
            <input
              className="Input1"
              type="text"
              placeholder="your email"
            ></input>
            <br />
            <input
              className="Input1"
              type="text"
              placeholder="phone no."
            ></input>
            <textarea className="Input2" placeholder="message"></textarea>
            <button className="helpButton d-block ms-md-0 rounded-1">
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
      <div className="FooterRow2">
        <p>
          <span>LET'S KEEP IN TOUCH</span> <br />
          subscribe to our email newsletter to keep <br /> yourself updated
        </p>
        <div className="footer-subscribe mt-2 mt-md-4">
          <input
            className="FooterSearch"
            placeholder="Enter your email"
          ></input>
          <button className="subscribe-button m-md-0 d-inline ps-md-2">
            Subscribe
          </button>
          <br />
        </div>
        <p className="copyright">Copyright ©2021 All rights reserved</p>
      </div>
    </Fragment>
  );
};

export default Footer;
