import { Box } from "@mui/material";
import { Seo } from "src/components/seo";
import { usePageView } from "src/hooks/use-page-view";
import { layout } from "src/utils/constant";
import { description } from "src/meta-description";
import { ProductTable } from "src/components/product-table/ProductTable";

const Page = () => {
    usePageView();

    return (
        <>
            <Seo title="About Us" description={description.aboutUs} />
            <Box component="main" sx={{ overflowX: "hidden" }}>
                <Box pt={2}>
                    <Box padding={{ lg: "50px 50px", xs: "50px 0px", md: "50px 0px" }}  >
                    <ProductTable />
                    </Box>
                </Box>
            </Box>
        </>
    );
};

layout(Page);

export default Page;
