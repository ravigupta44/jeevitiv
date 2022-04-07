import React from "react";
import Card from "../Main/EventsCard";
import { Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// import "./styles.css";
import styled from "styled-components";

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

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: "20px",
    paddingRight: "20px",
    paddingTop: "20px"
  },
  hero: {
    backgroundColor: "#F4F4F4",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#035B96",
    fontSize: "2rem"
  }
});

export default function Events() {
  const classes = useStyles();

  return (
    <div className="event">
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
      <Box className={classes.hero}>
        <Box>EVENTS</Box>
      </Box>
      <Grid container spacing={4} className={classes.gridContainer}>
        <Grid item xs={12} sm={6} md={4}>
          <Card />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card />
        </Grid>
      </Grid>
      <div className="events_demobtn">
        <button type="button" className="demo_btn">
          LOAD MORE
        </button>
      </div>
    </div>
  );
}
