import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Box } from "@mui/system";
const Footer = ()=>{
    return (
        <>
            <Grid container sx={{width:1}}>
                <Grid xs={12} md={5}>
                    <Box sx={{background:"red" , width:1}}>

                    </Box>
                </Grid>
                <Grid xs={12} md={7}>
                    
                </Grid>
            </Grid>
        </>
    )
}
export default Footer;