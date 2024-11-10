import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Image from "next/image";
import { Grid, Typography } from "@mui/material";
import { skills } from "src/mock/skills";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
    sx: {
      textTransform: "capitalize",
      minWidth: "5rem",
      fontSize: "18px",
      px: 4,
    },
  };
}

export default function SkillTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (_, newValue) => setValue(newValue);

  const selectedTech = Object.values(skills).find(
    (skill, index) => index === value
  );


  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ mb: 4 }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {Object.keys(skills).map((skill, index) => (
            <Tab key={index} label={skill} {...a11yProps(index)} />
          ))}
        </Tabs>
      </Box>


      <Grid container sx={{ justifyContent: "center" }} gap={4}>
        {selectedTech.map((tech) => (
          <Grid
            item
            key={tech.title}
            xs={6}
            sm={2.5}
            p={3}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 4,
              bgcolor: "background.paper",
              borderRadius: 2,
              "&:hover": {
                boxShadow: 4,
                cursor: "pointer",
                "& .title": {
                  color: "primary.main",
                },
              },

            }}
          >

            <Box
              sx={{
                borderRadius: 1,
                overflow: "hidden",
                minHeight: 120,
                display: "flex",
                alignItems: "center",

              }}
            >

              <Image
                src={`/assets/${tech.icon}`}
                alt={tech.title}
                width={tech.width}
                height={tech.height}
              />
            </Box>
            <Typography variant="h6" className="title" align="center"
            >
              {tech.title}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}




