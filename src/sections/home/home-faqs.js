import { useState } from "react";
import ChevronDownIcon from "@untitled-ui/icons-react/build/esm/ChevronDown";
import ChevronRightIcon from "@untitled-ui/icons-react/build/esm/ChevronRight";
import {
  Box,
  Collapse,
  Container,
  Stack,
  SvgIcon,
  Typography,
  Unstable_Grid2 as Grid,
} from "@mui/material";
import TitleSection from "./title-section";

const Faq = (props) => {
  const { answer, question } = props;
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Stack
      onClick={() => setIsExpanded((prevState) => !prevState)}
      spacing={2}
      sx={{ cursor: "pointer" }}
    >
      <Stack
        alignItems="center"
        direction="row"
        justifyContent="space-between"
        spacing={2}
      >
        <Typography variant="subtitle1" color="primary.main" sx={{
          fontWeight: 600
        }}>{question}</Typography>
        <SvgIcon>
          {isExpanded ? <ChevronDownIcon /> : <ChevronRightIcon />}
        </SvgIcon>
      </Stack>
      <Collapse in={isExpanded}>
        <Typography color="text.secondary" variant="body2">
          {answer}
        </Typography>
      </Collapse>
    </Stack>
  );
};

export const HomeFaqs = ({faqs}) => {
  return (
    <Box sx={{ pb: "50px" }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid xs={12} md={12}>
            <Stack spacing={2}>
              <TitleSection 
                title="Everything you need to know"
                desc="Here are some common questions about our services"
              />
            </Stack>
          </Grid>
          <Grid xs={12} md={12}>
            <Stack spacing={4}>
              {faqs?.map((faq, index) => (
                <Faq key={index} {...faq} />
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
