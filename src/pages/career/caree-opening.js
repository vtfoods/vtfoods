import React from "react";
import {
    Box,
    Container,
    Stack,
} from "@mui/material";
import TitleSection from "../../sections/home/title-section";
import { useGetJobPost } from "src/rq-hooks";
import { JobListSearch } from "src/sections/dashboard/jobs/job-list-search";
import { CompanyCard } from "src/sections/dashboard/jobs/company-card";
import { usePageView } from "src/hooks/use-page-view";

const CareerOpening = () => {
    const { jobPost } = useGetJobPost();
    usePageView();

    return (
        <>
            <Box sx={{
                padding:"50px 0"
            }}>
                <Container maxWidth="xl">
                    <TitleSection
                        title="Current Opening"
                        desc="We provide best in class Services"
                    />
                    <Box>
                        <Container maxWidth="xl">
                            <Stack spacing={4} sx={{ mt: 4 }}>
                                <JobListSearch />
                                {jobPost?.map((jobPostData) => (
                                    <CompanyCard key={jobPostData.id} jobPostData={jobPostData} />
                                ))}

                                <Stack
                                    alignItems="center"
                                    direction="row"
                                    justifyContent="flex-end"
                                    spacing={2}
                                    sx={{
                                        px: 3,
                                        py: 2
                                    }}
                                >
                                    {/* <IconButton disabled>
                                        <SvgIcon fontSize="small">
                                            <ChevronLeftIcon />
                                        </SvgIcon>
                                    </IconButton>
                                    <IconButton>
                                        <SvgIcon fontSize="small">
                                            <ChevronRightIcon />
                                        </SvgIcon>
                                    </IconButton> */}
                                </Stack>
                            </Stack>
                        </Container>
                    </Box>
                </Container>
            </Box>
        </>
    );
};
export default CareerOpening;
