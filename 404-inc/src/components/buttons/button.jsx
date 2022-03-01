import React from 'react';
import {
  Button,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.transparentLight.main,
  color: theme.palette.primary.main,
  '&: hover': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.dark,
  },
}));

const LightButton = ({ children, ...rest }) => (
  <StyledButton
    type="submit"
    variant="contained"
    {...rest}
  >
    {children}
  </StyledButton>
);

export default LightButton;
