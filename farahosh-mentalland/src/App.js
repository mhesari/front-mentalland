import './App.css';
import MainContext from "./context"
import { useState } from 'react';
import MainLayout from './layout/Mainlayout';
import PageContainer from './pages/pageContainer';
import Fixnav from "./Components/common/header/Fixnav"
import Footer from "./Components/common/footer/Footer"

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
            <Fixnav />
            <PageContainer />  
            <Footer />
        </MainLayout>
      </MainContext.Provider>
    
    </div>
  );
}

export default App;
