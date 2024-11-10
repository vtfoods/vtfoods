import React from "react";
import { Box, Container} from "@mui/material";
import SideBySideSection from "src/components/sideBySideSection";

const webData = {
  title: "Why Choose Web Apps & Website Development?",
  desc: [
    "Our Web Development Services cover a wide range of technologies, from front-end prototyping to high-performing back-end services. Our team of full stack developers is well-versed in managing both the front-end and back-end while working with various technologies, including React JS, Angular JS, Backbone JS, Ember JS, and Polymer JS, as well as databases like MySQL, NO SQL, Mongo DB, Postgre SQL, and Microsoft SQL Server, and server-side technologies like PHP, MEAN Stack, Node.js, Angular.JS, Ruby on Rails, ReactJS, Laravel, Vue.js, jQuery, and others.We take pride in delivering SEO-friendly, intelligent, and growth-oriented full-stack work that will make your business more efficient, productive, and ultimately more profitable.Our full-stack development services are tailored to meet your specific business needs and requirements, so you can be sure that the solution we deliver will be perfectly aligned with your goals."
  ],
  img: "./assets/2844251-ai.png",
};

const SubSection = () => {
  return (
    <Box padding={{ lg: "50px 0 0 0", xs: "50px 0 0 0", md: "50px 0 0 0" }}>
      <Container maxWidth="xl">
        <Box>
          <SideBySideSection data={webData} desc isFlip/>
        </Box>
      </Container>
    </Box>
  );
};

export default SubSection;
