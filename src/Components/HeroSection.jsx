import React from "react";
import { Box, Typography, Button, Avatar } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import myPic from "../Image/my-pic.jpeg"; // relative path = /src/Image/my-pic.jpeg

const HeroSection = ({ boxShadow }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" }, // Column layout on small screens, row layout on medium and larger screens
        alignItems: "center",
        justifyContent: "space-evenly",
        mt: 10,
        backgroundColor: "lightgray",
        border: "1px solid black",
        padding: { xs: 2, md: 4 }, // Padding changes based on screen size
        textAlign: "center",
        boxShadow: boxShadow, // Apply boxShadow prop
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center", // Center items horizontally
          justifyContent: "center", // Center items vertically
          textAlign: "center",
          mb: { xs: 4, md: 0 }, // Margin bottom on small screens
        }}
      >
        <Avatar
          alt="Juan Torres"
          src={myPic}
          sx={{ width: { xs: 150, md: 400 }, height: { xs: 150, md: 400 } }} // Responsive avatar size
        />
        <Typography variant="h4" component="h1" gutterBottom>
          Juan Torres
        </Typography>
        <Typography variant="h6" component="p" gutterBottom>
          Full Stack Developer
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center", // Center items horizontally
          justifyContent: "center", // Center items vertically
          textAlign: "center",
          maxWidth: { xs: "100%", md: "50%" }, // Full width on small screens, half width on medium and larger screens
        }}
      >
        <Typography variant="body1" component="p" gutterBottom>
          Hello, I'm Juan Torres, a passionate full stack developer with
          expertise in MERN stack.
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            mt: 2,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <Button variant="outlined" color="inherit">
            Resume
          </Button>
          <Button variant="outlined" color="inherit">
            Contact
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            mt: 2,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
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
