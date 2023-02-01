import * as React from 'react';
import {AppBar , Box , Toolbar , IconButton ,Avatar , InputBase , Badge , MenuItem , Menu , alpha , styled} from '@mui/material';
import {  MoreVert } from "@mui/icons-material"
import {BiLogIn ,BiSearchAlt} from "react-icons/bi"
import DrawerActionButton from './drawerActionButton';
import {ButtonCustomised} from "../../utils/ButtonCustomized"
import css from  "./style.module.css"
import {FaFacebookF , FaInstagram , FaLinkedinIn , FaWhatsapp , FaTwitter} from "react-icons/fa"
import flag from "../../../../assests/image/En.png"
const Searchs = styled('div')(({ theme }) => ({
  position: 'relative',
  '&:hover': {
    background: "none",
  },
  width:"600px",
  borderRadius:"30px",
  background:"white",
  color:"black",
  [theme.breakpoints.up('sm')]: {
    width: 'auto',
  },

}));
const Searchs2 = styled('div')(({ theme }) => ({
  position: 'relative',
  '&:hover': {
    background: "none",
  },
  width:"200px",
  borderRadius:"30px",
  background:"white",
  color:"black",
  [theme.breakpoints.up('sm')]: {
    width: 'auto',
  },

}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  height: '100%',
  position: 'absolute',
  color:"rgba(0,0,0,0.3)",
  display:"flex",
  pointerEvents: 'none',
  alignItems: 'center',
  justifyContent:"center",
  left:10,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  fontFamily:"vazir",
  fontSize:"0.8rem",
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(2)})`,
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
     
        <MenuItem>
            <Box  sx={{ margin:"0px auto"}}>
              <ButtonCustomised sx={{background:"#02979D" , color:"white" , width:"132px" , height:"40px" , mx:2}}>Login</ButtonCustomised>
              <ButtonCustomised sx={{background:"#02979D" , color:"white" , width:"132px" , height:"40px"}}>Cart</ButtonCustomised>
              
            </Box>
        </MenuItem>
        <MenuItem sx={{display:"flex" , alignItems:"center",justifyContent:"space-around" }}>
           <select name="cars" id="cars" className={css.select} >
              <option className={css.option} value="volvo"><img src={flag} style={{width:"10px",height:"10px"}}/> EN</option>
              <option className={css.option} value="saab"><Avatar src={flag} sx={{width:"15px",height:"15px"}}/> EN</option>
              <option className={css.option} value="opel"><Avatar src={flag} sx={{width:"15px",height:"15px"}}/> EN</option>
              <option className={css.option} value="audi"><Avatar src={flag} sx={{width:"15px",height:"15px"}}/> EN</option>
            </select>    
              <Searchs2>
                <SearchIconWrapper>
                  <BiSearchAlt /> 
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search..."
                  inputProps={{ 'aria-label': 'search' }}
                />
              </Searchs2>
        </MenuItem>

        <MenuItem sx={{textAlign:"center"}}>
                        <ul className={css.ul} style={{margin:"0px auto"}}>
                            <li className={css.li}><FaWhatsapp /></li>
                            <li className={css.li}><FaLinkedinIn /></li>
                            <li className={css.li}><FaInstagram /></li>
                            <li className={css.li}><FaFacebookF /></li>
                            <li className={css.li}><FaTwitter /></li>
                        </ul>
        </MenuItem>
    </Menu>
  );

  return (
    <Box >
      <AppBar position="static" sx={{background:"none",boxShadow:"none" , p:0,m:0}}>
        <Toolbar sx={{width:"100vw" ,m:0}}>
          <Box sx={{display:"flex",width:"100%" , alignItems:"center",justifyContent:"space-between" ,pr:6 , pl:2}}>
          <IconButton
            size="small"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{  display:{
                    xs:"inline-block",
                    sm:"inline-block",
                    md:"none",
                    lg:"none",
                    xl:"none"
                  }}}
                  >
            <DrawerActionButton />
            </IconButton>
            <Box sx={{display:{
              xs:"none",
              sm:"none",
              md:"flex",
              lg:"flex",
              xl:"flex"
            } , alignItems:"center" , justifyContent:"space-between" , width:"100%"}}>
            <Box>
              <ButtonCustomised sx={{background:"#02979D" , color:"white" , width:"132px" , height:"40px" , mx:2}}>Login</ButtonCustomised>
              <ButtonCustomised sx={{background:"#02979D" , color:"white" , width:"132px" , height:"40px"}}>Cart</ButtonCustomised>
              
            </Box>
            <select name="cars" id="cars" className={css.select}>
              <option className={css.option} value="volvo"><img src={require("../../../../assests/image/En.png")}/> EN</option>
              <option className={css.option} value="saab"><Avatar src={flag} sx={{width:"15px",height:"15px"}}/> EN</option>
              <option className={css.option} value="opel"><Avatar src={flag} sx={{width:"15px",height:"15px"}}/> EN</option>
              <option className={css.option} value="audi"><Avatar src={flag} sx={{width:"15px",height:"15px"}}/> EN</option>
            </select>
            <Searchs>
              <SearchIconWrapper>
                <BiSearchAlt /> 
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search..."
                inputProps={{ 'aria-label': 'search' }}
              />
            </Searchs>
                      <ul className={css.ul}>
                            <li className={css.li}><FaWhatsapp /></li>
                            <li className={css.li}><FaLinkedinIn /></li>
                            <li className={css.li}><FaInstagram /></li>
                            <li className={css.li}><FaFacebookF /></li>
                            <li className={css.li}><FaTwitter /></li>
                        </ul>
            </Box>
          
          
 
        
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          
            <IconButton
              size="medium"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreVert />
            </IconButton>
          </Box>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
