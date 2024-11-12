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
import WhatsAppAnswerIcon from "@mui/icons-material/WhatsApp";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import { useFormik } from "formik";
import { sendForm } from "@emailjs/browser";
import Link from "next/link";

function GetInTouch() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorEl1, setAnchorEl1] = useState(null);

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
  const handleOpen1 = (e) => setAnchorEl1(e.currentTarget);

  const handleClose = () => setAnchorEl(null);
  const handleClose1 = () => setAnchorEl1(null);

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
      <Box
        sx={{
          cursor: "pointer",
          position: "fixed",
          bottom: 16,
          right: 70,
          fontWeight: 500,
          width: 48,
          height: 48,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          aspectRatio: 1 / 1,
          bgcolor: "#1ba553",
        }}
        onClick={handleOpen1}
      >
        <WhatsAppAnswerIcon sx={{ color: "white" }} />
      </Box>
      {/* First Popover */}
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
      {/* second Popover */}
      <Popover
        open={!!anchorEl1}
        anchorEl={anchorEl1}
        onClose={handleClose1}
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
        <Box
          sx={{
            backgroundColor: "#25D366",
            color: "white",
            p: 2,
            textAlign: "center",
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
          }}
        >
          <Typography variant="h6" fontWeight="bold">
            Raise your Query
          </Typography>
          <Typography variant="body2">
            Simply click below and type your query.
          </Typography>
        </Box>

        <Box
          sx={{
            backgroundColor: "#fff",
            p: 2,
            textAlign: "center",
            borderBottomLeftRadius: 8,
            borderBottomRightRadius: 8,
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Typography variant="body2" sx={{ mb: 1 }}>
            Our experts will reply to you very soon.
          </Typography>
          <Link
            color="white"
            href="https://wa.me/+918080651693"
            target="_blank"
          >
            <Box
              sx={{
                backgroundColor: "#f0f0f0",
                borderRadius: 2,
                p: 1,
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "#e0e0e0",
                },
              }}
            >

              <Box sx={{ mr: 2 }} >

                <WhatsAppAnswerIcon sx={{ color: "green" }} />
              </Box>
              <Box>
                <Typography variant="body1" fontWeight="500">
                  Click Here to Chat
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  V.T. FOODS PVT. LTD
                </Typography>
              </Box>

            </Box>
          </Link>
        </Box>
      </Popover>
    </>
  );
}

export default GetInTouch;
