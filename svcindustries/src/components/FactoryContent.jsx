
import React from "react";
import { Box, Typography, Card, useMediaQuery } from "@mui/material";
import factoryImage from "../assets/factory.jpg";

function FactoryContent() {
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  return (
    <Card
      sx={{
        backgroundColor: "#e2e8f0",
        marginTop: "20px",
        display: "flex",
        flexDirection: isSmallScreen ? "column" : "row",
        alignItems: "center",
        justifyContent: "center",
        padding: "10px",
      }}
    >
      <Box
        sx={{
          padding: "20px",
          width: isSmallScreen ? "100%" : "50%",
          textAlign: isSmallScreen ? "center" : "left",
        }}
      >
        <Typography
          variant={isSmallScreen ? "h5" : "h4"}
          component="h1"
          gutterBottom
          sx={{ fontWeight: "bold" }}
        >
          SVC Industries: Pioneering Sustainable Tyre Recycling
        </Typography>
        <Typography variant="body1" paragraph>
          At SVC Industries, we are committed to creating a cleaner, more
          sustainable future by transforming old tyres into valuable resources.
          Our innovative recycling process uses advanced technology to heat
          tyres in a controlled reactor, breaking them down into oil, carbon,
          and steel. This not only reduces waste but also provides high-quality
          byproducts that are essential for various industries.
        </Typography>
      </Box>
      <Box
        sx={{
          width: isSmallScreen ? "100%" : "50%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src={factoryImage}
          alt="Factory"
          style={{
            maxWidth: "100%",
            height: "auto",
            borderRadius: "16px",
            margin: "20px",
          }}
        />
      </Box>
    </Card>
  );
}

export default FactoryContent;