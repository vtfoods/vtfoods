import React from "react";
import { Box, Container } from "@mui/material";
import SideBySideSection from "src/components/sideBySideSection";

const offShoreData = {
  title: "Unlock Global Talent: Hire Offshore Developers",
  subtitle: 'highlights our strategy to access diverse skills globally, connecting businesses with talented offshore developers for efficient and high-quality project execution.',
  img: "/assets/Offshore/Programmer-amico.png",
 
};

const HeroSection = () => {
  return (
    <Box padding={{ lg: "50px 0 0 0", xs: "50px 0", md: "50px 0" }}>
      <Container maxWidth="xl">
        <Box>
          <SideBySideSection data={offShoreData} isBtn/>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
