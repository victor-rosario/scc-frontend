import { NavItemType } from "@interfaces/UI/general.interface";

export type MenuProps = {
  selectedItem: string[];
  selectedID: string | null;
  drawerOpen: boolean;
  error: null;
  menu: NavItemType;
};
