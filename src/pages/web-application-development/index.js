import { Box} from "@mui/material";
import React from "react";
import { Seo } from "src/components/seo";
import { usePageView } from "src/hooks/use-page-view";
import { description } from "src/meta-description";
import { layout } from "src/utils/constant";
import HeroSection from "./heroSection";
import TechologySection from "src/sections/home/techology-section";
import ProtfoliTabs from "src/components/protfolio-tabs";
import { HomeFaqs } from "src/sections/home/home-faqs";
import TestimonialSection from "src/sections/home/testimonial-section";
import ServiceSection from "./serviceSection";
import { faqs } from "src/mock/web-app";
import { HomeCta } from "src/sections/home/home-cta";
import SubSection from "./subSection";

const Page = () => {
  usePageView();
  return (
    <>
      <Seo
        title="Web Application Development"
        description={description.webAppPage}
      />
      <Box component="main" sx={{ overflowX: "hidden" }}>
        <Box pt={2}>
          <HeroSection />
          <HomeCta isSubPage/>
          <SubSection />
          <ServiceSection />
          <ProtfoliTabs isSubpage />
          <TechologySection />
          <TestimonialSection isSubpage />
          <HomeFaqs faqs={faqs} />
        </Box>
      </Box>
    </>
  );
};
layout(Page);

export default Page;
