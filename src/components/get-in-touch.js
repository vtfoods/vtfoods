"use client";

import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

import * as Yup from "yup";
import { Popover } from "@mui/material";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import { useFormik } from "formik";
import { sendForm } from "@emailjs/browser";

function GetInTouch() {
  const [anchorEl, setAnchorEl] = useState(null);

  const initialValues = {
    fname: "",
    lname: "",
    email: "",
    phone: "",
    message: "",
  };
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const validationSchema = Yup.object({
    fname: Yup.string().min(3).max(15).required("Enter First Name"),
    lname: Yup.string().min(3).max(15).required("Enter Last Name"),
    email: Yup.string()
      .email("Enter Proper Email Address")
      .required("Enter Email Address"),
    phone: Yup.string()
      .max(11)
      .required("Enter Phone Number")
      .matches(phoneRegExp, "Phone number is not valid"),
    message: Yup.string().max(555).required("Enter Message"),
  });

  const onSubmit = (values, { resetForm }) => {
    sendForm(
      "service_qsv763i",
      "template_ot3yxx8",
      "#formSubmit",
      "ifji9ftbdFscLfyuR"
    )
      .then((response) => {
        console.log("Email sent successfully!", response.text);
        resetForm();
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const handleOpen = (e) => setAnchorEl(e.currentTarget);

  const handleClose = () => setAnchorEl(null);

  return (
    <>
      <Box
        sx={{
          cursor: "pointer",
          position: "fixed",
          bottom: 16,
          right: 16,
          fontWeight: 500,
          width: 48,
          height: 48,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          aspectRatio: 1 / 1,
          bgcolor: "primary.main",
        }}
        onClick={handleOpen}
      >
        <QuestionAnswerIcon sx={{ color: "white" }} />
      </Box>
      <Popover
        open={!!anchorEl}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        sx={{ transform: "translate(0px, -10px)", width: "100%" }}
      >
        <Typography
          variant="h4"
          sx={{ p: 2, display: { xs: "none", md: "block" } }}
          textAlign="center"
        >
          Get in touch
        </Typography>
        <Box component="form" onSubmit={formik.handleSubmit} id="formSubmit">
          <Grid
            container
            spacing={3}
            backgroundColor="#fff"
            sx={{
              m: 0,
              borderRadius: 2,
              p: 1,
              maxWidth: 400,
            }}
          >
            <Grid xs={12} sm={6} sx={{ p: 1 }} item>
              <FormControl fullWidth>
                <TextField
                  fullWidth
                  error={!!(formik.touched.fname && formik.errors.fname)}
                  helperText={formik.touched.fname && formik.errors.fname}
                  label="First Name"
                  name="fname"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.fname}
                  type="text"
                />
              </FormControl>
            </Grid>
            <Grid xs={12} sm={6} sx={{ p: 1 }} item>
              <FormControl fullWidth>
                <TextField
                  fullWidth
                  error={!!(formik.touched.lname && formik.errors.lname)}
                  helperText={formik.touched.lname && formik.errors.lname}
                  label="Last Name"
                  name="lname"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.lname}
                  type="text"
                />
              </FormControl>
            </Grid>
            <Grid xs={12} sm={6} sx={{ p: 1 }} item>
              <FormControl fullWidth>
                <TextField
                  fullWidth
                  error={!!(formik.touched.email && formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                  label="Email"
                  name="email"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  type="email"
                />
              </FormControl>
            </Grid>
            <Grid xs={12} sm={6} sx={{ p: 1 }} item>
              <FormControl fullWidth>
                <TextField
                  fullWidth
                  error={!!(formik.touched.phone && formik.errors.phone)}
                  helperText={formik.touched.phone && formik.errors.phone}
                  label="Phone Number"
                  name="phone"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.phone}
                />
              </FormControl>
            </Grid>

            <Grid xs={12} sx={{ p: 1 }} item>
              <FormControl fullWidth>
                <TextField
                  fullWidth
                  error={!!(formik.touched.message && formik.errors.message)}
                  helperText={formik.touched.message && formik.errors.message}
                  label="Message"
                  name="message"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.message}
                  multiline
                  rows={6}
                  type="text"
                />
              </FormControl>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  mt: 3,
                }}
              >
                <Button
                  size="large"
                  variant="contained"
                  disabled={!(formik.isValid && formik.dirty)}
                  type="submit"
                >
                  Submit
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Popover>
    </>
  );
}

export default GetInTouch;
