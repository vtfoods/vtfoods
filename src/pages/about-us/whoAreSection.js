import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { aboutItems, weAreData } from "src/mock/aboutUs";
import { HomeCta } from "src/sections/home/home-cta";
import TitleSection from "src/sections/home/title-section";

const WhoAreSection = () => {
  return (
    <Box
      padding={{ lg: "50px 0", xs: "50px 0", md: "50px 0" }}
      sx={{
        background:
          "linear-gradient(to top, rgb(255 255 255 / 27%), rgb(227 219 255))",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
      }}
    >
      <Container maxWidth="xl">
        <TitleSection
          title="Who we are?"
          desc="There are numerous reasons, below are the most compelling ones"
        />
        <Box>
          <Grid
            container
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Grid xs={12} sm={12} md={8} lg={9}>
              {weAreData.map((data, index) => (
                <Typography key={index} color="inherit" sx={{ mt: 3 }}>
                  {data}
                </Typography>
              ))}
              <Box
                sx={{
                  display: "flex",
                  py: 3,
                }}
              >
                {aboutItems.map((item, index) => (
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      mt: 2,
                      paddingRight: 10,
                      ' @media (max-width: 600px)': {
                        paddingRight: 0,
                          }
                    }}
                    key={index}
                  >
                    <Box>
                      <img
                        src={item.img}
                        alt={item.title}
                        style={{ width: "70px", height: "70px" }}
                      />
                    </Box>
                    <Box>
                      <Typography
                        color="black"
                        sx={{
                          textAlign: "center",
                          mt: 1,
                          fontWeight: 600,
                        }}
                      >
                        {item.title}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Grid>
            <Grid xs={12} sm={12} md={4} lg={3}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  padding: "0 20px",
                }}
              >
                {/* <img
                  alt=""
                  src="/assets/about-s.jpg"
                  style={{
                    height: "100%",
                    width: "100%",
                    boxShadow: "rgb(237, 233, 255) 11px 10px 9px 0px",
                    borderRadius: "10px",
                  }}
                /> */}
                <HomeCta isAbout />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default WhoAreSection;
