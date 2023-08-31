import { Box, Typography } from '@mui/material';

import  logo  from '../assets/images/sl-logo.svg';
import { FormLogin } from '../components/FormLogin/FormLogin';
import { Info } from '../components/Info/Info';

export const Login = () => {
    return (
        <Box display="flex" justifyContent="center" alignItems="center" sx={{flexDirection: 'column', width: {xs: '100%', md: '60%', lg:'40%'}, maxWidth: {xs: '100%', md:'30rem', lg: '35rem'}, m: "auto", textAlign: "center", height: "100vh"}}>
            <img src={logo} alt="" />
            <Typography sx={{color: "secondary.main", fontSize: "1.9rem", fontWeight: '900', mt:'2.5rem'}}>Page de connexion</Typography>
            <Typography sx={{color: "secondary.main", fontSize: "1.1rem", fontWeight: "500", mt:"1.9rem"}}>Voici le super paragraphe d’introduction pour se connecter à la super page qui contient les super informations !</Typography>
            <FormLogin />
            <Box sx={{position:"absolute", bottom: "1rem", right: "1rem", cursor: "pointer"}}>
                <Info />
            </Box>
        </Box>
    )
}