import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledCheckTextfield = styled(TextField)(({ theme }) => ({
  '& input': {
    fontSize: '2.5vw',
    [theme.breakpoints.up('sm')]: {
      fontSize: '1.8vw',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.2vw',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '0.8vw',
    },
  },
  '& .MuiInputLabel-root': {
    fontSize: '2.6vw',
    [theme.breakpoints.up('sm')]: {
      fontSize: '1.8vw',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.2vw',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '0.8vw',
    },
  },
}));

export default StyledCheckTextfield;
