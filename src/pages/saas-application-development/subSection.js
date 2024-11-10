import React from "react";
import { Box, Container } from "@mui/material";
import SideBySideSection from "src/components/sideBySideSection";

const SassAppData = {
  title: "Why we are the right choice ?",
  desc: [
    "With over 5 years of experience in SAAS development, We has worked with clients from various industries and has delivered successful SAAS solutions.At HVG Infotech Private Limited, we understand that every business has unique needs and requirements. Therefore, we work closely with our clients to understand their specific needs and design customized solutions that cater to their needs. Our focus on client satisfaction, coupled with our expertise in SAAS development, enables us to deliver high-quality solutions that exceed our clients' expectations.",
    "If you're looking for a reliable SAAS Application Development company that can deliver customized solutions to meet your specific needs, HVG Infotech Private Limited is the perfect partner for you. We pride ourselves on delivering solutions that are scalable, secure, and efficient, helping businesses of all sizes achieve their goals. Contact us today to learn more about our SAAS development services and how we can help you take your business to the next level."
  ],
  img: "/assets/Digital presentation-amico.png",
};

const SubSection = () => {
  return (
    <Box >
      <Container maxWidth="xl">
        <Box padding={"50px 0"}>
          <SideBySideSection data={SassAppData} isFlip desc/>
        </Box>
      </Container>
    </Box>
  );
};

export default SubSection;
