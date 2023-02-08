import { Typography,Button , Box} from "@mui/material"
import Img1 from "../../../assests/image/Business Adult/Rectangle 45.png"
import Buttons from "../../buttons/button.component";
import css from "./style.module.css"
import Grid from "@mui/material/Unstable_Grid2/Grid2"
import { BlueButtonsForm ,Title} from "../buttons-form/ButtonsF"
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const CardCom = ()=>{
    return (
        <>
            <Grid xs={12} md={6} >
                <Box sx={{p:2 ,m:1, border:"2px solid #E6F0F6",zIndex:"999"}}>
                    <Box sx={{display:{xs:"flex",sm:"block"},alignItems:"center", justifyContent:"space-between"}}>
                        <Title>Graphic Designer</Title>
                        <Title>Google</Title>
                        <Title>Remote</Title>
                    </Box>
                    <Box sx={{display:"flex",mt:1}}>
                            <BlueButtonsForm>Mon-Fre</BlueButtonsForm>
                            <BlueButtonsForm>Full-Time</BlueButtonsForm>
                            <BlueButtonsForm>$20-$30 An Hour</BlueButtonsForm>
                    </Box>
                    <Typography sx={{color:"black",fontFamily:"Gilroy-Regular",fontSize:{md:"18px",xs:"15px"},fontStyle:"body-med",lineHeight:"40sp",my:1}}>-Lorem ipsum dolor sit amet consectetur. Urna tortor vitae sed nullam rutrum tortor. Sit at senectus diam eg</Typography>
                    <Typography sx={{color:"black",fontFamily:"Gilroy-Regular",fontSize:"18px",fontStyle:"body-med",lineHeight:"40sp"}}>-Lorem ipsum dolor sit amet consectetur. Urna tortor</Typography>
                    <Box sx={{width:1,display:"flex",alignItems:"center"}}>
                        <Typography sx={{fontFamily:"Gilroy-Regular",fontSize:"14px",color:"#024A9D"}}>Today</Typography>
                        <Typography sx={{fontFamily:"Gilroy-Regular",fontSize:"14px",color:"#024A9D"}}>From USA</Typography>
                    </Box>
                    <Typography sx={{color:"black",fontFamily:"Gilroy-Regular",fontSize:"18px",fontStyle:"body-med",lineHeight:"40sp"}}>Mentalland Related Courses:</Typography>
                    <Box sx={{display:'flex',alignItems:"center",justifyContent:"space-between"}}>
                        <Box sx={{display:"flex",mt:1}}>
                                <BlueButtonsForm>Graphic Designer</BlueButtonsForm>
                                <BlueButtonsForm>Motion Designer</BlueButtonsForm>
                        </Box>
                        <Buttons buttonType="btnLoginBgBlue" type="button" style={{width:"10%",height:"35px"}}>
                            <ArrowRightAltIcon color="white"/>
                        </Buttons>
                    </Box>
                </Box>
            </Grid>
        </>
    )
}
export default CardCom;