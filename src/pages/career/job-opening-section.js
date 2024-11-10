import React, { useState, useCallback } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Stack,
  SvgIcon,
  Typography,
  Card,
  Avatar,
  Divider,
  CardContent,
  Modal,
  Fade,
  Backdrop,
  List,
  ListItem,
} from "@mui/material";
import TitleSection from "../../sections/home/title-section";
import { JobListSearch } from "src/sections/dashboard/jobs/job-list-search";
import Link from "next/link";
import XIcon from "@untitled-ui/icons-react/build/esm/X";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { Mockdata, qualificationsData } from "src/mock/career";

const JobOpening = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = useCallback(() => setOpen(true), []);
  const handleClose = useCallback(() => setOpen(false), []);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    width: "auto",
    height: "auto",
    overflow: "auto",
  };

  return (
    <Box padding={{ lg: "50px 0", xs: "50px 0", md: "50px 0" }}>
      <Container maxWidth="xl">
        <TitleSection
          title="Current Opening"
        />
        <Stack spacing={4} sx={{ mt: 4 }}>
          <JobListSearch />
          {Mockdata.map((jobPostData , index) => (
            <Card key={index}>
              <CardContent>
                <Stack
                  alignItems="flex-start"
                  spacing={2}
                  direction={{
                    xs: "column",
                    sm: "row",
                  }}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <Avatar src={jobPostData.image} variant="rounded" />
                  <div>
                    <Typography
                      color="primary.main"
                      variant="h6"
                      sx={{
                        color: "primary.main",
                      }}
                    >
                      {jobPostData.title}
                    </Typography>
                  </div>
                </Stack>
                <Box sx={{ mt: 2 }}>
                  <Card variant="outlined">
                    <Stack divider={<Divider />} spacing={2}>
                      <Stack
                        alignItems="center"
                        direction="row"
                        flexWrap="wrap"
                        justifyContent="space-between"
                        sx={{
                          px: 2,
                          py: 1.5,
                        }}
                      >
                        <Grid container spacing={2}>
                          <Grid item lg={9} md={8} xs={12}>
                            <div>
                              <Typography
                                variant="subtitle1"
                                sx={{
                                  display: { sm: "block", md: "flex" },
                                  flexWrap: "wrap",
                                  "& p": {
                                    textAlign: { xs: "center", md: "left" },
                                  },
                                  "& p + p": {
                                    borderLeft: { sm: "none", md: "1px solid" },
                                    marginLeft: { sx: 0, md: 1 },
                                    paddingLeft: { sx: 0, md: 1 },
                                  },
                                }}
                              >
                                <p>
                                  <b>Openings</b> : {jobPostData.position}
                                </p>
                                <p>
                                  <b>Work time</b> : Full Time
                                </p>
                                <p>
                                  <b>Job type</b> : {jobPostData.jobtype}
                                </p>
                                <p>
                                  <b>Experience</b> : {jobPostData.experience}
                                </p>
                              </Typography>
                            </div>
                          </Grid>
                          <Grid item lg={3} md={4} xs={12} margin="auto">
                            <Grid>
                              <Stack
                                alignItems="center"
                                direction={{ xs: "column", sm: "row" }}
                                spacing={2}
                              >
                                <Button
                                  size="small"
                                  onClick={handleOpen}
                                  sx={{ flex: 1 }}
                                >
                                  View Details
                                </Button>
                                <Link
                                  href="https://rb.gy/w31lg2"
                                  style={{ flex: 1, display: "block" }}
                                  target="_blank"
                                >
                                  <Button
                                    variant="contained"
                                    fullWidth
                                    sx={{
                                      "&:hover": {
                                        color: "#fff",
                                        backgroundColor: "primary.main",
                                      },
                                    }}
                                  >
                                    Apply Now
                                  </Button>
                                </Link>
                              </Stack>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Stack>
                    </Stack>
                  </Card>
                </Box>
              </CardContent>
            </Card>
          ))}

          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
              backdrop: {
                timeout: 500,
              },
            }}
            sx={{
              overflow: "scroll",
              height: "auto",
            }}
          >
            <Fade in={open}>
              <Box sx={style} className="modal_career">
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    id="transition-modal-title"
                    variant="h5"
                    component="h2"
                  >Business Development Executive (BDE)
                  </Typography>
                  <IconButton color="inherit" onClick={handleClose}>
                    <SvgIcon>
                      <XIcon />
                    </SvgIcon>
                  </IconButton>
                </Box>

                <Box sx={{ mt: 3 }}>
                  <Typography variant="h6" color="primary.main">
                    Job description :
                  </Typography>
                  <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                    This is a full-time on-site role for a Business Development
                    Executive. The Business Development Executive will be
                    responsible for day-to-day tasks including new business
                    development, lead generation, account management, and
                    communication with clients. The role requires strong
                    business acumen and the ability to build and maintain
                    fruitful relationships with clients.
                  </Typography>
                </Box>
                <Box sx={{ mt: 3 }}>
                  <Typography variant="h6" color="primary.main">
                    Qualifications:
                  </Typography>
                  <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                    <List>
                      {qualificationsData.map((item) => (
                        <ListItem key={item.id}>
                          <FiberManualRecordIcon
                            sx={{
                              mr: 2,
                              width: "10px",
                            }}
                          />
                          {item.text}
                        </ListItem>
                      ))}
                    </List>
                  </Typography>
                </Box>
              </Box>
            </Fade>
          </Modal>
        </Stack>
      </Container>
    </Box>
  );
};

export default JobOpening;
