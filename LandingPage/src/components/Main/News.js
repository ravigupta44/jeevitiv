import React from "react";
import "./News.css";

export default function News() {
  return (
    <div className="box">
      {/* <img
        src="https://lh3.google.com/u/0/d/1-WTX2Kw4ZlgLnwT9gYyFOxVXowT9eS-t=w1375-h881-iv1"
        alt=""
      /> */}
      <h2>LET'S KEEP IN TOUCH</h2>
      <p>Subscribe to our email newsletter to keep yourself updated.</p>
      <div className="form-controll">
        <input
          type="text"
          className="news_inputfield"
          placeholder="Enter e-mail address"
        />
        {/* <button className="btn">SUBSCRIBE</button> */}
        <div className="new_btn">SUBSCRIBE</div>
      </div>
      <p className="copyright">Copyright ©2021 All rights reserved</p>
    </div>
  );
}
