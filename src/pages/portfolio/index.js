import { Box, Container } from "@mui/material";
import { Seo } from "src/components/seo";
import { usePageView } from "src/hooks/use-page-view";
import { layout } from "src/utils/constant";
import { description } from "src/meta-description";
// import CountUp from "react-countup";
import ProtfoliTabs from "src/components/protfolio-tabs";
import SideBySideSection from "src/components/sideBySideSection";
import QualifiedHireWork from "../offShore/qualifiedHireWork";
// import PortfolioModal from "./PortfolioModal";
// import { useState } from "react";

const aboutData = {
  title: "Crafting Digital Success Stories",
  desc: [
    " Discover how our software consulting and engineering expertise has helped entrepreneurs, individuals, and startups turn their ideas into reality. Browse our portfolio of customized web applications, mobile apps, and enterprise solutions that have driven digital outcomes and achieved business goals.",
    "Our software consultancy and engineering services are designed to bring your vision to life, and our portfolio showcases our expertise in doing just that. Get inspired by our portfolio of bespoke web applications, mobile apps, and enterprise solutions that have empowered entrepreneurs, individuals, and startups to achieve their goals.",
  ],
  img: "/assets/portfolio.png",
};

const Page = () => {
  usePageView();
  // const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Seo title='Portfolio' description={description.portfolioPage} />

      <Box>
        {/* <PortfolioModal showModal={showModal} setShowModal={setShowModal}/> */}
      </Box>
      <Box component='main' sx={{ overflowX: "hidden" }}>
        {/* <Box component="main" sx={{ overflowX: "hidden", filter: showModal ? "blur(5px)" :""}}> */}

        <Container maxWidth='xl'>
          <Box
            padding={{
              lg: "100px 0 50px 0",
              xs: "100px 0 50px 0",
              md: "100px 0 50px 0",
            }}>
            <SideBySideSection data={aboutData} desc isFlip />
          </Box>
        </Container>
        <Box
          sx={{
            // padding: "100px 0",
            backgroundColor: "#eeefff94",
          }}
          padding={{ lg: "100px 0", xs: "50px 0", md: "100px 0" }}>
          <ProtfoliTabs />
        </Box>
        <QualifiedHireWork />
      </Box>
    </>
  );
};

layout(Page);

export default Page;
