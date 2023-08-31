import { Box } from '@mui/material';

import texture from '../../assets/images/texture.svg';

interface BackgroundWithTextureProps {
    children: React.ReactNode;
    borderRadius: string;
    linearGradient: string;
    overflow: string;
}

import './backgroundWithTexture.css'

export const BackgroundWithTexture = (props: BackgroundWithTextureProps) => {
    const { children, borderRadius, linearGradient, overflow } = props;
    return (
        <Box 
            sx={{ 
                position: 'relative',
                width: '100%', 
                height: '100%', 
                borderRadius: borderRadius, 
                backgroundImage: linearGradient,
                overflow: overflow
            }}
        >
            <Box 
                sx={{
                    position: 'absolute', 
                    top: '0', 
                    left: '0', 
                    zIndex: 5, 
                    width: '100%', 
                    height: '100%',
                    overflow: 'hidden'
                }}
            >
            <img 
                src={texture} 
                alt="texture" 
                className="texture"
                style={{
                    width: '105%',
                    height: '105%', 
                    objectFit: 'cover',
                }}
            />
            </Box>
            {children}
        </Box>
    );
}