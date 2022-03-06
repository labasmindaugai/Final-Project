import * as React from 'react';
import Modal from '@mui/material/Modal';
import { Container } from '@mui/material';
import CheckoutPage from '../../pages/checkout-page';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  border: '2px solid #000',
  boxShadow: 24,
  backgroundColor: 'rgba(255, 240, 235, 0.16)',
};

const BasicModal = ({ open, handleClose }) => (

  <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Container sx={style}>
      <CheckoutPage handleClose={handleClose} />
    </Container>
  </Modal>
);

export default BasicModal;
