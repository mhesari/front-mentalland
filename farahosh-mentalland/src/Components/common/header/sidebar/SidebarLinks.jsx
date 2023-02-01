import { List , ListItem ,ListItemButton, ListItemIcon , Box, ListItemText , Drawer, Typography} from "@mui/material";
import { useState } from "react";
const SidebarLinks = ()=>{
    const [open , setOpen ] = useState(true)
    return(
        <>
         
            <List sx={{mt:2}}>
                <ListItem disablePadding sx={{display:"block","&:hover":{
                            background:"rgba(0,0,0,0.1)"}}}>
                        <ListItemButton sx={{
                                minHeight:40,
                                pl:3
                            }}>
                                <ListItemText primary={<Typography variant="h5">MentalLands</Typography>}  sx={{opacity:open?1:0 }} />
                        </ListItemButton>
                </ListItem>
                {
                    ["Home","Our Services","About","Contact us"].map((text,index)=>(
                        <ListItem key={text} disablePadding sx={{display:"block" ,"&:hover":{
                            background:"rgba(0,0,0,0.1)"
                        }}}> 
                            <ListItemButton sx={{
                                minHeight:40,
                                pl:3
                            }}>
                                <ListItemText primary={text}  sx={{opacity:open?1:0 }} />
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </List>
       
        </>
    )
}
export default SidebarLinks;