import { Seo } from "src/components/seo";
import { usePageView } from "src/hooks/use-page-view";
import { Layout as MarketingLayout } from "src/layouts/marketing";
import { description } from "src/meta-description";
import { HomeCta } from "src/sections/home/home-cta";
import { HomeFaqs } from "src/sections/home/home-faqs";
import { HomeFeatures } from "src/sections/home/home-features";
import { HomeHero } from "src/sections/home/home-hero";
import { HomeReviews } from "src/sections/home/home-reviews";

const Page = () => {
  usePageView();

  return (
    <>
      <Seo description={description.homepage} />
      <main style={{ overflowX: "hidden" }}>
        <HomeHero />
        {/* <HomeCta /> */}
        {/* <HomeFeatures /> */}
        {/* <HomeReviews /> */}
        {/* <HomeFaqs /> */}
      </main>
    </>
  );
};

Page.getLayout = (page) => <MarketingLayout>{page}</MarketingLayout>;

export default Page;
