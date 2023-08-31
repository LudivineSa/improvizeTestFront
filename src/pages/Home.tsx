import { Box } from "@mui/material";
import { useState } from "react";

import { DetailCardSection } from "../components/Home/DetailCardSection/DetailCardSection"
import { CardSection } from "../components/Home/CardSection/CardSection"
import { Hero } from "../components/Home/Hero/Hero"
import { Navbar } from "../components/Navbar/Navbar"
import { Footer } from "../components/Footer/Footer"
import btnUp from '../assets/images/btn-up.svg';
import btnUpHover from '../assets/images/btn-up-hover.svg';


export const Home = () => {

    const [buttonUp, setButtonUp] = useState(btnUp);

    return (
        <>
            <Navbar />
            <Hero />
            <CardSection />
            <Box width="100%" display="flex" justifyContent="end">
                <Box sx={{cursor:"pointer"}} onMouseLeave={() => setButtonUp(btnUp)} onMouseEnter={() =>setButtonUp(btnUpHover)} paddingRight="2rem" pt="4.5rem" width="fit-content">
                    <a href="#hero"> <img src={buttonUp} alt="Go to the top of the page" /> </a>
                </Box>
            </Box>
            <Box id="detailCard" />
            <DetailCardSection />
            <Footer />
        </>
    )
}