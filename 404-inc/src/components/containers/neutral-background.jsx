import React from 'react';
import { Box } from '@mui/material';
import NeutralImage from '../images/neutral.jpg';

const NeutralBackground = ({ children, sx }) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundSize: 'cover',
      height: '100vh',
      backgroundPosition: 'center',
      backgroundImage: `radial-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.8)) ,url(${NeutralImage})`,
      ...sx,
    }}
  >
    {children}
  </Box>
);

export default NeutralBackground;
