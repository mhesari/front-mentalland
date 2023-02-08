import   "swiper/css"
import   "swiper/css/pagination"
import   "swiper/css/navigation"
import "./style.css"
import Box from "@mui/material/Box"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation} from "swiper";
import {useTheme} from "@mui/material/styles"
import useMediaQuery from "@mui/material/useMediaQuery"
import { Typography } from "@mui/material";
import PersonalCard from "../card/personalityCard"


const SliderSection = ({data,title , text}) => {
    const theme = useTheme();
    var matches = 3;
    matches = useMediaQuery(theme.breakpoints.down('md'))?1:false;
    matches = matches?matches:3;
    
    return ( 
        <Box  sx={{overflowY:"visible"}}>
        <Typography sx={{fontFamily:"Gilroy-SemiBold",fontSize:{lg:"30px",xs:"15px"},py:2,textAlign:"left"}}>{title}</Typography>
            <Swiper modules={[ Navigation]}   navigation={true} slidesPerView={matches} className="mySwiper w-full h-full " spaceBetween={10}  effect="fade">
                                {
                                    data.map((item ,index)=>(
                                        <SwiperSlide key={index} virtualIndex={index}>
                                           <PersonalCard img={item.img} caption={item.caption} />
                                        </SwiperSlide>
                                    ))
                                }            
            </Swiper>
        
    </Box>
     );
}
 
export default SliderSection;