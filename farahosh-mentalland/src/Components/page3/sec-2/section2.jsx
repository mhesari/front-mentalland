import ZPattern from "../../z-pattren/z-pattern.component";
import pic1 from "../../../assests/image/Rectangle 67.png";
import { Box } from "@mui/system";
import { Grid, Typography } from "@mui/material";
import pic2 from "../../../assests/image/Mask group.png";
import styles from "./section2.style.module.css";


const Section2 = () => {
    return ( 
        <div>
        <Box>
        <Typography sx={{fontFamily:'Alice',fontSize:{lg:"35px",xs:"15px"},py:2,textAlign:"center"}}>Adults Psychology Services</Typography>
            <Grid container display={"flex"} direction="row" justifyContent={"space-between"} padding={7}>
                <div className="flex flex-col justify-between align-middle  items-center">
                    <div className={styles.services_bg}>
                        <img
                        alt="" src={pic2} />
                    </div>
                    <p>
                    Anxiety
                    </p>
                </div>
                <div className="flex flex-col justify-between align-middle  items-center">
                    <div className={styles.services_bg}>
                        <img
                        alt="" src={pic2} />
                    </div>
                    <p>
                    Anxiety
                    </p>
                </div> <div className="flex flex-col justify-between align-middle  items-center">
                    <div className={styles.services_bg}>
                        <img
                        alt="" src={pic2} />
                    </div>
                    <p>
                    Anxiety
                    </p>
                </div> <div className="flex flex-col justify-between align-middle  items-center">
                    <div className={styles.services_bg}>
                        <img
                        alt="" src={pic2} />
                    </div>
                    <p>
                    Anxiety
                    </p>
                </div> <div className="flex flex-col justify-between align-middle  items-center">
                    <div className={styles.services_bg}>
                        <img
                        alt="" src={pic2} />
                    </div>
                    <p>
                    Anxiety
                    </p>
                </div> <div className="flex flex-col justify-between align-middle  items-center">
                    <div className={styles.services_bg}>
                        <img
                        alt="" src={pic2} />
                    </div>
                    <p>
                    Anxiety
                    </p>
                </div>
            </Grid>
        </Box>
              <ZPattern zPatternType={"zPatternLtr"} >
        <img className={styles.ZPattern_img} alt="" src={pic1} />
        <div className={styles.ZPattern_context}>
        <h3>
        Adults Psychology
        </h3>
        <p>
        Lorem ipsum dolor sit amet consectetur. Pretium rutrum nisi mollis sit tortor proin proin sagittis. Id nec suspendisse lacus erat. Vivamus orci bibendum at purus elit. Vel vehicula donec amet a dolor sollicitudin ut. Lectus cursus ipsum mi feugiat nulla enim. Nisl phasellus viverra quisque egestas in nec luctus ornare amet. In pellentesque volutpat urna ultrices vitae. Sed magna vitae placerat eu leo potenti semper id. Sed elementum eget adipiscing nisl in vestibulum. Volutpat.
        </p>
        <ul>
            <li>Lorem ipsum dolor sit amet consectetur. Pretium rutrum nisi mollis sit tortor proin proin sagittis. </li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
        </ul>
        </div>
        </ZPattern>
        </div>
      
     );
}
 
export default Section2;