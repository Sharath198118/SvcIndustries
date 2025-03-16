
import React, { useState, useEffect } from "react";
import { Box, Typography, Card, useMediaQuery } from "@mui/material";
import environment from "../assets/environment.jpg";
import recycle from "../assets/recycle2.jpg";

const BackgroundImageCard = ({ images, titles, contents, delay = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, delay);
    return () => clearInterval(interval);
  }, [delay, images.length]);

  const handleClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  if (!images || images.length === 0) {
    return null;
  }

  const contentStyles = {
    color: currentIndex === 0 ? "black" : "white",
  };

  return (
    <Card
      sx={{
        backgroundImage: `url(${images[currentIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: 300,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        padding: "20px",
        cursor: "pointer",
        "&:hover": { opacity: 0.8 },
      }}
      onClick={handleClick}
    >
      <Box
        sx={{
          textAlign: "center",
          width: isSmallScreen ? "100%" : "500px",
          padding: isSmallScreen ? "10px" : "20px",
          color: contentStyles.color,
        }}
      >
        <Typography
          variant={isSmallScreen ? "h6" : "h4"}
          component="h2"
          gutterBottom
          sx={{ fontWeight: "bold" }}
        >
          {titles[currentIndex]}
        </Typography>
        <Typography variant="body1" paragraph>
          {contents[currentIndex]}
        </Typography>
      </Box>
    </Card>
  );
};

function FactoryCommitments() {
  const images = [recycle, environment];
  const titles = ["Our Commitment", "Environmental Responsibility"];
  const contents = [
    "We take pride in our role as a responsible recycler, helping to conserve natural resources, reduce landfill waste, and promote circular economy practices. By converting waste into useful products, we are actively contributing to the preservation of the environment for future generations.",
    "At SVC Industries, we are passionate about sustainability. By recycling old tyres, we help reduce the environmental impact of tyre waste, which would otherwise take centuries to decompose in landfills. Our process also minimizes harmful emissions, contributing to cleaner air and a healthier planet.",
  ];

  return (
    <div>
      <BackgroundImageCard
        images={images}
        titles={titles}
        contents={contents}
      />
    </div>
  );
}

export default FactoryCommitments;
