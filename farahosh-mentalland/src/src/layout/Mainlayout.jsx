import { ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl"
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import {prefixer} from "stylis"

import Grid from "@mui/material/Unstable_Grid2";
import { theme} from "./themes";
import { useTheme } from "@mui/material/styles";

const MainLayout = ({children})=>{
    const currentTheme = useTheme();

    return(

            <ThemeProvider theme={theme}>
                <Grid container sx={{height:"100vh" , overflowX:"hidden",overflowY:"hidden"}}>
                    {children}
                </Grid>
            </ThemeProvider>

    )
}
export default MainLayout;