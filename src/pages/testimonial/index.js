import React from "react";
import {
  Box,
   Container,
} from "@mui/material";
import { layout } from "src/utils/constant";
import CardTestimonial from "./card-testimonial";
import SideBySideSection from "src/components/sideBySideSection";
import { review } from "src/mock/review";

const webAppData = {
  title: "Hear from our customers",
  subtitle:
    "Become a part of the Emerging Startup HVG Infotech Private Limited!",
  img: "/assets/9812.png",
};

const Testimonial = () => {
  const allReviews = review;
  return (
    <>
      <Box component="main" sx={{ overflowX: "hidden" }}>
        <Box
          sx={{
            backgroundColor:'#faf8ff'
          }}
          padding={{ lg: "50 0", xs: "50px 0", md: "50 0" }}
        >
          <Container maxWidth="xl">
            <SideBySideSection desc data={webAppData} isBtn />
            <Box sx={{ mt: 5 }}>
              <CardTestimonial allReviews={allReviews} />
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
};
layout(Testimonial);
export default Testimonial;
