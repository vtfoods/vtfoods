import PropTypes from "prop-types";
import {
  Box,
  ButtonBase,
  Drawer,
  IconButton,
  Stack,
  SvgIcon,
} from "@mui/material";
import { RouterLink } from "src/components/router-link";
import { usePathname } from "src/hooks/use-pathname";
import { paths } from "src/paths";
import { SideNavItem } from "./side-nav-item";
import XIcon from "@untitled-ui/icons-react/build/esm/X";
//Remove
const items =
  process.env.NODE_ENV !== "development"
  // process.env.NODE_ENV == "development"
    ? [
        // {
        //   title: "Components",
        //   path: paths.components.index,
        // },
        // {
        //   title: "Docs",
        //   path: paths.docs,
        //   external: true,
        // },
        {
          title: "Home",
          path: paths.index,
        },
        {
          title: "Services",
          children: [
            {
              items: [
                {
                  title: "Web Apps & Website Developement",
                  path: paths.webApp,
                },
                {
                  title: "Full Stack Developement",
                  path: paths.fullStack,
                },
                {
                  title: "SAAS Application Development",
                  path: paths.saasAplication,
                },
                {
                  title: "Mobile App Developement",
                  path: paths.mobileApp,
                },

                {
                  title: "Serverless Development",
                  path: paths.serverLess,
                },

                {
                  title: "Devops Services",
                  path: paths.devlopServices,
                },
                {
                  title: "UI/UX Design",
                  path: paths.uiux,
                },

                {
                  title: "Offshore Developers",
                  path: paths.offShore,
                },
                
              ],
            },
          ],
        },
        {
          title: "Contact Us",
          path: paths.contactUs,
        },
        {
          title: "Technologies",
          path: paths.technologies,
        },
        {
          title: "Portfolio",
          path: paths.portfolio,
        },
        {
          title: "Company",
          children: [
            {
              items: [
                {
                  title: "About Us",
                  path: paths.about,
                },
                {
                  title: "Career",
                  path: paths.career,
                },
                {
                  title: "Our Team",
                  path: paths.ourTeam,
                },
                // {
                //   title: "Blog",
                //   path: paths.blog,
                // },
                {
                  title: "HVG@life",
                  path: paths.hvgLife,
                },
                {
                  title: "Testimonial",
                  path: paths.testimonial,
                },
              ],
            },
          ],
        },
      ]
    : [
        {
          title: "Home",
          path: paths.index,
        },
        {
          title: "About Us",
          path: paths.about,
        },
        {
          title: "Career",
          path: paths.career,
        },
        {
          title: "Contact Us",
          path: paths.contactUs,
        },
       
        {
          title: "Our Team",
          path: paths.ourTeam,
        },
        {
          title: "Services",
          children: [
            {
              items: [
                {
                  title: "SAAS Application Development",
                  path: paths.saasAplication,
                },
                {
                  title: "Mobile App Developement",
                  path: paths.mobileApp,
                },
                {
                  title: "Web Apps & Website Developement",
                  path: paths.webApp,
                },
                {
                  title: "Full Stack Developement",
                  path: paths.fullStack,
                },
                {
                  title: "Serverless Development",
                  path: paths.serverLess,
                },

                {
                  title: "Devops Services",
                  path: paths.devlopServices,
                },
                {
                  title: "UI/UX Design",
                  path: paths.uiux,
                },
                  {
                  title: "OffShore Developers",
                  path: paths.offShore,
                 },
              ],
            },
          ],
        },
      ];

const renderItems = ({ depth = 0, items, pathname }) =>
  items.reduce(
    (acc, item) =>
      reduceChildRoutes({
        acc,
        depth,
        item,
        pathname,
      }),
    []
  );

const reduceChildRoutes = ({ acc, depth, item, pathname }) => {
  const checkPath = !!(item.path && pathname);
  const partialMatch = checkPath ? pathname.includes(item.path) : false;
  const exactMatch = checkPath ? pathname === item.path : false;

  if (item.children) {
    acc.push(
      <SideNavItem
        active={partialMatch}
        depth={depth}
        disabled={item.disabled}
        key={item.title}
        open={partialMatch}
        title={item.title}
      >
        <Stack spacing={2}>
          {item.children.map((child, index) => (
            <Stack
              component="ul"
              key={index}
              spacing={0.5}
              sx={{
                listStyle: "none",
                m: 0,
                p: 0,
              }}
            >
              {child.subheader && (
                <Box
                  component="li"
                  sx={{
                    color: "text.secondary",
                    fontSize: 12,
                    fontWeight: 500,
                    lineHeight: 1.66,
                    mb: 1,
                    pl: "24px",
                    textTransform: "uppercase",
                  }}
                >
                  {child.subheader}
                </Box>
              )}
              {child.items.map((item) => {
                const checkPath = !!(item.path && pathname);
                const active = checkPath ? pathname === item.path : false;

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
                  <li key={item.title}>
                    <ButtonBase
                      sx={{
                        alignItems: "center",
                        borderRadius: 1,
                        display: "flex",
                        justifyContent: "flex-start",
                        pl: "24px",
                        pr: "16px",
                        py: "8px",
                        textAlign: "left",
                        "&:hover": {
                          backgroundColor: "action.hover",
                        },
                        ...(active && {
                          color: "primary.main",
                        }),
                      }}
                      {...linkProps}
                    >
                      <Box
                        component="span"
                        sx={{
                          height: 6,
                          mr: 2,
                          width: 6,
                        }}
                      >
                        <Box
                          sx={{
                            backgroundColor: "neutral.400",
                            borderRadius: "50%",
                            height: 4,
                            opacity: 0,
                            width: 4,
                            ...(active && {
                              backgroundColor: "primary.main",
                              height: 6,
                              opacity: 1,
                              width: 6,
                            }),
                          }}
                        />
                      </Box>
                      <Box
                        component="span"
                        sx={{
                          flexGrow: 1,
                          fontFamily: (theme) => theme.typography.fontFamily,
                          fontSize: 13,
                          fontWeight: 500,
                          lineHeight: "24px",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {item.title}
                      </Box>
                    </ButtonBase>
                  </li>
                );
              })}
            </Stack>
          ))}
        </Stack>
      </SideNavItem>
    );
  } else {
    acc.push(
      <SideNavItem
        active={exactMatch}
        depth={depth}
        disabled={item.disabled}
        external={item.external}
        key={item.title}
        path={item.path}
        title={item.title}
      />
    );
  }

  return acc;
};

export const SideNav = (props) => {
  const { onClose, open = false } = props;
  const pathname = usePathname();

  return (
    <Drawer
      anchor="right"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          maxWidth: "100%",
          width: 300,
        },
      }}
      variant="temporary"
    >
      <Box
        sx={{
          pt: 2,
          px: 2,
        }}
      >
        <Stack
          alignItems="center"
          component={RouterLink}
          direction="row"
          display="inline-flex"
          href={paths.index}
          spacing={1}
          sx={{ textDecoration: "none", display: "flex" }}
        >
          <Box>
            <img
              alt="VT Foods PVT LTD Logo"
              src="/assets/Logohvg.png"
              style={{ maxHeight: "100%", maxWidth: "40%" }}
            />
          </Box>
          <Box>
            <IconButton color="inherit" onClick={onClose}>
              <SvgIcon>
                <XIcon />
              </SvgIcon>
            </IconButton>
          </Box>
        </Stack>
      </Box>
      <Box component="nav" sx={{ p: 2 }}>
        <Stack
          component="ul"
          spacing={1}
          sx={{
            listStyle: "none",
            m: 0,
            p: 0,
          }}
        >
          {renderItems({ items, pathname })}
        </Stack>
      </Box>
    </Drawer>
  );
};

SideNav.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
};
