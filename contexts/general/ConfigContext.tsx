import { createContext, ReactNode, useState, useEffect } from 'react';
import { PaletteMode } from '@mui/material';
import { CustomizationProps } from '@interfaces/UI/theme-config.interface';
import appThemeConfig from '@constants/theme-config';
import useLocalStorage from '@hooks/useLocalStorage';
import uiSettingsAdminProvider from '@providers/ui-settings/ui-settings.provider';
import { openSnackbar } from '@redux/slices/ui/snackbar';
import { useAppDispatch } from '@redux/store';

// initial state
const initialState: CustomizationProps = {
  ...appThemeConfig,
  onChangeLayout: () => { },
  onChangeDrawer: () => { },
  onChangeMenuType: () => { },
  onChangePresetColor: () => { },
  onChangeLocale: () => { },
  onChangeRTL: () => { },
  onChangeContainer: () => { },
  onChangeFontFamily: () => { },
  onChangeBorderRadius: () => { },
  onChangeOutlinedField: () => { }
};

// ==============================|| CONFIG CONTEXT & PROVIDER ||============================== //

const ConfigContext = createContext(initialState);

type ConfigProviderProps = {
  children: ReactNode;
};

function ConfigProvider({ children }: ConfigProviderProps) {

  const [isLoading, setIsLoading] = useState(true)
  const dispatch = useAppDispatch()
  const [config, setConfig] = useLocalStorage('ui-settings', {
    layout: initialState.layout,
    drawerType: initialState.drawerType,
    fontFamily: initialState.fontFamily,
    borderRadius: initialState.borderRadius,
    outlinedFilled: initialState.outlinedFilled,
    navType: initialState.navType,
    presetColor: initialState.presetColor,
    locale: initialState.locale,
    rtlLayout: initialState.rtlLayout
  });

  const onChangeLayout = (layout: string) => {
    setConfig({
      ...config,
      layout
    });

    updateUISettings({ layout });
  };

  const onChangeDrawer = (drawerType: string) => {
    setConfig({
      ...config,
      drawerType
    });

    updateUISettings({ drawerType });
  };

  const onChangeMenuType = (navType: PaletteMode) => {
    setConfig({
      ...config,
      navType
    });

    updateUISettings({ navType });
  };

  const onChangePresetColor = (presetColor: string) => {
    setConfig({
      ...config,
      presetColor
    });
    updateUISettings({ presetColor });
  };

  const onChangeLocale = (locale: string) => {
    setConfig({
      ...config,
      locale
    });

    updateUISettings({ locale });
  };

  const onChangeRTL = (rtlLayout: boolean) => {
    setConfig({
      ...config,
      rtlLayout
    });

    updateUISettings({ rtlLayout });
  };

  const onChangeContainer = () => {
    setConfig({
      ...config,
      container: !config.container
    });

    updateUISettings({ container: !config.container });
  };

  const onChangeFontFamily = (fontFamily: string) => {
    setConfig({
      ...config,
      fontFamily
    });

    updateUISettings({ fontFamily });
  };

  const onChangeBorderRadius = (_event: Event, newValue: number | number[]) => {
    setConfig({
      ...config,
      borderRadius: newValue as number
    });

    updateUISettings({ borderRadius: newValue as number });
  };

  const onChangeOutlinedField = (outlinedFilled: boolean) => {
    setConfig({
      ...config,
      outlinedFilled
    });

    updateUISettings({ outlinedFilled })
  };

  useEffect(() => {
    uiSettingsAdminProvider.getUISettings().then((settings) => {
      setConfig({
        ...config,
        ...settings
      })
    }).finally(() => {
      setTimeout(() => {
        setIsLoading(false)
      }, 500)
    })
  }, [])

  const updateUISettings = (properties: { [key: string]: number | string | boolean }) => {
    uiSettingsAdminProvider.updateUISettings(properties).catch((err) => {
      dispatch(
        openSnackbar({
          open: true,
          message: `Error: ${err.message}`,
          variant: 'alert',
          alert: {
            color: 'error'
          },

          close: true,
        })
      )
    })
  }

  return (
    <ConfigContext.Provider
      value={{
        ...config,
        isLoadingSettings: isLoading,
        onChangeLayout,
        onChangeDrawer,
        onChangeMenuType,
        onChangePresetColor,
        onChangeLocale,
        onChangeRTL,
        onChangeContainer,
        onChangeFontFamily,
        onChangeBorderRadius,
        onChangeOutlinedField
      }}
    >
      {children}
    </ConfigContext.Provider>
  );
}

export { ConfigProvider, ConfigContext };
