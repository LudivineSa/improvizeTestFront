import { Box, Button, Typography, useMediaQuery } from '@mui/material';

import { BackgroundWithTexture } from '../../UI/BackgroundWithTexture';

import pinkPlantBig from '../../../assets/images/pink-plant-big.svg';
import twoFlowers from '../../../assets/images/two-flowers.svg';
import triangles from '../../../assets/images/triangles.svg';
import boat from '../../../assets/images/boat.svg';
import pinkFlowerInPot from '../../../assets/images/pink-flower-in-pot.svg';
import zigzag from '../../../assets/images/zigzag.svg';
import cow from '../../../assets/images/cow.svg';

import './hero.css';
export const Hero = () => {


    const isDesktop = useMediaQuery('(min-width:1200px)');

    const linearGradient = isDesktop ? 'linear-gradient(109deg, rgba(60, 112, 216, 0.70) 25.48%, rgba(251, 251, 251, 0.00) 89.51%)' : 'linear-gradient(345deg, rgba(60, 112, 216, 0.70) 16.83%, rgba(251, 251, 251, 0.00) 89.75%)'
    const borderRadius = isDesktop ? '0 0 0 200px' : '0 0 200px 0';
    return (
        <BackgroundWithTexture overflow="visible" borderRadius={borderRadius} linearGradient={linearGradient}>
            <Box sx={{cursor: "pointer"}} id="hero" >
                <a href="#filter">
                    <Box className="btnDown" sx={{position: "absolute", bottom: "-3rem", left: '50%', transform: 'translateX(-50%)', zIndex:25}}></Box>
                </a>
            </Box>
            <img src={pinkPlantBig} alt="" className="pinkPlantBig" />
            <img src={triangles} alt="" className="triangles" />
            <img src={boat} alt="" className="boat" />
            <img src={pinkFlowerInPot} alt="" className="pinkFlowerInPot" />
            <img src={zigzag} alt="" className="zigzag" />
            <img src={cow} alt="" className="cow" />
            <img src={twoFlowers} alt="" className="twoFlowers" />
            <Box sx={{zIndex:"10", left: {xs: '0', lg:'50%'}, position: 'relative', pt: {xs: '20rem', lg: '16rem'}, pb: {xs: '10rem', lg: '16rem'}, width: {xs: '90%', lg:'35%'}, mx: {xs: 'auto', lg:'0'}}}>
                <Typography variant="h1" >Hello, super chouette title.</Typography>
                <Typography variant="body2" sx={{py: '2rem'}}>I'm being tested, hihihi.</Typography>
                <Button>Prettiest button ever</Button>
            </Box>
        </BackgroundWithTexture>
    )
}