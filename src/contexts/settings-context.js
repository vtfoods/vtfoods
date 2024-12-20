import { createContext, useCallback, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import isEqual from 'lodash.isequal';

const STORAGE_KEY = 'app.settings';

const restoreSettings = () => {
  let value = null;

  try {
    const restored = window.localStorage.getItem(STORAGE_KEY);

    if (restored) {
      value = JSON.parse(restored);
    }
  } catch (err) {
    console.error(err);
    // If stored data is not a strigified JSON this will fail,
    // that's why we catch the error
  }

  return value;
};

const deleteSettings = () => {
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch (err) {
    console.error(err);
  }
};

const storeSettings = (value) => {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
  } catch (err) {
    console.error(err);
  }
};

const initialSettings = {
  colorPreset: 'indigo',
  contrast: 'normal',
  direction: 'ltr',
  layout: 'vertical',
  navColor: 'evident',
  paletteMode: 'light',
  responsiveFontSizes: true,
  stretch: false
};

const initialState = {
  ...initialSettings,
  isInitialized: false,
  openDrawer: false
};

export const SettingsContext = createContext({
  ...initialState,
  handleDrawerClose: () => { },
  handleDrawerOpen: () => { },
  handleReset: () => { },
  handleUpdate: () => { },
  isCustom: false
});

export const SettingsProvider = (props) => {
  const { children } = props;
  const [state, setState] = useState(initialState);

  useEffect(() => {
    const restored = restoreSettings();

    if (restored) {
      setState((prevState) => ({
        ...prevState,
        ...restored,
        isInitialized: true
      }));
    }
  }, []);

  const handleReset = useCallback(() => {
    deleteSettings();
    setState((prevState) => ({
      ...prevState,
      ...initialSettings
    }));
  }, []);

  const handleUpdate = useCallback((settings) => {
    setState((prevState) => {
      storeSettings({
        colorPreset: initialSettings.colorPreset,
        contrast: initialSettings.contrast,
        direction: initialSettings.direction,
        layout: initialSettings.layout,
        navColor: initialSettings.navColor,
        paletteMode: initialSettings.paletteMode,
        responsiveFontSizes: initialSettings.responsiveFontSizes,
        stretch: initialSettings.stretch,
        ...settings
      });

      return {
        ...prevState,
        ...settings
      };
    });
  }, []);

  const handleDrawerOpen = useCallback(() => {
    setState((prevState) => ({
      ...prevState,
      openDrawer: true
    }));
  }, []);

  const handleDrawerClose = useCallback(() => {
    setState((prevState) => ({
      ...prevState,
      openDrawer: false
    }));
  }, []);

  const isCustom = useMemo(() => {
    return !isEqual(initialSettings, {
      colorPreset: initialSettings.colorPreset,
      contrast: initialSettings.contrast,
      direction: initialSettings.direction,
      layout: initialSettings.layout,
      navColor: initialSettings.navColor,
      paletteMode: initialSettings.paletteMode,
      responsiveFontSizes: initialSettings.responsiveFontSizes,
      stretch: initialSettings.stretch
    });
  }, [state]);

  return (
    <SettingsContext.Provider
      value={{
        ...state,
        handleDrawerClose,
        handleDrawerOpen,
        handleReset,
        handleUpdate,
        isCustom
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

SettingsProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export const SettingsConsumer = SettingsContext.Consumer;
