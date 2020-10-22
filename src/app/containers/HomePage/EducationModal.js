import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Typography from '@material-ui/core/Typography';

import { actions } from './slice';
import { selectMedCardExpanded } from './selectors';

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(2),
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    borderRadius: 3,
    padding: theme.spacing(4),
    outline: 'none',
    minWidth: 320,
    maxWidth: 540,
    width: '95%',
  },
  green: {
    color: '#6dc750',
  },
  red: {
    color: '#ff0000',
  },
}));

export default function EducationModal({ handleClose, open }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const medCardExpanded = useSelector(selectMedCardExpanded);
  const expanded = medCardExpanded.some(m => m === 1);

  const handleContactClick = () => {
    if (!expanded) {
      dispatch(actions.setMedCardExpanded(medCardExpanded.concat([1])));
    }

    handleClose();
    window.scrollTo(0, 800);
  };

  return (
    <Modal
      aria-labelledby="reminder-modal-title"
      aria-describedby="reminder-modal-description"
      className={classes.modal}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <div className={classes.paper}>
          <Typography variant="h5" component="h2" gutterBottom>
            Did you know?
          </Typography>

          <Typography variant="body1" gutterBottom>
            Some common side effects for <strong>Atorvastatin</strong> include
            heartburn, gas, and forgetfulness. Click Learn More to see what
            other side effects can occur.
          </Typography>

          <Box
            mt={3}
            display="flex"
            alignItems="center"
            justifyContent="flex-start"
          >
            <Box mr={2}>
              <Button
                color="primary"
                variant="contained"
                onClick={handleContactClick}
              >
                Learn More
              </Button>
            </Box>
            <Box>
              <Button onClick={() => handleClose()}>Dismiss</Button>
            </Box>
          </Box>
        </div>
      </Fade>
    </Modal>
  );
}
