import React from "react";
import Image from "next/image";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  Link
} from "@mui/material";
import TitleSection from "../../sections/home/title-section";
import { hireDevelopers } from "src/mock/offShore";


const HireDeveloper = ({ type }) => {
  const developers = type === 'web' ? hireDevelopers.webDeveloper : hireDevelopers.appDeveloper;


  return (
    <>
      <Box
        padding={{ lg: "50px 0 50px 0", xs: "50px 0", md: "50px 0" }}
        sx={{
          background: "#faf8ff"
        }}
      >
        <Container maxWidth="xl">
          <TitleSection
            title={`Hire ${type.charAt(0).toUpperCase() + type.slice(1)} Developers`}
            desc="We provide best in class Services"
          />
          <Box sx={{ paddingTop: "60px" }}>
            <Grid container sx={{ justifyContent: "center" }} gap={4}>
              {developers.map((dev, index) => (
                <Grid
                  item
                  key={index}
                  xs={12}
                  sm={6}
                  lg={3}
                  md={4}
                  p={3}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 4,
                    bgcolor: "background.paper",
                    borderRadius:"12px",
                    "&:hover": {
                      transition: "all 1s",
                      boxShadow: 4,
                      cursor: "pointer",
                      "& .title": {
                        color: "primary.main"
                      }
                    }
                  }}
                >
                  <Box
                    sx={{
                      borderRadius: 1,
                      overflow: "hidden",
                      minHeight: 120,
                      display: "flex",
                      alignItems: "center"
                    }}
                  >
                    <Image
                      src={dev.icon}
                      alt={dev.alt}
                      width={100}
                      height={100}
                    />
                  </Box>
                  <Typography variant="h6" align="center" className="title">
                    {dev.title} 
                  </Typography>
                </Grid>
              ))}
            </Grid>
            <Box sx={{
                display:"flex",
                justifyContent: "center"
            }}>
             <Link
                href="/hireForm"
                target="blank"
              >
              <Button
                variant="contained"
                sx={{
                  "&:hover": {
                    color: "#fff",
                    backgroundColor: "primary.main"
                  },
                  fontSize: "18px",
                  mt: 5
                }}
              >
                Hire Now
              </Button>
              </Link>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};
export default HireDeveloper;

