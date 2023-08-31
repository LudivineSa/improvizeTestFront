import { Box, Typography } from "@mui/material"

import logo from '../../assets/images/sl-logo-yellow.svg'

export const Navbar = () => {
    return (
        <Box display="flex" justifyContent="space-between" mx="4rem" padding="0.5rem">
            <img src={logo} alt="SL logo" />
            <Box display="flex" alignItems="center" gap="4rem">
                <Typography color="secondary.main" fontWeight="700" sx={{"&:hover": {color:"primary.main"}, cursor: 'pointer'}}>Item 1</Typography>
                <Typography color="secondary.main" fontWeight="700" sx={{"&:hover": {color:"primary.main"}, cursor: 'pointer'}}>Item 2</Typography>
            </Box>
        </Box>
    )
}