import { Box, Button, Container, Grid, Typography, Card } from "@mui/material";
import TitleSection from "../../sections/home/title-section";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import { iconData, QualifiedHireWorkData } from "src/mock/offShore";

const QualifiedHireWork = () => {
  return (
    <>
      <Box
        padding={{ lg: "50px 0", xs: "50px 0", md: "100px 0" }}
        component="main"
      >
        <Container maxWidth="xl">
          <TitleSection
            title="Hire Qualified Developers For Your Project"
            desc="Collaborate with our experienced developers for your next project for better quality and efficiency."
          />
          <Box>
            <Grid
              container
              spacing={6}
              sx={{
                justifyContent: "center",
                py: 6,
              }}
            >

              {QualifiedHireWorkData.map((item, index) => (
              <Grid item key={index} xs={12} sm={6} md={4} lg={4}>
                  <Box
                    sx={{
                      p: 4,
                      borderRadius: "14px",
                      backgroundImage:
                        "linear-gradient(to bottom, rgb(255 255 255 / 27%), rgb(227 219 255)), url(/assets/203.png);",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "bottom",
                      boxShadow: "0px 0px 10px 0px #0000001a",
                    }}
                  >
                    <Typography
                      variant="h6"
                      align="center"
                      className="title"
                      sx={{
                        letterSpacing: 3,
                        fontWeight: "800",
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="h3"
                      align="center"
                      className="title"
                      sx={{
                        color: "primary.main",
                        py: 2,
                        pt: 2,
                      }}
                    >
                      {item.price}
                    </Typography>
                    {item.features.map((feature) => (
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 2,
                          py: 2,
                        }}
                        key={feature.title}
                      >
                        <DoneAllIcon sx={{ color: "primary.main" }} />
                        <Typography
                          variant="body1"
                          sx={{
                            fontWeight: "600",
                          }}
                        >
                          {feature.title}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Grid>
              ))}
            </Grid>

            <Box
              sx={{
                gap: 4,

                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                " @media (max-width: 600px)": {
                  flexDirection: "column",
                },
              }}
            >
              {iconData.map((item, idx) => (
                <Box
                  key={idx}
                  sx={{
                    " @media (max-width: 600px)": {
                      width: "100%",
                    },
                  }}
                >
                  <Card
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 2,
                      padding: "10px 30px",
                      border: "1px solid #584a91",
                      borderRadius: "8px",
                    }}
                  >
                    {item.icon}
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: "600",
                      }}
                    >
                      {item.title}
                    </Typography>
                  </Card>
                </Box>
              ))}
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mt: 6,
              }}
            >
              <Button
                variant="contained"
                sx={{
                  "&:hover": {
                    color: "#fff",
                    backgroundColor: "primary.main",
                  },
                  fontSize: "16px",
                }}
              >
                Schedule Now
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default QualifiedHireWork;
