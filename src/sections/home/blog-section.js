import React from 'react'
import TitleSection from './title-section'
import { Box, Container, Grid } from '@mui/material'
import BlogTabs from 'src/components/blog-tabs'

const BlogSection = () => {
    return (
        <Container maxWidth="xl">
            <Box padding={{ lg: "50px 0", xs: "50px 0", md: "50px 0" }}>

                <TitleSection title="Our Blogs" desc=" Latest Blogs And Insights From HVG PVT LTD" />
                <Box
                    sx={{
                        padding: "50px 0 0 0",
                    }}
                >
                    <BlogTabs isHome/>    
        
                </Box>
            </Box>
        </Container>

    )
}

export default BlogSection
