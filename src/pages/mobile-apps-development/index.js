import { Box, Unstable_Grid2 as Grid } from "@mui/material";
import { Seo } from "src/components/seo";
import { usePageView } from "src/hooks/use-page-view";
import { description } from "src/meta-description";
import { layout } from "src/utils/constant";
import HeroSection from "./heroSection";
import TechologySection from "src/sections/home/techology-section";
import { HomeFaqs } from "src/sections/home/home-faqs";
import TestimonialSection from "src/sections/home/testimonial-section";
import SubSection from "./subSection";
import { HomeCta } from "src/sections/home/home-cta";
import { faqs ,processCardData } from "src/mock/mobileApp";
import ProcessCard from "src/sections/home/processCard"
import ServicesProcess from "./sevicesProcess";

const Page = () => {
  usePageView();
  return (
    <>
      <Seo
        title="Mobile Application Development"
        description={description.mobileAppPage}
      />
      <Box component="main" sx={{ overflowX: "hidden" }}>
        <Box pt={2}>
          <HeroSection />
          <HomeCta isSubPage/>
          <SubSection />
          <ServicesProcess/>
          <TechologySection isSubpage isMobile/>
          <ProcessCard processCardData={processCardData}/>
          <TestimonialSection isSubpage />
          <HomeFaqs faqs={faqs} />
        </Box>
      </Box>   
    </>
  );
};
layout(Page);

export default Page;
