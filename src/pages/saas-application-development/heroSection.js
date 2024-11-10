import React from "react";
import { Box, Container } from "@mui/material";
import SideBySideSection from "src/components/sideBySideSection";

const saasAppData = {
  title: "SaaS Innovation with Precision",
  subtitle:'We blend cutting-edge technology with strategic insights to deliver robust, scalable solutions that redefine industry standards.',
  img: "/assets/6481224-ai (1).png",
 
};

const HeroSection = () => {
  return (
    <Box padding={{ lg: "50px 0", xs: "50px 0", md: "100px 0" }}>
      <Container maxWidth="xl">
        <Box>
          <SideBySideSection data={saasAppData} isBtn />
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;