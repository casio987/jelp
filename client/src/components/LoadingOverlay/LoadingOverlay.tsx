import { Backdrop, CircularProgress } from '@mui/material';

type LoadingOverlayProps = {
  isOpen: boolean;
}

const LoadingOverlay = ({ isOpen }: LoadingOverlayProps) => {
  return (
    <Backdrop open={isOpen}>
      <CircularProgress size={100} sx={{ color: 'white' }} />
    </Backdrop>
  )
};

export default LoadingOverlay;
