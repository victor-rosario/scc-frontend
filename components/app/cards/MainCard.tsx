import React, { Ref } from 'react';
import { useTheme } from '@mui/material/styles';
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
  CardProps,
  CardHeaderProps,
  CardContentProps,
  SxProps,
  Theme
} from '@mui/material';
import { KeyedObject } from '@interfaces/UI/general.interface';

const headerSXProps: SxProps<Theme> = {
  '& .MuiCardHeader-action': { mr: 0 },
};

export interface MainCardProps extends KeyedObject {
  border?: boolean;
  boxShadow?: boolean;
  children: React.ReactNode | string;
  style?: React.CSSProperties;
  content?: boolean;
  className?: string;
  contentClass?: string;
  contentSX?: CardContentProps['sx'];
  darkTitle?: boolean;
  sx?: CardProps['sx'];
  secondary?: CardHeaderProps['action'];
  shadow?: string;
  elevation?: number;
  title?: React.ReactNode | string;
  mainBackgroundColor?: string
  headerSXProps?: SxProps<Theme>
}

const MainCard = React.forwardRef<HTMLDivElement, MainCardProps>(
  (
    {
      border = false,
      boxShadow,
      children,
      content = true,
      contentClass = '',
      contentSX = {},
      darkTitle,
      secondary,
      shadow,
      sx = {},
      title,
      headerSX = {},
      mainBackgroundColor = "#EEF2F6",
      ...others
    },
    ref: Ref<HTMLDivElement>
  ) => {
    const theme = useTheme();

    return (
      <Card
        ref={ref}
        {...others}
        style={{
          backgroundColor: mainBackgroundColor
        }}
        sx={{
          border: border ? '1px solid' : 'none',
          width: "100%",
          borderColor: theme.palette.mode === 'dark' ? theme.palette.background.default : theme.palette.grey[300] + 98,
          ':hover': {
            boxShadow: boxShadow
              ? shadow || (theme.palette.mode === 'dark' ? '0 2px 14px 0 rgb(33 150 243 / 10%)' : '0 2px 14px 0 rgb(32 40 45 / 8%)')
              : 'inherit'
          },
          ...sx
        }}
      >
        {/* card header and action */}
        {!darkTitle && title && <CardHeader sx={{ ...headerSXProps, ...headerSX }} title={title} action={secondary} />}
        {darkTitle && title && <CardHeader sx={{ ...headerSXProps, ...headerSX }} title={<Typography variant="h3">{title}</Typography>} action={secondary} />}

        {/* content & header divider */}
        {title && <Divider />}

        {/* card content */}
        {content && (
          <CardContent sx={contentSX} className={contentClass}>
            {children}
          </CardContent>
        )}
        {!content && children}
      </Card>
    );
  }
);

export default MainCard;
