import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import oilDrums from "../assets/oil-drums.jpg";
import carbonBlack from "../assets/carbon.jpg";
import steel from "../assets/tyre-steel.jpg";
import { Box, CardHeader, Grid } from "@mui/material";

function FactoryProducts() {
  const cardData = [
    {
      image: oilDrums,
      title: "Pyrolysis Oil",
      description:
        "Our valuable main product used as a fuel in industrial boilers, power plants, and in the production of petrochemical products like plastics and adhesives.",
    },
    {
      image: steel,
      title: "Steel",
      description:
        "Extracted from tyre steel belts and reused in construction, manufacturing, and steel recycling, contributing to the production of rebar and automotive parts.",
    },
    {
      image: carbonBlack,
      title: "Carbon Black",
      description:
        "A fine black powder derived from the carbon content in tyres. It is used in the manufacturing of rubber products, plastics, paints, coatings, and inks, enhancing durability and pigmentation.",
    },
  ];

  return (
    <Card
      sx={{ margin: "20px 0px", padding: "20px", backgroundColor: "#e2e8f0" }}
    >
      <CardHeader
        title="Our Products"
        titleTypographyProps={{
          variant: "h4",
          sx: {
            fontFamily: "Roboto, sans-serif",
            fontWeight: "bold",
            fontSize: "36px",
            color: "#1e293b",
          },
        }}
      />
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Grid container spacing={2}>
          {cardData.map((card, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="250"
                    image={card.image}
                    alt={card.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {card.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {card.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Card>
  );
}

export default FactoryProducts;
