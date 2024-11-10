import { Box, Container, Typography } from "@mui/material";
import { Seo } from "src/components/seo";
import { usePageView } from "src/hooks/use-page-view";
import { layout } from "src/utils/constant";
import { description } from "src/meta-description";
import SkillTabs from "src/components/skill-tabs";
import SkillmobTabs from "src/components/skillmob-tabs";
import SideBySideSection from "src/components/sideBySideSection";
import TitleSection from "src/sections/home/title-section";

const aboutData = {
  title: "Empowering Digital Transformation",
  desc: [
    "Leverage our expertise in software consulting and engineering to drive digital outcomes. We craft tailored web applications,mobile apps, and enterprise solutions that bring your vision to life and help you achieve your goals.We&apos;re a software consulting and engineering team that specializes in crafting customized, resilient web applications,mobile apps, and enterprise solutions. Our mission is to help entrepreneurs, individuals, and startups bring their vision to life, providing comprehensive software consultancy and engineering services that drive digital outcomes..",
    "Our expertise lies in providing custom-built, reliable web apps, mobile apps, and enterprise solutions that meet the specific needs of our clients. Let us help you achieve your digital goals with our comprehensive software consultancy and engineering services.",
  ],
  img: "/assets/technologies.jpg",
};

const Page = () => {
  usePageView();

  return (
    <>
      <Seo title="Technologies" description={description.technologiesPage} />

      <Box component="main" sx={{ overflowX: "hidden" }}>
        <Container maxWidth="xl">
          <Box padding={{ lg: "50px 0 0 0", xs: "50px 0 0 0", md: "50px 0 0 0" }}>
            <SideBySideSection data={aboutData} desc />
          </Box>
        </Container>

        <Box
          sx={{ backgroundColor: "#faf8ff" }}
          padding={{ lg: "50px 0", xs: "50px 0", md: "50px 0" }}
        >
          <Container maxWidth="xl">
            <TitleSection title="Technologies" desc="We provide Technologies" />

            <Box sx={{ pt: 5 }}>
              <Typography variant="h5" textAlign={"center"} paddingBottom={2}>
                We Provide For Web AppDevelopment
              </Typography>
              <SkillTabs />
            </Box>
            <Box
              sx={{
                pt: "50px",
              }}
            >
              <Typography variant="h5" textAlign={"center"} paddingBottom={2}>
                We Provide For Mobile App Development
              </Typography>
              <SkillmobTabs />
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
};

layout(Page);

export default Page;
