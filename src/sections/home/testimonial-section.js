import { Box, Button, Container } from "@mui/material";
import React from "react";
import CardTestimonial from "src/pages/testimonial/card-testimonial";
import TitleSection from "./title-section";
import Link from "next/link";
import { review } from "src/mock/review";

const TestimonialSection = ({ isHome, isSubpage }) => {
  const allReviews = review;

  return (
    <Container maxWidth="xl">
      <Box 
      sx={{
         padding : isSubpage ? "50px  0" : " 0 0 50px 0"
      }}
      >
        <TitleSection
          title=" Testimonials"
          desc=" Our Customers Love Us. Here’s Why"
        />
        <Box
          sx={{
            padding: "50px 0 0 0",
          }}
        >
          <CardTestimonial
            allReviews={allReviews}
            isHome={isHome}
            isSubpage={isSubpage}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Link href="/testimonial">
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
                View All
              </Button>
            </Link>
          
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default TestimonialSection;
