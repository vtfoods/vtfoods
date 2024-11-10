import React from "react";
import { Box, Container, Grid, Typography, Card } from "@mui/material";
import TitleSection from "../../sections/home/title-section";
import { BenefitsData } from "src/mock/career";

const CareerBenefits = () => {
  return (
    <>
      <Box
        sx={{
          py: "60px",
          backgroundImage: "url(/assets/career/bg-bg.png)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom"
        }}
      >
        <Container maxWidth="xl">
          <Box>
            <TitleSection
              title="Why join VT Foods ?"
              desc="Dynamic environment, growth opportunities, and innovation commitment"
            />
            <Box sx={{ padding: "50px 0" }}>
              <Grid
                container
                spacing={2}
                sx={{
                  justifyContent: "center"
                }}
              >
                {BenefitsData.map((item, index) => (
                  <Grid item lg={2} md={3} sm={4} xs={12} key={index}>
                    <Card
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        p: 4,
                        borderRadius: "36px 5px 36px 5px",
                   
                        boxShadow: "0px 0px 2px 0px #584a91 !important",
                        gap: 2,
                        width: "180px",
                        height: "180px",
                        margin: "auto",
                        ...(index % 2 === 0 && { mt: 8 }),
                        "@media (max-width: 900px)": {
                          ...(index % 2 === 0 && { mt: 0 })
                        }
                      }}
                    >
                      <Box>
                        <img src={item.image} width={80} alt="discuss-image" />
                      </Box>
                      <Box
                        sx={{
                          textAlign: "center"
                        }}
                      >
                        <Typography
                          variant="p"
                          align="center"
                          sx={{
                            fontSize: "14px",
                            fontWeight: "800",
                            color: "primary.main"
                          }}
                        >
                          {item.title}
                        </Typography>
                      </Box>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};
export default CareerBenefits;
