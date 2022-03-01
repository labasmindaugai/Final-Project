import React from 'react';
import { Box } from '@mui/material';
import HeroImage from '../images/hero.jpg';

const HeroBackground = ({ children, sx }) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundSize: 'cover',
      height: '100vh',
      backgroundPosition: 'center',
      ...sx,
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)) ,url(${HeroImage})`,
    }}
  >
    {children}
  </Box>
);

export default HeroBackground;
