import { useState } from "react";
import {
  Box,
  Container,
  Grid,
  FormLabel,
  TextField,
  Button,
} from "@mui/material";
import * as Yup from "yup";
import { useFormik } from "formik";
import TitleSection from "src/sections/home/title-section";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import UploadDoucuments from "./uploadDoucuments";
import { send, sendForm } from "@emailjs/browser";
import { requirementData, selectServices } from "src/mock/blog";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import toast from "react-hot-toast";

const DeveloperHire = (props) => {
  const [documents, setDocuments] = useState([{ name: "Your Document", files: [] }]);
  const [phone, setPhone] = useState("");
  const [requirement, setRequirement] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const initialValues = {
    fname: "",
    email: "",
    budget: "",
    wantStart: "",
    briefProjectDescription: "",
  };
  
  const validationSchema = Yup.object({
    fname: Yup.string().min(3).max(15).required("Enter First Name"),
    email: Yup.string()
      .email("Enter Proper Email Address")
      .required("Enter Email Address"),
    budget: Yup.string().min(3).max(300).required("Enter Your Budget Amount"),
    wantStart: Yup.string()
      .min(3)
      .max(300)
      .required("Enter How Soon You Want To Start"),
  });

  const onSubmit = (values, { resetForm }) => {
    const formValues = {
      ...values,
      phone: phone ? phone.slice(-10) : "",
      requirement: requirement,
      selectServices: selectedService,
    };

    send(
      "service_y62dbir",
      "template_0qx9mo8", 
      {...formValues},
      "ifji9ftbdFscLfyuR"
    )
      .then((response) => {
        toast.success("Email sent successfully!");
        console.log("Email sent successfully!", response.text);
        resetForm();
        setPhone("");
        setRequirement("");
        setSelectedService("");
        setDocuments([{ files: [] }]);
      })
      .catch((error) => {
        toast.error("Error sending email");
        console.error("Error sending email:", error);
      });
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <Box padding={{ lg: "50px 0", xs: "50px 0", md: "100px 0" }}>
      <Container maxWidth="xl">
        <TitleSection title="Hire Developer Form" />
        <Box
          sx={{
            mt: 4,
            mb: 4,
          }}
        >
          <form onSubmit={formik.handleSubmit} {...props} id="formSubmit">
            <Grid container spacing={3}>
              <Grid container item xs={12} spacing={2} alignItems="center">
                <Grid item xs={12} sm={3}>
                  <FormLabel sx={{ color: "text.primary", mb: 1 }}>
                    Name *
                  </FormLabel>
                </Grid>
                <Grid item xs={12} sm={9}>
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
              </Grid>

              <Grid container item xs={12} spacing={2} alignItems="center">
                <Grid item xs={12} sm={3}>
                  <FormLabel sx={{ color: "text.primary", mb: 1 }}>
                    Email *
                  </FormLabel>
                </Grid>
                <Grid item xs={12} sm={9}>
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
                <Grid item xs={12} sm={3}>
                  <FormLabel sx={{ color: "text.primary", mb: 1 }}>
                    Phone Number
                  </FormLabel>
                </Grid>
                <Grid item xs={12} sm={9} className="offshore-form">
                  <PhoneInput
                    placeholder="Enter phone number"
                    value={phone}
                    onChange={setPhone}
                    defaultCountry="IN"
                    withCountryCallingCode
                    international
                    countryCallingCodeEditable={false}
                    initialValueFormat="national"
                    style={{
                      border: "1px solid #ddd",
                      borderRadius: 6,
                      padding: 15,
                    }}
                  />
                </Grid>
              </Grid>

              <Grid container item xs={12} spacing={2} alignItems="center">
                <Grid item xs={12} sm={3}>
                  <FormLabel sx={{ color: "text.primary", mb: 1 }}>
                    Select Services
                  </FormLabel>
                </Grid>
                <Grid item xs={12} sm={9}>
                  <FormControl fullWidth>
                    <Select
                      labelId="select-services-label"
                      id="select-services"
                      value={selectedService}
                      onChange={(event) => setSelectedService(event.target.value)}
                    >
                      {selectServices.map((item) => (
                        <MenuItem key={item.value} value={item.value}>
                          {item.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>

              <Grid container item xs={12} spacing={2} alignItems="center">
                <Grid item xs={12} sm={3}>
                  <FormLabel sx={{ color: "text.primary", mb: 1 }}>
                    Budget *
                  </FormLabel>
                </Grid>
                <Grid item xs={12} sm={9}>
                  <TextField
                    error={!!(formik.touched.budget && formik.errors.budget)}
                    fullWidth
                    helperText={formik.touched.budget && formik.errors.budget}
                    label="Budget"
                    name="budget"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.budget}
                    type="text"
                  />
                </Grid>
              </Grid>

              <Grid container item xs={12} spacing={2} alignItems="center">
                <Grid item xs={12} sm={3}>
                  <FormLabel sx={{ color: "text.primary", mb: 1 }}>
                    Requirements
                  </FormLabel>
                </Grid>
                <Grid item xs={12} sm={9}>
                  <FormControl fullWidth>
                    <Select
                      labelId="select-req-label"
                      id="select-req"
                      value={requirement}
                      onChange={(event) => setRequirement(event.target.value)}
                    >
                      {requirementData.map((item) => (
                        <MenuItem key={item.value} value={item.value}>
                          {item.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>

              <Grid container item xs={12} spacing={2} alignItems="center">
                <Grid item xs={12} sm={3}>
                  <FormLabel sx={{ color: "text.primary", mb: 1 }}>
                    How Soon You Want To Start? *
                  </FormLabel>
                </Grid>
                <Grid item xs={12} sm={9}>
                  <TextField
                    error={
                      !!(formik.touched.wantStart && formik.errors.wantStart)
                    }
                    fullWidth
                    helperText={
                      formik.touched.wantStart && formik.errors.wantStart
                    }
                    label="How Soon You Want To Start"
                    name="wantStart"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.wantStart}
                    type="text"
                  />
                </Grid>
              </Grid>

              <Grid container item xs={12} spacing={2} alignItems="center">
                <Grid item xs={12} sm={3}>
                  <FormLabel sx={{ color: "text.primary", mb: 1 }}>
                    Brief Project Description *
                  </FormLabel>
                </Grid>
                <Grid item xs={12} sm={9}>
                  <TextField
                    fullWidth
                    label="Brief Project Description"
                    name="briefProjectDescription"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.briefProjectDescription}
                    multiline
                    rows={6}
                    type="text"
                  />
                </Grid>
              </Grid>

              <Grid container item xs={12} spacing={2} alignItems="center">
                <Grid item xs={12} sm={3}>
                  <FormLabel sx={{ color: "text.primary", mb: 1 }}>
                    Want to Share a file? *
                  </FormLabel>
                </Grid>
                <Grid item xs={12} sm={8}>
                  <UploadDoucuments
                    documents={documents}
                    setDocuments={setDocuments}
                  />
                </Grid>
              </Grid>
            </Grid>

            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Button
                variant="contained"
                type="submit"
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
          </form>
        </Box>
      </Container>
    </Box>
  );
};

export default DeveloperHire;

