import {
  Box,
} from "@mui/material";
import React from "react";
import { Seo } from "src/components/seo";
import { usePageView } from "src/hooks/use-page-view";
import { layout } from "src/utils/constant";
import { description } from "src/meta-description";
import HeroSection from "./heroSection";
import { HomeCta } from "src/sections/home/home-cta";
import TechologySection from "src/sections/home/techology-section";
import SubSection from "./subSection";
import ProcessCard from "src/sections/home/processCard";
import TestimonialSection from "src/sections/home/testimonial-section";
import { HomeFaqs } from "src/sections/home/home-faqs";
import { faqs, processCardData } from "src/mock/devOpsApp";

const Page = () => {
  usePageView();
  return (
    <>
      <Seo title="Devops Services" description={description.devOpsPage} />

      <Box component="main" sx={{ overflowX: "hidden" }}>
        <Box pt={2}>
          <HeroSection />
          <HomeCta isSubPage />
          <SubSection />
          <TechologySection isSubpage/>
          <ProcessCard processCardData={processCardData} />
          <TestimonialSection isSubpage />
          <HomeFaqs faqs={faqs} />
        </Box>
      </Box>
    </>
  );
};
layout(Page);

export default Page;
