import styles from "./sec_2.style.module.css";
import pic1 from "../../../assests/image/Group 1094.png";
import { Box, Grid } from "@mui/material";

const ContactSection2 = () => {
    return ( 
        <div className={styles.bg_sec2}>
        <Box>
            <Grid container   direction="row"
  justifyContent="space-between"
  alignItems="center">
                <Grid className={styles.contat_items} container xs={1} lg={3} direction={"column"} justifyContent={"space-between"}
                alignItems={"center"}>
                    <img src={pic1} alt="" />
                    <h5>Email Us</h5>
                    <p>mentalland@gmail.com</p>
                </Grid>
                <Grid className={styles.contat_items}  container xs={1} lg={3} direction={"column"} justifyContent={"space-between"}
                alignItems={"center"}>
                    <img src={pic1} alt="" />
                    <h5>Email Us</h5>
                    <p>mentalland@gmail.com</p>
                </Grid><Grid className={styles.contat_items} container xs={1} lg={3} direction={"column"} justifyContent={"center"}
                alignItems={"center"}>
                    <img src={pic1} alt="" />
                    <h5>Email Us</h5>
                    <p>mentalland@gmail.com</p>
                </Grid>

            </Grid>
        </Box>
        </div>
     );
}
 
export default ContactSection2;