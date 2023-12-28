import Page from "@components/app/Page";
import MainCard from "@components/app/cards/MainCard";
import BorderRadius from "@components/app/customization/BorderRadius";
import BoxContainer from "@components/app/customization/BoxContainer";
import FontFamily from "@components/app/customization/FontFamily";
import InputFilled from "@components/app/customization/InputFilled";
import LayoutMode from "@components/app/customization/LayoutMode";
import PresetColor from "@components/app/customization/PresetColor";
import Layout from "@components/layouts";
import { gridSpacing } from "@constants/theme";
import useConfig from "@hooks/useThemeConfig";
import { Grid } from "@mui/material";
import React, { ReactElement } from "react";

const ConfigureLayoutPage = () => {
    const { isLoadingSettings } = useConfig()

    return (
        <Page title="Configure Layout">
            <MainCard>
                <Grid container spacing={gridSpacing} sx={{ p: 3 }}>
                    <Grid item xs={12}>
                        {/* layout type */}
                       {!isLoadingSettings ? <LayoutMode /> : null}
                    </Grid>
                    <Grid item xs={12}>
                        {/* Theme Preset Color */}
                        {!isLoadingSettings ?  <PresetColor /> : null}
                    </Grid>
                    <Grid item xs={12}>
                        {/* font family */}
                        {!isLoadingSettings ? <FontFamily /> : null}
                    </Grid>
                    <Grid item xs={12}>
                        {/* border radius */}
                        {!isLoadingSettings ?  <BorderRadius /> : null}
                    </Grid>
                    <Grid item xs={12}>
                        {/* filled with outline textfield */}
                        {!isLoadingSettings ? <InputFilled /> : null}
                    </Grid>
                    <Grid item xs={12}>
                        {/* box container */}
                        {!isLoadingSettings ? <BoxContainer /> : null}
                    </Grid>
                </Grid>
            </MainCard>
        </Page>
    )
}

ConfigureLayoutPage.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>
};

export default ConfigureLayoutPage