import { Typography,Button , Box} from "@mui/material"
import Img1 from "../../../assests/image/Business Adult/Rectangle 45.png"
import css from "./style.module.css"

const Sec1 = ()=>{
    return (
        <>
            <Box sx={{width:"100vw" ,position:"relative",boxSizing:"border-box"}}>
            <Typography sx={{fontFamily:"Alice",position:"absolute",color:"white",fontSize:{xs:"200%", lg:"400%"},fontWeight:"400",whiteSpace:"nowrap",top:{xs:"20%" ,md:"28%" , lg:"30%"},left:"50%",transform:"translate(-50%,-50%)",zIndex:100 }}>let’s Start Something BIG Together</Typography>
            <Typography sx={{fontFamily:"Gilroy-Medium",position:"absolute" ,color:"white",zIndex:"100", fontSize:"110%",lineHeight:{xs:"20px",lg:"40px"},textAlign:"center",top:{xs:"50%",md:"40%",lg:"50%"},left:"50%",transform:"translate(-50%,-50%)",width:"70%"}}>
            Lorem ipsum dolor sit amet consectetur. Viverra pellentesque volutpat quis in erat. Sit aenean eget nascetur mus non. Enim a ut vitae felis convallis. Egestas enim diam ac nisi orci id tellus lobortis. Lacus in etiam rhoncus.            </Typography>
              <img src={Img1} className={css.img}/>
              <div className={css.overlay}></div>
                <Button sx={{position:"absolute",bottom:{xs:"5%" , md:"30%",lg:"5%"},left:"50%",transform:"translate(-50%,-50%)",zIndex:"99",background:"none",border:"2px solid white",borderRadius:"40px",padding:{xs:"5px 10px",lg:"12px 30px"},"&:hover":{background:"white",color:"blue"},outline:"none"}}><Typography sx={{fontSize:{xs:"15px",lg:"20px"} , fontFamily:"Gilroy-Bold" ,lineHeight:"27px",color:"white","&:hover":{color:"rgb(4, 50, 104)"}}}>Register now</Typography></Button>
            </Box>
        </>
    )
}
export default Sec1;