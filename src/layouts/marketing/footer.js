import {
  Box,
  Container,
  Divider,
  Link,
  Stack,
  Typography,
  Unstable_Grid2 as Grid,
  SvgIcon,
  Button,
} from "@mui/material";
import { RouterLink } from "src/components/router-link";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailIcon from "@mui/icons-material/Mail";
import { sections, socials, workWithUs } from "src/mock/footer";

export const Footer = (props) => (
  <Box
    sx={{
      backgroundColor: "neutral.800",
      backgroundRepeat: "repeat",
      backgroundPosition: "bottom",
      backgroundImage: 'url("/assets/bbbb.png")',
      color: "neutral.100",
      py: "60px",
      overflow: "hidden",
      pb: 6,
      pt: {
        md: 15,
        xs: 6,
      },
    }}
    {...props}
  >
    <Container maxWidth="xl">

      <Box
        sx={{
          paddingBottom: "50px",
        }}
      >

        <Grid
          container
          spacing={4}
          sx={{
            display: "flex",
            alignItems: "center",
            // borderRadius: "10px",
            // p: 2,
            backgroundColor: "transparent",
            // boxShadow: "0px 0px 14px 0px #ffffff69",
          }}
        >
          <Grid
            xs={12}
            sm={12}
            md={7}
            display="flex"
            justifyContent={{ xs: "center", md: "start" }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginRight: "20px",
              }}
            >
              <img
                alt="VT Foods PVT LTD Logo"
                src="/assets/VT-logo.png"
                style={{ height: "70px", width: 'auto' }}
              />
            </Box>
            <Box>
              <Typography
                color="white"
                variant="h4"
                sx={{
                  fontSize: "30px",
                  fontWeight: "bold",
                  textShadow: "2px 2px 5px rgba(0,0,0,0.3)",
                  background: "linear-gradient(45deg, black, black)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  letterSpacing: "0.1em",
                }}
              >
                VT FOODS PRIVATE LIMITED
              </Typography>
              <Typography
                color="black"
                variant="subtitle1"
                sx={{ pt: 1 }}
              >
                Manufacturer & Exporter of Dehydrated Onion, Garlic and Spices.
              </Typography>
            </Box>
          </Grid>

          <Grid xs={12} sm={12} md={5}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
              }}
              justifyContent={{ xs: "center", md: "end" }}
            >


            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>

    <Container maxWidth="xl">
      <Grid
        container
        spacing={3}
        sx={{
          pt: 7,
        }}
      >
        {sections.map((section, index) => (
          <Grid key={section.title} xs={12} sm={4} md={4}>
            <Typography
              color="black"
              sx={{
                fontSize: "20px",
                pb: 2,
                fontWeight: 500,
                textTransform: "uppercase",
              }}
            >
              {section.title}
            </Typography>

            <Stack
              component="ul"
              spacing={1}
              sx={{
                listStyle: "none",
                m: 0,
                p: 0,
              }}
            >
              {section.items.map((item) => {
                const linkProps = item.path
                  ? item.external
                    ? {
                      component: "a",
                      href: item.path,
                      target: "_blank",
                    }
                    : {
                      component: RouterLink,
                      href: item.path,
                    }
                  : {};

                return (
                  <Stack
                    alignItems="center"
                    direction="row"
                    key={item.title}
                    spacing={2}
                  >
                    <Link
                      color="white"
                      variant="subtitle1"
                      {...linkProps}
                      sx={{
                        fontSize: "16px",
                        fontWeight: "500",
                        display: "inline-block",
                        transition: "all 0.3s",
                        color: "black",
                        "&:hover": {
                          fontWeight: "600",
                          color: "white",
                          textDecoration: "none",
                          marginLeft: "5px",
                        },
                      }}
                    >
                      {item.title}
                    </Link>
                  </Stack>
                );
              })}
            </Stack>
          </Grid>
        ))}

        <Grid xs={12} sm={4} md={4}>
          <Typography
            color="black"
            sx={{
              fontSize: "20px",
              pb: 2,
              fontWeight: 500,
              textTransform: "uppercase",
            }}
          >
            Contact Details
          </Typography>

          <Stack
            component="ul"
            spacing={1}
            sx={{
              listStyle: "none",
              m: 0,
              p: 0,
            }}
          >
            <Stack alignItems="start" direction="column" spacing={2}>
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    color: "black",
                  }}
                >
                  {" "}
                  <LocationOnIcon sx={{ mr: 1 }} />
                  INDIA
                </Typography>{" "}
                <Link
                  color="white"
                  variant="subtitle1"
                  href="https://goo.gl/maps/2GFSqWAJEXSowwr29"
                  target="_blank"
                  sx={{
                    fontSize: "16px",
                    fontWeight: "500",
                    display: "inline-block",
                    transition: "all 0.3s",
                    color: "black",
                    marginTop: "5px",
                    "&:hover": {
                      fontWeight: "600",
                      color: "white",
                      textDecoration: "none",
                      marginLeft: "5px",
                    },
                  }}
                >
                  1019, 1020, 1021, Silver Business Point, Near VIP Circle,
                  opposite Royal Square, Uttran, Surat, Gujarat 394105
                </Link>
              </Box>
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    color: "black",
                  }}
                >
                  {" "}
                  <LocationOnIcon sx={{ mr: 1 }} />
                  UK
                </Typography>{" "}
                <Link
                  color="white"
                  variant="subtitle1"
                  href="https://maps.app.goo.gl/UovH5e4DG2utN4JS9"
                  target="_blank"
                  sx={{
                    fontSize: "16px",
                    fontWeight: "500",
                    display: "inline-block",
                    transition: "all 0.3s",
                    color: "black",
                    marginTop: "5px",
                    "&:hover": {
                      fontWeight: "600",
                      color: "white",
                      textDecoration: "none",
                      marginLeft: "5px",
                    },
                  }}
                >
                  85-Great Portland street, First Floor, London, W1W 7LT
                </Link>
              </Box>
              <Link
                color="white"
                variant="subtitle1"
                href="tel:+91 99040 40083"
                target="_blank"
                sx={{
                  fontSize: "16px",
                  fontWeight: "500",
                  display: "inline-block",
                  transition: "all 0.3s",
                  color: "black",
                  "&:hover": {
                    fontWeight: "600",
                    color: "white",
                    textDecoration: "none",
                    marginLeft: "5px",
                  },
                }}
              >
                <PhoneIcon
                  sx={{
                    mr: 1,
                  }}
                />{" "}
                +91 99040 40083
              </Link>
              <Link
                color="white"
                variant="subtitle1"
                href="mailto: contact@hvginfotech.com"
                target="_blank"
                sx={{
                  fontSize: "16px",
                  fontWeight: "500",
                  display: "inline-block",
                  transition: "all 0.3s",
                  color: "black",
                  "&:hover": {
                    fontWeight: "600",
                    color: "white",
                    textDecoration: "none",
                    marginLeft: "5px",
                  },
                }}
              >
                <MailIcon
                  sx={{
                    mr: 1,
                  }}
                />
                contact@hvginfotech.com
              </Link>
            </Stack>
          </Stack>
        </Grid>
      </Grid>

      <Box>
        <Grid container spacing={2}>
          <Grid
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 5,
              pt: 7,
              alignItems: "center",
            }}
          >
            {workWithUs.map((section, index) => (
              <Box
                key={index}
              >
                <img
                  alt={section.title}
                  src={section.image}
                  style={{ height: section.height, width: "100%" }}
                />
              </Box>
            ))}
          </Grid>
        </Grid>
      </Box>
      <Divider sx={{ my: 6, borderColor: "#656565" }} />

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>

          <Grid xs={12} sm={12}>
            <Typography
              color="black"
              fontSize={"14px"}
              sx={{
                textAlign: "center",
              }}
            >
              © 2024 All Rights Reserved - vtfoods.com
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  </Box>
);
