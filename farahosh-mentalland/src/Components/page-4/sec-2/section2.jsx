import { Box, Stack,Grid , Typography } from "@mui/material";
import LinkCard from "./linkCard";
import pic1 from "../../../assests/image/Mask group (1).png";

const Section2 = () => {
    return ( 
        <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
            <Typography  sx={{fontFamily:'Alice',fontSize:{lg:"35px",xs:"15px"},py:2,textAlign:"center"}}>Children/Teenagers Psychology Services</Typography>
            <Grid container
            direction="row"
  justifyContent="center"
  alignItems="center">
              <Grid xs={6} lg={2} md={4}><LinkCard text={"Depression"} img={pic1} /></Grid>  
              <Grid xs={6} lg={2} md={4}><LinkCard text={"Depression"} img={pic1} /></Grid>  
              <Grid xs={6} lg={2} md={4}><LinkCard text={"Depression"} img={pic1} /></Grid>  
              <Grid xs={6} lg={2} md={4}><LinkCard text={"Depression"} img={pic1} /></Grid>  
              <Grid xs={6} lg={2} md={4}><LinkCard text={"Depression"} img={pic1} /></Grid>  
            </Grid>
            <Grid container
            direction="row"
  justifyContent="center"
  alignItems="center">
              <Grid xs={6} lg={2} md={4}><LinkCard text={"Depression"} img={pic1} /></Grid>  
              <Grid xs={6} lg={2} md={4}><LinkCard text={"Depression"} img={pic1} /></Grid>  
              <Grid xs={6} lg={2} md={4}><LinkCard text={"Depression"} img={pic1} /></Grid>  
            </Grid>
        </Box>
     );
}
 
export default Section2;