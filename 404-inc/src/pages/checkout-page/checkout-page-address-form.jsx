import * as React from 'react';
import Grid from '@mui/material/Grid';
import StyledCheckTypography from './styled-text';
import StyledCheckTextfield from './styled-text-field';

const CheckoutPageAddressForm = () => (
  <>
    <StyledCheckTypography gutterBottom>
      Adress
    </StyledCheckTypography>
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <StyledCheckTextfield
          required
          id="firstName"
          name="firstName"
          label="Name"
          fullWidth
          autoComplete="given-name"
          variant="standard"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <StyledCheckTextfield
          required
          id="lastName"
          name="lastName"
          label="Surname"
          fullWidth
          autoComplete="family-name"
          variant="standard"
        />
      </Grid>
      <Grid item xs={12}>
        <StyledCheckTextfield
          required
          id="address1"
          name="address1"
          label="Adress"
          fullWidth
          autoComplete="shipping address-line1"
          variant="standard"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <StyledCheckTextfield
          required
          id="city"
          name="city"
          label="City"
          fullWidth
          autoComplete="shipping address-level2"
          variant="standard"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <StyledCheckTextfield
          required
          id="zip"
          name="zip"
          label="Area Code"
          fullWidth
          autoComplete="shipping postal-code"
          variant="standard"
        />
      </Grid>
    </Grid>
  </>
);

export default CheckoutPageAddressForm;
