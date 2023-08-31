import { Box } from "@mui/material"

import twoFlowers from '../../../../assets/images/two-flowers.svg'
import zigzag from '../../../../assets/images/zigzag.svg'
import lock from '../../../../assets/images/lock.svg'
import triangles from '../../../../assets/images/triangles.svg'
import boat from '../../../../assets/images/boat.svg'
import pinkPlant from '../../../../assets/images/pink-plant.svg'

export const HeaderCard = () => {
    return (
        <Box>
            <Box display="flex" justifyContent="space-evenly">
                <img src={twoFlowers} alt="two flowers" style={{height: "7rem"}}/>
                <img src={zigzag} alt="yellow plant" />
                <img src={lock} alt="pink flower" />
            </Box>
            <Box display="flex" justifyContent="space-evenly" alignItems="flex-start">
                <img src={triangles} alt="triangles" />
                <img src={boat} alt="boat" />
                <img src={pinkPlant} alt="pink plant" />
            </Box>
        </Box>
    )
}