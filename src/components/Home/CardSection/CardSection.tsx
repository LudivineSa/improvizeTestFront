import { useContext } from "react";
import { Box, Typography, Grid } from "@mui/material"


import { CardsContext } from "../../../context/CardsContext";
import { Card } from "./Card/Card";
import { FilterSection } from "./FilterSection.tsx/FilterSection";

export const CardSection = () => {

    const { cards } = useContext(CardsContext);

    return (
        <Box mt="11rem" px="3rem">
            <Typography sx={{color: "primary.main", fontWeight: "900", fontSize: "2rem"}}>Title lorem ip SUM</Typography>
            <Typography variant="body2" fontSize="1.8rem">Avec un super display de cards avec filtres</Typography>
            <FilterSection />
            <Grid container spacing={10} sx={{marginTop:"1rem"}} justifyContent="center" alignItems="stretch">
                {cards.map((card: Card, index: number) =>  ( 
                <Grid item xs={12} lg={4} display="flex" justifyContent="center" key={card.idcard}>
                    <Card index={index} key={card.idcard} card={card} />
                </Grid>
            ))}
            </Grid>
            {cards.length === 0 && <Typography variant="body2" fontSize="1.8rem" textAlign="center">Aucune card ne correspond à votre recherche</Typography>}
        </Box>
    )
}