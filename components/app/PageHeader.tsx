import React from 'react';
import { Breadcrumbs, Grid, Link, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import SubCard from "@components/app/cards/SubCard";
import { gridSpacing } from '@constants/theme';
import { formatBreadcrumbText } from '@utils/strings/strings.util';

const bracketRegex = /\[(.*?)\]/g;

const generateBreadcrumbs = (pathname: string): (JSX.Element | null)[] => {
    const parts = pathname.split('/').filter((part) => part !== '');

    let currentPath = '';
    return parts.map((part, index) => {

        if (bracketRegex.test(part)) return null;

        currentPath += `/${part}`;
        const isLastPart = index === parts.length - 1;

        if (isLastPart) {
            return (
                <Typography key={currentPath} sx={{ display: 'flex', alignItems: 'center' }} color="inherit">
                    {formatBreadcrumbText(part)}
                </Typography>
            );
        } else {
            return (
                <Link
                    key={currentPath}
                    underline="hover"
                    sx={{ display: 'flex', alignItems: 'center' }}
                    color="text.primary"
                    href={currentPath}
                >
                    {formatBreadcrumbText(part)}
                </Link>
            );
        }
    });
};

export const CustomBreadcrumbs = ({ pathname }: { pathname: string }) => {
    return (
        <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small" />}>
            <Link underline="hover" sx={{ display: 'flex', alignItems: 'center' }} color="inherit" href="/">
                <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" color="secondary" />
            </Link>
            {generateBreadcrumbs(pathname)}
        </Breadcrumbs>
    );
};

const PageHeader = ({ title, pathname }: { pathname: string, title: string }) => {

    return (
        <SubCard
            title={
                <Grid container alignItems="center" justifyContent="space-between" spacing={gridSpacing} style={{ marginTop: "-1rem" }}>
                    <Grid item>
                        <Typography variant="h4">{title}</Typography>
                    </Grid>
                    <Grid item>
                        <CustomBreadcrumbs pathname={pathname} />
                    </Grid>
                </Grid>
            }
            content={false}
        >
        </SubCard>
    )
}


export default PageHeader;