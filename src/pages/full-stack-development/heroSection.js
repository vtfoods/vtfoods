import React from "react";
import { Box, Container } from "@mui/material";
import SideBySideSection from "src/components/sideBySideSection";

const fullStackData = {
  title: "Mastering Full-Stack Development: Innovation at Every Layer",
  subtitle:'captures our commitment to pushing boundaries and advancing across all aspects of development.',
  img: "./assets/7040861-ai (1).png",
 
};

const HeroSection = () => {
  return (
    <Box padding={{ lg: " 0", xs: "50px 0", md: "50px 0" }}>
      <Container maxWidth="xl">
        <Box>
          <SideBySideSection data={fullStackData} isBtn />
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
