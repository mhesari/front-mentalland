
import React, { Fragment, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import styles from "../Home-section1/HomeSection1.style.module.css"
import { Pagination } from "swiper";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
// import ColorLensIcon from '@mui/icons-material/ColorLens';
import Heart from "../../../assests/image/Group 775.svg";
import Business from "../../../assests/image/Group 774.svg";
import Art from "../../../assests/image/Group 773.svg";

const HomeSection1 = () => {
    return ( 
        <Fragment>
             <div className={styles.section1}>
                <div className={styles.Slider}>
                <Swiper pagination={true} modules={[Pagination]} className="mySwiper w-full h-full ">
            <SwiperSlide><div className={styles.sliderItem1}>
            <div className={styles.itemscontext}>
                <h3>mentalland</h3>
                <h4>
                    where you can learn, improve,
                    get calm & Be happy</h4>
                <p>Lorem ipsum dolor sit amet consectetur. Amet velit convallis amet mi leo aliquet in vestibulum consectetur. Lectus magna eleifend </p>
                
            </div>
            </div></SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
            </div>
            <div className={styles.showNumber}>
                <Grid   container
  direction="row"
  justifyContent="center"
  alignItems="center">
                    <div className={styles.Item1}>
                        <h4>+4000</h4>
                        <p>Treated
                        Patients</p>
                    </div>
                    <div className={styles.Item2}>
                    <h4>+250</h4>
                        <p>Graduacted
                        Art Students</p>
                    </div>
                    <div className={styles.Item3}>
                    <h4>+100</h4>
                        <p>Performed
                        Seminars</p>
                    </div>
                    <div className={styles.Item4}>
                    <h4>+1200</h4>
                        <p>job
                        opportunities</p>
                    </div>
                </Grid>
            </div>
        </div>
        <div className="flex flex-col align-middle justify-items-start items-center w-full">
            
               <h3 className={styles.section1_servicesTitle}>OUR PROFESSIONAL SERVICES</h3>
               <div className={styles.servicContext}> 
               <Grid container
                    direction="row"
                    justifyContent="center"
                    alignItems="flex-start"
                    gap={1}>
                 <div className={styles.servic1}>
                 <img className={styles.servic1pic} alt="" src={Heart} />
          
                 </div>
                <div className={styles.servic2}>
                <img className={styles.servic2pic}  alt="" src={Business} />
           
                </div>
                <div className={styles.servic3}>
                <img className={styles.servic3pic}  alt="" src={Art} />
            
                </div>
            </Grid>

               </div>
        </div>

        </Fragment>
       
        
      
     );
}
 
export default HomeSection1;