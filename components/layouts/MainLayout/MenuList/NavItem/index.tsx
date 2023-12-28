import { ForwardRefExoticComponent, RefAttributes, forwardRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useTheme } from '@mui/material/styles';
import { Avatar, ButtonBase, Chip, ListItemButton, ListItemIcon, ListItemText, Typography, useMediaQuery } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Link from 'next/link';
import { LAYOUT_CONST } from '@constants/layout';
import useConfig from '@hooks/useThemeConfig';
import { LinkTarget, NavItemType } from '@interfaces/UI/general.interface';
import { activeID, activeItem, openDrawer } from '@redux/slices/ui/menu';
import { useAppDispatch, useAppSelector } from '@redux/store';
import VisibilityPageByPermission from '@utils/permission/visibility-page-by-permission.util';

interface NavItemProps {
  item: NavItemType;
  level: number;
  parentId: string;
}

export interface ListItemPropsI {
  component: ForwardRefExoticComponent<RefAttributes<HTMLAnchorElement>> | string;
  href?: string;
  target?: LinkTarget;
}

const NavItem = ({ item, level, parentId }: NavItemProps) => {

  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('lg'));
  const matchDownMd = useMediaQuery(theme.breakpoints.down('md'));

  const dispatch = useAppDispatch();
  const { pathname } = useRouter();
  const { layout, borderRadius } = useConfig();

  const { selectedItem, drawerOpen } = useAppSelector((state) => state.menu);
  const isSelected = selectedItem.findIndex((id) => id === item.id) > -1;

  const Icon = item?.icon!;
  const itemIcon = item?.icon ? (
    <Icon
      stroke={1.5}
      size={drawerOpen ? '20px' : '24px'}
      style={{ color: isSelected ? theme.palette.secondary.main : theme.palette.text.primary }}
    />
  ) : (
    <FiberManualRecordIcon
      sx={{
        color: isSelected ? theme.palette.secondary.main : theme.palette.text.primary,
        width: selectedItem.findIndex((id) => id === item?.id) > -1 ? 8 : 6,
        height: selectedItem.findIndex((id) => id === item?.id) > -1 ? 8 : 6
      }}
      fontSize={level > 0 ? 'inherit' : 'medium'}
    />
  );

  let itemTarget: LinkTarget = '_self';
  if (item.target) {
    itemTarget = '_blank';
  }

  let listItemProps: ListItemPropsI = {
    component: forwardRef((props, ref) => <Link ref={ref} {...props} href={`${item.url!}`} target={itemTarget} />)
  }
  if (item?.external) {
    listItemProps = { component: 'a', href: item.url, target: itemTarget };
  }

  const itemHandler = (id: string) => {
    dispatch(activeItem([id]));
    if (matchesSM) dispatch(openDrawer(false));
    dispatch(activeID(parentId));
  };

  // active menu item on page load
  useEffect(() => {
    const currentIndex = document.location.pathname
      .toString()
      .split('/')
      .findIndex((id) => id === item.id);
    if (currentIndex > -1) {
      dispatch(activeItem([item.id]));
    }
  }, [pathname]);

  const textColor = theme.palette.mode === 'dark' ? 'grey.400' : 'text.primary';
  const iconSelectedColor = theme.palette.mode === 'dark' && drawerOpen ? 'text.primary' : 'secondary.main';

  return (
    <VisibilityPageByPermission slug={item.id || ''}>
      {layout === LAYOUT_CONST.VERTICAL_LAYOUT || (layout === LAYOUT_CONST.HORIZONTAL_LAYOUT && matchDownMd) ? (
        <ListItemButton
          {...listItemProps}
          disabled={item.disabled}
          disableRipple={!drawerOpen}
          sx={{
            zIndex: 1201,
            borderRadius: `${borderRadius}px`,
            mb: 0.5,
            pl: drawerOpen ? `${level * 24}px` : 1.25,
            ...(drawerOpen &&
              level === 1 &&
              theme.palette.mode !== 'dark' && {
              '&:hover': {
                background: theme.palette.secondary.light
              },
              '&.Mui-selected': {
                background: theme.palette.secondary.light,
                color: iconSelectedColor,
                '&:hover': {
                  color: iconSelectedColor,
                  background: theme.palette.secondary.light
                }
              }
            }),
            ...((!drawerOpen || level !== 1) && {
              py: level === 1 ? 0 : 1,
              '&:hover': {
                bgcolor: 'transparent'
              },
              '&.Mui-selected': {
                '&:hover': {
                  bgcolor: 'transparent'
                },
                bgcolor: 'transparent'
              }
            })
          }}
          selected={isSelected}
          onClick={() => item.id && itemHandler(item.id)}
        >
          <ButtonBase sx={{ borderRadius: `${borderRadius}px` }} disableRipple={drawerOpen} aria-label="theme-icon">
            <ListItemIcon
              sx={{
                minWidth: level === 1 ? 36 : 18,
                color: isSelected ? iconSelectedColor : textColor,
                paddingRight: "5px",
                ...(!drawerOpen &&
                  level === 1 && {
                  borderRadius: `${borderRadius}px`,
                  width: 46,
                  height: 46,
                  alignItems: 'center',
                  justifyContent: 'center',
                  '&:hover': {
                    bgcolor: theme.palette.mode === 'dark' ? theme.palette.secondary.main + 25 : 'secondary.light'
                  },
                  ...(isSelected && {
                    bgcolor: theme.palette.mode === 'dark' ? theme.palette.secondary.main + 25 : 'secondary.light',
                    '&:hover': {
                      bgcolor: theme.palette.mode === 'dark' ? theme.palette.secondary.main + 30 : 'secondary.light'
                    }
                  })
                })
              }}
            >
              {itemIcon}
            </ListItemIcon>
          </ButtonBase>

          {(drawerOpen || (!drawerOpen && level !== 1)) && (
            <ListItemText
              primary={
                <Typography variant={isSelected ? 'h5' : 'body1'} color="inherit">
                  {/* {item.id ? tLayout(item.id) : item.title} */}
                  {item.title}
                </Typography>
              }
              secondary={
                item.caption && (
                  <Typography variant="caption" sx={{ ...theme.typography.subMenuCaption }} display="block" gutterBottom>
                    {item.caption}
                  </Typography>
                )
              }
            />
          )}

          {drawerOpen && item.chip && (
            <Chip
              color={item.chip.color}
              variant={item.chip.variant}
              size={item.chip.size}
              label={item.chip.label}
              avatar={item.chip.avatar && <Avatar>{item.chip.avatar}</Avatar>}
            />
          )}
        </ListItemButton>
      ) : (
        <ListItemButton
          {...listItemProps}
          disabled={item.disabled}
          sx={{
            borderRadius: 0,
            mb: 0.5,
            alignItems: 'flex-start',
            backgroundColor: level > 1 ? 'transparent !important' : 'inherit',
            py: 1,
            pl: 2
          }}
          selected={isSelected}
          onClick={() => item.id && itemHandler(item.id)}
        >
          <ListItemIcon
            sx={{
              my: 'auto',
              minWidth: !item?.icon ? 18 : 36
            }}
          >
            {itemIcon}
          </ListItemIcon>

          <ListItemText
            primary={
              <Typography variant={isSelected ? 'h5' : 'body1'} color="inherit">
                {/* {item.id ? tLayout(item.id) : item.title} */}
                {item.title}
              </Typography>
            }
            secondary={
              item.caption && (
                <Typography variant="caption" sx={{ ...theme.typography.subMenuCaption }} display="block" gutterBottom>
                  {item.caption}
                </Typography>
              )
            }
          />

          {item.chip && (
            <Chip
              color={item.chip.color}
              variant={item.chip.variant}
              size={item.chip.size}
              label={item.chip.label}
              avatar={item.chip.avatar && <Avatar>{item.chip.avatar}</Avatar>}
            />
          )}
        </ListItemButton>
      )}
    </VisibilityPageByPermission>
  );
};

export default NavItem;
