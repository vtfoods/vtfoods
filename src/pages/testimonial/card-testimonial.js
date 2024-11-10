import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Grid,
  Pagination as Pagenext,
  Rating,
  Typography
} from "@mui/material";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { skills } from "src/mock/skills";

const CardTestimonial = ({ allReviews, isHome, isSubpage }) => {
  const PAGE_SIZE = 6;
  const totalPages = Math.ceil(allReviews?.length / PAGE_SIZE);
  const [page, setPage] = useState(1);
  const [filteredUsers, setFilteredUsers] = useState(
    allReviews?.slice(0, PAGE_SIZE)
  );
  useEffect(() => {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE;
    setFilteredUsers(allReviews?.slice(from, to));
  }, [page, allReviews]);

  const dataToRender = isHome ? filteredUsers.slice(0, 2) : filteredUsers;

  return (
    <>
      {isSubpage ? (
        <Swiper
          loop={true}
          effect={"fade"}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false
          }}
          modules={[Autoplay, Pagination, Navigation]}
          breakpoints={{
            1200: {
              slidesPerView: 2,
              spaceBetween: 20
            }
          }}
        >
          {dataToRender.map((review, index) => (
            <SwiperSlide
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%"
              }}
              key={index}
            >
              <Card
                sx={{
                  height: "100%",
                  p: 1,
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "8px",
                  backgroundColor: "#faf8ff"
                }}
              >
                <CardContent
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between"
                  }}
                >
                  <div>
                    <img
                      src="/assets/quote.png"
                      alt="quote"
                      style={{ width: "50px !important", height: "50px" }}
                    />

                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between"
                      }}
                    >
                      <Typography
                        sx={{
                          marginTop: "2rem",
                          marginBottom: "2rem",
                          fontSize: { xs: "0.9rem", sm: "1.1rem" },
                          fontWeight: 600
                        }}
                      >
                        -{review?.clientName}
                      </Typography>
                      <Rating
                        name="read-only"
                        value={review?.rating}
                        readOnly
                        sx={{
                          fontSize: "2rem"
                        }}
                      />
                    </Box>

                    <Typography
                      sx={{
                        fontSize: { xs: "0.9rem", sm: "1rem" },
                        textAlign: "left",
                        fontWeight: 400
                      }}
                    >
                      {review?.review}
                    </Typography>
                  </div>

                  <Box
                    sx={{
                      pt: 2
                    }}
                  >
                    <Image
                      src={review?.clientImage}
                      width={140}
                      height={140}
                      alt="upwork"
                      style={{
                        objectFit: "contain"
                      }}
                    />
                  </Box>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <Grid container spacing={3}>
          {dataToRender.map((review, index) => (
            <Grid key={index} item xs={12} md={6}>
              <Card
                sx={{
                  height: "100%",
                  p: 1,
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "8px",
                  backgroundColor: isHome ? "#faf8ff" : "#fff"
                }}
              >
                <CardContent
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between"
                  }}
                >
                  <div>
                    <img
                      src="/assets/quote.png"
                      alt="quote"
                      style={{ width: "50px !important", height: "50px" }}
                    />

                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between"
                      }}
                    >
                      <Typography
                        sx={{
                          marginTop: "2rem",
                          marginBottom: "2rem",
                          fontSize: { xs: "0.9rem", sm: "1.1rem" },
                          fontWeight: 600
                        }}
                      >
                        -{review?.clientName}
                      </Typography>
                      <Rating
                        name="read-only"
                        value={review?.rating}
                        readOnly
                        sx={{
                          fontSize: "2rem"
                        }}
                      />
                    </Box>

                    <Typography
                      sx={{
                        fontSize: { xs: "0.9rem", sm: "1rem" },
                        textAlign: "left",
                        fontWeight: 400
                      }}
                    >
                      {review?.review}
                    </Typography>
                  </div>

                  <Box
                    sx={{
                      pt: 2
                    }}
                  >
                    <Image
                      src={review?.clientImage}
                      width={140}
                      height={140}
                      alt="upwork"
                      style={{
                        objectFit: "contain"
                      }}
                    />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

      {!isHome && !isSubpage && (
        <Box>
          {totalPages > 1 && (
            <Grid
              container
              justifyContent="center"
              xs={12}
              sx={{
                marginTop: "2rem"
              }}
            >
              <Pagenext
                count={totalPages}
                onChange={(_, val) => setPage(val)}
                variant="outlined"
                shape="rounded"
                color="primary"
              />
            </Grid>
          )}
        </Box>
      )}
    </>
  );
};

export default CardTestimonial;
