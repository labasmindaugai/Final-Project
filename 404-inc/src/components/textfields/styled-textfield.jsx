import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledTextField = styled(TextField)(({ theme }) => ({
  backgroundColor: theme.palette.transparentLight.main,
  color: theme.palette.primary.main,
  borderRadius: '5px',
  '& input': {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.transparentLight.main,
    fontSize: { sm: '5px', md: '56px' },
  },
  '& :focus': {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.transparentLight.main,
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
    color: `${theme.palette.primary.main}`,
  },
  '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
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
    borderColor: `${theme.palette.primary.main}`,
  },
  '& input:-webkit-autofill': {
    webkitBoxShadow: `0 0 0 100px ${theme.palette.transparentLight.main} inset`,
    WebkitTextFillColor: 'white',
    transition: 'background-color 5000s ease-in-out 0s',
    color: 'white',
  },
  // width: '50%',
  marginRight: '10px',
}));

export default StyledTextField;
