import React from "react";
import NavBar from "../Components/NavBar";
import { CssBaseline, Typography } from "@mui/material";

const Projects = () => {
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
      <Typography>Projects</Typography>
    </div>
  );
};

export default Projects;
