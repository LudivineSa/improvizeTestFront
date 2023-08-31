import { Box, Button, Typography } from '@mui/material';
import texture from '../../../assets/images/texture.svg';
import btnDown from '../../../assets/images/btn-down.svg';

export const Hero = () => {
    return (
        <Box 
            sx={{ 
                position: 'relative',
                width: '100%', 
                borderRadius: '0 0 0 200px', 
                backgroundImage: 'linear-gradient(109deg, rgba(60, 112, 216, 0.70) 25.48%, rgba(251, 251, 251, 0.00) 89.51%)'
            }}
        >
            <Box sx={{position: 'absolute', top: '0', left: '0', zIndex: 5}}>
                <img src={texture} alt="texture"/>
            </Box>
            <img src={btnDown} alt="" style={{position: "absolute", bottom: "-3rem", left: '50%', transform: 'translateX(-50%)', zIndex:10}}/>
            <Box sx={{zIndex:"10", left: {xs: '0', lg:'50%'}, position: 'relative', py: '16rem', width: '35%'}}>
                <Typography variant="h1" >Hello, super chouette title.</Typography>
                <Typography variant="body2" sx={{py: '2rem'}}>I'm being tested, hihihi.</Typography>
                <Button>Prettiest button ever</Button>
            </Box>
        </Box>
    )
}