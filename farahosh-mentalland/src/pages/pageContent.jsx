import { Route, Routes} from "react-router-dom";
import Grid from "@mui/material/Unstable_Grid2";
import Home from "./Routes/Home";
import Page2 from "./Routes/page2";
import PageBusiness from "./Routes/PageBusiness";
import Art from "./Routes/Arts";
import Page9 from "./Routes/BusinessAdult"
<<<<<<< HEAD
import ArtsChildren from "./Routes/ArtsChildren";
import ArtsAdults from "./Routes/ArtAdults";
=======
import JobPage from "./Routes/JobOpportunities";
>>>>>>> origin

const Nopage =() => {
  
    return(
      <div>
        <h3>
          404
        </h3>
      </div>
    )
  
  }
const PageContent = ()=>{
    return (
        <Grid  xs={12} sm={12} md={12} lg={12} xl={12}>
            <Routes>
                <Route index element={<Home/>} />
                <Route path="*" element={ <Nopage/> }/>
                <Route path="page2" element={ <Page2/> }/>
                <Route path="Art" element={ <Art/> }/>
                <Route path="smallpage" element={ <PageBusiness/> }/>
                <Route path="page9" element={ <Page9/> }/>
<<<<<<< HEAD
                <Route path="artschildren"  element={<ArtsChildren />}/>
                <Route path="artsAdults"  element={<ArtsAdults/>}/>
=======
                <Route path="JobOpportunities" element={<JobPage />} />
>>>>>>> origin

            </Routes>
        </Grid>
    )
}
export default PageContent;