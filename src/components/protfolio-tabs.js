import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import {
  Button,
  Container,
  Divider,
  Grid,
  Modal,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { portfolio, productPortfolio } from "../mock/portfolio";
import Link from "next/link";
import CloseIcon from "@mui/icons-material/Close";
import TitleSection from "src/sections/home/title-section";

const tabs = [
  { label: "All", value: "all" },
  { label: "Web Development", value: "webDevelopment" },
  { label: "App Development", value: "appDevelopment" },
];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  maxHeight: "90vh", // Set max height to 90% of viewport height
  overflowY: "auto", // Enable vertical scrolling
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
  outline: "none",
  "@media (max-width: 800px)": {
    width: 600,
  },
  "@media (max-width: 600px)": {
    width: 400,
  },
  "@media (max-width: 400px)": {
    width: 350,
  },
};

export default function ProtfoliTabs({ isHome, isSubpage }) {
  const [currentTab, setCurrentTab] = useState("all");
  const [openModal, setOpenModal] = useState(null);

  const handleTabsChange = (event, value) => {
    setCurrentTab(value);
  };

  const handleOpenModal = (index) => {
    setOpenModal(index);
  };

  const handleCloseModal = () => {
    setOpenModal(null);
  };

  const filteredData =
    currentTab === "all"
      ? productPortfolio
      : productPortfolio.filter((item) => item.type?.includes(currentTab));

  const dataToRender = isHome ? productPortfolio : isSubpage ? productPortfolio.slice(0, 3) : filteredData;

  return (
    <Container maxWidth="xl">
      <Box sx={{ padding: { lg: "50px 0", xs: "50px 0", md: "50px 0" }, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <TitleSection title="Products" desc="" />
        <Box sx={{ padding: "50px 0 0 0" }}>
          <Grid container spacing={5}>
            {dataToRender.length > 0 &&
              dataToRender.map((item, index) => (
                <Grid item xs={12} sm={6} md={6} lg={4} key={index} sx={{ display: "flex", flexDirection: "column", justifyContent: "center", transition: "transform 0.3s ease-in-out", "&:hover": { "& .title": { opacity: 1 }}}}>
                  <Box sx={{ borderRadius: 1, overflow: "hidden", position: "relative", transition: "transform 0.3s ease-in-out", border: "1px solid #f0f0f0", "&:hover": { transform: "scale(1.05)", border: "1px solid #584a91" }}} onClick={() => handleOpenModal(index)}>
                    <img src={item.image} alt={item.title} style={{ height: "250px", width: "100%" }} />
                    <Typography align="center" className="title" sx={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "#584a91", color: "white", padding: 2, textAlign: "center", opacity: 0, transition: "opacity 0.3s ease-in-out", fontSize: "14px", fontWeight: "bold", textTransform: "Capitalize" }}>{item.name}</Typography>
                  </Box>
                  <Modal open={openModal === index} onClose={handleCloseModal} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                    <Box sx={style}>
                      <Box onClick={handleCloseModal} sx={{ display: "flex", justifyContent: "flex-end", cursor: "pointer", position: "absolute", top: 9, right: 9 }}>
                        <CloseIcon />
                      </Box>
                      <Grid container spacing={2} sx={{ pt: 2, display: "flex", alignItems: "start", justifyContent: "center" }}>
                        <Grid item xs={12}>
                          <Box sx={{ display: "flex", justifyContent: "center" }}>
                            <Typography id="modal-modal-title" sx={{ fontWeight: "bold", fontSize: "1.5rem", textTransform: "Capitalize", textAlign: "center", mb: 2, width: "500px" }}>{item.name}</Typography>
                          </Box>
                          <Box sx={{ my: 2, display: "flex", justifyContent: "center" }}>
                            <img src={item.image} alt={item.title} style={{ height: "200px", width: "300px", objectFit: "cover", boxShadow: "0px 0px 8px 0px #dfdfdf", borderRadius: "6px" }} />
                          </Box>
                          <Box sx={{ py: 2, display: "flex", justifyContent: "center" }}>
                            
                          </Box>
                        </Grid>
                      </Grid>
                      {/* <Divider sx={{ my: 2 }} /> */}
                      <Box>
                        <Typography id="modal-modal-description" sx={{ mt: 2, textAlign: "center" }}>{item.summary}</Typography>
                      </Box>
                    </Box>
                  </Modal>
                </Grid>
              ))}
          </Grid>
          {/* {isHome && (
            <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
              <Link href="/portfolio">
                <Button variant="contained" sx={{ "&:hover": { color: "#fff", backgroundColor: "primary.main" }, mt: 2 }}>View More</Button>
              </Link>
            </Box>
          )} */}
        </Box>
      </Box>
    </Container>
  );
}

