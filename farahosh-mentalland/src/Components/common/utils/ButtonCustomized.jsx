import {Button , styled} from "@mui/material"
export const ButtonCustomised = styled(Button)(({theme})=>({
    border:"none",
    outline:"none",
    fontFamily:"Gilroy-Bold",
    borderRadius:"35px",
    margin:"0px auto",
    fontSize:"18px",
    color:"#00888D",
    "&:hover":{
        background:"white",
        color:"#00888D"
    }
}))