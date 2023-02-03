import Box from "@mui/material/Box"
import SelectBox from "../select component/select"
import Button from "@mui/material/Button"
import Grid from "@mui/material/Unstable_Grid2/Grid2";
const Sec5= () => {
  return (
    
      <Box sx={{position:"relative" , bottom:"0px",left:"0px",right:"0px",width:"100%",height:"0.05px" }} >
          <Box sx={{width:"100%",position:"absolute",left:"50%",top:"50%",transform:"translate(-50%,-50%)",background:"white",boxShadow:"box-shadow: #02979D 0px 8px 24px;",zIndex:"999" ,margin:"0px auto",height:"auto",display:"flex",alignItems:"center",justifyContent:"space-around" , border:"1px solid #02979D",width:"90%",borderRadius:"20px" ,p:"45px 40px"}}>
            <Grid container sx={{display:{xs:"block" , lg:"flex"},alignItems:"center",justifyContent:"space-around"}}>
               <Grid xs={12} lg={4}><SelectBox /></Grid>
               <Grid xs={12} lg={4}><SelectBox /></Grid>
                <Grid xs={12} lg={4} sx={{paddingX:2,textAlign:'center'}}>
                   <Button sx={{padding:{lg:"14px 40px",xs:"17px 20px"},"&.MuiButtonBase-root:active":{border:"none",outline:"none"},borderRadius:"16px",outline:"none","&:hover":{color:"#02979D"},"&:focus":{border:"none",outline:"none"}, background:"#02979D",color:"white",fontSize:"Gilroy-Bold",fontSize:{lg:"17px",xs:"12px"}}}>Request Appointment</Button>  
                </Grid>            
            </Grid>    
          </Box>
       </Box>

  );
};

export default Sec5;
