import { Typography , Box} from "@mui/material"
import Img1 from "../../../assests/image/page business/Rectangle 49.png"
import Img2 from "../../../assests/image/page business/Rectangle 50.png"
import Img3 from "../../../assests/image/page business/Rectangle 51.png"
import Img4 from "../../../assests/image/page business/Rectangle 52.png"
import Img5 from "../../../assests/image/page business/Rectangle 53.png"
import css from "./style.module.css"
const Sec1 = ()=>{
    return (
        <>
            <Box sx={{width:"100vw" ,display:"flex" ,height:"auto",boxSizing:"border-box"}}>
            <Typography sx={{fontFamily:"Alice",color:"white",position:"absolute",fontSize:"60px",fontWeight:"400",whiteSpace:"nowrap",width:"70%",textAlign:"center", top:"40%",left:"50%",transform:"translate(-50%,-50%)",zIndex:100 }}>Learning Today, Leading Tomorrow</Typography>
            <Typography sx={{fontFamily:"Gilroy-Medium" ,color:"white",zIndex:"100", fontSize:"20px",lineHeight:"40px",position:"absolute",top:"60%",textAlign:"center",left:"50%",transform:"translate(-50%,-50%)",width:"70%"}}>Lorem ipsum dolor sit amet consectetur. Viverra pellentesque volutpat quis in erat. Sit aenean eget nascetur mus non. Enim a ut vitae felis convallis. Egestas enim diam ac nisi orci id tellus lobortis. Lacus in etiam rhoncus.</Typography>

                {
                    [Img1 , Img2 , Img3 , Img4 , Img5].map((item  , index) => (
                        <div key={index} className={css.imgBG}>
                            <img src={item} className={css.img}/>
                            <div className={index%2===0?css.overlay:css.overlay2}></div>
                        </div>
                    ))
                }
                <button className={css.btn}><Typography sx={{fontSize:"20px" , fontFamily:"Gilroy-Bold" ,lineHeight:"27px",color:"white","&:hover":{color:"rgb(4, 50, 104)"}}}>Register now</Typography></button>
            </Box>
        </>
    )
}
export default Sec1;