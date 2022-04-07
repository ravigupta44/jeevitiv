import React from "react";
// import ReactDOM from "react-dom";
import "../Main/Partners.css";
import styled from "styled-components";
import ChatIcon from "@material-ui/icons/Chat";
import AddIcCallIcon from "@material-ui/icons/AddIcCall";
import HeadsetMicIcon from "@material-ui/icons/HeadsetMic";

const DIV = styled.div`
  cursor: pointer;
  position: fixed;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  top: 25%;
  z-index: 90;
`;
const ICON = styled.i`
  margin: 0%;
  width: 1.5rem;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 30px;

  &:nth-child(1) {
    background-color: rgba(3, 91, 150, 1);
    color: white;
  }
  &:nth-child(2) {
    background-color: rgba(3, 91, 150, 1);
    color: white;
  }
  &:nth-child(3) {
    background-color: rgba(3, 91, 150, 1);
    color: white;
  }
  &:hover {
    width: 10rem;
    transition: all 0.2s ease-out;
    & > Span {
      transition: all 1.5s ease-out;
      opacity: 1;
    }
  }
`;
const Span = styled.span`
  margin-left: 1.5rem;
  color: white;
  font-size: 1rem;
  opacity: 0;
`;

const Card = (props) => {
  return <div style={{ padding: 20, margin: 10 }} {...props} />;
};

function Partners() {
  return (
    <div className="App">
      <DIV>
        <ICON>
          {/* <ChatIcon style={{ marginLeft: "-10px" }} /> */}
          <img
            src="chat.svg"
            alt="chaticon"
            style={{ height: "30px", marginLeft: "50px" }}
          />
          <Span>Live Chat</Span>
        </ICON>
        <ICON onClick={() => window.open("www.twitter.com", "_blank")}>
          {/* <AddIcCallIcon style={{ marginLeft: "-10px" }} /> */}
          <img
            src="Group.svg"
            alt="chaticon"
            style={{ height: "30px", marginLeft: "50px" }}
          />
          <Span>Sales 333</Span>
        </ICON>
        <ICON onClick={() => window.open("www.linkedin.com", "_blank")}>
          {/* <HeadsetMicIcon style={{ marginLeft: "-10px" }} /> */}
          <img
            src="headphone.svg"
            alt="chaticon"
            style={{ height: "30px", marginLeft: "70px" }}
          />
          <Span>Support 333-222-111</Span>
        </ICON>
      </DIV>
      <div>
        <img
          src="https://s3-alpha-sig.figma.com/img/5558/80de/f8456723b99b7e4ef72bc573f4e91dc7?Expires=1628467200&Signature=M3K8wHjlFvuQDTC2RXgHGd7L0Dr0ZM6krG2-efrYous0WBCPA1z-7m-VYyFd9nlDRSVMpvilDLyJrOC6gTFZ3b4K9botMHKJ7HYlYoKxsvV1hDZNluTV7BeXxBzA41VTQSKG-n0Of-1DBfAWvT9YqL3USdAvQg75pkKOtirA2tH0BOUue9-yiR5cnCFIlRjtfQ~WzPLjjuCIWxJVsutUzOhRN-0v~37G2MBKwJ~OL8q5iPDTnyjaW4QQi~5VmBXFbrgBWeS7uxcM7AM5X9qBuzx-a~0TLiy3B5AYPcD4TirOe0vCeLgcdHddYmlf9mjqT-sQddauB~b4Lo85WQUKkQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          alt="partners_img"
          className="partner_img"
        />
      </div>
      <h1 className="h1txt">trusted by the finest companies</h1>
      <h2 className="h2txt">
        Our partners and collaborators are the reason for our sustenance. It
        wouldn't be possible to provide you without their sponsor. Here are the
        companies with which we work along.
      </h2>
      <div
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
        <Card>
          <div>
            {/* <Digitaal /> */}
            {/* jkasdhn */}
            <img src="mongodb.svg" alt="" />
          </div>
        </Card>
        <Card>
          <div>
            {/* <Slim /> */}
            <img src="aws.svg" alt="" />
          </div>
        </Card>
        <Card>
          <div>
            {/* <Snel /> */}
            <img src="godaddy.svg" alt="" />
          </div>
        </Card>
      </div>
      {/* next row */}
      <div
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
        <Card>
          <div>
            <img src="https://www.fast2sms.com/Fast2SMS.png" alt="" />
          </div>
        </Card>
        {/* <Card>
          <div>
            <img src="https://www.fast2sms.com/Fast2SMS-icon.png" alt="" />
          </div>
        </Card>
        <Card>
          <div>
            <img src="logo.png" alt="" />
          </div>
        </Card> */}
      </div>
      <h2 className="parttxt">want to be partners?</h2>
      <button className="partbtn">Contact us</button>
    </div>
  );
}

export default Partners;
