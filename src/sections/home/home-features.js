import { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Stack,
  SvgIcon,
  Typography,
  Unstable_Grid2 as Grid
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import LinkExternal01Icon from '@untitled-ui/icons-react/build/esm/LinkExternal01';

const features = [
  {
    id: 'analysis',
    title: 'Requirement Analysis',
    description: 'We will engage in detailed discussions to thoroughly understand your requirements, enabling us to meticulously plan the project and ensure alignment with your specific needs.    ',
    imageDark: '/assets/home-features-experts-dark.png',
    imageLight: '/assets/home-features-experts-light.png'
  },
  {
    id: 'strategizing',
    title: 'Strategizing',
    description: 'To select a tech stack, project architecture, and timeline for implementing a project similar to an existing one, you need to consider several factors.',
    imageDark: '/assets/home-features-figma-dark.png',
    imageLight: '/assets/home-features-figma-light.png'
  },
  {
    id: 'design',
    title: 'Design & Development',
    description: 'Develop a sophisticated layout and wireframe for your project.Design a polished layout and wireframe for your project.',
    imageDark: '/assets/home-features-tech-dark.png',
    imageLight: '/assets/home-features-tech-light.png'
  },
  {
    id: 'production',
    title: 'Production',
    description: 'Establishing and performing trials on your dream product.',
    imageDark: '/assets/home-features-customize-dark.png',
    imageLight: '/assets/home-features-customize-light.png'
  },
  {
    id: 'deployment ',
    title: 'Deployment & Enhancement',
    description: 'Setting up a conducive ecosystem for expansion, scalability, and monitoring.We will service your product routinely to maintain its efficient performance.',
    imageDark: '/assets/home-features-nextjs-dark.png',
    imageLight: '/assets/home-features-nextjs-light.png'
  }
];

export const HomeFeatures = () => {
  const theme = useTheme();
  const [activeFeature, setActiveFeature] = useState(0);
  const feature = features[activeFeature];
  const image = theme.palette.mode === 'dark' ? feature?.imageDark : feature?.imageLight;

  return (
    <Box
      sx={{
        backgroundColor: 'neutral.800',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top center',
        backgroundImage: 'url("/assets/gradient-bg.svg")',
        color: 'common.white',
        py: '120px'
      }}
    >
      <Container maxWidth="lg">
        <Stack
          spacing={2}
          sx={{ mb: 8 }}
        >
          <Typography
            align="center"
            color="inherit"
            variant="h3"
          >
            Our Workflow

          </Typography>
          <Typography
            align="center"
            color="inherit"
            variant="subtitle2"
          >
            
Our workflow encompasses a systematic and efficient process that guides us in delivering high-quality results.
          </Typography>
        </Stack>
        <Grid
          alignItems="center"
          container
          spacing={3}
        >
          <Grid
            xs={12}
            md={6}
          >
            <Stack spacing={1}>
              {features.map((feature, index) => {
                const isActive = activeFeature === index;

                return (
                  <Box
                 
                    key={feature.id}
                    onClick={() => setActiveFeature(index)}
                    sx={{
                      borderRadius: 2.5,
                      color: 'neutral.400',
                      cursor: 'pointer',
                      p: 3,
                      transition: (theme) => theme.transitions.create([
                        'background-color, box-shadow',
                        'color'
                      ], {
                        easing: theme.transitions.easing.easeOut,
                        duration: theme.transitions.duration.enteringScreen
                      }),
                      ...(isActive && {
                        backgroundColor: 'primary.alpha12',
                        boxShadow: (theme) => `${theme.palette.primary.main} 0 0 0 1px`,
                        color: 'common.white'
                      }),
                      '&:hover': {
                        ...(!isActive && {
                          backgroundColor: 'primary.alpha4',
                          boxShadow: (theme) => `${theme.palette.primary.main} 0 0 0 1px`,
                          color: 'common.white'
                        })
                      }
                    }}
                  >
                    <Typography
                      color="inherit"
                      sx={{ mb: 1 }}
                      variant="h6"
                    >
                      {feature.title}
                    </Typography>
                    <Typography
                      color="inherit"
                      variant="body2"
                    >
                      {feature.description}
                    </Typography>
                    {feature.id === 'figma' && (
                      <Box sx={{ mt: 3 }}>
                        <Button
                          color="success"
                          component="a"
                          endIcon={(
                            <SvgIcon fontSize="small">
                              <LinkExternal01Icon />
                            </SvgIcon>
                          )}
                          href="https://www.figma.com/file/xrx6uDljzsWuDZiuz3ITCp/Devias-Kit-Pro-UI-6.0-Master"
                          size="small"
                          target="_blank"
                          variant="contained"
                        >
                          Preview in Figma
                        </Button>
                      </Box>
                    )}
                  </Box>
                );
              })}
            </Stack>
          </Grid>
          <Grid
            xs={12}
            md={6}
          >
            <Box
              sx={{
                '& img': {
                  width: '100%'
                }
              }}
             
            >
              <img src={image} alt=''/>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
