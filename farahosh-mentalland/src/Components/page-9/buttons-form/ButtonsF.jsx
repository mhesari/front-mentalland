import { Typography } from "@mui/material"
export const BlueButtonsForm = ({children})=>{
    return (
        <Typography sx={{fontSize:{lg:"18px",xs:"12px"},fontFamily:"Gilroy-Regular",background:"#E6F0F6",borderRadius:"2px",marginRight:"10px", padding:"6px 12px"}}>{children}</Typography>

    )
}
export const Title = ({children})=>{
    return (
        <Typography sx={{color:"#024A9D",fontFamily:"Gilroy-Medium",fontSize:"18px",lineHeight:"40sp"}}>{children}</Typography>

    )
}

export const MainTitle = ({children})=>{
    return (
        <Typography sx={{color:"black",fontFamily:"Alice",fontSize:"28px",lineHeight:"40sp"}}>{children}</Typography>

    )
}