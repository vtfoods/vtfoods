import { Box } from "@mui/material";
import { Seo } from "src/components/seo";
import { usePageView } from "src/hooks/use-page-view";
import { layout } from "src/utils/constant";
import { description } from "src/meta-description";
import HeroSection from "./heroSection";
import WhoAreSection from "./whoAreSection";
import GoalSection from "./goalSection";
import CoreValueSection from "./coreValueSection";

const Page = () => {
  usePageView();

  return (
    <>
      <Seo title="About Us" description={description.aboutUs} />
      <Box component="main" sx={{ overflowX: "hidden" }}>
        <Box pt={2}>
          <HeroSection />
          <WhoAreSection />
          <GoalSection />
          <CoreValueSection />
        </Box>
      </Box>
    </>
  );
};

layout(Page);

export default Page;
