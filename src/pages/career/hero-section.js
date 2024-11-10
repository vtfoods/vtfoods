import React from "react";
import { Box, Container } from "@mui/material";
import SideBySideSection from "src/components/sideBySideSection";

const careerData = {
  title: "Join Our Team",
  desc: [
   "HV Global Infotech (HVG Infotech) offers diverse and rewarding career opportunities in the field of information technology. The company values innovation and encourages employees to think creatively to solve challenges. With a strong emphasis on professional development, HVG Infotech provides training and growth opportunities to help employees excel in their careers. The work environment is dynamic and collaborative, fostering teamwork and communication among its employees. Whether you're a seasoned professional or just starting out in your career, HVG Infotech provides a supportive and inclusive workplace where individuals can thrive and make a meaningful impact in the IT industry.",
  ],
  img: "/assets/career/career-main.png",
};
const HeroSection = () => {
  return (
    <Box padding={{ lg: "50px 0", xs: "50px 0", md: "50px 0" }}>
      <Container maxWidth="xl">
        <Box>
          <SideBySideSection data={careerData} isFlip desc isBtn/>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
