import { Box, ButtonBase, Stack, SvgIcon } from "@mui/material";
import { RouterLink } from "src/components/router-link";
import CreditCard01Icon from "src/icons/untitled-ui/duocolor/credit-card-01";
import HomeSmileIcon from "src/icons/untitled-ui/duocolor/home-smile";
import LayoutAlt02Icon from "src/icons/untitled-ui/duocolor/layout-alt-02";
import LogOut01Icon from "src/icons/untitled-ui/duocolor/log-out-01";
import Mail04Icon from "src/icons/untitled-ui/duocolor/mail-04";
import XSquareIcon from "src/icons/untitled-ui/duocolor/x-square";
import { paths } from "src/paths";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
const sections = [
  {
    items: [
      {
        children: [
          {
            title: "Saas Application Development",
            path: paths.saasAplication,
          },
          {
            title: "Mobile App Development",
            path: paths.mobileApp,
          },
          {
            title: "Full Statck Development",
            path: paths.fullStack,
          },
          {
            title: "Serverless Development",
            path: paths.serverLess,
          },
          {
            title: "Web Apps & Website Development",
            path: paths.webApp,
          },
          // {
          //   title: 'Api Development',
          //   path: paths.apiDevelopment
          // },
          {
            title: "Devops Services",
            path: paths.devlopServices,
          },
          {
            title: "UI/UX Development",
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

export const PagesPopoverWe = () => (
  <Box
    sx={{
      p: 2,
    }}
  >
    {sections.map((section, index) => {
      return (
        <Stack
          component="ul"
          key={index}
          sx={{
            listStyle: "none",
            m: 0,
            padding: "0px",
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
                      listStyle: 'none',
                      m: 0,
                      p: 0,

                    }}
                  >
                    {item.children.map((child) => {
                      const linkProps = child.path
                        ? child.external
                          ? {
                            component: 'a',
                            href: child.path,
                            target: '_blank'
                          }
                          : {
                            component: RouterLink,
                            href: child.path
                          }
                        : {};

                      return (
                        <li key={child.title}>
                          <ButtonBase
                            sx={{
                              alignItems: 'center',
                              borderRadius: 1,
                              display: 'flex',
                              justifyContent: 'flex-start',
                            
                              py: '6px',
                              textAlign: 'left',
                              width: '100%',
                              '&:hover': {
                                backgroundColor: 'action.hover'
                              }
                            }}
                            {...linkProps}>
                            <Box
                              component="span"
                              sx={{
                                color: 'text.secondary',
                                display: 'block',
                                fontFamily: (theme) => theme.typography.fontFamily,
                                fontSize: 14,
                                fontWeight: 500,
                                lineHeight: '24px',
                                whiteSpace: 'nowrap'
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


