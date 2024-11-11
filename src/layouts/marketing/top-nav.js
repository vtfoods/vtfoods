import { useCallback, useState } from "react";
import PropTypes from "prop-types";
import Menu01Icon from "@untitled-ui/icons-react/build/esm/Menu01";
import {
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  SvgIcon,
  useMediaQuery,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import { RouterLink } from "src/components/router-link";
import { usePathname } from "src/hooks/use-pathname";
import { useWindowScroll } from "src/hooks/use-window-scroll";
import { paths } from "src/paths";
import { PagesPopover } from "./pages-popover";
import { TopNavItem } from "./top-nav-item";
import { PagesPopoverWe } from "./pages-popover-we";
import { PagesPopoverCompany } from "./pages-popover-company";
import Link from "next/link";
//Remove
const items =
// process.env.NODE_ENV == "development"
process.env.NODE_ENV !== "development"
    ? [
      {
        title: "Components",
        path: paths.components.index,
      },
      {
        title: "Pages",
        popover: <PagesPopover />,
      },
      // {
      //   title: "Blog",
      //   path: paths.blog,
      // },
      {
        title: "Portfolio",
        path: paths.portfolio,
      },
      {
        title: "Docs",
        path: paths.docs,
        external: true,
      },
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
        title: "Our Team",
        path: paths.ourTeam,
      },
      {
        title: "Services",
        popover: <PagesPopoverWe />,
      },
    ]
    : [
      {
        title: "Home",
        path: paths.index,
      },
      {
        title: "Products",
        path: paths.products,
      },
      {
        title: "About Us",
        path: paths.about,
      },
      {
        title: "Our Team",
        path: paths.ourTeam,
      },
      {
        title: "Contact Us",
        path: paths.contactUs,
      },
    ];

const TOP_NAV_HEIGHT = 64;

export const TopNav = (props) => {
  const { onMobileNavOpen } = props;
  const pathname = usePathname();
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const [elevate, setElevate] = useState(false);
  const offset = 64;
  const delay = 100;

  const handleWindowScroll = useCallback(() => {
    if (window.scrollY > offset) {
      setElevate(true);
    } else {
      setElevate(false);
    }
  }, []);

  useWindowScroll({
    handler: handleWindowScroll,
    delay,
  });

  return (
    <Box
      component="header"
      sx={{
        left: 0,
        position: "fixed",
        right: 0,
        top: 0,
        maxWidth: "xl",
        mx: "auto",
        zIndex: (theme) => theme.zIndex.appBar,
        // backdropFilter: "blur(6px)",
        backgroundColor: "transparent",
        borderRadius: "0 0 20px 20px",
        boxShadow: "none",
        transition: (theme) =>
          theme.transitions.create("box-shadow, background-color", {
            easing: theme.transitions.easing.easeInOut,
            duration: 50,
          }),
        ...(elevate && {
          backgroundColor: (theme) =>
            alpha(theme.palette.background.paper, 0.91),
          boxShadow: 8,
        }),
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          justifyContent: "center",
          position: "relative"
        }}
      >
        <Stack
          sx={{ height: TOP_NAV_HEIGHT }}
          alignItems="center"
          justifyContent="center"
        >
          <Box
            position="absolute"
            left={16}
            height="100%"
          >
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
                  alt="VT Foods PVT LTD Logo"
                  src="/assets/VT-logo.png"
                  style={{ height: "50px", width: 'auto', margin: "5px" }}
                />
              </Box>
            </Stack>
          </Box>
          {mdUp && (
            <Stack
              alignItems="center"
              direction="row"
              justifyContent="center"
              spacing={2}
            >
              <Box
                component="nav"
                sx={{ height: "80%" }}
              >
                <Stack
                  component="ul"
                  alignItems="center"
                  justifyContent="center"
                  direction="row"
                  spacing={1}
                  sx={{
                    height: "100%",
                    listStyle: "none",
                    m: 0,
                    p: 0,
                  }}
                >
                  <>
                    {items.map((item) => {
                      const checkPath = !!(item.path && pathname);
                      const partialMatch = checkPath
                        ? pathname.includes(item.path)
                        : false;
                      const exactMatch = checkPath
                        ? pathname === item.path
                        : false;
                      const active = item.popover ? partialMatch : exactMatch;

                      return (
                        <TopNavItem
                          active={active}
                          external={item.external}
                          key={item.title}
                          path={item.path}
                          popover={item.popover}
                          title={item.title}
                        />
                      );
                    })}
                  </>
                </Stack>
              </Box>
            </Stack>
          )}
          <Stack>
            <Box
              position="absolute"
              right={16}
              height="100%"
              top="0"
              display="flex"
              alignItems="center"
              // transform="translateY(-50%)"
            >
              {!mdUp ? (
                <IconButton onClick={onMobileNavOpen}>
                  <SvgIcon fontSize="small">
                    <Menu01Icon />
                  </SvgIcon>
                </IconButton>
              ) : (
                <Link href={paths.contactUs}>
                  <Button variant="outlined"
                    sx={{
                      "&:hover": {
                        color: '#fff',
                        backgroundColor: 'primary.main'
                      },
                    }}
                  >Contact Us</Button>
                </Link>
              )}
              {/* <TopNavItem path={paths.contactUs} title="Contact Us" /> */}
            </Box>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

TopNav.propTypes = {
  onMobileNavOpen: PropTypes.func,
};
