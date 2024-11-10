import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { serviceData, serviceData1 } from "src/mock/service";
import TitleSection from "./title-section";
import Link from "next/link";

const ServiceSection = () => {
  return (
    <Container maxWidth="xl">
      <Box padding={{ lg: "50px 0", xs: "50px 0", md: "50px 0" }}>
        <TitleSection
          title="Our Services"
          desc="We provide best in class Services"
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
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Grid
              item
              lg={4}
              md={12}
              sm={12}
              xs={12}
              sx={{ display: "flex", justifyContent: "start" }}
            >
              <Card
                sx={{
                  borderRadius: "0px",

                  boxShadow: "unset !important",
                  "&:hover": {
                    cursor: "pointer",
                  },
                }}

              >
                <CardContent>
                  <Typography
                    gutterBottom
                    component="div"
                    color="primary"
                    textAlign={"start"}
                    sx={{
                      fontSize: "32px",
                      fontWeight: "600",
                    }}
                  >
                    Discover tailored{" "}
                    <span
                      style={{
                        fontWeight: 900,
                        fontSize: "40px",
                      }}
                    >
                      Offers Perfectly{" "}
                    </span>{" "}
                    suited to your needs
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            {serviceData.map((service, index) => (
              <Grid
                item
                lg={4}
                md={6}
                sm={12}
                xs={12}
                sx={{ display: "flex", justifyContent: "center" }}
                key={index}
              >
                <Card
                  sx={{
                    borderRadius: "0px",
                    border: "1px solid #f0f0f0",
                    boxShadow: "unset !important",
                    background: "#faf8ff",
                    "&:hover": {
                      boxShadow: "0px 0px 10px 0px #f0f0f0 !important",
                      cursor: "pointer",
                    },
                  }}
                  className="service-card"
                >
                  <CardMedia
                    sx={{ height: 100, width: 100, margin: "auto", mt: 3 }}
                    image={service.image}
                    title={service.title}
                    className="service-card-image"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      component="div"
                      textAlign={"center"}
                      sx={{
                        fontSize: "20px",
                        fontWeight: "600",
                      }}
                    >
                      {service.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      textAlign={"center"}
                    >
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Grid container spacing={2} pt={2}>
            {serviceData1.map((service, index) => (
              <Grid
                item
                lg={4}
                md={6}
                sm={12}
                xs={12}
                sx={{ display: "flex", justifyContent: "center" }}
                key={index}
              >
                <Card
                  sx={{
                    borderRadius: "0px",
                    border: "1px solid #f0f0f0",
                    boxShadow: "unset !important",
                    background: "#faf8ff",
                    "&:hover": {
                      boxShadow: "0px 0px 10px 0px #f0f0f0 !important",
                      cursor: "pointer",
                    },
                  }}
                  className="service-card"
                >
                  <CardMedia
                    sx={{ height: 100, width: 100, margin: "auto", mt: 3 }}
                    image={service.image}
                    title={service.title}
                    className="service-card-image"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      component="div"
                      textAlign={"center"}
                      sx={{
                        fontSize: "20px",
                        fontWeight: "600",
                      }}
                    >
                      {service.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      textAlign={"center"}
                    >
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
            <Grid
              item
              lg={4}
              md={6}
              sm={12}
              xs={12}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Card
                sx={{
                  borderRadius: "0px",
                  border: "1px solid #f0f0f0",
                  backgroundImage:
                    "linear-gradient(to bottom, rgb(255 255 255 / 27%), rgb(227 219 255)), url(/assets/bg.png);",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "bottom",

                  boxShadow: "rgb(229 223 245) 8px 8px 9px 0px !important ",
                  "&:hover": {
                    cursor: "pointer",
                  },
                }}
                className="service-card flex"
              >
                <CardContent
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    gutterBottom
                    component="div"
                    color="primary.main"
                    textAlign={"start"}
                    sx={{
                      fontSize: "22px",
                      fontWeight: "700",
                    }}
                  >
                    &ldquo;Our engineering team is committed to fulfilling all
                    your technology needs with expertise, innovation, and
                    reliability.&rdquo;
                  </Typography>
                  <Stack
                    alignItems="center"
                    direction="row"
                    sx={{ padding: "10px 0" }}
                  >
                    <Link href="/web-application-development">
                      <Button
                        variant="contained"
                        sx={{
                          color: "primary.main",
                          backgroundColor: "#fff",
                          "&:hover": {
                            color: "primary.main",
                            backgroundColor: "#fff",
                          },
                          mt: 2,
                        }}
                      >
                        See All
                      </Button>
                    </Link>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default ServiceSection;
