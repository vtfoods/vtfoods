import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent
} from "@mui/material";
import TitleSection from "../../sections/home/title-section";
import { DevelopmentData } from "src/mock/offShore";

const DevelopmentTeam = () => {
  return (
    <>
      <Box
        padding={{ lg: "50px 0", xs: "50px 0", md: "50px 0" }}
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        
        }}
      >
        <Container maxWidth="xl">
          <TitleSection
            title="Why Hire Offshore Development Team?"
            desc="Unlocking Possibilities with Our Technical Expertise"
          />
          <Box sx={{ paddingTop: "60px" }}>
            <Grid
              container
              spacing={4}
              sx={{
                display: "flex",
                justifyContent: "center"
              }}
            >
              {DevelopmentData.map((item) => (
                <Grid
                  item
                  lg={2.4}
                  md={4}
                  sm={6}
                  xs={12}
                  sx={{ display: "flex", justifyContent: "center" }}
                  key={item.id}
                >
                  <Card sx={{ 
                      transition: "all 0.5s",
                      borderRadius: "12px",
                    "&:hover": {
                     border:"1px solid #584a91",
                        cursor:"pointer"
                      },
                  }}>
                    <Box sx={{ width: 100, margin: "auto", mt: 3 }}>
                      <img src={item.image} alt={item.title} />
                    </Box>
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h6"
                        component="div"
                        textAlign={"center"}
                        fontWeight={800}
                        sx={{
                          mb:1,
                          color: "primary.main",
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        textAlign={"center"}
                      >
                        {item.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default DevelopmentTeam;
