import { Seo } from "src/components/seo";
import { usePageView } from "src/hooks/use-page-view";
import { useMounted } from "src/hooks/use-mounted";
import { useCallback, useEffect, useState } from "react";
import { jobsApi } from "src/api/jobs";
import { layout } from "src/utils/constant";
import { description } from "src/meta-description";
import { useGetJobPost } from "src/rq-hooks";
import HeroSection from "./hero-section";
import CareerCard from "./career-card";
import CareerOpening from "./caree-opening";
import JobOpening from "./job-opening-section";
import CareerBenefits from "./career-benifits-section";

const useCompanies = () => {
  const isMounted = useMounted();
  const [companies, setCompanies] = useState([]);

  const handleCompaniesGet = useCallback(async () => {
    try {
      const response = await jobsApi.getCompanies();

      if (isMounted()) {
        setCompanies(response);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMounted]);

  useEffect(
    () => {
      handleCompaniesGet();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return companies;
};
const Page = () => {
  const companies = useCompanies();
  const { jobPost } = useGetJobPost();

  usePageView();

  return (
    <>
      <Seo title="Career" description={description.careerPage} />
      <HeroSection />
      <CareerCard />
      {/* <CareerOpening/> */}
      <JobOpening />
      <CareerBenefits/>
    </>
  );
};
layout(Page);

export default Page;
