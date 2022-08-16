import { Snackbar, Alert } from '@mui/material';

type ErrorPopupProps = {
  isOpen: boolean;
  popupMessage: string;
  type: "error" | "success";
  handleClose: () => void;
}

const ErrorPopup = ({ isOpen, handleClose, popupMessage, type }: ErrorPopupProps) => {
  return (
    <Snackbar open={isOpen} autoHideDuration={5000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={type}>{popupMessage}</Alert>
    </Snackbar>
  );
};

export default ErrorPopup;
