import React from "react";
import { Box, Container } from "@mui/material";
import SideBySideSection from "src/components/sideBySideSection";

const devOpsData = {
  title: "Transforming Operations with DevOps Services",
  subtitle:'highlights our focus on enhancing efficiency and collaboration through streamlined DevOps solutions.',
  img: "/assets/7097990-ai.png",
 
};

const HeroSection = () => {
  return (
    <Box padding={{ lg: "50px 0", xs: "50px 0", md: "100px 0" }}>
      <Container maxWidth="xl">
        <Box>
          <SideBySideSection data={devOpsData} isBtn />
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
