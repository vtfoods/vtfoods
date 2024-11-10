import { Box, Container } from "@mui/material";
import React from "react";
import TitleSection from "src/sections/home/title-section";

const ServiceSection = () => {
  return (
    <Box>
      <Box
        sx={{
          backgroundImage:
            "linear-gradient(to bottom, rgb(229 221 255 / 50%), rgb(248 246 255)), url(/assets/5026563.png)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
          padding: "50px 0 0 0 ",
        }}
      >
        <Container maxWidth="lg">
          <TitleSection
            title="Web development process"
            desc="Unlocking Possibilities with Our Technical Expertise"
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              padding: "50px 0",
              alignItems: "center",
            }}
          >
            <img
              src="/assets/web-process.png"
              alt="Emerging Leader in Web App Development"
              style={{
                height: "100%",
                width: "100%",
                borderRadius: "10px",
              }}
            />
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default ServiceSection;
