import React from "react";
import { Box, Typography, Button, Avatar } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import myPic from "../Image/my-pic.jpeg"; // relative path = /src/Image/my-pic.jpeg

const HeroSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        // textAlign: "center",
        justifyContent: "space-evenly",
        mt: 10,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center", // Center items horizontally
          justifyContent: "center", // Center items vertically
          textAlign: "center",
        }}
      >
        <Avatar
          alt="Juan Torres"
          src={myPic}
          sx={{ width: 400, height: 400 }}
        />
        <Typography variant="h4" component="h1" gutterBottom>
          Juan Torres
        </Typography>
        <Typography variant="h6" component="p" gutterBottom>
          Full Stack Developer
        </Typography>
      </Box>
      <Box>
        <Typography variant="body1" component="p" gutterBottom>
          Hello, I'm Juan Torres
        </Typography>
        <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
          <Button variant="outlined">Download Resume</Button>
          <Button variant="outlined">Contact Info</Button>
        </Box>
        <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
          <Button
            startIcon={<LinkedInIcon />}
            sx={{ color: "inherit", textTransform: "none" }}
          >
            LinkedIn
          </Button>

          <Button
            startIcon={<GitHubIcon />}
            sx={{ color: "inherit", textTransform: "none" }}
          >
            GitHub
          </Button>
          <Button
            startIcon={<EmailIcon />}
            sx={{ color: "inherit", textTransform: "none" }}
          >
            Email
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
