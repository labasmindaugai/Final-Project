import React from 'react';
import { Box } from '@mui/material';
import NotFound from '../images/nerasta.jpg';

const NotFoundBackground = ({ children, sx }) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundSize: 'cover',
      height: '100vh',
      backgroundPosition: 'center',
      ...sx,
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)) ,url(${NotFound})`,
    }}
  >
    {children}
  </Box>
);

export default NotFoundBackground;
