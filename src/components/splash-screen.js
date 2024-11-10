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
        alt="HVG Infotech PVT LTD Logo"
        src="/Favicon.png"
        style={{ maxHeight: "80px", maxWidth: "80px", margin: "auto" }}
      />
    </span>

  </Box>
);
