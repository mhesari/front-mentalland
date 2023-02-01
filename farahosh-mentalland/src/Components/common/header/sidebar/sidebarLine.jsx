import { List , ListItem ,ListItemButton, ListItemIcon , Box, ListItemText , Drawer, Typography, Avatar} from "@mui/material";
import { useState } from "react";
import Mentallands from "../../../../assests/image/MentalLand.png"
import {ButtonCustomised} from "../../utils/ButtonCustomized"
import { Searchs , Searchs2 , SearchIconWrapper , StyledInputBase} from "../../utils/CustomizedSearch"

const SidebarLine = ()=>{
    const [open , setOpen ] = useState(true)
    return(
        <Box sx={{display:{
            xs:"none",
            sm:"none",
            md:"block",
            lg:"block",
            xl:"block"
        }, width:"100vw" , background:"white" , position:"sticky" , top:"20px" }}>
            <Box>
                
            </Box>
           <Box sx={{display:"flex",alignItems:"center",justifyContent:"space-between" ,paddingRight:"40px" , paddingLeft:"60px" }}>
           <Avatar src={Mentallands} sx={{width:"140px" , height:"20px",cursor:"pointer"}} variant="square"/>
           <List sx={{width:"550px" ,display:"flex",alignItems:"center",justifyContent:"space-between"}} >
                {
                    ["Home","Our Services","About","Contact us"].map((text)=>(
                        <ListItem key={text} disablePadding sx={{ "&:hover":{
                            color:"#0d99ff"
                        }}}> 
                            <ListItemButton>
                                <ListItemText primary={<Typography sx={{fontFamily:"Gilroy-Regular","&:hover":{fontFamily:"Gilroy-Bold"}}}>{text}</Typography>}  sx={{padding:0 ,textAlign:"center",minWidth:"10px"}} />
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </List>
                
           </Box>
        </Box>
    )
}
export default SidebarLine;