import {
  Box,
  Container,
  Typography,
  Unstable_Grid2 as Grid,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import React from "react";
import { Seo } from "src/components/seo";
import { usePageView } from "src/hooks/use-page-view";
import { customApiDevCompony } from "src/assets/image";
import { customApiDevAndIntegration } from "src/assets/image";
import { customApiDevServices } from "src/assets/image";
import { saasEffectiveStratergies } from "src/assets/image";
import { node } from "src/assets/image";
import { customApiNodeHapi } from "src/assets/image";
import { graphql } from "src/assets/image";
import { about_us } from "src/assets/image";
import { Layout as MarketingLayout } from "src/layouts/marketing";
import { layout } from "src/utils/constant";
import { paths } from "src/paths";

const Page = () => {
  usePageView();
  return (
    <>
      <Seo title="HVG Infotech PVT LTD - Hire Web and Mobile Application Development..." />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
          backgroundColor: "#eeefff94",
        }}
      >
        <Container maxWidth="xl">
          <Grid
            container
            direction={{ lg: "row", xs: "column-reverse", md: "row" }}
            sx={{
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Grid xs={12} md={6}>
              <Typography variant="h4" color="inherit" sx={{ fontWeight: 400 }}>
                India’s Leading API Development Company
              </Typography>

              <Typography
                sx={{
                  mt: 4,
                }}
              >
                HVG Infotech PVT LTD is the leading name as best Rest API Development
                Company in Surat, India offers Custom and Third Party API
                Integration Services with significant experience (5+ Years) to
                transforming the different industries. Our API developers using
                C, C++, Java, Python, and PHP to create powerful, secure, and
                easily maintainable APIs.
              </Typography>

              <Typography
                sx={{
                  mt: 3,
                }}
              >
                We are the team of API developers, experienced in delivering the
                API integration services to provide the access to well-designed
                backend solutions at a competitive price with no compromising on
                the quality. The benefits of this delivery method to create
                high-performance yet light APIs that can draw a large amount of
                traffic for your web and mobile app, flexible integrations and
                customization of existing products, enabling developers to
                enrich and enhance services in new and creative ways.
              </Typography>
            </Grid>
            <Grid xs={12} md={6}>
              <Box>
                <img
                  src={customApiDevCompony.src}
                  alt="customApiDevCompony"
                  width="100%"
                  height="100%"
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="xl">
          <Box>
            <Grid
              container
              sx={{
                justifyContent: "center",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Grid xs={12} md={6}>
                <Box>
                  <img
                    src={customApiDevServices.src}
                    alt="customApiDevServices"
                    width="100%"
                    height="100%"
                  />
                </Box>
              </Grid>

              <Grid xs={12} md={6}>
                <Typography
                  variant="h4"
                  color="inherit"
                  sx={{ fontWeight: 400 }}
                >
                  Our Fluent Rest API Development Services
                </Typography>

                <Typography
                  sx={{
                    mt: 3,
                  }}
                >
                  Our Rest API development services offer cloud-based backends
                  to give our customers access for their products on any device
                  from anywhere in the world. We specialize in developing
                  enterprise-grade REST APIs that are easy to consume, well
                  documented, and truly reliable.
                </Typography>

                <Typography
                  sx={{
                    mt: 3,
                  }}
                >
                  Our Rest API expert team proficient in a faster path to
                  deployment, easier integration with other applications, and
                  the more flexible GUI is tuning for worker support. We reduce
                  the management complexity of a business and help to startups,
                  SMBs and Fortune 500 companies build, extend, and maintain
                  private APIs that power mobile apps, responsive websites and
                  microservices.
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
          backgroundColor: "#eeefff94",
        }}
      >
        <Container maxWidth="xl">
          <Box>
            <Grid
              container
              direction={{ lg: "row", xs: "column-reverse", md: "row" }}
              sx={{
                justifyContent: "center",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Grid xs={12} md={6}>
                <Typography
                  variant="h4"
                  color="inherit"
                  sx={{ fontWeight: 400 }}
                >
                  Custom API Development & Integration Solutions
                </Typography>

                <Typography
                  sx={{
                    mt: 4,
                  }}
                >
                  Our expert team of API developers offers custom API
                  development & integration solutions 24×7 with monitoring and
                  management along with delivering scalable and secure
                  cloud-based APIs for our clients. We provide clean and
                  well-structured programming code, using best development
                  tools, and build high-performance APIs for your needs that
                  create and maintain the finest revenue-generating solutions
                  for any business.
                </Typography>

                <Typography
                  sx={{
                    mt: 3,
                  }}
                >
                  We integrate disparate business systems and processes, add web
                  service functionality to existing applications, and
                  synchronize data across applications. You just need to explain
                  your needs and we will have them taken care of here at HVG
                  Infotech.
                </Typography>
              </Grid>
              <Grid xs={12} md={6}>
                <Box>
                  <img
                    src={customApiDevAndIntegration.src}
                    alt="customApiDevAndIntegration"
                    width="100%"
                    height="100%"
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="xl">
          <Typography
            variant="h4"
            sx={{ fontWeight: 400, textAlign: "center", mb: 3 }}
          >
            Our Core Values
          </Typography>
          <Grid
            container
            sx={{
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
              mt: 4,
            }}
            rowSpacing={1}
            lg={12}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            columns={{ xs: 3, md: 12, sm: 6 }}
          >
            <Grid container spacing={2}>
              <Grid
                item
                lg={3}
                md={6}
                sm={6}
                xs={12}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Card sx={{ maxWidth: 345 }}>
                  <Box sx={{ width: 100, margin: "auto", mt: 3 }}>
                    <img
                      src={saasEffectiveStratergies.src}
                      alt="saasEffectiveStratergies"
                    />
                  </Box>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      textAlign={"center"}
                      fontWeight={400}
                    >
                      API Integration
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      textAlign={"center"}
                    >
                      Smooth Integration with Google, Yahoo!, PayPal, Amazon,
                      Skype, Facebook and Twitter.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid
                item
                lg={3}
                md={6}
                sm={6}
                xs={12}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Card sx={{ maxWidth: 345 }}>
                  <Box sx={{ width: 100, margin: "auto", mt: 3 }}>
                    <img
                      src={saasEffectiveStratergies.src}
                      alt="saasEffectiveStratergies"
                    />
                  </Box>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      textAlign={"center"}
                      fontWeight={400}
                    >
                      API Consulting
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      textAlign={"center"}
                    >
                      Make the right choice of API Management & API Integration
                      solutions to meet your needs.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid
                item
                lg={3}
                md={6}
                sm={6}
                xs={12}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Card sx={{ maxWidth: 345 }}>
                  <Box sx={{ width: 100, margin: "auto", mt: 3 }}>
                    <img
                      src={saasEffectiveStratergies.src}
                      alt="saasEffectiveStratergies"
                    />
                  </Box>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      textAlign={"center"}
                      fontWeight={400}
                    >
                      Web API Development
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      textAlign={"center"}
                    >
                      Creating mashups and Web APIs for social media latest
                      representational state transfer (REST).
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid
                item
                lg={3}
                md={6}
                sm={6}
                xs={12}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Card sx={{ maxWidth: 345 }}>
                  <Box sx={{ width: 100, margin: "auto", mt: 3 }}>
                    <img
                      src={saasEffectiveStratergies.src}
                      alt="saasEffectiveStratergies"
                    />
                  </Box>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      textAlign={"center"}
                      fontWeight={400}
                    >
                      Mobile API Development
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      textAlign={"center"}
                    >
                      Creating APIs that makes payments, appointments, find
                      geolocation etc., to enrich mobile apps.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
          backgroundColor: "#eeefff94",
        }}
      >
        <Container maxWidth="xl">
          <Typography
            variant="h4"
            sx={{ fontWeight: 400, textAlign: "center", mb: 3 }}
          >
            Stack Of HVG
          </Typography>
          <Grid
            container
            sx={{
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
              mt: 4,
            }}
            rowSpacing={1}
            lg={12}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            columns={{ xs: 3, md: 12, sm: 6 }}
          >
            <Grid container spacing={2}>
              <Grid
                item
                lg={4}
                md={6}
                sm={6}
                xs={12}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Card>
                <Box sx={{ width: 100, margin: "auto", mt: 3,display:"flex",alignItems:"center",justifyContent:"center" }}>
                    <img src={customApiNodeHapi.src} alt="customApiNodeHapi" />
                  </Box>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      textAlign={"center"}
                      fontWeight={400}
                    >
                      Node/Express
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      textAlign={"center"}
                    >
                      Express is a minimal and flexible Node.js web application
                      framework that provides a robust set of features for web
                      and mobile applications.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid
                item
                lg={4}
                md={6}
                sm={6}
                xs={12}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Card>
                <Box sx={{ width: 100, margin: "auto", mt: 3,display:"flex",alignItems:"center",justifyContent:"center" }}>
                    <img
                      src={customApiNodeHapi.src}
                      alt="customApiNodeHapi"
                      maxWidth="100%"
                    />
                  </Box>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      textAlign={"center"}
                      fontWeight={400}
                    >
                      Node/Hapi
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      textAlign={"center"}
                    >
                      Build powerful, scalable applications, with minimal
                      overhead and full out-of-the-box functionality - your
                      code, your way
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid
                item
                lg={4}
                md={6}
                sm={6}
                xs={12}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Card>
                <Box sx={{ width: 100, margin: "auto", mt: 3,display:"flex",alignItems:"center",justifyContent:"center" }}>
                    <img src={graphql.src} alt="graphql" />
                  </Box>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      textAlign={"center"}
                      fontWeight={400}
                    >
                      GraphQL
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      textAlign={"center"}
                    >
                      The MEVN stack is a JavaScript stack that’s designed to
                      make the development process smoother. MEVN includes four
                      open-source components: MongoDB, Express, Vue, and Node.
                      js. These components provide an end-to-end framework for
                      developers to work in.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="xl">
          <Box>
            <Grid
              container
              direction={{ lg: "row", xs: "column-reverse", md: "row" }}
              sx={{
                justifyContent: "center",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Grid xs={12} md={6}>
                <Typography
                  variant="h4"
                  color="inherit"
                  sx={{ fontWeight: 400 }}
                >
                  Why choose us?
                </Typography>
                <Typography
                  sx={{
                    mt: 4,
                  }}
                >
                  We believe that the foundation of our relationship with our
                  clients is mutual Growth. Full stack developers at HVG Tech
                  Solution take full-stack development services to another
                  level. We are a full stack front end and back end development
                  company with having in- depth knowledge, and extensive
                  experience in building any type of web, mobile, or desktop
                  application start from scratch. Our Full Stack development
                  process covers planning, designing & development, testing, 3rd
                  party integration, and ongoing support/maintenance.
                </Typography>
                <Typography sx={{ mt: 3 }}>
                  <Button variant="contained" component="a" href={paths.contactUs} maxWidth={50}>Contact Us</Button>
                </Typography>
              </Grid>
              <Grid xs={12} md={6}>
                <Box>
                  <img
                    src={about_us.src}
                    alt="about-us"
                    width="100%"
                    height="100%"
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};
layout(Page);

export default Page;
