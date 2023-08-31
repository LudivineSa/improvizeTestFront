import { Box, Typography, Button  } from "@mui/material";
import { HeaderCard } from "./HeaderCard";
import { useContext } from "react";
import { CardsContext } from "../../../../context/CardsContext";

interface CardProps {
    card: Card;
    index: number; 
}

export const Card = (props: CardProps) => {

    const { card, index } = props;
    const borderColor = index % 2 === 0 ? "#F08BDF" : "#3C70D8";

    const { setCard } = useContext(CardsContext);

    const changeCardDetail = () => {
        setCard(card);
    }
    
    return (
            <Box sx={{border: `3px solid ${borderColor}`, maxWidth: "30rem", borderRadius: '40px', padding:'1.8rem', background: 'linear-gradient(180deg, rgba(60, 112, 216, 0.08) 0%, rgba(255, 255, 255, 0.00) 41.15%)'}}>
                <HeaderCard />
                <Typography sx={{fontSize:"1.2rem", color: 'primary.main', fontWeight: '900', mt:"2.5rem" }} variant="body1">{card.title}</Typography>
                <Typography variant="body2" fontSize="1.1rem" mt="0.9rem">{card.sub_title}</Typography>
                <Typography sx={{color: "text.primary"}} mt="1.8rem">{card.description}</Typography>
                <Button sx={{position: "relative", mt:"1.2rem"}} onClick={changeCardDetail}>Go</Button>
            </Box>
    )
}