import React from "react";
import { Box, Container } from "@mui/material";
import SideBySideSection from "src/components/sideBySideSection";

const serverlessData = {
  title: "Streamlined Development, Serverless Excellence",
  subtitle:'emphasizes efficient practices and harnesses serverless technologies for optimal performance.',
  img: "/assets/1032.png",
 
};

const HeroSection = () => {
  return (
    <Box padding={{ lg: "50px 0", xs: "50px 0", md: "50px 0" }}>
      <Container maxWidth="xl">
        <Box>
          <SideBySideSection data={serverlessData} isBtn />
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
