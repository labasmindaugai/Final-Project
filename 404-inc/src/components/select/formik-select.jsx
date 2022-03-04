import { MenuItem, TextField } from '@mui/material';
import React from 'react';

const FormikSelect = (props) => (
  <TextField
    {...props}
  >
    <MenuItem value={1}>Section 1</MenuItem>
    <MenuItem value={2}>Section 2</MenuItem>
    <MenuItem value={3}>Section 3</MenuItem>
  </TextField>
);

export default FormikSelect;
