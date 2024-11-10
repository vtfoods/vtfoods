import React from "react";
import { Box, Container } from "@mui/material";
import SideBySideSection from "src/components/sideBySideSection";

const aboutData = {
  title: "Where Vision Meets Technology",
  desc: [
    "VT Foods is a team of experts dedicated to delivering tailored software solutions that meet the unique needs of entrepreneurs, individuals, and startups. With a focus on reliability, scalability, and innovation, we help our clients achieve their goals and succeed in the digital age..",
    "We&apos;re a software consulting and engineering team that specializes in crafting customized, resilient web applications,mobile apps, and enterprise solutions. Our mission is to help entrepreneurs, individuals, and startups bring their vision to life, providing comprehensive software consultancy and engineering services that drive digital outcomes..",
  ],
  img: "/assets/about0us.png",
};

const HeroSection = () => {
  return (
    <Box padding={{ lg: "50px 0", xs: "50px 0", md: "50px 0" }}>
      <Container maxWidth="xl">
        <Box>
          <SideBySideSection data={aboutData} isFlip desc/>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
