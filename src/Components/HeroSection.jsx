// import React from "react";
// import { Box, Typography, Button, Avatar } from "@mui/material";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import EmailIcon from "@mui/icons-material/Email";
// import myPic from "../Image/my-pic.jpeg"; // relative path = /src/Image/my-pic.jpeg

// const HeroSection = ({ boxShadow }) => {
//   return (
//     <Box
//       sx={{
//         display: "flex",
//         flexDirection: { xs: "column", md: "row" }, // Column layout on small screens, row layout on medium and larger screens
//         alignItems: "center",
//         justifyContent: "space-evenly",
//         mt: 10,
//         backgroundColor: "lightgray",
//         border: "1px solid black",
//         padding: { xs: 2, md: 4 }, // Padding changes based on screen size
//         textAlign: "center",
//         boxShadow: boxShadow, // Apply boxShadow prop
//       }}
//     >
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center", // Center items horizontally
//           justifyContent: "center", // Center items vertically
//           textAlign: "center",
//           mb: { xs: 4, md: 0 }, // Margin bottom on small screens
//         }}
//       >
//         <Avatar
//           alt="Juan Torres"
//           src={myPic}
//           sx={{ width: { xs: 150, md: 400 }, height: { xs: 150, md: 400 } }} // Responsive avatar size
//         />
//         <Typography variant="h4" component="h1" gutterBottom>
//           Juan Torres
//         </Typography>
//         <Typography variant="h6" component="p" gutterBottom>
//           Full Stack Developer
//         </Typography>
//       </Box>
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center", // Center items horizontally
//           justifyContent: "center", // Center items vertically
//           textAlign: "center",
//           maxWidth: { xs: "100%", md: "50%" }, // Full width on small screens, half width on medium and larger screens
//         }}
//       >
//         <Typography variant="body1" component="p" gutterBottom>
//           Hello, I'm Juan Torres, a passionate full stack developer with
//           expertise in MERN stack.
//         </Typography>
//         <Box
//           sx={{
//             display: "flex",
//             gap: 2,
//             mt: 2,
//             flexWrap: "wrap",
//             justifyContent: "center",
//           }}
//         >
//           <Button variant="outlined" color="inherit">
//             Resume
//           </Button>
//           <Button variant="outlined" color="inherit">
//             Contact
//           </Button>
//         </Box>
//         <Box
//           sx={{
//             display: "flex",
//             gap: 2,
//             mt: 2,
//             flexWrap: "wrap",
//             justifyContent: "center",
//           }}
//         >
//           <Button
//             startIcon={<LinkedInIcon />}
//             sx={{ color: "inherit", textTransform: "none" }}
//             href="https://www.linkedin.com/in/juan-torres-555574248"
//             target="_blank"
//           >
//             LinkedIn
//           </Button>
//           <Button
//             startIcon={<GitHubIcon />}
//             sx={{ color: "inherit", textTransform: "none" }}
//             href="https://github.com/JuanTorresCortes"
//             target="_blank"
//           >
//             GitHub
//           </Button>
//           <Button
//             startIcon={<EmailIcon />}
//             sx={{ color: "inherit", textTransform: "none" }}
//             href="mailto:juan.torres.codes@gmail.com"
//           >
//             Email
//           </Button>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default HeroSection;

import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Avatar,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import myPic from "../Image/my-pic.jpeg"; // relative path = /src/Image/my-pic.jpeg
import resume from "../Resume/MyResume.pdf"; // relative path = src/Resume/Resume.pdf

const HeroSection = ({ boxShadow }) => {
  const [openResume, setOpenResume] = useState(false);
  const [openContact, setOpenContact] = useState(false);

  const handleOpenResume = () => {
    setOpenResume(true);
  };

  const handleCloseResume = () => {
    setOpenResume(false);
  };

  const handleOpenContact = () => {
    setOpenContact(true);
  };

  const handleCloseContact = () => {
    setOpenContact(false);
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert(`${text} copied to clipboard!`);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-evenly",
        mt: 10,
        backgroundColor: "lightgray",
        border: "1px solid black",
        padding: { xs: 2, md: 4 },
        textAlign: "center",
        boxShadow: boxShadow,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          mb: { xs: 4, md: 0 },
        }}
      >
        <Avatar
          alt="Juan Torres"
          src={myPic}
          sx={{ width: { xs: 150, md: 400 }, height: { xs: 150, md: 400 } }}
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
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          maxWidth: { xs: "100%", md: "50%" },
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
          <Button variant="outlined" color="inherit" onClick={handleOpenResume}>
            Resume
          </Button>
          <Button
            variant="outlined"
            color="inherit"
            onClick={handleOpenContact}
          >
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
            href="https://www.linkedin.com/in/juan-torres-555574248"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </Button>
          <Button
            startIcon={<GitHubIcon />}
            sx={{ color: "inherit", textTransform: "none" }}
            href="https://github.com/JuanTorresCortes"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Button>
          <Button
            startIcon={<EmailIcon />}
            sx={{ color: "inherit", textTransform: "none" }}
            href="mailto:juan.torres.codes@gmail.com"
          >
            Email
          </Button>
        </Box>
      </Box>

      {/* Resume Dialog */}
      <Dialog
        open={openResume}
        onClose={handleCloseResume}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>Resume</DialogTitle>
        <DialogContent>
          <iframe
            src={resume}
            width="100%"
            height="500px"
            title="Resume"
            style={{ border: "none" }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseResume}>Close</Button>
          <Button href={resume} download="JuanTorres-Resume.pdf">
            Download
          </Button>
        </DialogActions>
      </Dialog>

      {/* Contact Dialog */}
      <Dialog open={openContact} onClose={handleCloseContact}>
        <DialogTitle>Contact Info</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Phone: (832) 901-7158{" "}
            <IconButton onClick={() => handleCopy("(832) 901-7158")}>
              <ContentCopyIcon />
            </IconButton>
            <br />
            Email: juan.torres.codes@gmail.com{" "}
            <IconButton
              onClick={() => handleCopy("juan.torres.codes@gmail.com")}
            >
              <ContentCopyIcon />
            </IconButton>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseContact}>Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default HeroSection;
