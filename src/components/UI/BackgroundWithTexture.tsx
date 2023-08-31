import { Box } from '@mui/material';

import texture from '../../assets/images/texture.svg';

interface BackgroundWithTextureProps {
    children: React.ReactNode;
    borderRadius: string;
    linearGradient: string;
}

export const BackgroundWithTexture = (props: BackgroundWithTextureProps) => {
    const { children, borderRadius, linearGradient } = props;
    return (
        <Box 
            sx={{ 
                position: 'relative',
                width: '100%', 
                height: '100%', 
                borderRadius: borderRadius, 
                backgroundImage: linearGradient,
                overflow: 'hidden'
            }}
        >
            <Box 
                sx={{
                    position: 'absolute', 
                    top: '0', 
                    left: '0', 
                    zIndex: 5, 
                    width: '100%', 
                    height: '100%' 
                }}
            >
                <img 
                    src={texture} 
                    alt="texture" 
                    style={{
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover'
                    }}
                />
            </Box>
            {children}
        </Box>
    );
}