import { ConfigProps } from "@interfaces/UI/theme-config.interface";
import { LAYOUT_CONST } from "./layout";

export const BASE_PATH = '';

export const DASHBOARD_PATH = '/sample-page';
export const HORIZONTAL_MAX_ITEM = 6;

const appThemeConfig: ConfigProps = {
  layout: LAYOUT_CONST.VERTICAL_LAYOUT, // vertical, horizontal
  drawerType: LAYOUT_CONST.DEFAULT_DRAWER, // default, mini-drawer
  fontFamily: `'Roboto', sans-serif`,
  borderRadius: 8,
  outlinedFilled: true,
  navType: 'light', // light, dark
  presetColor: 'default', // default, theme1, theme2, theme3, theme4, theme5, theme6
  locale: 'en', // 'en' - English, 'fr' - French, 'ro' - Romanian, 'zh' - Chinese
  rtlLayout: false,
  container: false
};

export default appThemeConfig;
