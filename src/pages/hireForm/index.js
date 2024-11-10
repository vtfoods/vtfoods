import { Box} from "@mui/material";
import { Seo } from "src/components/seo";
import { usePageView } from "src/hooks/use-page-view";
import { layout } from "src/utils/constant";
import DeveloperHire from "./developerHire"

const Page = () => {
  usePageView();
  return (
    <>
      <Seo title="HireForm"/>
      <Box component="main" sx={{ overflowX: "hidden" }}>
        <Box pt={2}>
           <DeveloperHire/>
        </Box>  
      </Box>
    </>
  );
};
layout(Page);

export default Page;
