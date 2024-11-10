import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
} from "@mui/material";
import TitleSection from "../../sections/home/title-section";
import { CareerData } from "src/mock/career";

const CareerCard = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage:
            "linear-gradient(to bottom,rgb(255 255 255 / 27%), rgb(227 219 255));",
          padding: " 0 0 50px 0",
        }}
      >
        <Container maxWidth="xl">
          <TitleSection
            title="Interview and Selection Process"
            desc="Our efficient interview process identifies top talent aligned with our values"
          />
          <Box sx={{ paddingTop: "60px" }}>
            <Grid container spacing={4}>
              {CareerData?.map((item, index) => (
                <Grid
                  item
                  lg={3}
                  md={6}
                  sm={12}
                  xs={12}
                  sx={{ display: "flex", justifyContent: "center" }}
                  key={index}
                >
                  <Card
                    sx={{
                      boxShadow: "unset !important",
                      background: "#faf8ff",
                      transition: "all 0.5s",
                      "&:hover": {
                        boxShadow: "0px 0px 10px 0px #584a91 !important",
                      },
                      p: 4,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        paddingBottom: "20px",
                      }}
                    >
                      <img src={item.image} alt="career_image" width={80} />
                    </Box>

                    <Box>
                      <Typography
                        gutterBottom
                        component="div"
                        textAlign={"center"}
                        sx={{
                          fontSize: "18px",
                          fontWeight: "800",
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
                    </Box>
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
export default CareerCard;
