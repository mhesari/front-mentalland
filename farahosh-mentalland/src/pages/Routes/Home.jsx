import { Fragment } from "react";
import HomeSection1 from "../../Components/Home-main/Home-section1/HomeSection1";
import Homesection2 from "../../Components/Home-main/Home-section2/HomeSection2";
import HomeSection3 from "../../Components/Home-main/Home-section3/HomeSection3";
import Homesection4 from "../../Components/Home-main/Home-Section4/HomeSection4";


const Home = () => {
    return ( 
        <Fragment>
            <HomeSection1 />
            <Homesection2 />
            <HomeSection3 />
            <Homesection4 />
        </Fragment>
     );
}
 
export default Home;