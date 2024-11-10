import { useCallback, useEffect, useState } from "react";

import {
  Box,
  Container,
  Unstable_Grid2 as Grid,
  Tabs,
  Tab,
} from "@mui/material";
import { Seo } from "src/components/seo";
import { useMounted } from "src/hooks/use-mounted";
import { usePageView } from "src/hooks/use-page-view";
import { PostCard } from "src/sections/dashboard/blog/post-card";
import axios from "axios";

const tabs = [
  { label: "All", value: "all" },
  { label: "Next js", value: "nextJs" },
  { label: "React js", value: "reactJs" },
];

const usePosts = () => {
  const isMounted = useMounted();
  const [posts, setPosts] = useState([]);

  const handlePostsGet = useCallback(async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}blog/getBlog`
      );
      const {
        data: { data },
      } = response;


      if (isMounted()) {
        setPosts(data);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMounted]);

  useEffect(
    () => {
      handlePostsGet();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return posts;
};

const formatCategoryType = (category) => {
  return category.trim().replace(/\s/g, "").toLowerCase();
};

const BlogTabs = ({isHome}) => {
  const [currentTab, setCurrentTab] = useState("all");
  const [categories, setCategories] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const posts = usePosts();
  const handleTabsChange = (event, value) => {
    setCurrentTab(value);
  };

  usePageView();

  useEffect(() => {
    if (posts.length > 0) {
      const categories = posts.map((post) => formatCategoryType(post.category));
      const uniqueCategories = [...new Set(categories)];
      setCategories(uniqueCategories);
    }
  }, [posts]);

  useEffect(() => {
    if (posts.length > 0) {
      if (currentTab === "all") {
        const copyPosts = [...posts];
        setBlogs(copyPosts);
      } else {
        const copyPosts = [...posts];
        const filteredPosts = copyPosts.filter(
          (post) => formatCategoryType(post.category) === currentTab
        );
        setBlogs(filteredPosts);
      }
    }
  }, [currentTab, posts]);


  const dataToRender = isHome ? blogs.slice(0, 3) : blogs;
  return (
    <>
      <Seo title="Blog: Post List" />
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {
          !isHome &&   
          <Box sx={{ mb: 4 }}>
          <Tabs
            indicatorColor="primary"
            onChange={handleTabsChange}
            scrollButtons="auto"
            textColor="primary"
            value={currentTab}
            variant="scrollable"
          >
            <Tab
              label={"All"}
              value={"all"}
              sx={{
                fontSize: "1.25rem",
              }}
            />
            {categories.map((category) => (
              <Tab
                key={category}
                label={category.charAt(0).toUpperCase() + category.slice(1)}
                value={category}
                sx={{
                  fontSize: "1.25rem",
                }}
              />
            ))}
          </Tabs>
        </Box>
        }
      
        <Container maxWidth="xl">
          <Grid container spacing={4}>
            {dataToRender.map((post) => (
              <Grid key={post.title} xs={12}  md={6} lg={4}>
                <PostCard
                  authorAvatar={post.image}
                  category={post.category}
                  shortDescription={post.blogDescription}
                  title={post.title}
                  id={post._id}
                  readTime={post.readTime}
                  sx={{ height: "100%" }}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default BlogTabs;
