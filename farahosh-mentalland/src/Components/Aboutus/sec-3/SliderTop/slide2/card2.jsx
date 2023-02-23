import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

const Card2 = ({ img,caption ,name,date , field}) => {
    return (
 
            <Box sx={{height:"400px",background:"white",width:{md:"80%",xs:"100%"},mb:4,boxShadow:"rgba(2, 151, 157, 0.1) 0px 8px 24px","&:hover":{boxShadow:"rgba(2, 74, 157, 0.2) 0px 8px 24px",transform:"translateY(-1px)"}}}>
               
                <img src={img} style={{width:"100%" ,height:"100%",margin:"10px auto"}}/>
                
            </Box>
 
    );
  };
  
  export default Card2;