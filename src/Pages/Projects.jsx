import React from "react";
import NavBar from "../Components/NavBar";
import {
  CssBaseline,
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Box,
} from "@mui/material";

const Projects = () => {
  return (
    <Box
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
          PROJECTS
        </Typography>
      </Box>
      <Box
        sx={{
          mt: 12,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          textAlign: "center",
          mb: { xs: 4, md: 0 },
        }}
      >
        <Card sx={{ maxWidth: 345, boxShadow: 24 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345, boxShadow: 24 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345, boxShadow: 24 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345, boxShadow: 24 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Box>
    </Box>
  );
};

export default Projects;
