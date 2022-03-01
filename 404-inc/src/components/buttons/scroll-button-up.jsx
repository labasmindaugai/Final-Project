import React from 'react';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { Box } from '@mui/material';
import pulse from '../animations/pulse';

const ScrollButtonUp = ({ onClick }) => (
  <Box onClick={onClick} to="store" smooth="true" duration={800}>
    <ArrowDropUpIcon
      sx={{
        height: {
          xs: '20vw',
          sm: '8vw',
          md: '8vw',
          lg: '5vw',
        },
        width: 'auto',
        animation: `${pulse} 2s infinite`,
        color: '#FF5EDB',
        '&:hover': {
          color: '#FF5EDB',
          transform: 'scale(1.2)',
          cursor: 'pointer',
          animation: 'none',
        },
      }}
    />
  </Box>
);

export default ScrollButtonUp;
