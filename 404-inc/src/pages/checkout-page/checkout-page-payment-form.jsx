import * as React from 'react';
import Grid from '@mui/material/Grid';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import StyledCheckTypography from '../../components/texts/styled-checkout-text';
import StyledCheckTextfield from '../../components/textfields/styled-checkout-text-field';

const CheckoutPagePaymentForm = () => (
  <>
    <StyledCheckTypography gutterBottom>
      Payment
    </StyledCheckTypography>
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <StyledCheckTextfield
          required
          id="cardName"
          label="Cardholder Name"
          fullWidth
          autoComplete="cc-name"
          variant="standard"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <StyledCheckTextfield
          required
          id="cardNumber"
          label="Card Number"
          fullWidth
          autoComplete="cc-number"
          variant="standard"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <StyledCheckTextfield
          required
          id="expDate"
          label="Exp. Date"
          fullWidth
          autoComplete="cc-exp"
          variant="standard"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <StyledCheckTextfield
          required
          id="cvv"
          label="CVV"
          helperText="CCV"
          fullWidth
          autoComplete="cc-csc"
          variant="standard"
        />
      </Grid>
      <Grid item xs={12}>
        <FormControlLabel
          control={<Checkbox color="secondary" name="saveCard" value="yes" />}
          label="Remember card details"
        />
      </Grid>
    </Grid>
  </>
);

export default CheckoutPagePaymentForm;
