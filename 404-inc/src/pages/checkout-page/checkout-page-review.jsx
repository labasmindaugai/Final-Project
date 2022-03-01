import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import StyledCheckTypography from './styled-text';

const products = [
  {
    name: '127.0.0.1',
    desc: 'Console',
    price: '69.99',
  },
  { name: 'Shipment fee', desc: '', price: 'Free' },
];

const CheckoutPageReview = () => (
  <>
    <StyledCheckTypography gutterBottom>
      Your order
    </StyledCheckTypography>
    <List>
      {products.map((product) => (
        <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
          <ListItemText primary={product.name} secondary={product.desc} primaryTypographyProps={{ sx: { fontSize: '0.8rem' } }} />
          <StyledCheckTypography variant="body2" primaryTypographyProps={{ sx: { fontSize: '0.8rem' } }}>{product.price}</StyledCheckTypography>
        </ListItem>
      ))}

      <ListItem sx={{ py: 1, px: 0 }}>
        <ListItemText primary="Total" />
        <StyledCheckTypography>
          69.99 eur
        </StyledCheckTypography>
      </ListItem>
    </List>
    <Grid container spacing={2} />
  </>
);

export default CheckoutPageReview;
