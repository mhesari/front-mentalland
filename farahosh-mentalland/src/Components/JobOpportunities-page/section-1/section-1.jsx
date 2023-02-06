import styles from "./section-1.style.module.css";
import Button from "../../buttons/button.component";
import { Link } from "react-router-dom";

const JobSection1 = () => {
    return (  
        <div className={styles.section1}>
        <div>
            <h3>Get Your 
                Dream Job 
                Today</h3>

            <p>
            Lorem ipsum dolor sit amet consectetur. Viverra pellentesque volutpat quis in erat. Sit aenean eget nascetur mus non. Enim a ut vitae felis convallis.
            </p> 
            <Button>
                   <Link to={""}>fucl</Link> 
          
            </Button>   
         
        </div>
        <div></div>
        </div>
    );
}
 
export default JobSection1;