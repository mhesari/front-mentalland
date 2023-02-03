import { Avatar, Box, Typography } from "@mui/material";
import Img1 from "../../../assests/image/page business/Rectangle 151.png"

const Sec3 = ()=>{
    return(
        <>
            <Box sx={{position:"relative" , width:1}}>
                <Avatar src={Img1} sx={{width:1,height:"auto"}} variant="square"/>
                <Typography sx={{position:"absolute",top:"150px",fontStyle:"Regular",left:"50%",transform:"translate(-50%,-50%)",fontFamily:"Alice",fontWeight:"400",fontSize:"38px"}}>Mentalland Business programs for you</Typography>
                <Typography sx={{fontSize:"18px",fontFamily:"Gilroy-Regular",lineHeight:"28px",position:"absolute",top:"300px" ,width:"85%",left:"50%",transform:"translate(-50%,-50%)",textAlign:"center"}}>Lorem ipsum dolor sit amet consectetur. Tincidunt mauris aliquam diam praesent dictumst vulputate rutrum. Curabitur nunc dolor habitasse nunc. Condimentum fames pharetra molestie mattis sit. Morbi nunc sed gravida risus suspendisse dolor neque. Ultrices auctor adipiscing mauris et enim egestas habitant fringilla duis. Sagittis amet etiam elementum ultricies velit turpis consequat. Duis risus eu urna ornare tincidunt enim eu sociis. Ultricies ornare quam nullam non eget massa nisl est. Etiam velit tempor imperdiet tristique blandit. Sed a consectetur lectus adipiscing lacus gravida egestas. Tellus ut consectetur donec tincidunt pellentesque consectetur quis placerat. Ut erat quis senectus faucibus pulvinar senectus. Lectus nam est dignissim viverra suspendisse id scelerisque aliquam lobortis. Non magnis pulvinar diam egestas.
                </Typography>
            </Box>
        </>
    )
}
export default Sec3;