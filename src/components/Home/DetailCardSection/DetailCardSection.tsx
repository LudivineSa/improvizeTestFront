import { Box, Typography } from '@mui/material';
import { BackgroundWithTexture } from '../../UI/BackgroundWithTexture';
import { DetailCard } from './DetailCard';
import { FlowerIcon } from './FlowerIcon';

export const DetailCardSection = () => {
    return (
       <Box mt="11rem">
            <BackgroundWithTexture borderRadius="0 200px 0 0" linearGradient='linear-gradient(221deg, #3C70D8 2.88%, rgba(60, 112, 216, 0.00) 102.52%)'>
                <Box pt="5rem" pb="5.5rem" position="relative" maxWidth="1400px" mx="auto" zIndex={15} >
                    <Typography sx={{fontWeight: 900, fontSize: "2rem", color: "#fff", mx:"2rem"}}>Détail de la card</Typography>
                    <Typography variant="body2" sx={{color: "#fff", mx: "2rem"}}>Avec les infos</Typography>
                    <DetailCard />
                </Box>
                <Box sx={{position:"absolute", bottom: 0, right: 0, zIndex: 5}}>
                    <FlowerIcon />
                </Box>
            </BackgroundWithTexture>
       </Box>
    )
}