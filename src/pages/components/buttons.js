import { Box, Container, Stack } from '@mui/material';
import { Seo } from 'src/components/seo';
import { usePageView } from 'src/hooks/use-page-view';
import { Layout as ComponentsLayout } from 'src/layouts/components';
import { Layout as MarketingLayout } from 'src/layouts/marketing';
import { Previewer } from 'src/sections/components/previewer';
import { Buttons1 } from 'src/sections/components/buttons/buttons-1';
import { Buttons2 } from 'src/sections/components/buttons/buttons-2';
import { Buttons3 } from 'src/sections/components/buttons/buttons-3';

const components = [
  {
    element: <Buttons1 />,
    title: 'Simple buttons'
  },
  {
    element: <Buttons2 />,
    title: 'Buttons with text and icon'
  },
  {
    element: <Buttons3 />,
    title: 'Button groups'
  }
];

const Page = () => {
  usePageView();

  return (
    <>
      <Seo title="Components: Buttons" />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={8}>
            {components.map((component) => (
              <Previewer
                key={component.title}
                title={component.title}
              >
                {component.element}
              </Previewer>
            ))}
          </Stack>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => (
  <MarketingLayout>
    <ComponentsLayout title="Buttons">
      {page}
    </ComponentsLayout>
  </MarketingLayout>
);

export default Page;
