import React from 'react'
import { useEffect, useState } from "react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import { swiperOptions, textAnimation } from 'src/mock/hero';
gsap.registerPlugin(useGSAP);


const HeroSection = () => {
    const containerRef = useRef(null);
    const tl = useRef();
  
    useGSAP(
      () => {
        const elementHeight = document.querySelector(".item").clientHeight;
        const arrayItems = gsap.utils.toArray(".item");
  
        const vsOpts = {
          slides: arrayItems,
          list: containerRef.current,
          duration: 1,
          lineHeight: elementHeight,
        };
        console.log(vsOpts);
  
        tl.current = gsap.timeline({
          repeat: -1,
        });
  
        const progress = tl.current ? tl.current.progress() : 0;
  
        vsOpts.slides.forEach((slide, i) => {
          gsap.set(slide, { y: i * -2 * vsOpts.lineHeight });
          let label = "slide" + i;
          tl.current.add(label);
  
          tl.current.to(
            vsOpts.list,
            {
              duration: vsOpts.duration,
              y: i * 1 * vsOpts.lineHeight,
            },
            label
          );
        });
  
        tl.current.progress(progress);
      },
      { scope: containerRef }
    );
  return (
 
    <Box>
    <Box
      padding={{
        lg: "150px 0",
        xs: "50px 0",
        md: "100px 0",
      }}
      sx={{
        backgroundImage:
          "linear-gradient(to bottom, rgb(255 255 255 / 27%), rgb(227 219 255)), url(/assets/bg-a.png);",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Container maxWidth="md">
        <Grid container>
          <Grid
            xs={12}
            sm={12}
            md={12}
            lg={12}
            paddingY={{ lg: "0", xs: "30px", display: "inline" }}
            item
          >
            <Box>
              <Typography
                color="inherit"
                variant="h1"
                sx={{
                  padding: "10px 0",
                  fontWeight: "900",
                  textAlign: "center",
                  lineHeight: 1.5,
                }}
              >
                Manufacturer & Exporter of
                <Box
                  className="App"
                  sx={{
                    pt: 1.5,
                  }}
                >
                  <div className="container">
                    <div className="wrapper" ref={containerRef} >
                      {textAnimation.map((item, idx) => (
                        <span className="item" key={idx} style={{height: '80px'}}>{item.text}</span>
                      ))}
                    </div>
                  </div>
                </Box>
              </Typography>
            </Box>

            <Typography
              color="inherit"
              sx={{ my: 0, textAlign: "center", fontSize: "22px" }}
            >
              We are a leading manufacturer and exporter of a wide range of Dehydrated Onion, Garlic, and Spices. Our products are sourced from the best farms and processed in our state-of-the-art facilities to ensure the highest quality and freshness.
            </Typography>
            <Stack
              alignItems="center"
              direction="row"
              spacing={2}
              sx={{ flexGrow: 1, pt: 2 }}
              justifyContent="center"
            > 
              <Link href="/products">
                <Button
                  variant="contained"
                  sx={{
                    "&:hover": {
                      color: "#fff",
                      backgroundColor: "primary.main",
                    },
                    fontSize: "18px",
                    mt: 5,
                  }}
                  
                >
                  Products
                </Button>
              </Link>
            </Stack>
          </Grid>
        </Grid>
      </Container>
      <Container>
        <Box
          sx={{
            pt: 10,
          }}
        >
          <Swiper
         
            loop={true}
          
            effect={"fade"}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            breakpoints={
              {
                  480: {
                      slidesPerView: 2,
                      spaceBetween: 2
                    },
                      640: {
                          slidesPerView: 3,
                          spaceBetween: 2
                      },
                    
                      1200: {
                          slidesPerView: 4,
                          spaceBetween: 20
                      }
                      

              }
          }
          >
            {swiperOptions.map((item, idx) => (
              <SwiperSlide
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                key={idx}
              >
                <img
                  src={item.image}
                  alt="logo"
               
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Container>
    </Box>
  </Box>

  )
}

export default HeroSection