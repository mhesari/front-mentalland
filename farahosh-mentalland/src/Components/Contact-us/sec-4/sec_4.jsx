import { TextField, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import Button from "../../buttons/button.component";
import styles from "./sec_4.styles.module.css";


const ContactSection4 = () => {
    return ( 
        <div className={styles.subscribe_bg}>
        <Box className={styles.subscribe_card}>
        <Typography sx={{fontFamily:'Alice',fontSize:{lg:"40px",xs:"28px"},py:2, marginLeft:{md:"30px"}, marginBottom:{md:"18px" , xs:"20px"} ,textAlign:"left"}}>Subscribe to our Newsletter</Typography>
            <Stack direction={{md:"row" , xs:"column"}} justifyContent={{md:"flex-start" , xs: "space-between"}} alignItems={{md:"center" , xs:"center"}}>
            <div className={styles.subscribe_context}>
            <Typography sx={{fontFamily:'Gilroy-Regular',fontSize:{lg:"22px",xs:"14px"} ,py:2, lineHeight:{md:"40px"}, marginBottom:{md:"30px" , xs:"20px"} ,textAlign:"center"}} >Lorem ipsum dolor sit amet consectetur. Nunc pharetra massa velit consectetur lectus erat.</Typography>
            </div>
            <div className={styles.subscribe_inputfild}>
            <TextField fullWidth label="fullWidth" id="fullWidth" sx={{marginLeft:{md:"38px"} , width:{md:"90%"}}} />
            <div className={styles.inputFildebtn}>
            <Button buttonType={"contactUsBtn"}>Subscribe</Button>
            </div>
            </div>
            </Stack>
        </Box>
        </div>
     );
}
 
export default ContactSection4;