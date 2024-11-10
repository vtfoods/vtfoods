import { Box, ButtonBase, Stack } from "@mui/material";
import { RouterLink } from "src/components/router-link";
import { paths } from "src/paths";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const sections = [
  {
    items: [
      {
        children: [
          {
            title: "About Us",
            path: paths.about,
          },
          {
            title: "Careers",
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
            title:"HVG@life" ,
            path: paths.hvgLife, 
          },
          {
            title: "Testimonial",
            path: paths.testimonial
          }
        ],
      },
    ],
  },
];

export const PagesPopoverCompany = () => (
  <Box
    sx={{
      display: "grid",
      gap: 3,
    }}
  >
    {sections.map((section, index) => {
      return (
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
              <li key={item.title}>
                {item.children && (
                  <Stack
                    component="ul"
                    spacing={0.5}
                    sx={{
                      listStyle: "none",
                      m: 0,
                      p: 0,
                    }}
                  >
                    {item.children.map((child) => {
                      const linkProps = child.path
                        ? child.external
                          ? {
                              component: "a",
                              href: child.path,
                              target: "_blank",
                            }
                          : {
                              component: RouterLink,
                              href: child.path,
                            }
                        : {};

                      return (
                        <li key={child.title}>
                          <ButtonBase
                            sx={{
                              alignItems: "center",
                              borderRadius: 1,
                              display: "flex",
                              justifyContent: "flex-start",
                              pl: "4px",
                              py: "6px",
                              textAlign: "left",
                              width: "100%",
                              "&:hover": {
                                backgroundColor: "action.hover",
                              },
                            }}
                            {...linkProps}
                          >
                             <NavigateNextIcon    sx={{
                                color: "text.secondary",
                  
                                fontSize: 20,
                      
                              }}/>
                            <Box
                              component="span"
                              sx={{
                                color: "text.secondary",
                                display: "block",
                                fontFamily: (theme) =>
                                  theme.typography.fontFamily,
                                fontSize: 14,
                                fontWeight: 500,
                                lineHeight: "24px",
                                whiteSpace: "nowrap",
                                  px: 1
                              }}
                            >
                              {child.title}
                            </Box>
                          </ButtonBase>
                        </li>
                      );
                    })}
                  </Stack>
                )}
              </li>
            );
          })}
        </Stack>
      );
    })}
  </Box>
);
