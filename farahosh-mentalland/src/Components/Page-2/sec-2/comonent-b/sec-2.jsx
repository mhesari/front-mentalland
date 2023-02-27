import Box from "@mui/material/Box"
import SelectBox from "../select component/select"
import Button from "@mui/material/Button"
import TextField from '@mui/material/TextField';
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import {  toast } from 'react-toastify';
import { useFormik } from 'formik';
import axios from "axios"
import * as Yup from "yup"
import {styled} from "@mui/material/styles"


const Sec2= () => {
  const items = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
  ];
  const InputNumber = styled(TextField)(() => ({
    '& fieldset': {
      borderRadius: '17px',
      borderColor: '#02979D',
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: '#02979D',
      }
    }
  }));
  

  const validationSchema = Yup.object({
    field:Yup.string().required("name is required"),
    Psychologist:Yup.string().email("invalid email address").required("email is required"),
    Phone_number:Yup.string().required("phone number is required"),

})

const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      Phone_number: '',
    },
    validationSchema,
    onSubmit: async (values , {setSubmitting}) => {
      setTimeout(()=>{
        alert(JSON.stringify(values , null ,2))
        setSubmitting(false)
      },400)
      // try{
      //   const response = await axios.post("/api/const/postmessage",{
      //       fiel:values.field,
      //       psychologist:values.psychologist,
      //       Phone_number: values.Phone_number,
      //       _token:"{{csrf_token()}}"
      //   })
      //   if(response.status===200){
      //       console.log(response.data.message)
      //       toast.success("Successfully registered consultation timet", {
      //         theme: "colored"
      //       })
      //   }
      // }catch(error){
      //       console.log(error)
      // }finally{
      //   setSubmitting(false)
      // }
    },
  });

  return (
    
      <Box sx={{position:"relative" , bottom:"0px",left:"0px",right:"0px",width:"100%",height:"0.05px" }} >
          <Box component="form" onSubmit={formik.handleSubmit} sx={{width:"100%",position:"absolute",left:"50%",top:"50%",transform:"translate(-50%,-50%)",background:"white",boxShadow:" rgba(2, 151, 157, 0.2) 0px 18px 50px -10px",zIndex:"999" ,margin:"0px auto",height:"auto",display:"flex",alignItems:"center",justifyContent:"space-around" , border:"1px solid #02979D",width:{lg:"80%",xs:"95%",sm:"90%",md:"85%",xl:"80%"},maxWidth:"1800px",borderRadius:"20px" ,p:"45px 40px"}}>
            <Grid container sx={{display:{xs:"block" , lg:"flex"},alignItems:"center",justifyContent:"space-around"}}>
               <Grid xs={12} lg={3}><SelectBox 
                  id="field"
                  name="field"
                  value={formik.values.field}
                  onChange={formik.handleChange}
                  error={formik.touched.field && Boolean(formik.errors.field)}
                  labelId="field-label"
                  helperText={formik.touched.field && formik.errors.field}
                  items={items}
                  labelText="Select the Field..."
               /></Grid>
               <Grid xs={12} lg={3}><SelectBox 
                  id="psychologist"
                  name="psychologist"
                  value={formik.values.psychologist}
                  onChange={formik.handleChange}
                  error={formik.touched.psychologist && Boolean(formik.errors.psychologist)}
                  labelId="field-label"
                  helperText={formik.touched.psychologist && formik.errors.psychologist}
                  items={items}
                  labelText="Select the Psychologist..."
               /></Grid>
               <Grid xs={12} lg={3} sx={{textAlign:"center"}}>
                <InputNumber
                  id="Phone_number"
                  name="Phone_number"
                  label="Phone Number"
                  fullWidth
                  value={formik.values.Phone_number}
                  onChange={formik.handleChange}
                  error={formik.touched.Phone_number && Boolean(formik.errors.Phone_number)}
                  helperText={formik.touched.Phone_number && formik.errors.Phone_number}
                  variant="outlined"
                  sx={{borderRadius:"17px",borderColor:"rgb(16, 157, 163)",width:{xs:"200px"},margin:"0px auto"}}
                /></Grid>
                <Grid xs={12} lg={3} sx={{paddingX:2,textAlign:'center',my:{xs:1 ,lg:0}}}>
                   <Button type="submit" sx={{padding:{md:"6px 20px",xs:"15px 20px"},"&.MuiButtonBase-root:active":{border:"none",outline:"none"},borderRadius:"16px",outline:"none","&:hover":{color:"#02979D"},"&:focus":{border:"none",outline:"none"}, background:"#02979D",color:"white",fontFamily:"Gilroy-Bold",fontSize:{lg:"14px",xs:"12px"}}}>Request Appointment</Button>  
                </Grid>            
            </Grid>    
          </Box>
       </Box>

  );
};

export default Sec2;
