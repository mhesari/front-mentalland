import ZPattern from "../../../z-pattren/z-pattern.component";
import { Stack } from "@mui/material";
import styles from "../../../page3/sec-2/section2.style.module.css";
import pic1 from "../../../../assests/image/Group 930.png";

const Sec3 = () => {
    return ( 
        <ZPattern  zPatternType={"zPatternLtr"} >
        <Stack
    direction={{ md: "column", lg: "row" }}
    spacing={3}
    justifyContent="end"
    alignItems="flex-start"
  >
     <img className={styles.ZPattern_img} alt="" src={pic1} />
  <div className={styles.ZPattern_context}>
  <h3>
  cHILDREN Psychology article
  </h3>
  <p>
  Lorem ipsum dolor sit amet consectetur. Pretium rutrum nisi mollis sit tortor proin proin sagittis. Id nec suspendisse lacus erat. Vivamus orci bibendum at purus elit. Vel vehicula donec amet a dolor sollicitudin ut. Lectus cursus ipsum mi feugiat nulla enim. Nisl phasellus viverra quisque egestas in nec luctus ornare amet. In pellentesque volutpat urna ultrices vitae. Sed magna vitae placerat eu leo potenti semper id. Sed elementum eget adipiscing nisl in vestibulum. Volutpat.
  </p>
  </div>
  </Stack>
  </ZPattern>
     );
}
 
export default Sec3;