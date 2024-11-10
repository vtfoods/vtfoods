import PropTypes from "prop-types";
import { formatDistanceStrict } from "date-fns";
import {
  Button,
  Card,
  Divider,
  Fade,
  Grid,
  Modal,
  Stack,
  Typography,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  SvgIcon,

} from "@mui/material";
import { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import CheckIcon from "@mui/icons-material/Check";

import XIcon from "@untitled-ui/icons-react/build/esm/X";
import Link from "next/link";
import { company } from "src/api/jobs/data";

export const CompanyJobs = (props) => {
  const { job = [], ...other } = props;

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50% !important",
    left: "50%",
    transform: "translate(-50%, -50%)",
    // width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    width: "75%",
    height: "100%",
    overflow: "scroll",
  };
  return (
    <>
      <Card variant="outlined" {...other}>
        <Stack divider={<Divider />}>

          <Stack
            alignItems="center"
            direction="row"
            flexWrap="wrap"
            justifyContent="space-between"
            key={job.id}
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
                      display: { sm: 'block', md: 'flex' },
                      flexWrap: 'wrap',
                      '& p': {

                        textAlign: { xs: 'center', md: 'left' }
                      },
                      '& p + p': {
                        borderLeft: { sm: 'nnoe', md: '1px solid' },
                        marginLeft: { sx: 0, md: 1 },
                        paddingLeft: { sx: 0, md: 1 },
                      }

                    }}
                  >
                    <p>
                      <b>Openings</b> : {job.position}
                    </p>
                    <p>
                      <b>Work time</b> : Full Time
                    </p>
                    <p>
                      <b>Job type</b> : {job.location}
                    </p>
                    <p>
                      <b>Experience</b> : {job.experience}
                    </p>
                  </Typography>
                </div>
              </Grid>
              <Grid item lg={3} md={4} xs={12} margin={"auto"}>
                <Grid>
                  <Stack alignItems="center" direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                    <Button size="small" onClick={handleOpen} sx={{ flex: 1 }}>
                      View Details
                    </Button>
                    <Link href="https://rb.gy/w31lg2" style={{ flex: 1, display: 'block' }} target="_blank">
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
                  >
                    {job.designation}
                  </Typography>
                  <IconButton color="inherit" onClick={handleClose}>
                    <SvgIcon>
                      <XIcon />
                    </SvgIcon>
                  </IconButton>
                </Box>

                <Box sx={{ mt: 3 }}>
                  <Typography variant="h6" sx={{ color: "#6366f1" }}>
                    Job description :
                  </Typography>
                  <Typography
                    id="transition-modal-description"
                    sx={{ mt: 2 }}
                  >
                    {job.jobDescription}
                  </Typography>
                </Box>
                <Box sx={{ mt: 3 }}>
                  <Typography variant="h6" sx={{ color: "#6366f1" }}>
                    Responsibilities:
                  </Typography>
                  <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                    <List>
                      {job.jobRespo.split('\r\n').map((responsibility, index) => (
                        <ListItem key={index}>{responsibility}</ListItem>
                      ))}
                    </List>
                  </Typography>
                  <Typography id="transition-modal-description" sx={{ mt: 2 }}></Typography>
                </Box>

                <Box sx={{ mt: 3 }}>
                  <Typography variant="h6" sx={{ color: "#6366f1" }}>
                    Requirements :
                  </Typography>
                  <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                    <List>
                      {job.jobRequ.split('\r\n').map((requirements, index) => (
                        <ListItem key={index}>{requirements}</ListItem>
                      ))}
                    </List>
                  </Typography>
                  <Typography id="transition-modal-description" sx={{ mt: 2 }}></Typography>
                </Box>
                <Box>
                  <Typography sx={{ mt: 3 }}>
                    <span style={{ color: "#6366f1", fontWeight: "700" }}>
                      Note :
                    </span>{" "}
                    Please include your portfolio or links to relevant
                    projects you have worked on while applying for this
                    position.
                  </Typography>
                  <Typography
                    id="transition-modal-description"
                    sx={{ mt: 2 }}
                  >
                    Join our team and be part of an exciting opportunity
                    to grow as {job.jobtitle}. If you are passionate about
                    your respective field and want to work on cutting-edge
                    projects, apply now!
                  </Typography>
                </Box>
              </Box>
            </Fade>
          </Modal>
        </Stack>
      </Card>
    </>
  );
};

CompanyJobs.propTypes = {
  jobs: PropTypes.array,
};
