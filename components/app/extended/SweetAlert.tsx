import SweetAlert2 from 'react-sweetalert2';
import { closeSweetAlert } from '@redux/slices/ui/sweetAlert';
import { useAppDispatch, useAppSelector } from '@redux/store';
import { useTheme } from '@mui/material/styles'

const SweetAlert = () => {
  const dispatch = useAppDispatch();
  const sweetAlert = useAppSelector((state) => state.sweetAlert);
  const {
    open,
    icon,
    showCancelButton,
    text,
    textCancelButton,
    title,
    confirmButtonText,
    onConfirm
  } = sweetAlert;

  const theme = useTheme();

  const handleClose = () => dispatch(closeSweetAlert());

  return (
    <>
      <SweetAlert2
        customClass={{
          container: "swal2-container-custom"
        }}
        show={open}
        icon={icon}
        showCancelButton={showCancelButton}
        text={text}
        cancelButtonColor={showCancelButton ? theme.palette.error.dark : undefined}
        cancelButtonText={textCancelButton}
        title={title}
        didClose={handleClose}
        confirmButtonText={confirmButtonText}
        confirmButtonColor={theme.palette.primary.dark}
        onConfirm={onConfirm}
      />
    </>
  );
};

export default SweetAlert;
