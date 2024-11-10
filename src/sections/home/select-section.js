import React from "react";
import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import Link from "next/link";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { selectData } from "src/mock/select";

const SelectSection = () => {
  return (
    <Container maxWidth="xl">
      <Box padding={{ lg: "0", xs: "50px 0", md: "50px 0" }}>
        <Grid
          container
          sx={{
            display: "flex",
            alignItems: "center",
          }}
          direction={{ lg: "row", xs: "column-reverse", md: "row" }}
        >
          <Grid xs={12} sm={12} md={6} lg={6} item>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                padding: "0 20px",
              }}
            >
              <img
                alt=""
                src="/assets/Questions-pana.png"
                style={{
                  height: "100%",
                  width: "100%",
                  // boxShadow: "rgb(237 233 255) -9px 9px 9px 0px",
                  borderRadius: "10px",
                }}
              />
            </Box>
          </Grid>
          <Grid xs={12} sm={12} md={6} lg={6} item>
            <Box
              sx={{
                padding: "0 20px",
              }}
            >
              {/* <Typography
                sx={{
                  color: "black",
                  fontSize: "14px",
                }}
              >
                HVG Infotech Private Limited
              </Typography> */}
              <Typography
                color="inherit"
                variant="h4"
                sx={{
                  padding: "10px 0",
                  fontWeight: "900",
                  color: "primary.main",
                }}
              >
                Why choose HVG Infotech Private Limited ?
              </Typography>
              <Typography
                sx={{
                  padding: "18px 0",
                }}
              >
                We strive to create a positive impact on all stakeholders
                involved and empower our clients to reach new heights by
                transforming their products into their best and most advanced
                versions.
              </Typography>
              <Typography>
                <List>
                  {selectData.map((data, idx) => (
                    <ListItem disablePadding key={idx}>
                      <ListItemIcon>
                        <CheckIcon />
                      </ListItemIcon>
                      <ListItemText key={data.id}>{data.label}</ListItemText>
                    </ListItem>
                  ))}
                </List>
              </Typography>
              <Stack
                alignItems="center"
                direction="row"
                sx={{ padding: "10px 0" }}
              >
                <Link href="/contact-us">
                  <Button
                    variant="contained"
                    sx={{
                      "&:hover": {
                        color: "#fff",
                        backgroundColor: "primary.main",
                      },
                      mt: 2,
                    }}
                  >
                    Contact Now
                  </Button>
                </Link>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default SelectSection;
