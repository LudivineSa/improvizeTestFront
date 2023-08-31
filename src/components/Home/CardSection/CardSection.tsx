import { useContext } from "react";
import { Box, Typography } from "@mui/material"


import { CardsContext } from "../../../context/CardsContext";
import { Card } from "./Card/Card";

export const CardSection = () => {

    const { cards } = useContext(CardsContext);
    console.log(cards)
    return (
        <Box mt="11rem" px="3rem">
            <Typography sx={{color: "primary.main", fontWeight: "900", fontSize: "2rem"}}>Title lorem ip SUM</Typography>
            <Typography variant="body2" fontSize="1.8rem">Avec un super display de cards avec filtres</Typography>
            {cards.map((card: Card) => <Card key={card.idcard} card={card} />)}
        </Box>
    )
}