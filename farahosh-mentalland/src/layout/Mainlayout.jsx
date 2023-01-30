import { ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl"
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import {prefixer} from "stylis"

import Grid from "@mui/material/Unstable_Grid2";

import { DarkTheme  , LightTheme } from "./themes";
import { useTheme } from "@mui/material/styles";
// Note Create Rtl Cache
const rtlcache = createCache({
    key:"muirtl",
    stylisPlugins: [prefixer , rtlPlugin]
})
const MainLayout = ({children})=>{
    const currentTheme = useTheme();

    return(
        <CacheProvider value={rtlcache}>
            <ThemeProvider theme={currentTheme.palette.mode=="dark"?DarkTheme:LightTheme}>
                <Grid container sx={{height:"100vh" , overflowX:"hidden",overflowY:"scroll"}}>
                    {children}
                </Grid>
            </ThemeProvider>
        </CacheProvider>
    )
}
export default MainLayout;