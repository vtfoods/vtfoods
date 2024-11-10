import {
  Box,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Seo } from "src/components/seo";
import { usePageView } from "src/hooks/use-page-view";
import { layout } from "src/utils/constant";
import { description } from "src/meta-description";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";
import { hvgLife } from "src/mock/hvgLife";
import SideBySideSection from "src/components/sideBySideSection";
const webAppData = {
  title: "Life @ HVG Private Limited",
  img: "/assets/hvg-life-image.png",
  desc: [
    "Get a glimpse into our vibrant culture, where innovation meets collaboration. At VT Foods Private Limited, we're passionate about building a workplace that' inclusive, dynamic, and fun. Explore our team' stories, values, and perks that make us a great place to work.",
    "We believe in the power of teamwork and understand that the collective strength of our members drives our success. Our website showcases the talent, skills, and passion that each team member brings to the table. We foster a collaborative and inclusive environment where ideas are shared, perspectives are valued, and excellence is encouraged. Our team members work closely together, leveraging their unique strengths and knowledge to deliver outstanding outcomes for our clients.",
  ],
};

const Page = () => {
  usePageView();
  const theme = useTheme();
  const downMd = useMediaQuery((theme) => theme.breakpoints.down("md"));
  return (
    <>
      <Seo title="Hvg Life" description={description.hvgLifePage} />

      <Box component="main" sx={{ overflowX: "hidden" }}>
        <Box padding={{ lg: "50 0", xs: "50px 0", md: "50 0" }}>
          <Container maxWidth="xl">
            <SideBySideSection  desc data={webAppData} />
           
          </Container>
        </Box>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
          backgroundColor:'#faf8ff'
        }}
      >
        <Container maxWidth="xl">
          <Box>
            <Timeline position={downMd ? "right" : "alternate"}>
              {hvgLife.map((event, index) => (
                <TimelineItem
                  key={index}
                  sx={{
                    display: "flex",
                    flexDirection: downMd ? "column" : "row",
                  }}
                >
                  <TimelineOppositeContent color="text.secondary">
                    <Box sx={{ padding: "20px" }}>
                      <img
                        src={event.image}
                        style={{ width: "100%", height: "100%" }}
                      />
                    </Box>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot
                      variant="outlined"
                      color={event.color}
                      sx={{
                        height: "20px",
                        width: "20px",
                      }}
                    />
                    <TimelineConnector
                      sx={{
                        background: "black",
                      }}
                    />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Box sx={{ padding: "20px" }}>
                      <Typography
                        sx={{
                          fontSize: "30px",
                          fontWeight: "bold",
                        }}
                      >
                        {event.month}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "45px",
                          fontWeight: "bold",
                          color: event.color + ".main",
                          my: 1,
                        }}
                      >
                        {event.title}
                      </Typography>
                      <Typography>{event.description}</Typography>
                    </Box>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          </Box>
          {/* <Box>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={12} lg={12} sx={{
                display: "flex",
                flexDirection: "column",
                gap: "80px",
              }}>
                <Box>
                  <Grid
                    container
                    spacing={2}
                    sx={{
                      display: "flex",
                      alignItems: "end",
                    }}
                  >
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                      <Box
                        sx={{
                          boxShadow: "5px 4px 20px #665e968a",
                        }}
                      >
                        <img
                          src="/assets/hvgLife/aa.png"
                          style={{
                            width: "100%",
                            height: "100%",
                          }}
                        />
                      </Box>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sm={12}
                      md={6}
                      lg={6}
                      sx={{
                        paddingLeft: "0px !important",
                      }}
                    >
                      <Box
                        sx={{
                          bgcolor: "white",
                          padding: "50px 50px",

                          boxShadow: "17px 18px 20px 0px #9a9a9a8a",
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: "30px",
                            fontWeight: "bold",
                            mb: 3,
                            textAlign: "left",
                          }}
                        >
                          Festival Celebrations
                        </Typography>
                        <Typography sx={{
                            textAlign: "left",
                        }}>
                          We have individuals from a variety of cultural
                          backgrounds here at Tagline Infotech, and every
                          holiday on the Indian calendar is celebrated with
                          enthusiasm and commitment. This promotes workplace
                          satisfaction and aids in a greater understanding of
                          various cultures.
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
                <Box>
                  <Grid
                    container
                    spacing={2}
                    sx={{
                      display: "flex",
                      alignItems: "end",
                    }}
                  >
                    <Grid
                      item
                      xs={12}
                      sm={12}
                      md={6}
                      lg={6}
                    
                    >
                      <Box
                        sx={{
                          bgcolor: "white",
                          padding: "50px 50px",

                          boxShadow: "-17px 18px 20px 0px #9a9a9a8a",
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: "30px",
                            fontWeight: "bold",
                            mb: 3,
                            textAlign: "right",
                          }}
                        >
                          Festival Celebrations
                        </Typography>
                        <Typography sx={{
                            textAlign: "right",
                        }}>
                          We have individuals from a variety of cultural
                          backgrounds here at Tagline Infotech, and every
                          holiday on the Indian calendar is celebrated with
                          enthusiasm and commitment. This promotes workplace
                          satisfaction and aids in a greater understanding of
                          various cultures.
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}  sx={{
                        paddingLeft: "0px !important",
                      }}>
                      <Box
                        sx={{
                          boxShadow: "5px 4px 20px #665e968a",
                        }}
                      >
                        <img
                          src="/assets/hvgLife/aa.png"
                          style={{
                            width: "100%",
                            height: "100%",
                          }}
                        />
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Box> */}
          {/* <Box>
            <Grid container spacing={2}>
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "80px",
                  marginTop: "60px",
                }}
              >
               
                <Box
                  sx={{
                    position: "relative",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "end",
                      "::before": {
                        content: "''",
                        position: "absolute",
                        top: " -87px",
                        left: "-257px",
                        right: "0",
                        width: "500px",
                        height: "500px",
                        background: "#dcddff",
                        zIndex: 32,
                        borderRadius: "8px",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        zIndex: 35,
                        borderRadius: "8px",
                      }}
                    >
                      <Box
                        sx={{
                          bgcolor: "white",
                          boxShadow: "-17px 18px 20px 0px #9a9a9a8a",
                          height: "100%",
                          width: "600px",
                          borderRadius: "8px",
                        }}
                      >
                        <Box>
                          <img
                            src="/assets/hvgLife/aa.png"
                            style={{
                              width: "100%",
                              height: "100%",
                              borderTopLeftRadius: "8px",
                              borderTopRightRadius: "8px",
                            }}
                          />
                        </Box>
                        <Box
                          sx={{
                            padding: "20px",
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: "30px",
                              fontWeight: "bold",
                              my: 3,
                              textAlign:"center"
                            }}
                          >
                            Festival Celebrations
                          </Typography>
                          <Typography sx={{  textAlign:"center"}}>
                            We have individuals from a variety of cultural
                            backgrounds here at Tagline Infotech, and every
                            holiday on the Indian calendar is celebrated with
                            enthusiasm and commitment. This promotes workplace
                            satisfaction and aids in a greater understanding of
                            various cultures.
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
           
                <Box
                  sx={{
                    position: "relative",
                    display: 'flex',
                    justifyContent: 'flex-end'
                   
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "end",
                      "::before": {
                        content: "''",
                        position: "absolute",
                        top: " -87px",
                        left: "82.5%",
                        right: "0",
                        width: "500px",
                        height: "500px",
                        background: "#dcddff",
                        zIndex: 32,
                        borderRadius: "8px",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        zIndex: 35,
                        borderRadius: "8px",
                      }}
                    >
                      <Box
                        sx={{
                          bgcolor: "white",
                          boxShadow: "-17px 18px 20px 0px #9a9a9a8a",
                          height: "100%",
                          width: "600px",
                          borderRadius: "8px",
                        }}
                      >
                        <Box>
                          <img
                            src="/assets/hvgLife/aa.png"
                            style={{
                              width: "100%",
                              height: "100%",
                              borderTopLeftRadius: "8px",
                              borderTopRightRadius: "8px",
                            }}
                          />
                        </Box>
                        <Box
                          sx={{
                            padding: "20px",
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: "30px",
                              fontWeight: "bold",
                              my: 3,
                              textAlign:"center"
                            }}
                          >
                            Festival Celebrations
                          </Typography>
                          <Typography sx={{    textAlign:"center"}}>
                            We have individuals from a variety of cultural
                            backgrounds here at Tagline Infotech, and every
                            holiday on the Indian calendar is celebrated with
                            enthusiasm and commitment. This promotes workplace
                            satisfaction and aids in a greater understanding of
                            various cultures.
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box> */}
        </Container>
      </Box>
    </>
  );
};

layout(Page);

export default Page;
