import { Box, Typography } from "@mui/material";
import React from "react";

const TitleSection = ({ title, desc, isChildPage }) => {
  return (
    <Box>
      <Typography
        color="primary"
        textAlign={isChildPage ? "left" : "center"}
        sx={{
          fontSize: "40px",
          fontWeight: "600",
          textShadow: "2px 2px 5px rgba(0,0,0,0.3)",
          WebkitBackgroundClip: "text",
          letterSpacing: "0.1em",
        }}
      >
        {title}
      </Typography>

      <Typography
        textAlign={isChildPage ? "left" : "center"}
        sx={{
          padding: "10px 0 ",
          fontWeight: "600",
          fontSize: "20px",
          paddingTop: isChildPage ? 2 : 0,
        }}
      >
        {desc}
      </Typography>
    </Box>
  );
};

export default TitleSection;
