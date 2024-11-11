import React from "react";
import { Box, Container } from "@mui/material";
import SideBySideSection from "src/components/sideBySideSection";

const aboutData = {
  title: "",
  desc: [
    `VT FOODS PRIVATE LIMITED is a trusted manufacturer and exporter of dehydrated vegetables and spices, located in Mahuva City, Gujarat, India—the hub of dehydrated onion and garlic. Since our journey began in 2014, our leadership has been dedicated to delivering top-quality products and exceptional service. With a passion for agriculture and extensive experience, we aim to make healthy, natural ingredients accessible globally.`,
    `At VT FOODS, we prioritize quality and innovation, using advanced technology and machinery, including state-of-the-art color sorters and a comprehensive microbiological laboratory. We process all ingredients according to stringent specifications and offer customization to meet our customers’ unique needs. Our commitment to traceability and reliable supply chains helps our partners stay efficient and ensures consistent access to high-quality ingredients.`,
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
