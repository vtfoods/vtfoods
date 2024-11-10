import { Box, Typography } from "@mui/material";
import React from "react";

const TitleSection = ({ title, desc, isChildPage }) => {
  return (
    <Box>
      <Typography
        color="primary"
        textAlign={isChildPage ? "left" : "center"}
        sx={{
          fontWeight: "600",
          fontSize: "40px",
          lineHeight: isChildPage ? "50px" : "60px",
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
