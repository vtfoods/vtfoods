import {
  Box,
  Unstable_Grid2 
} from "@mui/material";
import React from "react";
import { Seo } from "src/components/seo";
import { usePageView } from "src/hooks/use-page-view";
import { layout } from "src/utils/constant";
import { description } from "src/meta-description";
import HeroSection from "./heroSection"
import TechologySection from "src/sections/home/techology-section";
import ProtfoliTabs from "src/components/protfolio-tabs";
import { HomeFaqs } from "src/sections/home/home-faqs";
import TestimonialSection from "src/sections/home/testimonial-section";
import SubSection from "./subSection"
import { HomeCta } from "src/sections/home/home-cta";
import { faqs } from "src/mock/fullStack";

const Page = () => {
  usePageView();
  return (
    <>
      <Seo
        title="Full Stack Development"
        description={description.fullStakePage}
      />
      <Box component="main" sx={{ overflowX: "hidden" }}>
        <Box pt={2}>
          <HeroSection />
           <HomeCta isSubPage/>
          <SubSection/>
          <TechologySection />
          <ProtfoliTabs isSubpage />
          <TestimonialSection isSubpage />
          <HomeFaqs faqs={faqs} />
        </Box>
      </Box>


    </>
  );
};

layout(Page);

export default Page;
