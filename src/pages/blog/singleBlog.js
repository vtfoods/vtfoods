import { Box, CardMedia, Container, Grid, Typography } from "@mui/material";
import { Seo } from "src/components/seo";
import { usePageView } from "src/hooks/use-page-view";
import { layout } from "src/utils/constant";
import { description } from "src/meta-description";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const Page = () => {
  const router = useRouter();
  usePageView();
  const [jobPostDetails, setJobPostsDetails] = useState({});
  const { id } = router.query;
  const fetchData = async (id) => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}/blog/getBlogById/${id}`
      );
      const { data } = response.data;
      if (response.status === 200) {
        setJobPostsDetails(data);
      } else {
        toast.error("Failed to fetch job Post Data");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData(id);
  }, [id]);

  function formatDate(date) {
    if (!date) return "";
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  return (
    <>
      <Seo title="Portfolio" description={description.portfolioPage} />

      <Box component="main" sx={{ overflowX: "hidden" }}>
        <Box
          padding={{
            lg: "100px 0 20px 0",
            xs: "50px 0 5px 0",
            md: "100px 0 20px 0",
          }}
        >
          <Container maxWidth="xl">
            <Grid
              container
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Grid xs={12} sm={12} md={6} lg={6}>
                <Box>
                  <CardMedia
                    image={jobPostDetails?.image}
                    sx={{ height: 400, mr: 3, borderRadius: "10px " }}
                  />
                </Box>
              </Grid>
              <Grid
                xs={12}
                sm={12}
                md={6}
                lg={6}
                padding={{ lg: " 0", xs: "20px 0" }}
              >
                <Typography
                  color=""
                  variant="h4"
                  sx={{ padding: "10px 0", fontWeight: "400" }}
                >
                  {jobPostDetails?.title}
                </Typography>
                <Typography
                  color="text.secondary"
                  variant="subtitle1"
                  sx={{ pt: 1 }}
                >
                  Last Updated: {formatDate(jobPostDetails?.updatedAt)},{" "}
                  {jobPostDetails?.readTime} min read
                </Typography>
                <Typography color="inherit" variant="h6" sx={{ mt: 3 }}>
                  Quick Summary
                </Typography>
                <Typography color="text.secondary" sx={{ mt: 1 }}>
                  {jobPostDetails?.blogDescription}
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              sx={{
                display: "flex",
                alignItems: "center",
              }}
              marginTop={2}
            >
              <Grid xs={12}>
                {jobPostDetails?.questions?.map((qa, index) => (
                  <Box
                    sx={{
                      backgroundColor: "#eeefff94",
                    }}
                    padding={1}
                    key={index}
                  >
                    <Typography  color="inherit">
                      <a href={`#answer${index + 1}`}>
                        {index + 1} {qa.question}
                      </a>
                    </Typography>
                  </Box>
                ))}
              </Grid>
              <Grid xs={12}>
                {jobPostDetails?.questions?.map((qa, index) => (
                  <Box key={index}>
                    <Typography
                      color="primary"
                      id={`answer${index + 1}`}
                      variant="h4"
                      sx={{ mt: 3 }}
                    >
                      {qa.question}
                    </Typography>
                    <Typography color="inherit" sx={{ m: 2 }}>
                      {qa.answer}
                    </Typography>
                  </Box>
                ))}
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  );
};

layout(Page);

export default Page;
