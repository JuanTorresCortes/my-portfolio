import React from "react";
import { Container, CssBaseline, Box } from "@mui/material";
import "./App.css";
import NavBar from "./Components/NavBar";
import HeroSection from "./Components/HeroSection";

function App() {
  return (
    <div>
      <Container>
        <CssBaseline />
        <NavBar />
        <HeroSection />
      </Container>
    </div>
  );
}

export default App;
