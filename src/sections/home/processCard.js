import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
} from "@mui/material";
import TitleSection from "../../sections/home/title-section";

const ProcessCard = ({processCardData}) => {
  return (
    <>
      <Box
        padding={{ lg: "50px 0", xs: "50px 0", md: "100px 0" }}
        component="main"
        sx={{
            backgroundImage:
            "linear-gradient(to bottom, rgb(255 255 255 / 27%), rgb(227 219 255));",
        }}
      >
        <Container maxWidth="xl">
          <TitleSection title="Our Guiding principles"
          desc="Unlocking Possibilities with Our Technical Expertise"
           />
          <Box sx={{ paddingTop: "60px" }}>
            <Grid container justifyContent={"center"} spacing={4}>
              {processCardData.map((item) => (
                <Grid
                  item
                  lg={3}
                  md={3}
                  sm={6}
                  xs={12}
                  sx={{ display: "flex", justifyContent: "center" }}
                  key={item.id}
                >
                  <Card
                    sx={{
                      boxShadow: "unset !important",
                      width: "300px",
                      p: 3,
                      display: "flex",
                      flexDirection:"column",
                      justifyContent:"center",
                      alignItems:"center",
                       transition: "all 0.5s",
                      gap:3,
                      "&:hover": {
                        boxShadow: "0px 0px 4px 0px #584a91 !important",
                        cursor:"pointer"
                      },
                    }}
                  >
                    <Box sx={{ width: 100, margin: "auto" }}>
                      <img src={item.image} alt={item.title} />
                    </Box>
                    <Box>
                      <Typography
                        gutterBottom
                        variant="p"
                        component="div"
                        textAlign={"center"}
                        fontWeight={600}
                        sx={{
                          fontSize: "18px",
                          color:"primary.main"
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

export default ProcessCard;
