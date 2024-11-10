import React from "react";
import { Box, Container } from "@mui/material";
import SideBySideSection from "src/components/sideBySideSection";

const mobileAppData = {
  title: "Why Choose Mobile App Development?",
  desc: [
    "Our dedicated team of hybrid developers specializes in providing 24x7 cross-platform app development solutions using the latest technologies and processes in cross-platform frameworks. We understand that a business needs a revenue-generating solution to be successful and that's why we create and maintain the finest hybrid mobile apps for our clients",
    "Our team follows a modular approach while developing your product, which is then wrapped under the cross-platform hybrid mobile app development frameworks. We leverage a wide range of web technologies such as HTML 5, CSS3, and native languages like JavaScript to create feature-rich cross-platform apps that work seamlessly on real devices. We ensure that the final product is thoroughly tested before delivering it to you."
  ],
  img: "./assets/5865170-ai.png",
};

const SubSection = () => {
  return (
    <Box padding={{ lg: "50px 0", xs: "50px 0", md: "50px 0" }}>
      <Container maxWidth="xl">
        <Box>
          <SideBySideSection data={mobileAppData} isFlip desc/>
        </Box>
      </Container>
    </Box>
  );
};

export default SubSection;
