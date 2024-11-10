import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Seo } from "src/components/seo";

import HeroSection from "./hero-section";
import SelectSection from "./select-section";
import ServiceSection from "./service-section";
import ProtfoliTabs from "src/components/protfolio-tabs";
import TechologySection from "./techology-section";
import BlogSection from "./blog-section";
import { HomeCta } from "./home-cta";
import TestimonialSection from "./testimonial-section";

export const HomeHero = () => {

  return (
    <>
      <Seo title="Home" />
      <Box sx={{ overflowX: "hidden" }}>
        <HeroSection />
        <ServiceSection />
        <TechologySection />
        <ProtfoliTabs isHome />
        <HomeCta />
        <SelectSection />

        <TestimonialSection isHome />
        {/* <BlogSection /> */}
      </Box>
    </>
  );
};
