import * as React from "react";
import { Box, Typography, Link, Grid, Card, CardContent } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <Card sx={{ marginTop: "20px", backgroundColor: "#1976d2" }}>
      <Box sx={{ p: 4 }}>
        <Grid container spacing={6} sx={{ justifyContent: "center" }}>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ height: "100%" }}>
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <LocationOnIcon
                  sx={{ fontSize: "2rem", color: "primary.main", mb: 2 }}
                />
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ textTransform: "uppercase", mb: 1 }}
                >
                  Address
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  align="center"
                >
                  M/s. SVC INDUSTRIES
                  <br />
                  Registered Office and Refinery address:
                  <br />
                  Sy.No.193, Flat No.1, Chetlamallapuram,
                  <br />
                  Kallur Mandal, Kurnool, Andhra Pradesh, 518218.
                  <br />
                  GSTIN : 37ADVFS9851K1ZW
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ height: "100%" }}>
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <EmailIcon
                  sx={{ fontSize: "2rem", color: "primary.main", mb: 2 }}
                />
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ textTransform: "uppercase", mb: 1 }}
                >
                  Contact Us
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  align="center"
                >
                  Mobile No: +91 7666186905 <br />
                  Email:
                  <Link href="mailto:svcindustries@gmail.com">
                    svcindustries@gmail.com
                  </Link>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Typography
          variant="body2"
          color="white"
          sx={{ mt: 8, textAlign: "center" }}
        >
          &copy; {new Date().getFullYear()} SVC Industries. All rights reserved.
        </Typography>
      </Box>
    </Card>
  );
};

export default Footer;
