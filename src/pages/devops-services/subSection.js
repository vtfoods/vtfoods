import React from "react";
import { Box, Container } from "@mui/material";
import SideBySideSection from "src/components/sideBySideSection";

const DevopsData = {
  title: "Azure DevOps Agile Services",
  desc: [
    "Our experienced Azure DevOps developers possess comprehensive expertise in handling end-to-end software and application product development. They are adept at integrating with popular open-source and third-party tools and services throughout the entire DevOps workflow. Whether you have a specific technology in mind or require automation of software or application delivery to continuously provide value to your users, our team is well-equipped to meet your requirements.",
    "We guarantee the delivery of top-quality services that encompass agile project planning, code management using Git, application testing, and code deployment using the most efficient CI/CD system. Our team of Azure DevOps developers at HVG is highly skilled and experienced in bringing together people, processes, and technology to automate software delivery, ensuring a seamless and continuous value delivery to your users."
  ],
    img: "./assets/7046557-ai.png",
};

const SubSection = () => {
  return (
    <Box >
      <Container maxWidth="xl">
        <Box  padding={"50px 0 0 0"}>
          <SideBySideSection data={DevopsData} isFlip desc/>
        </Box>
      </Container>
    </Box>
  );
};

export default SubSection;
