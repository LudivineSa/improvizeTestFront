import { useContext } from "react"
import { Box, Typography } from "@mui/material"

import { CardsContext } from "../../../context/CardsContext"
import pinkPlant from "../../../assets/images/pink-plant-big.svg"
import yellowPlant from "../../../assets/images/yellow-plant.svg"
import pinkFlowerInPot from "../../../assets/images/pink-flower-in-pot.svg"

export const DetailCard = () => {

    const { card } = useContext(CardsContext)

    return (
        <Box sx={{backgroundColor:"#fff", border: '3px solid #F2C91E', padding: "2.5rem 5.5rem", mx:{xs: 'auto', lg: '2rem'}, width:{ xs: '90%', lg:'60%'}, borderRadius: "40px", mt: "3.7rem", maxWidth: '50rem'}}>
            <Box display="flex" sx={{flexDirection:{xs: 'column', lg:'row'}}} gap="2.5rem" alignItems="center">
                <Box>
                    <Box display="flex" justifyContent="space-between" alignItems="baseline" gap="1rem">
                        <img src={pinkPlant} alt="pink plant" style={{maxWidth: "4rem"}}/>
                        <img src={yellowPlant} alt="yellow plant"  style={{maxWidth: "7rem"}}/>
                    </Box>
                    <Box display="flex" justifyContent="space-between" alignItems="baseline">
                    <img src={yellowPlant} alt="yellow plant"  style={{maxWidth: "5rem"}}/>
                        <img src={pinkFlowerInPot} alt="pink flower in pot" style={{maxWidth: "5rem"}}/>
                    </Box>
                </Box>
                <Box>
                    <Box>
                        <Typography sx={{color: "primary.main", fontWeight: "900", fontSize: "1.2rem"}}>Pour faire vos courses...</Typography>
                        <Typography variant="body2" sx={{color: "primary.main", fontSize: "1rem"}}>{card.adresse}</Typography>
                    </Box>
                    <Box>
                        <Typography sx={{color: "primary.main", fontWeight: "900", fontSize: "1.1rem", mt: "2.5rem"}}>Les services disponibles</Typography>
                        <ul>
                            {card.services.map((service, index) => {
                                return <li key={index}>
                                    <Typography>{service}</Typography>
                                </li>
                            })}
                        </ul>
                    </Box>
                    <Typography variant="body2" sx={{fontSize: "1rem", mt: "2.5rem"}}>{card.commentaires[0].contenu}</Typography>
                    <Typography variant="body2" sx={{fontFamily: "Raleway Variable", textAlign: "right", fontSize: '1rem'}}>{card.commentaires[0].auteur}</Typography>
                </Box>
            </Box>
        </Box>
    )
}