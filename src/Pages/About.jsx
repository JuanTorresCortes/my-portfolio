import React from "react";
import NavBar from "../Components/NavBar";
import { CssBaseline, Typography, Box } from "@mui/material";

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
      <Box sx={{ textAlign: "center", mt: 4 }}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "2.5rem", md: "3.5rem" }, // Responsive font size
            // color: "#1976d2", // Primary color
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)", // Subtle shadow
            backgroundColor: "#f5f5f5", // Light background color
            display: "inline-block",
            padding: "0.5rem 1rem", // Padding around the text
            borderRadius: "8px", // Rounded corners
          }}
        >
          ABOUT
        </Typography>
      </Box>
    </div>
  );
};

export default About;
