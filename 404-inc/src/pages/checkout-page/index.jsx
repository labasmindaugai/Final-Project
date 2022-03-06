import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Check from '@mui/icons-material/Check';
import { styled } from '@mui/material';
import AddressForm from './checkout-page-address-form';
import PaymentForm from './checkout-page-payment-form';
import Review from './checkout-page-review';
import StyledCheckTypography from '../../components/texts/styled-checkout-text';

const steps = ['Adress', 'Payment', 'Review'];

const getStepContent = (step) => {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <PaymentForm />;
    case 2:
      return <Review />;
    default:
      throw new Error('Unknown step');
  }
};

const QontoStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
  display: 'flex',
  height: 1,
  alignItems: 'center',
  ...(ownerState.active && {
    color: '#784af4',
  }),
  '& .StepIcon-completedIcon': {
    color: '#784af4',
    zIndex: 1,
    fontSize: 15,
  },
  '& .StepIcon-circle': {
    width: 5,
    height: 5,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
}));

const QontoStepIcon = (props) => {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <Check className="StepIcon-completedIcon" />
      ) : (
        <div className="StepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
};

const CheckoutPage = ({ handleClose }) => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <Container
      component="main"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 10, md: 3 } }}>
        <StyledCheckTypography
          align="center"
        >
          Product Order
        </StyledCheckTypography>
        <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5, fontSize: '0.5rem' }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Box>
          {activeStep === steps.length ? (
            <>
              <StyledCheckTypography
                gutterBottom
              >
                Thank you for your order.
              </StyledCheckTypography>
              <StyledCheckTypography>
                Your order number is # 000631. We have sent you an e-mail of order confirmation
                Thanks For Purchase Hero!
              </StyledCheckTypography>
              <Button
                variant="contained"
                onClick={handleClose}
                color="success"
                sx={{ mt: 3, ml: 1 }}
              >
                Return to site
              </Button>
            </>
          ) : (
            <>
              {getStepContent(activeStep)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} color="inherit" sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}

                <Button
                  variant="contained"
                  onClick={handleNext}
                  color="success"
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1 ? 'done' : 'Next'}
                </Button>
              </Box>
            </>
          )}
        </Box>
      </Paper>
    </Container>
  );
};

export default CheckoutPage;
