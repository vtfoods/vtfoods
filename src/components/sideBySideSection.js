import { Box, Button, Grid, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import TitleSection from "src/sections/home/title-section";

const SideBySideSection = ({ data, isFlip, desc,isBtn}) => {
  return (
    <Box>
      <Grid
        container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: isFlip && "row-reverse",
        }}
      >
        <Grid
          xs={12}
          sm={12}
          md={6}
          lg={6}
          padding={{ lg: " 0", xs: "20px 0" }}
        >
          <Box>
            <TitleSection title={data.title} isChildPage desc={data.subtitle} />
          </Box>
          <Box>
            {desc &&
              data?.desc?.map((text, index) => (
                <Typography key={index} color="inherit" sx={{mt:1}}>
                  {text}
                </Typography>
              ))}
          </Box>
          <Box>
            {
              isBtn && 
              <Link href="/contact-us">
              <Button
                variant="contained"
                sx={{
                  "&:hover": {
                    color: "#fff",
                    backgroundColor: "primary.main",
                  },
                  mt: 5,
                }}
              >
                 Contact Now
              </Button>
            </Link>
            }


        
          </Box>
        </Grid>
        <Grid xs={12} sm={12} md={6} lg={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              padding: "0 50px",
            }}
          >
            <img
              src={data.img}
              alt="Emerging Leader in Web App Development"
              style={{
                height: "100%",
                width: "100%",
                borderRadius: "10px",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SideBySideSection;
