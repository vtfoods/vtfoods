"use client";
import {
  Box,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { Seo } from "src/components/seo";
import { usePageView } from "src/hooks/use-page-view";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { layout } from "src/utils/constant";
import { useGetTeamData } from "src/rq-hooks";
import { teamData } from "src/mock/ourTeam";
import SideBySideSection from "src/components/sideBySideSection";
import TitleSection from "src/sections/home/title-section";

const webAppData = {
  title: "TeamConnect: The Power of United Experts",
  subtitle: "We help you take your business to the digital sphere.",
  img: "/assets/teamWork.png",
  desc: [
    "Welcome to our TeamConnect website, where collaboration and expertise meet for outstanding results. Our team is a diverse group of skilled professionals dedicated to delivering exceptional solutions and services.",
    "We believe in the power of teamwork and understand that the collective strength of our members drives our success. Our website showcases the talent, skills, and passion that each team member brings to the table. We foster a collaborative and inclusive environment where ideas are shared, perspectives are valued, and excellence is encouraged. Our team members work closely together, leveraging their unique strengths and knowledge to deliver outstanding outcomes for our clients.",
  ],
};
const Page = () => {
  usePageView();

  // const { teamData } = useGetTeamData();

  return (
    <>
      <Seo title="Our Team" />
      <Box component="main" sx={{ overflowX: "hidden" }}>
        <Box
          padding={{ lg: "50px  0 0 0", xs: "50px 0 0 0", md: "50px 0 0 0" }}
        >
          <Container maxWidth="xl">
            <SideBySideSection isFlip desc data={webAppData} isBtn />
          </Container>
        </Box>
        <Box
          sx={{
            backgroundImage:
              "linear-gradient(to bottom, rgb(230 225 255 / 72%), rgb(247 245 255)), url(/assets/tree.png)",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            
          }}
        >
          <Container maxWidth="xl">
            <Stack spacing={8} sx={{ py: "50px" }}>
             <TitleSection title="Meet Our Team" desc="Our Team of Experts"  /> 
             <Box sx={{
              pt:5
             }}>
             <Grid
                container
                spacing={3}
                display={{ lg: "flex", xs: "contents" }}
                justifyContent="center"
              >
                {teamData?.map((team, idx) => (
                  <Grid
                    xs={12}
                    md={6}
                    lg={4}
                    sx={{ padding: "50px 10px" }}
                    key={idx}
                  >
                    <Card sx={{ height: "100%" }}>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <img
                          alt={team.name}
                          src={team.image}
                          style={{
                            position: "absolute",
                            borderRadius: "50%",

                            height: "100%",
                            width: "100%",
                            objectFit: "cover",
                            maxWidth: "150px",
                            maxHeight: "150px",
                          }}
                        />
                      </Box>
                      <CardContent
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          position: "relative",
                          height: "100%",
                        }}
                      >
                        <Typography
                          color="primary.main"
                          variant="h6"
                          textAlign={"center"}
                          sx={{ marginTop: "55px" }}
                        >
                          {team.name}
                        </Typography>
                        <Divider sx={{ my: 2 }} />
                        <Typography
                          sx={{
                            flexGrow: 1,
                          }}
                          textAlign={"center"}
                        >
                          {team.designation}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
             </Box>
           
            </Stack>
          </Container>
        </Box>
      </Box>
    </>
  );
};

layout(Page);

export default Page;
