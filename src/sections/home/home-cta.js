import { Box, Container, Grid, Typography } from "@mui/material";
import ResponsiveNumber from "src/components/responsive-number";
import { homeCounterData } from "src/mock/homeCounter";

export const HomeCta = ({ isAbout, isSubPage }) => (
  <Box
    sx={{
      backgroundImage: isAbout
        ? ""
        : isSubPage
        ? "linear-gradient(to bottom, rgb(255 255 255 / 27%), rgb(227 219 255)), url(/assets/4940019.png)"
        : "linear-gradient(to bottom, rgb(255 255 255 / 27%), rgb(227 219 255)), url(/assets/bg-a.png);",
      backgroundSize: "cover",
      backgroundPosition: "top", 
      backgroundRepeat: "no-repeat",
      py: "60px",
      overflow: "hidden",
    }}
  >
    <Container>
      <Grid
        container
        spacing={2}
        sx={{
          "@media (max-width: 900px)": {
            borderLeft: "unset",
          },
          borderLeft: isAbout && "1px solid #e0e0e0",
        }}
      >
        {homeCounterData.map((item, index) => (
          <Grid
            item
            lg={isAbout ? 12 : 3}
            md={6}
            sm={6}
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
            key={index}
          >
            <Box
              sx={{
                margin: "0 auto",
                display: "flex",
                alignContent: "center",
                justifyContent: "center",
              }}
            >
              {!isAbout && (
                <img
                  alt=""
                  src={item.img}
                  style={{
                    maxHeight: "75%",
                    maxWidth: "100%",
                    display: "flex",
                    alignContent: "center",
                    justifyContent: "center",
                    margin: "auto",
                  }}
                />
              )}
            </Box>
            <Box
              sx={{
                pb: isAbout && 3,
              }}
            >
              <Typography
                gutterBottom
                variant="h3"
                component="div"
                textAlign={"center"}
                fontWeight={400}
              >
                <ResponsiveNumber
                  initialDelay={item.initialDelay}
                  initialValue={item.initialValue}
                  increment={item.increment}
                  value={item.value}
                  interval={item.interval}
                />
                +
              </Typography>
              <Typography
                variant="h6"
                textAlign={"center"}
                sx={{
                  color: isAbout ? "primary.main" : "black",
                }}
              >
                {item.title}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);
