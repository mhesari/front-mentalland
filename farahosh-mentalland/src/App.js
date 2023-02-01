import './App.css';
import MainContext from "./context"
import { useState } from 'react';
import MainLayout from './layout/Mainlayout';
import PageContainer from './pages/pageContainer';
import Fixnav from "./Components/common/header/Fixnav"
import Footer from "./Components/common/footer/Footer"
import TopNav from "./Components/common/header/navbar/Appbar"
import Sidebar from "./Components/common/header/sidebar/Sidebar"
import {Box} from "@mui/material"
function App() {
  const [mode , setMode] = useState("light")
  const [drawerOpen,setDrawerOpen] = useState(false)

  const handleToggleMode = ()=>{
    setMode(prev =>prev=="light"?"dark":"light")
  }


  
  return (
    <div className="App">
      <MainContext.Provider value={{
        handleToggleMode,
        mode ,
        setDrawerOpen,
        drawerOpen        
      }}>
       
        <MainLayout>
            
            <Box component="div" sx={{ zIndex:"9999" ,position:"fixed",top:"0",left:"0px"}}>
              <TopNav />
              <Sidebar />
            </Box>
            <PageContainer />  
            <Footer />
        </MainLayout>
      </MainContext.Provider>
    
    </div>
  );
}

export default App;
