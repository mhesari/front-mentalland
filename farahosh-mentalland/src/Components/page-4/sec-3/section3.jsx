
import Slider1 from "./slider1/slider1";
import Slider2 from "./slider2/slider2";
import Sec1 from "./zpattren-sec/sec1";
import styles from "./section3.style.module.css";

const Section3 = () => {
    return ( 
        <div className={styles.section3_bg} >
            {/* <Sec1 /> */}
            <Slider1/>
            <Slider2 />
        </div>
     );
}
 
export default Section3;