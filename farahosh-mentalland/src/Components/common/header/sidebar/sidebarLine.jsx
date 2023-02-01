import { List , ListItem ,ListItemButton, ListItemIcon , Box, ListItemText , Drawer, Typography} from "@mui/material";
import { useState } from "react";
const SidebarLine = ()=>{
    const [open , setOpen ] = useState(true)
    return(
        <Box sx={{display:{
            xs:"none",
            sm:"none",
            md:"block",
            lg:"block",
            xl:"block"
        }, width:"100vw" , background:"white" }}>
         
           <Box sx={{display:"flex",alignItems:"center",justifyContent:"space-between" ,paddingRight:"40px" , paddingLeft:"60px" }}>
           <Typography variant="h5" sx={{cursor:"pointer"}}>MentalLands</Typography>
           <List sx={{width:"550px" ,display:"flex",alignItems:"center",justifyContent:"space-between"}} >
                {
                    ["Home","Our Services","About","Contact us"].map((text)=>(
                        <ListItem key={text} disablePadding sx={{ "&:hover":{
                            color:"#0d99ff"
                        }}}> 
                            <ListItemButton>
                                <ListItemText primary={text}  sx={{padding:0 ,textAlign:"center",minWidth:"10px"}} />
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