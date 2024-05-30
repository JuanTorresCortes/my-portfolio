import React from "react";
import { Container, CssBaseline, Box } from "@mui/material";
import "./App.css";
import NavBar from "./Components/NavBar";
import HeroSection from "./Components/HeroSection";
import { Outlet } from "react-router-dom";

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
