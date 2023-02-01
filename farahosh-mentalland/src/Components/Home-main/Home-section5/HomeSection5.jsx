import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import pic1Card from "../../../assests/image/Ellipse 5.png";
import styles from "./HomeSection5.style.module.css";

const Homesection5 = () => {
    return ( 
        <div>
            <h3>What Our Patients Say</h3>
            <p>Lorem ipsum dolor sit amet consectetur. Ut turpis nunc ac felis sapien diam. Sed velit dignissim viverra natoque. Ut mattis egestas </p>
            <div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide>
                <div className={styles.section5_card}>
                    <img alt="" src={pic1Card} />
                    <h5>Benjamin Smith</h5>
                    <div></div>
                    <p>Lorem ipsum dolor sit amet consectetur. Scelerisque risus nulla viverra orci tristique magna et. Sagittis enim ut gravida sed volutpat est arcu vitae ....</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 1</SwiperSlide>
            </Swiper>
            </div>
        </div>
     );
}
 
export default Homesection5;