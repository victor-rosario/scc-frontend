import { useEffect, useRef, useState } from 'react';
import {
  Avatar,
  Box,
  Chip,
  ClickAwayListener,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Popper,
  Stack,
  Typography
} from '@mui/material';
import { IconLogout, IconSettings } from '@tabler/icons';
import { useTheme } from '@mui/material/styles';
import { useRouter } from 'next/router'
import PerfectScrollbar from 'react-perfect-scrollbar';
import useConfig from '@hooks/useThemeConfig';
import Transitions from '@components/app/extended/Transitions';
import MainCard from '@components/app/cards/MainCard';
import { profileMenuItems } from './profile-items.settings';
import { useAppSelector } from '@redux/store';

const User1 = '/assets/images/users/User-Pic.svg';

const ProfileSection = () => {

  const { account: accountLogged } = useAppSelector(x => x.me)

  const theme = useTheme();
  const { borderRadius } = useConfig();
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<any>(null);
  const router = useRouter()


  const handleLogout = async () => { };

  const handleClose = (event: React.MouseEvent<HTMLDivElement> | MouseEvent | TouchEvent) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const handleListItemClick = (event: React.MouseEvent<HTMLDivElement>, index: number, route: string = '') => {
    setSelectedIndex(index);
    handleClose(event);

    if (route && route !== '') {
      router.push(route)
    }
  };
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <>
      <Chip
        sx={{
          height: '48px',
          alignItems: 'center',
          borderRadius: '27px',
          transition: 'all .2s ease-in-out',
          borderColor: theme.palette.mode === 'dark' ? theme.palette.dark.main : theme.palette.primary.light,
          backgroundColor: theme.palette.mode === 'dark' ? theme.palette.dark.main : theme.palette.primary.light,
          '&[aria-controls="menu-list-grow"], &:hover': {
            borderColor: theme.palette.primary.main,
            background: `${theme.palette.primary.main}!important`,
            color: theme.palette.primary.light,
            '& svg': {
              stroke: theme.palette.primary.light
            }
          },
          '& .MuiChip-label': {
            lineHeight: 0
          }
        }}
        icon={
          <Avatar
            src={User1}
            sx={{
              ...theme.typography.mediumAvatar,
              margin: '8px 0 8px 8px !important',
              cursor: 'pointer'
            }}
            ref={anchorRef}
            aria-controls={open ? 'menu-list-grow' : undefined}
            aria-haspopup="true"
            color="inherit"
            alt="user images"
          />
        }
        label={<IconSettings stroke={1.5} size="24px" color={theme.palette.primary.main} />}
        variant="outlined"
        ref={anchorRef}
        aria-controls={open ? 'menu-list-grow' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        color="primary"
      />
      <Popper
        placement="bottom-end"
        placeholder='bottom-end'
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        modifiers={[
          {
            name: 'offset',
            options: {
              offset: [0, 14]
            }
          }
        ]}
      >
        {({ TransitionProps }) => (
          <ClickAwayListener onClickAway={handleClose}>
            <Transitions in={open} {...TransitionProps}>
              <Paper>
                {open && (
                  <MainCard border={false} elevation={16} content={false} boxShadow shadow={theme.shadows[16]}>
                    <Box sx={{ p: 2, pb: 0 }}>
                      <Stack>
                        <Stack direction="row" spacing={0.5} alignItems="center">
                          <Typography variant="h4">Buenos días,</Typography>
                          <Typography component="span" variant="h4" sx={{ fontWeight: 400 }}>
                            {accountLogged?.firstName || "Default"} {accountLogged?.lastName || "Default"}
                          </Typography>
                        </Stack>
                        <Typography variant="subtitle2">{accountLogged?.role?.name || "Admin"}</Typography>
                      </Stack>
                      <Divider />
                    </Box>
                    <PerfectScrollbar style={{ height: '100%', maxHeight: 'calc(100vh - 250px)', overflowX: 'hidden' }}>
                      <Box sx={{ p: 2, pt: 0 }}>
                        <List
                          component="nav"
                          sx={{
                            width: '100%',
                            maxWidth: 350,
                            minWidth: 300,
                            backgroundColor: theme.palette.background.paper,
                            borderRadius: '10px',
                            [theme.breakpoints.down('md')]: {
                              minWidth: '100%'
                            },
                            '& .MuiListItemButton-root': {
                              mt: 0.5
                            }
                          }}
                        >
                          {profileMenuItems.map((item, index) => (
                            <ListItemButton
                              key={`profile-item-${index}`}
                              sx={{ borderRadius: `${borderRadius}px` }}
                              selected={selectedIndex === index}
                              onClick={(event: React.MouseEvent<HTMLDivElement>) => {
                                item?.href && handleListItemClick(event, index, item?.href)
                              }}
                            >
                              {item.icon ? (
                                <ListItemIcon>
                                  {item?.icon}
                                </ListItemIcon>
                              ) : null}
                              <ListItemText
                                primary={
                                  <Typography variant="body2">
                                    {item?.text}
                                  </Typography>
                                }
                              />
                            </ListItemButton>
                          ))}

                          <ListItemButton sx={{ borderRadius: `${borderRadius}px` }} selected={selectedIndex === 4} onClick={handleLogout}>
                            <ListItemIcon>
                              <IconLogout stroke={1.5} size="20px" />
                            </ListItemIcon>
                            <ListItemText
                              primary={
                                <Typography variant="body2">
                                  Cerrar sesión
                                </Typography>
                              }
                            />
                          </ListItemButton>
                        </List>
                      </Box>
                    </PerfectScrollbar>
                  </MainCard>
                )}
              </Paper>
            </Transitions>
          </ClickAwayListener>
        )}
      </Popper>
    </>
  );
};

export default ProfileSection;
