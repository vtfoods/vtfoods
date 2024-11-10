import {
  Box,
  Container,
  Divider,
  Link,
  Stack,
  Typography,
  Unstable_Grid2 as Grid,
  SvgIcon,
} from "@mui/material";
import { Logo } from "src/components/logo";
import { RouterLink } from "src/components/router-link";
import { paths } from "src/paths";
import HomeIcon from '@mui/icons-material/Home';
import DescriptionIcon from '@mui/icons-material/Description';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import PhoneIcon from '@mui/icons-material/Phone';
import ChatIcon from '@mui/icons-material/Chat';
import GroupsIcon from '@mui/icons-material/Groups';
import CloudDoneIcon from '@mui/icons-material/CloudDone';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
import CodeIcon from '@mui/icons-material/Code';
import FunctionsIcon from '@mui/icons-material/Functions';
import WebIcon from '@mui/icons-material/Web';
import SettingsIcon from '@mui/icons-material/Settings';
import PaletteIcon from '@mui/icons-material/Palette';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

const sections = [
  {
    title: "Company",
    items: [
      {
        title: "Home",
        path: paths.index,
        icon: (
          <SvgIcon fontSize="small">
            <HomeIcon />
          </SvgIcon>
        ),
      },
      {
        title: "About Us",
        path: paths.about,
        icon: (
          <SvgIcon fontSize="small">
            <DescriptionIcon />
          </SvgIcon>
        ),
      },
      {
        title: "Career",
        path: paths.career,
        icon: (
          <SvgIcon fontSize="small">
            <BusinessCenterIcon />
          </SvgIcon>
        ),
      },
      {
        title: "Contact Us",
        path: paths.contactUs,
        icon: (
          <SvgIcon fontSize="small">
            <PhoneIcon />
          </SvgIcon>
        ),
      },
   
      {
        title: "Our Team",
        path: paths.ourTeam,
        icon: (
          <SvgIcon fontSize="small">
            <GroupsIcon />
          </SvgIcon>
        ),
      },
    ],
  },
  {
    title: "Services",
    items: [
      {
        title: "Saas Application Development",
        path: paths.saasAplication,
        icon: (
          <SvgIcon fontSize="small">
            <CloudDoneIcon />
          </SvgIcon>
        ),
      },
      {
        title: "Mobile App Development",
        path: paths.mobileApp,
        icon: (
          <SvgIcon fontSize="small">
            <MobileFriendlyIcon/>
          </SvgIcon>
        ),
      },
      {
        title: "Full Statck Development",
        path: paths.fullStack,
        icon: (
          <SvgIcon fontSize="small">
            <CodeIcon />
          </SvgIcon>
        ),
      },
      {
        title: "Serverless Development",
        path: paths.serverLess,
        icon: (
          <SvgIcon fontSize="small">
            <FunctionsIcon />
          </SvgIcon>
        ),
      },
      {
        title: "Web Apps & Website Development",
        path: paths.webApp,
        icon: (
          <SvgIcon fontSize="small">
            <WebIcon />
          </SvgIcon>
        ),
      },
      {
        title: "Devops Services",
        path: paths.devlopServices,
        icon: (
          <SvgIcon fontSize="small">
            <SettingsIcon />
          </SvgIcon>
        ),
      },
      {
        title: "UI/UX Development",
        path: paths.uiux,
        icon: (
          <SvgIcon fontSize="small">
            <PaletteIcon/>
          </SvgIcon>
        ),
      },
    ],
  },
  {
    title: "Social",
    items: [
      {
        title: "Instagram",
        path: "https://www.instagram.com/hvginfotech/",
        icon: (
          <SvgIcon fontSize="small">
            <InstagramIcon />
          </SvgIcon>
        ),
        
      },
      {
        title: "LinkedIn",
        path: "https://www.linkedin.com/company/89896259/admin/feed/posts/",
        icon: (
          <SvgIcon fontSize="small">
            <LinkedInIcon />
          </SvgIcon>
        ),
      },
      {
        title: "Facebook",
        path: "https://www.facebook.com/profile.php?id=61553302195553",
        icon: (
          <SvgIcon fontSize="small">
            <FacebookIcon />
          </SvgIcon>
        ),
      },
      
    ],
  },
];

export const Footer = (props) => (
  <Box
    sx={{
      backgroundColor: (theme) =>
        theme.palette.mode === "dark" ? "neutral.800" : "neutral.50",
      borderTopColor: "divider",
      borderTopStyle: "solid",
      borderTopWidth: 1,
      pb: 6,
      pt: {
        md: 15,
        xs: 6,
      },
    }}
    {...props}
  >
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid
          xs={12}
          sm={4}
          md={3}
          sx={{
            order: {
              xs: 4,
              md: 1,
            },
          }}
        >
          <Stack spacing={1}>
            <Stack
              alignItems="center"
              component={RouterLink}
              direction="row"
              display="inline-flex"
              href={paths.index}
              spacing={1}
              sx={{ textDecoration: "none" }}
            >
              <Box>
                <img
                alt="HVG Infotech PVT LTD Logo"
                  src="/assets/Logohvg.png"
                  style={{ maxHeight: "100%", maxWidth: "40%" }}
                />
              </Box>
            </Stack>

            <Box>
              <Typography variant="">Address</Typography>
              <Typography>
                {" "}
                <Link
                  href="https://goo.gl/maps/2GFSqWAJEXSowwr29"
                  underline="none"
                  color={"#000"}
                  sx={{ fontSize: "14px", fontWeight: "500" }}
                >
                  1019, 1020, 1021, Silver Business Point, Near VIP Circle, opposite
                          Royal Square, Uttran, Surat, Gujarat 394105
                </Link>
              </Typography>
            </Box>
          </Stack>
        </Grid>
        {sections.map((section, index) => (
          <Grid
            key={section.title}
            xs={12}
            sm={4}
            md={3}
            sx={{
              order: {
                md: index + 2,
                xs: index + 1,
              },
            }}
          >
            <Typography color="text.secondary" variant="overline">
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
                     <Box
                      sx={{
                       color: "primary.main",
                      
                      }}
                    >
                      {item.icon}
                   </Box> 
                    <Link
                      color="text.primary"
                      variant="subtitle2"
                      {...linkProps}
                    >
                      {item.title}
                    </Link>
                  </Stack>
                );
              })}
            </Stack>
          </Grid>
        ))}
      </Grid>
      <Divider sx={{ my: 6 }} />
      <Typography color="text.secondary" variant="caption">
        All Rights Reserved.
      </Typography>
    </Container>
  </Box>
);
