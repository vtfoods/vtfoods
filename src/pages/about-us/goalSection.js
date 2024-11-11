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
import { goal } from "src/mock/aboutUs";

const GoalSection = () => {
  return (
    <Box padding={{ lg: "0 0 50px 0", xs: "0 0 50px 0", md: "0 0 50px 0" }}>
      <Container maxWidth="xl">
        <TitleSection
          title="Our Vision & Mission"
          desc=""
        />
        <Box
          sx={{
            padding: "50px 0 0 0",
          }}
        >
          <Grid container spacing={4}>
            {goal.map((item, index) => (
              <Grid item xs={12} sm={12} md={6} lg={6} key={index}>
                <Card
                  sx={{
                    borderRadius: "0px",
                    border: "1px solid #f0f0f0",
                    background: "#faf8ff",
                    boxShadow: "rgb(229 223 245) 1px 1px 9px 0px  ",
                    height: "100%",
                    "&:hover": {
                      cursor: "pointer",
                    },
                    borderTopLeftRadius: item.title === "Vision" && "80px",
                    borderBottomRightRadius:  item.title === "Vision" && "80px",
                    borderTopRightRadius:  item.title === "Mission" && "80px",
                    borderBottomLeftRadius:  item.title === "Mission" && "80px"
                  }}
                >
                  <CardMedia
                    sx={{ height: 100, width: 100, margin: "auto", mt: 3 }}
                    image={item.img}
                    title={item.title}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      textAlign={"center"}
                    >
                      {item.title}
                    </Typography>

                    <Typography
                      color="inherit"
                      sx={{
                        textAlign: "center",
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

export default GoalSection;
