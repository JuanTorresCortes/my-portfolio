// import React from "react";
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Button,
//   Box,
//   IconButton,
//   Menu,
//   MenuItem,
// } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const NavBar = () => {
//   const [anchorEl, setAnchorEl] = useState(null);
//   const open = Boolean(anchorEl);

//   const navigate = useNavigate();

//   const handleMenu = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <AppBar position="static" color="transparent" elevation={0}>
//       <Toolbar>
//         <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//           Juan Torres
//         </Typography>
//         <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
//           <Button color="inherit" onClick={() => navigate("/about")}>
//             About
//           </Button>
//           <Button color="inherit" onClick={() => navigate("/projects")}>
//             Projects
//           </Button>
//           <Button color="inherit">Contact Info</Button>
//         </Box>
//         <Box sx={{ display: { xs: "flex", md: "none" } }}>
//           <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             onClick={handleMenu}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Menu
//             anchorEl={anchorEl}
//             open={open}
//             onClose={handleClose}
//             transformOrigin={{
//               vertical: "top",
//               horizontal: "right",
//             }}
//             anchorOrigin={{
//               vertical: "top",
//               horizontal: "right",
//             }}
//           >
//             <MenuItem
//               onClick={() => {
//                 navigate("/about");
//                 handleClose();
//               }}
//             >
//               About
//             </MenuItem>
//             <MenuItem
//               onClick={() => {
//                 navigate("/projects");
//                 handleClose();
//               }}
//             >
//               Projects
//             </MenuItem>
//             <MenuItem onClick={handleClose}>Contact Info</MenuItem>
//           </Menu>
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default NavBar;

// import React, { useState } from "react";
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Button,
//   Box,
//   Menu,
//   MenuItem,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogContentText,
//   DialogTitle,
//   IconButton,
//   CssBaseline
// } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import HomeIcon from "@mui/icons-material/Home";
// import ContentCopyIcon from "@mui/icons-material/ContentCopy";
// import { useNavigate, useLocation } from "react-router-dom";

// const NavBar = () => {
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [openDialog, setOpenDialog] = useState(false);
//   const open = Boolean(anchorEl);

//   const navigate = useNavigate();
//   const location = useLocation();

//   const handleMenu = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleCloseMenu = () => {
//     setAnchorEl(null);
//   };

//   const handleOpenDialog = () => {
//     setOpenDialog(true);
//   };

//   const handleCloseDialog = () => {
//     setOpenDialog(false);
//   };

//   const handleCopy = (text) => {
//     navigator.clipboard.writeText(text);
//     alert(`${text} copied to clipboard!`);
//   };

//   return (
//     <AppBar position="static" color="transparent" elevation={0}>
//       <Toolbar>
//         <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//           Juan Torres
//         </Typography>
//         <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
//           {location.pathname !== "/" && (
//             <Button color="inherit" onClick={() => navigate("/")}>
//               <HomeIcon />
//             </Button>
//           )}
//           <Button color="inherit" onClick={() => navigate("/about")}>
//             About
//           </Button>
//           <Button color="inherit" onClick={() => navigate("/projects")}>
//             Projects
//           </Button>
//           <Button color="inherit" onClick={handleOpenDialog}>
//             Contact Info
//           </Button>
//         </Box>
//         <Box sx={{ display: { xs: "flex", md: "none" } }}>
//           <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             onClick={handleMenu}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Menu
//             anchorEl={anchorEl}
//             open={open}
//             onClose={handleCloseMenu}
//             transformOrigin={{
//               vertical: "top",
//               horizontal: "right",
//             }}
//             anchorOrigin={{
//               vertical: "top",
//               horizontal: "right",
//             }}
//           >
//             {location.pathname !== "/" && (
//               <MenuItem
//                 onClick={() => {
//                   navigate("/");
//                   handleCloseMenu();
//                 }}
//               >
//                 Home
//               </MenuItem>
//             )}
//             <MenuItem
//               onClick={() => {
//                 navigate("/about");
//                 handleCloseMenu();
//               }}
//             >
//               About
//             </MenuItem>
//             <MenuItem
//               onClick={() => {
//                 navigate("/projects");
//                 handleCloseMenu();
//               }}
//             >
//               Projects
//             </MenuItem>
//             <MenuItem
//               onClick={() => {
//                 handleOpenDialog();
//                 handleCloseMenu();
//               }}
//             >
//               Contact Info
//             </MenuItem>
//           </Menu>
//         </Box>
//       </Toolbar>

//       <Dialog open={openDialog} onClose={handleCloseDialog}>
//         <DialogTitle>Contact Info</DialogTitle>
//         <DialogContent>
//           <DialogContentText>
//             Phone: (123) 456-7890{" "}
//             <IconButton onClick={() => handleCopy("(123) 456-7890")}>
//               <ContentCopyIcon />
//             </IconButton>
//             <br />
//             Email: juan@example.com{" "}
//             <IconButton onClick={() => handleCopy("juan@example.com")}>
//               <ContentCopyIcon />
//             </IconButton>
//           </DialogContentText>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseDialog}>Close</Button>
//         </DialogActions>
//       </Dialog>
//     </AppBar>
//   );
// };

// export default NavBar;

import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { useNavigate, useLocation } from "react-router-dom";

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const open = Boolean(anchorEl);

  const navigate = useNavigate();
  const location = useLocation();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert(`${text} copied to clipboard!`);
  };

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Juan Torres
        </Typography>
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
          {location.pathname !== "/" && (
            <Button color="inherit" onClick={() => navigate("/")}>
              <HomeIcon />
            </Button>
          )}
          {location.pathname !== "/about" && (
            <Button color="inherit" onClick={() => navigate("/about")}>
              About
            </Button>
          )}
          {location.pathname !== "/projects" && (
            <Button color="inherit" onClick={() => navigate("/projects")}>
              Projects
            </Button>
          )}
          <Button color="inherit" onClick={handleOpenDialog}>
            Contact Info
          </Button>
        </Box>
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenu}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleCloseMenu}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            {location.pathname !== "/" && (
              <MenuItem
                onClick={() => {
                  navigate("/");
                  handleCloseMenu();
                }}
              >
                Home
              </MenuItem>
            )}
            {location.pathname !== "/about" && (
              <MenuItem
                onClick={() => {
                  navigate("/about");
                  handleCloseMenu();
                }}
              >
                About
              </MenuItem>
            )}
            {location.pathname !== "/projects" && (
              <MenuItem
                onClick={() => {
                  navigate("/projects");
                  handleCloseMenu();
                }}
              >
                Projects
              </MenuItem>
            )}
            <MenuItem
              onClick={() => {
                handleOpenDialog();
                handleCloseMenu();
              }}
            >
              Contact Info
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Contact Info</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Phone: (123) 456-7890{" "}
            <IconButton onClick={() => handleCopy("(123) 456-7890")}>
              <ContentCopyIcon />
            </IconButton>
            <br />
            Email: juan@example.com{" "}
            <IconButton onClick={() => handleCopy("juan@example.com")}>
              <ContentCopyIcon />
            </IconButton>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Close</Button>
        </DialogActions>
      </Dialog>
    </AppBar>
  );
};

export default NavBar;
