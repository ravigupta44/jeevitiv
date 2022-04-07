import React from "react";
import "./support.css";
import { LiveHelp, Call, Headset } from "@material-ui/icons";

const Support = () => {
  return (
    <div className="support">
      <p
        className="support-icons"
        onClick={() => window.open("https://twitter.com/Jeevitiv")}
      >
        <i>
          <LiveHelp />
        </i>
        <span>Live Chat</span>
      </p>

      <p
        className="support-icons"
        onClick={() => window.open("https://twitter.com/jeevitiv", "_blank")}
      >
        <i>
          <Call />
        </i>
        <span>Call 7091 3984 55</span>
      </p>
      <p
        className="support-icons"
        onClick={() => window.open("https://twitter.com/jeevitiv", "_blank")}
      >
        <i>
          <Headset />
        </i>
        <span>Support 7091 3984 55</span>
      </p>
    </div>
  );
};

export default Support;
