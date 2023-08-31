import { Box, Typography } from '@mui/material';
import pinkLogo from '../../assets/images/sl-logo-pink.svg';

export const Footer = () => {
    return (
        <Box display="flex" justifyContent="space-between"  py="0.5rem" px="4rem" sx={{flexDirection: {xs: 'column', lg: 'row'}, alignItems:{xs:'start', lg: "center"}}}>
            <img src={pinkLogo} alt="" />
            <Box display="flex" gap="4rem" alignItems="center" sx={{mt: {xs: '1.2rem', lg:'0'}}}>
                <Typography variant="body1" sx={{cursor:'pointer', color: 'secondary.main', '&:hover': {textDecoration: 'underline'}}}>Contact</Typography>
                <Typography variant="body1" sx={{cursor:'pointer', color: 'secondary.main', '&:hover': {textDecoration: 'underline'}}}>L'équipe</Typography>
                <Typography variant="body1" sx={{cursor:'pointer', color: 'secondary.main', '&:hover': {textDecoration: 'underline'}}}>Kézako</Typography>
            </Box>
        </Box>
    )
}