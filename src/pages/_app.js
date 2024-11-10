import Head from "next/head";
import { Provider as ReduxProvider } from "react-redux";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { RTL } from "src/components/rtl";
import { SplashScreen } from "src/components/splash-screen";
import { Toaster } from "src/components/toaster";
import {
  SettingsConsumer,
  SettingsProvider,
} from "src/contexts/settings-context";
import { AuthConsumer, AuthProvider } from "src/contexts/auth/jwt-context";
import { gtmConfig } from "src/config";
import { useAnalytics } from "src/hooks/use-analytics";
import { useNProgress } from "src/hooks/use-nprogress";
import { store } from "src/store";
import { createTheme } from "src/theme";
import { createEmotionCache } from "src/utils/create-emotion-cache";
// Remove if react-quill is not used
import "react-quill/dist/quill.snow.css";
// Remove if react-draft-wysiwyg is not used
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// Remove if simplebar is not used
import "simplebar-react/dist/simplebar.min.css";
// Remove if mapbox is not used
import "mapbox-gl/dist/mapbox-gl.css";
// Remove if locales are not used
import "../locales/i18n";
import "../globals.css";

import GetInTouch from "src/components/get-in-touch";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const clientSideEmotionCache = createEmotionCache();

const App = (props) => {


  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  useAnalytics(gtmConfig);
  useNProgress();

  const getLayout = Component.getLayout ?? ((page) => page);

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { refetchOnWindowFocus: false, refetchOnMount: false },
    },
  });

  return (
    <>
      <CacheProvider value={emotionCache}>
        <Head>
          <title>HVG Infotech PVT LTD</title>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ReduxProvider store={store}>
          <QueryClientProvider client={queryClient}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <AuthProvider>
                <AuthConsumer>
                  {(auth) => (
                    <SettingsProvider>
                      <SettingsConsumer>
                        {(settings) => {
                          // Prevent theme flicker when restoring custom settings from browser storage
                          if (!settings.isInitialized) {
                            // return null;
                          }

                          const theme = createTheme({
                            colorPreset: settings.colorPreset,
                            contrast: settings.contrast,
                            direction: settings.direction,
                            paletteMode: settings.paletteMode,
                            responsiveFontSizes: settings.responsiveFontSizes,
                          });

                          // Prevent guards from redirecting
                          const showSlashScreen = !auth.isInitialized;

                          return (
                            <ThemeProvider theme={theme}>
                              <Head>
                                <meta
                                  name="color-scheme"
                                  content={settings.paletteMode}
                                />
                                <meta
                                  name="theme-color"
                                  content={theme.palette.neutral[900]}
                                />
                              </Head>
                              <RTL direction={settings.direction}>
                                <CssBaseline />
                                {showSlashScreen ? (
                                  <SplashScreen />
                                ) : (
                                  <>
                                    {getLayout(<Component {...pageProps} />)}
                                    <GetInTouch />
                                  </>
                                )}
                                <Toaster />
                              </RTL>
                            </ThemeProvider>
                          );
                        }}
                      </SettingsConsumer>
                    </SettingsProvider>
                  )}
                </AuthConsumer>
              </AuthProvider>
            </LocalizationProvider>
          </QueryClientProvider>
        </ReduxProvider>
      </CacheProvider>
    </>
  );
};

export default App;
