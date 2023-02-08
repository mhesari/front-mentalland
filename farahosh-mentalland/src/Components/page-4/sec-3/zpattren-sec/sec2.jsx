import { Box  , Stack} from "@mui/system";
import pic1 from "../../../../assests/image/Group 928.png";
import styles from "../../../page3/sec-4/section4_style.module.css";
import ZPattern from "../../../z-pattren/z-pattern.component";


const Sec2 = () => {
    return ( 
        <Box padding={15}>
              <ZPattern>
              <Stack
          direction={{ md: "column", lg: "row" }}
          spacing={3}
          justifyContent="center"
          alignItems="center"
        >
        <div className={styles.ZPattern_context}>
        <h3 className="z-pattern-title2">
        Adults Psychology article
        </h3>
        <p className="z-pattern-text ">
        Lorem ipsum dolor sit amet consectetur. Pretium rutrum nisi mollis sit tortor proin proin sagittis. Id nec suspendisse lacus erat. Vivamus orci bibendum at purus elit. Vel vehicula donec amet a dolor sollicitudin ut. Lectus cursus ipsum mi feugiat nulla enim. Nisl phasellus viverra quisque egestas in nec luctus ornare amet. In pellentesque volutpat urna ultrices vitae. Sed magna vitae placerat eu leo potenti semper id. Sed elementum eget adipiscing nisl in vestibulum. Volutpat.In pellentesque volutpat urna ultrices vitae. Sed magna vitae placerat eu leo potenti semper id. Sed elementum.
        </p>
        </div>
        <img className="z-pattern-image" alt=" " src={pic1} />
        </Stack>
        </ZPattern>
        </Box>
     );
}

export default Sec2;