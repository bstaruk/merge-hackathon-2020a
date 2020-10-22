import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectUser } from 'app/data/user/selectors';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';

import { actions } from './slice';

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

export default function ReminderModal({ handleClose, open }) {
  const [taken, setTaken] = useState(0);
  const classes = useStyles();
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleContactClick = () => {
    dispatch(actions.setContactModalOpen(true));
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
            Good morning, {user.firstName}!
          </Typography>

          <Typography variant="body1" color="textSecondary" gutterBottom>
            <strong>It’s time to check in.</strong>
          </Typography>

          <Box mt={2}>
            <Typography variant="h6" component="h5" gutterBottom>
              Have you taken your pills today?
            </Typography>
          </Box>

          <Box display="flex" alignItems="center" justifyContent="flex-start">
            <Box mr={1}>
              <IconButton
                className={taken !== 1 && classes.green}
                aria-label="Yes"
                onClick={() => setTaken(2)}
              >
                <ThumbUpIcon />
              </IconButton>
            </Box>
            <Box>
              <IconButton
                className={taken !== 2 && classes.red}
                aria-label="No"
                onClick={() => setTaken(1)}
              >
                <ThumbDownIcon />
              </IconButton>
            </Box>
          </Box>

          {taken === 1 && (
            <>
              <Box mt={1}>
                <Typography variant="body1" gutterBottom>
                  No problem! We'll ask again next time you open the app. If you
                  take your pills today, your streak will grow to{' '}
                  <strong>7 out of 8 days</strong>!
                </Typography>
              </Box>
            </>
          )}
          {taken === 2 && (
            <>
              <Box mt={1}>
                <Typography variant="body1" gutterBottom>
                  Nice work! Your streak just grew to{' '}
                  <strong>7 out of 8 days</strong>!
                </Typography>
              </Box>
              <Box mt={1}>
                <Typography variant="body1">
                  Remember, you may not feel notably different, but that doesn’t
                  mean the pills aren’t working.
                </Typography>
              </Box>
              <Box mt={1}>
                <Typography variant="body1">
                  <Link href="#">Share your tips!</Link> Help others get up and
                  running with making their pills a habit.
                </Typography>
              </Box>
            </>
          )}

          {taken !== 0 && (
            <Box mt={3}>
              <Button onClick={() => handleClose()}>Dismiss Reminder</Button>{' '}
              <Button color="primary" onClick={handleContactClick}>
                Contact Physician
              </Button>
            </Box>
          )}
        </div>
      </Fade>
    </Modal>
  );
}
