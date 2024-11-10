import { Box, CircularProgress } from "@mui/material";
import React from "react";

export const SplashScreen = () => (
  <Box
    sx={{
      alignItems: "center",
      backgroundColor: "background.paper",
      display: "flex",
      flexDirection: "column",
      height: "100vh",
      justifyContent: "center",
      left: 0,
      // p: 3,
      position: "fixed",
      top: 0,
      width: "100vw",
      zIndex: 1400,
    }}
  >
    <span className="loader flex items-center justify-center">
      <img
        alt="VT Foods PVT LTD Logo"
        src="/assets/VT-logo.png"
        style={{ maxHeight: "50px", maxWidth: "80px", margin: "auto" }}
      />
    </span>

  </Box>
);
