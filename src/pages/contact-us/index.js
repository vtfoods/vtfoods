import {
  Box,
  Container,
  Grid,
  Link,
  Stack,
  SvgIcon,
  Typography,
} from "@mui/material";
import { Seo } from "src/components/seo";
import { usePageView } from "src/hooks/use-page-view";
import { ContactForm } from "src/sections/contact/contact-form";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { layout } from "src/utils/constant";
import { description } from "src/meta-description";
import TitleSection from "src/sections/home/title-section";
import { socials } from "src/mock/footer";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";

const Page = () => {
  usePageView();

  return (
    <>
      <Seo title="Contact Us" description={description.contactUsPage} />
      {/* <Box
        sx={{
          "@media (max-width: 800px)": {
            display: "none ",
          },
        }}
      >
        <img
          src="/assets/telephone.png"
          alt="AI"
          style={{
            position: "absolute",
            left: "103px",
            height: "200px",
          }}
        />
      </Box> */}

      <Box
        sx={{
          backgroundImage: 'url(/assets/bg-a.png)',
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          borderRadius: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        height={{ lg: 400, xs: 250 }}
      >
        <Container maxWidth="xl">
          <TitleSection
            title="Contact Us"
            desc=" Get in touch with our experts today"
          />
        </Container>
      </Box>

      <Box
        sx={{
          padding: "64px 0",
          background: "#faf8ff",
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={2} display={"flex"} alignItems={"center"}>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  borderRadius: "8px",
                  overflow: "hidden",
                  height: "100%",
                }}
              >
                <Stack
                  spacing={2}
                  sx={{
                    height: "100%",
                    padding: "32px",
                  }}
                >
                  <Grid container spacing={2}>
                    <TitleSection title="Contact Information" />
                    <Grid item xs={12}>
                      <Stack
                        alignItems="start"
                        direction="column"
                        spacing={3}
                        sx={{
                          padding: "16px 0",
                        }}
                      >
                        <Box>
                          <Typography variant="h6">
                            {" "}
                            <LocationOnIcon sx={{ mr: 1 }} />
                            INDIA
                          </Typography>{" "}
                          <Link
                            color="white"
                            variant="subtitle1"
                            href="https://maps.app.goo.gl/NwQHwKD7XxdmRbfx9"
                            target="_blank"
                            sx={{
                              fontSize: "16px",
                              fontWeight: "500",
                              display: "flex",
                              alignItems: "center",
                              color: "black",
                              marginTop: "5px",
                              "&:hover": {
                                color: "primary.main",
                                textDecoration: "none",
                              },
                            }}
                          >
                            <Typography>
                              {" "}
                              1019, 1020, 1021, Silver Business Point, Near VIP
                              Circle, opposite Royal Square, Uttran, Surat,
                              Gujarat 394105{" "}
                            </Typography>
                          </Link>
                        </Box>

                       

                        <Link
                          color="white"
                          variant="subtitle1"
                          href="tel:+91 94284 96265"
                          target="_blank"
                          sx={{
                            fontSize: "16px",
                            fontWeight: "500",
                            display: "flex",
                            alignItems: "center",

                            color: "black",
                            "&:hover": {
                              color: "primary.main",
                              textDecoration: "none",
                            },
                          }}
                        >
                          <PhoneIcon
                            sx={{
                              mr: 1,
                            }}
                          />{" "}
                          <Typography>+91 94284 96265</Typography>
                        </Link>
                        <Link
                          color="white"
                          variant="subtitle1"
                          href="mailto: vtfoods.onion@gmail.com"
                          target="_blank"
                          sx={{
                            fontSize: "16px",
                            fontWeight: "500",
                            display: "flex",
                            alignItems: "center",

                            color: "black",
                            "&:hover": {
                              color: "primary.main",
                              textDecoration: "none",
                            },
                          }}
                        >
                          <MailIcon
                            sx={{
                              mr: 1,
                            }}
                          />{" "}
                          <Typography>vtfoods.onion@gmail.com</Typography>
                        </Link>
                      </Stack>
                    </Grid>
                  </Grid>
                </Stack>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  background: "#fff",
                  padding: "32px",
                  borderRadius: "8px",
                  boxShadow: "0 0 10px 0 rgba(0,0,0,0.1)",
                }}
              >
                <Typography
                  sx={{
                    pb: 2,
                    color: "primary.main",
                    borderBottom: "1px solid #e0e0e0",
                    mb: 3,
                  }}
                  variant="h6"
                >
                  Fill the form below
                </Typography>
                <ContactForm />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container maxWidth="xl">
          <Stack
            alignItems="center"
            direction="row"
            spacing={2}
            sx={{
              my: 6,
            }}
          >
            <Grid container spacing={2}>
              <Grid xs={12}>
                <Stack>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.1765772202216!2d71.73848837504606!3d21.105525280563143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be23b3f16a92bd3%3A0x7e51bfafae71d784!2sV.%20T.%20Foods%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1731309942318!5m2!1sen!2sin"
                    width="100%"
                    height="600"
                    style={{ border: "0" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </Stack>
              </Grid>
            </Grid>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

layout(Page);

export default Page;
