import {
  Box,
  Container,
  Typography,
  Unstable_Grid2 as Grid,
} from "@mui/material";
import React from "react";
import { Seo } from "src/components/seo";
import { usePageView } from "src/hooks/use-page-view";
import { description } from "src/meta-description";
import { layout } from "src/utils/constant";
import TitleSection from "src/sections/home/title-section";
import { privacyPolicyData } from "src/mock/privacy";

const Page = () => {
  usePageView();
  return (
    <>
      <Seo
        title="Privacy Policy"
        description={description.privacyPolicyPage}
      />
      <Box component="main" sx={{ overflowX: "hidden" }}>
        <Box
          sx={{
            flexGrow: 1,
            py: 8,
            backgroundColor: "#faf8ff",
          }}
        >
          <Container maxWidth="xl">
            <Grid
              container
              sx={{
                justifyContent: "center",
                display: "flex",
                alignItems: "center",
              }}
              paddingY={{ lg: "60px", xs: "30px" }}
            >
              
              <Grid xs={12} md={12}>
                <Box>
                  <TitleSection title="Privacy Policy" />
                  <Box
                    sx={{
                      mt: 5,
                    }}
                  >
                    {privacyPolicyData.map((text, index) => (
                      <Typography
                        key={index}
                        sx={{ mb: 3, fontWeight: 500, fontSize: 18 }}
                      >
                        {text}
                      </Typography>
                    ))}
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  );
};
layout(Page);

export default Page;
