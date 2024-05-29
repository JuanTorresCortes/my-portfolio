import React from "react";
import { Box, Typography, Button, Avatar } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const HeroSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        mt: 4,
      }}
    >
      <Avatar
        alt="John Doe"
        src="https://via.placeholder.com/150"
        sx={{ width: 150, height: 150 }}
      />
      <Typography variant="h4" component="h1" gutterBottom>
        John Doe
      </Typography>
      <Typography variant="h6" component="p" gutterBottom>
        Frontend Developer
      </Typography>
      <Typography variant="body1" component="p" gutterBottom>
        Hello, I'm John Doe
      </Typography>
      <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
        <Button variant="outlined">Download CV</Button>
        <Button variant="contained">Contact Info</Button>
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
      </Box>
    </Box>
  );
};

export default HeroSection;
