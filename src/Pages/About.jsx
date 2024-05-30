import React from "react";
import NavBar from "../Components/NavBar";
import { CssBaseline, Typography } from "@mui/material";

const About = () => {
  return (
    <div
      style={{
        backgroundColor: "#f8f8f8",
        minHeight: "100vh",
        minWidth: "96vw",
        padding: "20px",
      }}
    >
      <CssBaseline />
      <NavBar />
      <Typography>About</Typography>
    </div>
  );
};

export default About;
