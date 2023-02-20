import styles from "./sec_2.style.module.css";
import pic1 from "../../../assests/image/Group 1094.png";
import { Box, Grid } from "@mui/material";

const ContactSection2 = () => {
    return ( 
        <div className={styles.bg_sec2}>
        <Box>
            <Grid>
                <Grid direction={"column"} justifyContent={"space-between"}
                alignItems={"center"}>
                    <img src={pic1} alt="" />
                    <h5>Email Us</h5>
                    <p>mentalland@gmail.com</p>
                </Grid>
                <Grid></Grid>
                <Grid></Grid>

            </Grid>
        </Box>
        </div>
     );
}
 
export default ContactSection2;