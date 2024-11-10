import { useCallback } from "react";
import {
  Box,
  Button,
  FormLabel,
  Link,
  Typography,
  Unstable_Grid2 as Grid,
  TextField,
} from "@mui/material";
import toast from "react-hot-toast";
import * as Yup from "yup";
import { useFormik } from "formik";
import { sendForm } from "@emailjs/browser";

export const ContactForm = (props) => {
  const handleSubmit = useCallback((event) => {
    event.preventDefault();
  }, []);

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
    // e.preventDefault();
    sendForm(
      "service_qsv763i",
      "template_ot3yxx8",
      "#formSubmit",
      "ifji9ftbdFscLfyuR"
    )
      .then((response) => {
        toast.success("Email sent successfully!");
        console.log("Email sent successfully!", response.text);
        resetForm();
      })
      .catch((error) => {
        toast.error("Error sending email!");
        console.error("Error sending email:", error);
      });
  };

  // const validate = () => {

  //   return fname.length & lname.length & email.length & phone.length & message.length
  // };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit} {...props} id="formSubmit">
      <Grid container spacing={3}>
        <Grid container item xs={12} spacing={2} alignItems="center">
          <Grid item xs={12} sm={4}>
            <FormLabel sx={{ color: "text.primary", mb: 1 }}>Name *</FormLabel>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} sx={{ pl: 0 }}>
                <TextField
                  error={!!(formik.touched.fname && formik.errors.fname)}
                  fullWidth
                  helperText={formik.touched.fname && formik.errors.fname}
                  label="First Name"
                  name="fname"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.fname}
                  type="text"
                />
              </Grid>
              <Grid item xs={12} sm={6} sx={{ pl: 0 }}>
                <TextField
                  error={!!(formik.touched.lname && formik.errors.lname)}
                  fullWidth
                  helperText={formik.touched.lname && formik.errors.lname}
                  label="Last Name"
                  name="lname"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.lname}
                  type="text"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid container item xs={12} spacing={2} alignItems="center">
          <Grid item xs={12} sm={4}>
            <FormLabel sx={{ color: "text.primary", mb: 1 }}>
              Work Email *
            </FormLabel>
          </Grid>
          <Grid item xs={12} sm={8}>
            <TextField
              error={!!(formik.touched.email && formik.errors.email)}
              fullWidth
              helperText={formik.touched.email && formik.errors.email}
              label="Email"
              name="email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.email}
              type="email"
            />
          </Grid>
        </Grid>

        <Grid container item xs={12} spacing={2} alignItems="center">
          <Grid item xs={12} sm={4}>
            <FormLabel sx={{ color: "text.primary", mb: 1 }}>
              Phone Number *
            </FormLabel>
          </Grid>
          <Grid item xs={12} sm={8}>
            <TextField
              error={!!(formik.touched.phone && formik.errors.phone)}
              fullWidth
              helperText={formik.touched.phone && formik.errors.phone}
              label="Phone Number"
              name="phone"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.phone}
            />
          </Grid>
        </Grid>

        <Grid container item xs={12} spacing={2} alignItems="center">
          <Grid item xs={12} sm={4}>
            <FormLabel sx={{ color: "text.primary", mb: 1 }}>Message</FormLabel>
          </Grid>
          <Grid item xs={12} sm={8}>
            <TextField
              error={!!(formik.touched.message && formik.errors.message)}
              fullWidth
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
          </Grid>
        </Grid>
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
        <Button
          size="large"
          variant="contained"
          type="submit"
          disabled={!(formik.isValid && formik.dirty)}
          sx={{
            "&:hover": {
              color: "#fff",
              backgroundColor: "primary.main",
            },
          }}
        >
          Submit
        </Button>
      </Box>
      <Typography
        color="text.secondary"
        sx={{ mt: 3, textAlign: "center" }}
        variant="body2"
      >
        By submitting this, you agree to the{" "}
        <Link
          color="primary.main"
          href="/privacy-policy"
          underline="always"
          variant="subtitle2"
        >
          Privacy Policy
        </Link>{" "}
        .
      </Typography>
    </form>
  );
};