import { Box, Button, Container } from "@mui/material";
import React from "react";
import TitleSection from "./title-section";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { mobileskills, skills } from "src/mock/skills";
import Link from "next/link";

const TechologySection = ({ isSubpage, isMobile }) => {
  return (
    <Box
      padding={{ lg: "50px 0", xs: "50px 0", md: "50px 0" }}
      sx={{
        background: "#faf8ff",
      }}
      margin={isSubpage ? "50px 0 " : "0"}
    >
      <Container maxWidth="xl">
        <TitleSection
          title="Technologies We Work With"
          desc="Unlocking Possibilities with Our Technical Expertise"
        />
        <Box
          sx={{
            padding: "50px 0 0 0",
          }}
        >
          {isMobile ? (
            <Swiper
              loop={true}
              effect={"fade"}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, Pagination, Navigation]}
              breakpoints={{
                480: {
                  slidesPerView: 3,
                  spaceBetween: 2,
                },
                640: {
                  slidesPerView: 3,
                  spaceBetween: 2,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 2,
                },
                1024: {
                  slidesPerView: 6,
                  spaceBetween: 2,
                },
                1200: {
                  slidesPerView: 8,
                  spaceBetween: 2,
                },
              }}
            >
              {Object.keys(mobileskills).map((category) => (
                <div key={category}>
                  <h2>{category}</h2>
                  {mobileskills[category].map((item) => (
                    <SwiperSlide
                      key={item.title}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Box
                        sx={{
                          background: "#fff",
                          height: "100px",
                          width: "100px",
                          borderRadius: "10px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          padding: "20px",
                          "&:hover": {
                            backgroundColor: "#e4dbff",
                            boxShadow: "0 0 10px 0 rgba(0,0,0,0.1)",
                          },
                        }}
                      >
                        <img
                          src={`/assets/${item.icon}`}
                          alt={item.title}
                          style={{
                            width: "50px",
                            height: "50px",
                            objectFit: "contain",
                          }}
                        />
                      </Box>
                    </SwiperSlide>
                  ))}
                </div>
              ))}
            </Swiper>
          ) : (
            <Swiper
              loop={true}
              effect={"fade"}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, Pagination, Navigation]}
              breakpoints={{
                480: {
                  slidesPerView: 3,
                  spaceBetween: 2,
                },
                640: {
                  slidesPerView: 3,
                  spaceBetween: 2,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 2,
                },
                1024: {
                  slidesPerView: 6,
                  spaceBetween: 2,
                },
                1200: {
                  slidesPerView: 8,
                  spaceBetween: 2,
                },
              }}
            >
              {Object.keys(skills).map((category) => (
                <div key={category}>
                  <h2>{category}</h2>
                  {skills[category].map((item) => (
                    <SwiperSlide
                      key={item.title}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Box
                        sx={{
                          background: "#fff",
                          height: "100px",
                          width: "100px",
                          borderRadius: "10px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          padding: "20px",
                          "&:hover": {
                            backgroundColor: "#e4dbff",
                            boxShadow: "0 0 10px 0 rgba(0,0,0,0.1)",
                          },
                        }}
                      >
                        <img
                          src={`/assets/${item.icon}`}
                          alt={item.title}
                          style={{
                            width: "50px",
                            height: "50px",
                            objectFit: "contain",
                          }}
                        />
                      </Box>
                    </SwiperSlide>
                  ))}
                </div>
              ))}
            </Swiper>
          )}

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Link href="/technologies">
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
      </Container>
    </Box>
  );
};

export default TechologySection;
