import React from "react";
import { Container, CssBaseline } from "@mui/material";
import "./App.css";
import NavBar from "./Components/NavBar";
import HeroSection from "./Components/HeroSection";
import { Outlet } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";

function App() {
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
      <HomeIcon sx={{ fontSize: 40, marginLeft: "1.3em" }} />
      <Container sx={{ mt: 4 }}>
        {" "}
        {/* Add margin top for spacing */}
        <HeroSection boxShadow={24} /> {/* Pass boxShadow value */}
      </Container>
      <Outlet />
    </div>
  );
}

export default App;
