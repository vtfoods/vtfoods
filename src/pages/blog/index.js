import { Box} from "@mui/material";
import { usePageView } from "src/hooks/use-page-view";
import { layout } from "src/utils/constant";
// import HeroSection from "./heroSection"
// import BlogCard from "./blogCard"
const Page = () => {
  usePageView();
  return (
    <>
      <Box component="main" sx={{ overflowX: "hidden" }}>
        {/* <HeroSection/> */}
        {/* <BlogCard/> */}

      </Box>
    </>
  );
};

layout(Page);

export default Page;
