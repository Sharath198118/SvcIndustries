import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import FactoryContent from "./FactoryContent";
import FactoryProducts from "./FactoryProducts";
import FactoryCommitments from "./FactoryCommitments";
import Footer from "./Footer";
import { CircularProgress } from "@mui/material";
import loadingVideo from "../assets/Wheels Loading.mp4";

const SvcIndustriesDashboard = () => {
  const [loading, setLoading] = useState(true);
  const contentRef = React.useRef(null);
  const productsRef = React.useRef(null);
  const commitmentsRef = React.useRef(null);
  const contactRef = React.useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <Box sx={{ margin: "0px 20px" }}>
      {loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <video autoPlay muted loop style={{ width: "100%", height: "auto" }}>
            <source src={loadingVideo} type="video/mp4" />
            <CircularProgress />
          </video>
        </Box>
      ) : (
        <Box>
          <NavBar
            contentRef={contentRef}
            productsRef={productsRef}
            commitmentsRef={commitmentsRef}
            contactRef={contactRef}
          />
          <Box ref={contentRef}>
            <FactoryContent />
          </Box>
          <Box ref={productsRef}>
            <FactoryProducts />
          </Box>
          <Box ref={commitmentsRef}>
            <FactoryCommitments />
          </Box>
          <Box ref={contactRef}>
            <Footer />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default SvcIndustriesDashboard;
