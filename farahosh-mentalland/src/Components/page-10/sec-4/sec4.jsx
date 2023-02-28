import {Box , Grid , Typography} from "@mui/material"
import { MainTitle } from "../buttons-form/ButtonsF";
import RequestField from "./request.jsx"
import CardCom from "../card-pattern.jsx/cardCom";
import axios from "axios"
import {useEffect , useState} from "react"
import {toast} from "react-toastify"
const Sec4 = () => {
  const [jobs , setJobs] = useState([])


  useEffect(()=>{
    const fetchData = async()=>{
      try{
         axios.get(
            "http://testy.frahosh.com/api/const/getjobs",{headers:{"Accept": "*/*"}}
          ).then((res)=>{
            console.log(res)
            if(res.status===200){
              setJobs(res.data)

            }
            if(res.status===404){
              toast.warning(res.message,{theme:"colored"})

            }
          })
      }catch(err){
    
          console.log(err)
          toast.error("Your request was not sent",{theme:"colored"})

      }
    }
    fetchData();
  },[])
 

  return (
    
      <Box sx={{position:"relative",width:"90%",margin:"0px auto"}} >
        <Box sx={{textAlign:"center",mb:6,mt:36}}>
            <MainTitle>THE LATEST JOB OPPORTUNITIES</MainTitle>
        </Box>
        <Box>
           <Grid container>
             {
              (jobs.length>0) ?(<>
                {
                  jobs.map((item , index)=>(
                    <CardCom key={index} />
                  ))
                }
              </>):(<Typography sx={{textAlign:"center",p:10}}>There is no job</Typography>)
              }
           </Grid>
        </Box>
         </Box>

  );
};

export default Sec4;
