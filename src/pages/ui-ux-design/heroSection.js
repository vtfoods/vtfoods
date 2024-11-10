import React from "react";
import { Box, Container } from "@mui/material";
import SideBySideSection from "src/components/sideBySideSection";

const uiUxData = {
  title: "Transforming Ideas into Seamless User Journeys",
  subtitle:'communicates our commitment to crafting intuitive user experiences and achieving business success through innovative digital solutions.',
  img: "assets/ui-ux/7706580-ai.png",
 
};

const HeroSection = () => {
  return (
    <Box padding={{ lg: "50px 0", xs: "50px 0", md: "50px 0" }}>
      <Container maxWidth="xl">
        <Box>
          <SideBySideSection data={uiUxData} isBtn />
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
