import React from "react";
import { Box, Container } from "@mui/material";
import SideBySideSection from "src/components/sideBySideSection";

const webAppData = {
  title: "Driving Digital Growth with Web Apps & Websites",
  subtitle:'summarizes our strategy for leveraging digital solutions to propel business success.',
  img: "/assets/4849149-ai.png",
 
};

const HeroSection = () => {
  return (
    <Box padding={{ lg: "50px 0", xs: "50px 0", md: "50px 0" }}>
      <Container maxWidth="xl">
        <Box>
          <SideBySideSection data={webAppData} isBtn/>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
