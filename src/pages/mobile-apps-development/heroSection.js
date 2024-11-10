import React from "react";
import { Box, Container } from "@mui/material";
import SideBySideSection from "src/components/sideBySideSection";

const mobileAppData = {
  title: "Leading Mobile App Innovations",
  subtitle:' underscores our leading role in developing state-of-the-art mobile applications.',
  img: "/assets/mobile-app.png",
 
};

const HeroSection = () => {
  return (
    <Box padding={{ lg: " 0", xs: "50px 0", md: "50px 0" }}>
      <Container maxWidth="xl">
        <Box>
          <SideBySideSection data={mobileAppData} isBtn />
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;