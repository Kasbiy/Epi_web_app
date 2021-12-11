import React from "react";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { Grid, Typography } from '@material-ui/core';
import UserAvatar from 'react-user-avatar';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Modal from '@material-ui/core/Modal';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close'
import {
    Nav,
    NavLogo,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./HeaderElements";


const HeaderBar = () => {
    const [Open, setOpen] = React.useState(false)
    const [Open2, setOpen2] = React.useState(false)

    return (
        <>
           <Nav>
                <NavLogo to="/">
                    InstaLike
                </NavLogo>
                <NavMenu>
                    <NavLink to="/" activeStyle>
                        <HomeOutlinedIcon/>
                    </NavLink>

                    <FavoriteBorderIcon onClick={() => setOpen(true)} />
                    <Modal
                        bgcolor="white"
                        id='essais'
                        open={Open}
                        keepMounted
                    >
                        <Box position="absolute" left="20%" top="20%" right="20%" bgcolor='background.paper' border='2px solid #000' boxShadow='24' padding='32px' id="mhm">
                            <Box display="flex" justifyContent="flex-end">
                                <IconButton onClick={() => setOpen(false)}>
                                    <CloseIcon />
                                </IconButton>
                            </Box>
                            <Typography>ESSAIS FAVORIS</Typography>
                        </Box>
                    </Modal>

                    <AddBoxOutlinedIcon style={{marginLeft: '5%'}} onClick={() => setOpen2(true)}/>
                    <Modal
                        bgcolor="white"
                        id='essais'
                        open={Open2}
                        keepMounted
                    >
                        <Box position="absolute" left="20%" top="20%" right="20%" bgcolor='background.paper' border='2px solid #000' boxShadow='24' padding='32px' id="mhm" flexDirection='row'>
                            <Box display="flex" justifyContent="flex-end">
                                <IconButton onClick={() => setOpen2(false)}>
                                    <CloseIcon />
                                </IconButton>
                            </Box>
                            <>
  	  	  	          		    <p>Upload Photo</p>
  	  	  	          		    <input type="file" id="filename" accept="image/png, image/jpeg, image/jpg" ></input>
  	  	  	        	    </>
                            <Box display="flex">
                                <button style={{marginTop: '5%'}}>Valider</button>
                            </Box>
                        </Box>
                    </Modal>

                    <NavLink to="/profil" activeStyle>
                        <Grid content>
                            <UserAvatar
  	                          	name='test'
                                style={{border: '1px solid black', borderRadius: '15px'}}
  	                          	size={28}
  	                          	src='https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg'
  	                        />
                        </Grid>
                    </NavLink>
                    
                    <NavBtn>
                        <NavBtnLink to="/logout">Déconnexion</NavBtnLink>                
                    </NavBtn>
                </NavMenu> 
            </Nav> 
        </>
    );
};
export default HeaderBar;