import React from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Box,
  Button,
  Modal,
  Paper,
  TextField,
  Typography
} from "@mui/material";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  contactNo: Yup.string().required("Contact number is required"),
  designation: Yup.string().required("Designation is required"),
  company: Yup.string().required("Company is required"),
  country: Yup.string().required("Country is required"),
  emailId: Yup.string()
    .email("Invalid email address")
    .required("Email is required")
  // linkedinProfile: Yup.string().url("Invalid URL").required("LinkedIn profile is required"),
});
const PortfolioModal = ({showModal, setShowModal}) => {
  const router = useRouter();

  useEffect(() => {
    if (router.pathname === "/portfolio") {
      setShowModal(true);
    }
  }, [router.pathname]);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      contactNo: "",
      designation: "",
      company: "",
      country: "",
      emailId: "",
      linkedinProfile: ""
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
    //   router.push("/portfolio");
      setShowModal(false);
    }
  });

  return (
    <Box>
      <Modal open={showModal} >
      {/* <Modal open={showModal} onClose={handleCloseModal}> */}
        <Paper
          style={{
            padding: "20px",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "90%",
            maxWidth: "500px",
            maxHeight: "90%",
            overflowY: "auto",
          }}
        >
          <Typography
            variant="h5"
            sx={{ display: "flex", justifyContent: "center" }}
          >
            Fill the fields{" "}
          </Typography>
          <form noValidate onSubmit={formik.handleSubmit}>
            <Box>
              <Box sx={{ mt: 2 }}>
                <TextField
                  fullWidth
                  id="name"
                  name="name"
                  label="Name"
                  placeholder="Enter your name here..."
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                />
              </Box>
              <Box sx={{ mt: 2 }}>
                <TextField
                  fullWidth
                  id="contactNo"
                  name="contactNo"
                  label="Contact No."
                  placeholder="Enter your contact no. here..."
                  value={formik.values.contactNo}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.contactNo && Boolean(formik.errors.contactNo)
                  }
                  helperText={
                    formik.touched.contactNo && formik.errors.contactNo
                  }
                />
              </Box>
              <Box sx={{ mt: 2 }}>
                <TextField
                  fullWidth
                  id="emailId"
                  name="emailId"
                  label="Email id"
                  placeholder="Enter your email id here..."
                  value={formik.values.emailId}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.emailId && Boolean(formik.errors.emailId)
                  }
                  helperText={formik.touched.emailId && formik.errors.emailId}
                />
              </Box>
              <Box sx={{ mt: 2 }}>
                <TextField
                  fullWidth
                  id="designation"
                  name="designation"
                  label="Designation"
                  placeholder="Enter your designation here..."
                  value={formik.values.designation}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.designation &&
                    Boolean(formik.errors.designation)
                  }
                  helperText={
                    formik.touched.designation && formik.errors.designation
                  }
                />
              </Box>
              <Box sx={{ mt: 2 }}>
                <TextField
                  fullWidth
                  id="company"
                  name="company"
                  label="Company"
                  placeholder="Enter your company here..."
                  value={formik.values.company}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.company && Boolean(formik.errors.company)
                  }
                  helperText={formik.touched.company && formik.errors.company}
                />
              </Box>
              <Box sx={{ mt: 2 }}>
                <TextField
                  fullWidth
                  id="country"
                  name="country"
                  label="Country"
                  placeholder="Enter your country here..."
                  value={formik.values.country}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.country && Boolean(formik.errors.country)
                  }
                  helperText={formik.touched.country && formik.errors.country}
                />
              </Box>
              <Box sx={{ mt: 2 }}>
                <TextField
                  fullWidth
                  id="linkedinProfile"
                  name="linkedinProfile"
                  label="Linkedin Profile"
                  placeholder="Enter your linkedin profile here..."
                  value={formik.values.linkedinProfile}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.linkedinProfile &&
                    Boolean(formik.errors.linkedinProfile)
                  }
                  helperText={
                    formik.touched.linkedinProfile &&
                    formik.errors.linkedinProfile
                  }
                />
              </Box>
            </Box>
            <Box sx={{ mt: 2, display: "flex", justifyContent: "end" }}>
              {/* <Button variant="contained" onClick={handleCloseModal}>
              Close
            </Button> */}
              <Button variant="contained" color="primary" type="submit">
                Go to Portfolio
              </Button>
            </Box>
          </form>
        </Paper>
      </Modal>
    </Box>
  );
};

export default PortfolioModal;
