import { Box, TextField, Button, Select, MenuItem, OutlinedInput, FormControl, InputAdornment } from "@mui/material"
import { useContext, useState } from "react"

import "./filtersection.css"
import { MagnifierIcon } from "./MagnifierIcon";
import { CardsContext } from "../../../../context/CardsContext";

export const FilterSection = () => {

    const [isSortedByDate, setIsSortedByDate] = useState<boolean>(false);

    const { sortCardsByDate, sortCardsById, filterCardByTitle } = useContext(CardsContext);
    
    const buttonStyle = {
        color: isSortedByDate ? "#fff" : "#3C70D8",
        backgroundColor: isSortedByDate ? "#3C70D8" : "#fff",
        border: isSortedByDate ? "2px solid transparent" : "2px solid #F2C91E"
    }

    const sortByDate = () => {
        if(!isSortedByDate) {
            sortCardsByDate();
            setIsSortedByDate(true);
        } else {
            setIsSortedByDate(false);
            sortCardsById();
        }
    }

    const filterByTitle = (input: string) => {
        setIsSortedByDate(false);
        filterCardByTitle(input);
    }

    return (
        <Box display="flex" sx={{flexDirection: {xs: 'column', lg: 'row'}, justifyContent: {xs: 'left', lg: 'center'}, alignItems: {xs: 'left', lg: 'center'}}} gap="2rem" mt="4rem" position="relative">
            <Box sx={{
                position: "relative",
                '&:hover svg': { 
                    fill: "#F2C91E",
                },
                '& input:active + svg, & input:focus + svg': { 
                    fill: "currentColor", 
                }
            }}>
            <TextField
                placeholder="Rechercher une card"
                onChange={(e) => filterByTitle(e.target.value)}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <MagnifierIcon />
                        </InputAdornment>
                    )
                }}
            />
        </Box>
            <Button onClick={sortByDate} sx={{fontWeight:"400", border:buttonStyle.border, color:buttonStyle.color, backgroundColor: buttonStyle.backgroundColor}}>Trier par date de création</Button>
            <FormControl variant="outlined" sx={{ width: 200 }}>
            <Select
                value={0}
                className="select"
                label="Filtrer par"
                MenuProps={{
                    sx: {
                        '.MuiPaper-root': {
                            backgroundColor: "primary.main", 
                            borderRadius: '0 0 20px 20px'
                        },
                    },
                }}
                input={
                    <OutlinedInput
                        id="outlined-select"
                        sx={{
                            fontWeight: "400",
                            color: "primary.main",
                            padding: "0.1rem",
                            paddingLeft: "1rem",
                            '& .MuiOutlinedInput-notchedOutline': {
                                borderColor: "primary.light",
                                borderRadius: '60px',
                                borderWidth: "2px",
                            },
                            '&:hover .MuiOutlinedInput-notchedOutline': {
                                borderColor: "primary.light"
                            },
                            '& .MuiSelect-icon': { 
                                paddingRight: "0.5rem", 
                                height: "1.5rem",
                                width: "1.5rem",
                                transform: "scale(1.5)",
                                color: "primary.main",
                            },
                            '&:hover .MuiSelect-icon': { 
                                color: "#fff"
                            },
                            '&.Mui-focused .MuiSelect-icon': { 
                                color: "#fff"
                            },
                            '&:hover': {
                                color: "#fff",
                                backgroundColor: "primary.light",
                                borderRadius: '60px'
                            },
                            '&.Mui-focused': {
                                color: "#fff",
                                backgroundColor: "secondary.main",
                                borderRadius: '60px'
                            },
                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                borderColor: "primary.light",
                            }
                        }}
                    />
                    
                }
            >
                <MenuItem sx={{ color: "#fff", '&:hover': {backgroundColor: "rgba(255, 255, 255, 0.08)",color: "#fff"}}} value="0">  Filtre </MenuItem>
                <MenuItem sx={{ color: "#fff", '&:hover': {backgroundColor: "rgba(255, 255, 255, 0.08)",color: "#fff"}}} value="1">  Filtre </MenuItem>
                <MenuItem sx={{ color: "#fff", '&:hover': {backgroundColor: "rgba(255, 255, 255, 0.08)",color: "#fff"}}} value="2">  Filtre </MenuItem>
                <MenuItem sx={{ color: "#fff", '&:hover': {backgroundColor: "rgba(255, 255, 255, 0.08)",color: "#fff"}}} value="3">  Filtre </MenuItem>
            </Select>
        </FormControl>
    </Box>
    )
}