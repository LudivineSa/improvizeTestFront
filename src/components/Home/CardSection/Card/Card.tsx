import { Box } from "@mui/material";

interface CardProps {
    card: Card;
}

export const Card = (props: CardProps) => {

    const { card } = props;

    return (
        <Box>
            {card.title}
        </Box>
    )
}