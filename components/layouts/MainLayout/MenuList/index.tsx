import { memo } from 'react';

// material-ui
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// project imports
import { LAYOUT_CONST } from '@constants/layout';
import { HORIZONTAL_MAX_ITEM } from '@constants/theme-config';
import useConfig from '@hooks/useThemeConfig';
import { NavItemType } from '@interfaces/UI/general.interface';
// import { useAppSelector } from '@redux/store';
import menuItem from '../../../../settings/menu-items/index';
import NavGroup from './NavGroup';

// ==============================|| SIDEBAR MENU LIST ||============================== //

const MenuList = () => {
  const theme = useTheme();
  const matchDownMd = useMediaQuery(theme.breakpoints.down('md'));
  const { layout } = useConfig();

  const lastItem = layout === LAYOUT_CONST.HORIZONTAL_LAYOUT && !matchDownMd ? HORIZONTAL_MAX_ITEM : null;

  let lastItemIndex = menuItem.items.length - 1;
  let remItems: NavItemType[] = [];
  let lastItemId: string;

  if (lastItem && lastItem < menuItem.items.length) {
    lastItemId = menuItem.items[lastItem - 1].id!;
    lastItemIndex = lastItem - 1;
    remItems = menuItem.items.slice(lastItem - 1, menuItem.items.length).map((item) => ({
      title: item.title,
      elements: item.children
    }));
  }

  const navItems = menuItem.items?.slice(0, lastItemIndex + 1).map((item) => {
    switch (item.type) {
      case 'group':
        return <NavGroup key={item.id} item={item} lastItem={lastItem!} remItems={remItems} lastItemId={lastItemId} />;
    }
  });

  return <>{navItems}</>;
};

export default memo(MenuList);
