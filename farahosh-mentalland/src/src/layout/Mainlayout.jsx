import { ThemeProvider } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import { useTheme } from "@mui/material/styles";

const MainLayout = ({children})=>{
    const theme = useTheme();

    return(

            <ThemeProvider theme={theme}>
                <Grid container sx={{height:"100vh" , overflowX:"hidden",overflowY:"hidden"}}>
                    {children}
                </Grid>
            </ThemeProvider>

    )
}
export default MainLayout;
