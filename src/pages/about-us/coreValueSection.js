import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import TitleSection from "src/sections/home/title-section";
import { coreData } from "src/mock/aboutUs";

const CoreValueSection = () => {
  return (
    <Box
      padding={{ lg: "50px 0", xs: "50px 0", md: "50px 0" }}
      sx={{
        backgroundImage:
          "linear-gradient(to bottom, rgb(255 255 255 / 27%), rgb(227 219 255)), url(/assets/sl_022120_28320_22.png);",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
       
      }}
    >
      <Container maxWidth="xl">
        <TitleSection
          title="Our Core Values"
          desc="Our core values embody integrity, collaboration, and continuous growth"
        />
        <Box
          sx={{
            padding: "50px 0 0 0",
          }}
        >
          <Grid
            container
            spacing={2}
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {coreData.map((item, index) => (
              <Grid item xs={12} sm={12} md={6} lg={2} key={index}>
                <Card
                  sx={{
                    borderRadius: "0px",
                    border: "1px solid #f0f0f0",
    

                    boxShadow: "rgb(229 223 245) 1px 1px 9px 0px  ",
                    height: "100%",
                    "&:hover": {
                      cursor: "pointer",
                   
                    },
                    ...(index % 2 === 0 && { mt: 10 }),
                    '@media (max-width: 900px)': {
                      ...(index % 2 === 0 && { mt: 0 }),
                    }

                  }}
                >
                  <CardMedia
                    sx={{ height: 70, width: 70, margin: "auto", mt: 4 }}
                    image={item.img}
                    title={item.title}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      textAlign={"center"}
                      sx={{
                        fontSize: "16px",
                        fontWeight: 600,
                        color: "primary.main",
                      }}
                    >
                      {item.title}
                    </Typography>

                    <Typography
                      color="inherit"
                      sx={{
                        textAlign: "center",
                        fontSize: "14px",
                      }}
                    >
                      {item.desc}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default CoreValueSection;
