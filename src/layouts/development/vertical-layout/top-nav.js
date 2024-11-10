import { useCallback, useState } from "react";
import PropTypes from "prop-types";
import {
  Box, Container, Stack, useMediaQuery
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import { RouterLink } from "src/components/router-link";
import { usePathname } from "src/hooks/use-pathname";
import { useWindowScroll } from "src/hooks/use-window-scroll";
import { paths } from "src/paths";
import { PagesPopover } from "./pages-popover";
import { TopNavItem } from "./top-nav-item";
import { PagesPopoverWe } from "./pages-popover-we";

const items =
  process.env.NODE_ENV === "development"
    ? [
      {
        title: "Components",
        path: paths.components.index,
      },
      {
        title: "Pages",
        popover: <PagesPopover />,
      },
      {
        title: "Docs",
        path: paths.docs,
        external: true,
      },
      {
        title: 'Home',
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
        title: 'Our Team',
        path: paths.ourTeam,

      },
      {
        title: "Services",
        popover: <PagesPopoverWe />,
      },
      {
        title: "Blog",
        path: paths.blog,
      },
    ]
    : [
      {

        title: 'Home',
        path: paths.index,

      },
      {
        title: "About Us",
        path: paths.about,
      },
      // {
      //   title: "Blog",
      //   path: paths.blog,
      // },
      {
        title: "Career",
        path: paths.career,
      },
      {
        title: "Contact Us",
        path: paths.contactUs,
      },
   
      {
        title: 'Our Team',
        path: paths.ourTeam,

      },
      {
        title: "Services",
        popover: <PagesPopoverWe />,
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
        // pt: 2,
        zIndex: (theme) => theme.zIndex.appBar,
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          backdropFilter: "blur(6px)",
          backgroundColor: "transparent",
          borderRadius: 2.5,
          boxShadow: "none",
          transition: (theme) =>
            theme.transitions.create("box-shadow, background-color", {
              easing: theme.transitions.easing.easeInOut,
              duration: 200,
            }),
          ...(elevate && {
            backgroundColor: (theme) =>
              alpha(theme.palette.background.paper, 0.9),
            boxShadow: 8,
          }),
        }}
      >

        <Stack direction="row" spacing={2} sx={{ height: TOP_NAV_HEIGHT }}  >
          <Stack
            alignItems="center"
            direction="row"
            spacing={1}
            sx={{ flexGrow: 1 }}
          // width={0}
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
                  alt="HVG Infotech PVT LTD Logo"
                  src="/assets/Logohvg.png"
                  style={{ maxHeight: "100%", maxWidth: "25%" }}
                  className="logoDiv"
                />
              </Box>

            </Stack>
          </Stack>
          {mdUp && (
            <Stack alignItems="center" direction="row" spacing={2}>
              <Box component="nav" sx={{ height: "100%" }}>
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
        </Stack>
      </Container>
    </Box>
  );
};

TopNav.propTypes = {
  onMobileNavOpen: PropTypes.func,
};
