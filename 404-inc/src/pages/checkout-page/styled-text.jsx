import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledCheckTypography = styled(Typography)(({ theme }) => ({
  fontSize: '3vw',
  [theme.breakpoints.up('sm')]: {
    fontSize: '2.3vw',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.6vw',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '0.9vw',
  },
}));

export default StyledCheckTypography;
