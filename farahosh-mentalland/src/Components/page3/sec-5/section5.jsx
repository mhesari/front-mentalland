import ZPattern from "../../z-pattren/z-pattern.component";
import pic1 from "../../../assests/image/Group 934.png";
import styles from "./section5.style.module.css";

const Section5 = () => {
    return ( 
        <ZPattern>
        <img alt="" src={pic1} />
        <div className={styles.ZPattern_context}>
            <h3>Adults Psychology article</h3>
            <p>Lorem ipsum dolor sit amet consectetur. Pretium rutrum nisi mollis sit tortor proin proin sagittis. Id nec suspendisse lacus erat. Vivamus orci bibendum at purus elit. Vel vehicula donec amet a dolor sollicitudin ut. Lectus cursus ipsum mi feugiat nulla enim. Nisl phasellus viverra quisque egestas in nec luctus ornare amet. In pellentesque volutpat urna ultrices vitae. Sed magna vitae placerat eu leo potenti semper id. Sed elementum eget adipiscing nisl in vestibulum. Volutpat.</p>
            <p>
            In pellentesque volutpat urna ultrices vitae. Sed magna vitae placerat eu leo potenti semper id. Sed elementum eget adipiscing nisl in vestibulum. Volutpat.
            </p>
        </div>
        </ZPattern>
     );
}
 
export default Section5;