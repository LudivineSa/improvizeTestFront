import { Box, Typography, useMediaQuery } from "@mui/material"
import { useState } from "react";

import logo from '../../assets/images/sl-logo-yellow.svg'
import menuBurger from '../../assets/images/menu-burger.svg'

import './navbar.css'
export const Navbar = () => {

    const isDesktop = useMediaQuery('(min-width:1200px)');
    const [showBurger, setShowBurger] = useState(false);

    if(isDesktop)
    return (
        <Box display="flex" justifyContent="space-between" mx="4rem" padding="0.5rem">
            <img src={logo} alt="SL logo" />
            <Box display="flex" alignItems="center" gap="4rem">
                <Typography color="secondary.main" fontWeight="700" sx={{"&:hover": {color:"primary.main"}, cursor: 'pointer'}}>Item 1</Typography>
                <Typography color="secondary.main" fontWeight="700" sx={{"&:hover": {color:"primary.main"}, cursor: 'pointer'}}>Item 2</Typography>
            </Box>
        </Box>
    )
    else return (
        <>
            <Box display="flex" justifyContent="space-between" px="2rem" py="1rem" sx={{boxShadow: '0px 2px 20px 0px rgba(60, 112, 216, 0.15)'}}>
                <img src={menuBurger} alt="Menu burger" onClick={() => setShowBurger(true)} style={{cursor: "pointer"}} />
                <img src={logo} alt="SL logo" />
            </Box>
            {showBurger && 
                <Box className={`burgerMenu ${showBurger ? "visible" : ""}`}>
                    <Typography onClick={()=> setShowBurger(false)}color="secondary.main" fontWeight="700" sx={{"&:hover": {color:"primary.main"}, cursor: 'pointer', position: 'absolute', top: '0.5rem', right: '1rem'}}>X</Typography>
                    <Typography color="secondary.main" fontWeight="700" sx={{"&:hover": {color:"primary.main"}, cursor: 'pointer', my: '1rem'}}>Item 1</Typography>
                    <Typography color="secondary.main" fontWeight="700" sx={{"&:hover": {color:"primary.main"}, cursor: 'pointer'}}>Item 2</Typography>
                </Box>
            }
        </>
    )
}