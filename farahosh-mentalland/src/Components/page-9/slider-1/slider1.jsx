import { Box } from "@mui/system";
import ImageSlider from "../SliderTop/ImageSlider"


const Slid1= () => {
  return (
    
     <>
        <Box className="slider1" sx={{width:"90%",margin:"0px auto",overflowX:"hidden"}}>
            <ImageSlider />
        </Box>
     </>

  );
};

export default Slid1;
