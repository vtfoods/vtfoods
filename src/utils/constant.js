import { height } from "@mui/system";
import { Layout as MarketingLayout } from "src/layouts/marketing";

export const layout = (Page) => {
  // if (process.env.NODE_ENV === "development") {
  //   Page.getLayout = (page) => <DevelopmentLayout>{page}</DevelopmentLayout>;
  // } else {
  //   Page.getLayout = (page) => <MarketingLayout>{page}</MarketingLayout>;
  // }
  Page.getLayout = (page) => <MarketingLayout>{page}</MarketingLayout>;
};

