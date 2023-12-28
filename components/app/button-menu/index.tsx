import {
    ButtonBase,
    Avatar,
    Menu,
    MenuItem,
    Typography,
    useTheme
} from '@mui/material'
import { Fragment, MouseEvent, useState } from 'react';
import { IButtonMenuProps } from './button-menu.interface';

const ButtonMenu = ({
    items,
    disabled,
    icon,
    label
}: IButtonMenuProps) => {

    const theme = useTheme()
    const [anchor, setAnchor] = useState<Element | null>(null)

    const handleClick = (event: MouseEvent) => {
        setAnchor(event.currentTarget);
    }

    const handleClose = () => {
        setAnchor(null);
    }

    return (
        <Fragment>
            <ButtonBase disabled={disabled} sx={{ borderRadius: '12px' }} onClick={handleClick} aria-label={label}>
                <Avatar
                    variant="rounded"
                    sx={{
                        ...theme.typography.commonAvatar,
                        ...theme.typography.smallAvatar,
                        background: theme.palette.mode === 'dark' ? theme.palette.dark.main : theme.palette.secondary.light,
                        color: theme.palette.mode === 'dark' ? theme.palette.dark.light : theme.palette.secondary.dark,
                        zIndex: 1,
                        transition: 'all .2s ease-in-out',
                        '&[aria-controls="menu-list-grow"],&:hover': {
                            background: theme.palette.secondary.main,
                            color: theme.palette.secondary.light
                        }
                    }}
                    aria-controls="menu-post"
                    aria-haspopup="true"
                >
                    {icon}
                    {label && <Typography variant="body2">{label}</Typography>}
                </Avatar>
            </ButtonBase>
            <Menu
                id="menu-post"
                anchorEl={anchor}
                keepMounted
                open={Boolean(anchor)}
                onClose={handleClose}
                variant="selectedMenu"
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right'
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                }}
                sx={{
                    '& .MuiSvgIcon-root': {
                        marginRight: '14px',
                        fontSize: '1.25rem'
                    }
                }}
            >
                {items.map((item, index) => (
                    <MenuItem key={index} onClick={() => {
                        item.onClick?.()
                        handleClose()
                    }}>
                        {item.icon}
                        {item.label}
                    </MenuItem>
                ))}
            </Menu>
        </Fragment>
    )
}

export default ButtonMenu;