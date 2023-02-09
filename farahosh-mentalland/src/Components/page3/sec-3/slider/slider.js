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
    var matches = 4;
    matches = useMediaQuery(theme.breakpoints.down('md'))?2:false;
    matches = matches?matches:4;
    
    return ( 
        <Box  sx={{overflowY:"visible"}} className="flex flex-col align-middle justify-around items-center">
        <Typography sx={{fontFamily:'Alice',fontSize:{lg:"35px",xs:"15px"},py:2,textAlign:"center"}}>{title}</Typography>
        <Typography sx={{fontFamily:'Gilroy-Regular',width:{lg:"1200px" , xs: "200px"} ,fontSize:{lg:"22px",xs:"15px"},py:2,textAlign:"center"}}>{text}</Typography>
            <Swiper modules={[ Navigation]}   navigation={true} slidesPerView={matches} className="mySwiper" spaceBetween={0}  effect="fade">
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