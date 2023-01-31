import { Route, Routes} from "react-router-dom";
import Grid from "@mui/material/Unstable_Grid2";
import Home from "./Routes/Home";

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
                {/*   Route   */}
                <Route index element={<Home/>} />
                <Route path="*" element={ <Nopage/> }/>
            </Routes>
        </Grid>
    )
}
export default PageContent;