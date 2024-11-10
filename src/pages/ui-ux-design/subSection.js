import React from "react";
import { Box, Container } from "@mui/material";
import SideBySideSection from "src/components/sideBySideSection";

const uiuxData = {
  title: "Why we are the right choice ?",
  desc: [
    "Our highly skilled team of graphic designers possesses flexible and creative expertise in all aspects of design, providing comprehensive assistance to clients across various sectors from start to finish. When it comes to User Interface (UI) and User Experience (UX) design, our dedicated designers ensure that your mobile or web app embodies your brand identity. They accomplish this by adhering to existing brand guidelines or by creating new ones, allowing them to develop a captivating UI and UX that effectively resonates with your intended target audience.",
    "We assist organizations in transforming their creative ideas into thriving businesses. As the leading UI/UX Design Company, we specialize in delivering seamless and cost-effective designs for your products, resulting in high user conversion rates for your online business. Our team strongly believes that the system should communicate in the language of the user, ensuring a user-centric design approach."
  ],
  img: "assets/ui-ux.png",
};

const SubSection = () => {
  return (
    <Box padding={{ lg: "50px 0 0 0", xs: "50px 0 0 0", md: "50px 0 0 0" }}>
      <Container maxWidth="xl">
        <Box>
          <SideBySideSection data={uiuxData} isFlip desc/>
        </Box>
      </Container>
    </Box>
  );
};

export default SubSection;
