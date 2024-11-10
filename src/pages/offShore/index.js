import {
  Box,
} from "@mui/material";
import React from "react";
import { layout } from "src/utils/constant";
import { Seo } from "src/components/seo";
import { usePageView } from "src/hooks/use-page-view";
import HeroSection from "./heroSection";
import HireDeveloper from "./hireDeveloper";
import DevelopmentTeam from "./developmentTeam";
import OffshoreCard from "../offShore/offshorCard";
import TechologySection from "src/sections/home/techology-section";
import ProtfoliTabs from "src/components/protfolio-tabs";
import TestimonialSection from "src/sections/home/testimonial-section";
import { HomeCta } from "src/sections/home/home-cta";
import QualifiedHireWork from "./qualifiedHireWork";
import { HomeFaqs } from "src/sections/home/home-faqs";
import { faqs } from "src/mock/offShore";

const Page = () => {
  usePageView();

  return (
    <>
      <Seo title="OffShore Developers" />
      <Box component={"main"} sx={{ overflowX: "hidden" }}>
        <HeroSection />
        <HomeCta isSubPage/>
        <HireDeveloper type="web" />
        <HireDeveloper type="app" />
        <DevelopmentTeam />
        <TechologySection />
        <ProtfoliTabs isSubpage />
        <QualifiedHireWork />
        <OffshoreCard />
        <TestimonialSection isSubpage />
         <HomeFaqs faqs={faqs} />
      </Box>
    </>
  );
};

layout(Page);

export default Page;
