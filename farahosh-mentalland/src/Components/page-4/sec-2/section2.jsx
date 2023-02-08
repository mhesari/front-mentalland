import { Box, Stack, Typography } from "@mui/material";
import LinkCard from "./linkCard";
import pic1 from "../../../assests/image/Mask group (1).png";

const Section2 = () => {
    return ( 
        <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
            <Typography  sx={{fontFamily:'Alice',fontSize:{lg:"35px",xs:"15px"},py:2,textAlign:"center"}}>Children/Teenagers Psychology Services</Typography>
            <Stack className=" w-full p-16" direction={{sx:"column" , lg:"row"}} justifyContent="space-between">
                <LinkCard text={"Depression"} img={pic1} />
                <LinkCard text={"Depression"} img={pic1} />
                <LinkCard text={"Depression"} img={pic1} />
                <LinkCard text={"Depression"} img={pic1} />
                <LinkCard text={"Depression"} img={pic1} />
            </Stack>
            <Stack className="w-2/4 p-2" direction={{sx:"column" , lg:"row"}} justifyContent="space-between">
            <LinkCard text={"Depression"} img={pic1} />
            <LinkCard text={"Depression"} img={pic1} />
            <LinkCard text={"Depression"} img={pic1} />
            </Stack>
        </Box>
     );
}
 
export default Section2;