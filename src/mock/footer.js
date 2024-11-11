import { SvgIcon } from "@mui/material";
import { paths } from "src/paths";
import HomeIcon from "@mui/icons-material/Home";
import DescriptionIcon from "@mui/icons-material/Description";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import PhoneIcon from "@mui/icons-material/Phone";
import ChatIcon from "@mui/icons-material/Chat";
import GroupsIcon from "@mui/icons-material/Groups";
import CloudDoneIcon from "@mui/icons-material/CloudDone";
import MobileFriendlyIcon from "@mui/icons-material/MobileFriendly";
import CodeIcon from "@mui/icons-material/Code";
import FunctionsIcon from "@mui/icons-material/Functions";
import WebIcon from "@mui/icons-material/Web";
import SettingsIcon from "@mui/icons-material/Settings";
import PaletteIcon from "@mui/icons-material/Palette";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";


export const sections = [
    {
      title: "Company",
      items: [
        {
          title: "Home",
          path: paths.index,
          icon: (
            <SvgIcon fontSize="medium">
              <HomeIcon />
            </SvgIcon>
          ),
        },
        {
          title: "About Us",
          path: paths.about,
          icon: (
            <SvgIcon fontSize="medium">
              <DescriptionIcon />
            </SvgIcon>
          ),
        },
        {
          title: "Products",
          path: paths.products,
          icon: (
            <SvgIcon fontSize="medium">
              <BusinessCenterIcon />
            </SvgIcon>
          ),
        },
        {
          title: "Contact Us",
          path: paths.contactUs,
          icon: (
            <SvgIcon fontSize="medium">
              <PhoneIcon />
            </SvgIcon>
          ),
        },
      
        {
          title: "Our Team",
          path: paths.ourTeam,
          icon: (
            <SvgIcon fontSize="medium">
              <GroupsIcon />
            </SvgIcon>
          ),
        },
      ],
    },
    // {
    //   title: "Services",
    //   items: [
    //     {
    //       title: "Web Apps & Website Development",
    //       path: paths.saasAplication,
    //       icon: (
    //         <SvgIcon fontSize="medium">
    //           <CloudDoneIcon />
    //         </SvgIcon>
    //       ),
    //     },
    //     {
    //       title: "Full Statck Development",
    //       path: paths.mobileApp,
    //       icon: (
    //         <SvgIcon fontSize="medium">
    //           <MobileFriendlyIcon />
    //         </SvgIcon>
    //       ),
    //     },
    //     {
    //       title: "Saas App Development",
    //       path: paths.fullStack,
    //       icon: (
    //         <SvgIcon fontSize="medium">
    //           <CodeIcon />
    //         </SvgIcon>
    //       ),
    //     },
    //     {
    //       title: "Mobile App Development",
    //       path: paths.serverLess,
    //       icon: (
    //         <SvgIcon fontSize="medium">
    //           <FunctionsIcon />
    //         </SvgIcon>
    //       ),
    //     },
    //     {
    //       title: "Serverless Development",
    //       path: paths.webApp,
    //       icon: (
    //         <SvgIcon fontSize="medium">
    //           <WebIcon />
    //         </SvgIcon>
    //       ),
    //     },
    //     {
    //       title: "Devops Services",
    //       path: paths.devlopServices,
    //       icon: (
    //         <SvgIcon fontSize="medium">
    //           <SettingsIcon />
    //         </SvgIcon>
    //       ),
    //     },
    //     {
    //       title: "UI/UX Development",
    //       path: paths.uiux,
    //       icon: (
    //         <SvgIcon fontSize="medium">
    //           <PaletteIcon />
    //         </SvgIcon>
    //       ),
    //     },
    //     {
    //       title: "OffShore Developers",
    //       path: paths.offShore,
    //       icon: (
    //         <SvgIcon fontSize="medium">
    //           <PaletteIcon />
    //         </SvgIcon>
    //       ),
    //     },
    //   ],
    // },
  ];
  
 export const socials = [
    {
      title: "Instagram",
      path: "https://www.instagram.com/hvginfotech/",
      icon: (
        <SvgIcon fontSize="small">
          <InstagramIcon />
        </SvgIcon>
      ),
      color: "#f5f6ff",
    },
    {
      title: "LinkedIn",
      path: "https://www.linkedin.com/company/89896259/admin/feed/posts//company/89896259/admin/feed/posts/",
      icon: (
        <SvgIcon fontSize="small">
          <LinkedInIcon />
        </SvgIcon>
      ),
      color: "#f5f6ff",
    },
    {
      title: "Facebook",
      path: "https://www.facebook.com/profile.php?id=61553302195553/profile.php?id=61553302195553",
      icon: (
        <SvgIcon fontSize="small">
          <FacebookIcon />
        </SvgIcon>
      ),
      color: "#f5f6ff",
    },
    {
      title: "Twitter",
      path: "https://twitter.com/HVGInfotech",
      icon: (
        <SvgIcon fontSize="small">
          <TwitterIcon />
        </SvgIcon>
      ),
      color: "#f5f6ff",
    },
  ];
  export const workWithUs = [
    {
      title: "FSSAI-logo",
      image: "/assets/certification/FSSAI-logo.png",
      height: "50px",
    },
    {
      title: "Spices-Board-logo",
      image: "/assets/certification/Spices-Board-logo.png",
      height: "40px",
    },
  
    {
      title: "APEDA-logo",
      image: "/assets/certification/APEDA-logo.png",
      height: "30px",
    },
  ];