import { Typography ,Box} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import css from "./style.module.css"
import Img1 from "../../../assests/image/page business/Rectangle 97.png"
import ZPattern from "../../z-pattren/z-pattern.component";
import zPatternType from "../../z-pattren/z-pattern.component"
const Sec4 = ()=>{
    return(
        <>
           
                <Grid2 container sx={{width:1,mt:20 ,mb:24 ,px:"9%",boxSizing:"border-box"}} spacing={4}>
                    <Grid2 xs={12} sm={6}>
                        <Box sx={{position:"relative" ,width:"90%" ,height:"100%"}}>
                            <div className={css.d1}></div>
                            <img src={Img1} className={css.img}/>
                            <div className={css.d2}></div>
                        </Box>
                    </Grid2>
                    <Grid2 xs={12} sm={6}>
                        <Box sx={{width:"100%"}}>
                            <Typography sx={{fontFamily:"Alice",textAlign:"left",fontWeight:"400",fontSize:"30px",verticalAlign:"top",fontStyle:"Regular"}}>
                                Mentalland Certificates
                            </Typography>
                            <Typography sx={{fontFamily:"Gilroy-Regular",fontStyle:"body-large",verticalAlign:"top" ,fontSize:"20px",lineHeight:"37px" , textAlign:"left"}}>
                                Lorem ipsum dolor sit amet consectetur. Gravida purus nunc amet sit bibendum habitant integer a commodo. Malesuada bibendum libero sodales vitae interdum leo posuere. Rhoncus tincidunt sociis proin proin sit in tortor tincidunt. Sed semper malesuada eget faucibus suspendisse diam quam eleifend. Vestibulum egestas ultrices leo ut.
                                Fusce porttitor pellentesque at consectetur bibendum turpis. Eu condimentum aliquam auctor duis accumsan cursus tristique pellentesque lorem. Eget cras proin.
                            </Typography> 
                        </Box>
                    </Grid2>
                </Grid2>
         
        </>
    )
}
export default Sec4;