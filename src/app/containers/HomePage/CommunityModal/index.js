import React from 'react';
import { useSelector } from 'react-redux';

import { selectUser } from 'app/data/user/selectors';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { deepPurple } from '@material-ui/core/colors';

import { selectCommunityModalMed } from '../selectors';

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
    maxWidth: 520,
    width: '100%',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));

export default function CommunityModal({ handleClose, open }) {
  const classes = useStyles();
  const med = useSelector(selectCommunityModalMed);
  const user = useSelector(selectUser);

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
          <Box className={classes.header} mb={2}>
            <Box>
              <Avatar className={classes.avatar}>
                {user.firstName.charAt(0)}
                {user.lastName.charAt(0)}
              </Avatar>
            </Box>
            <Box pl={2}>
              <Typography variant="h6" component="h3">
                {user.firstName} {user.lastName}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Someplace, USA
              </Typography>
            </Box>
          </Box>
          <Typography variant="body1">
            <strong>Medication:</strong> {med}
          </Typography>
          <Box mt={2}>
            <TextField
              id="contact-message"
              label="Your Message"
              multiline
              rows={4}
              variant="outlined"
              fullWidth
            />
          </Box>
          <Box mt={2}>
            <Grid container alignItems="center" spacing={3}>
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleClose()}
                  size="large"
                >
                  Submit
                </Button>
              </Grid>
              <Grid item>
                <Button onClick={() => handleClose()}>Cancel</Button>
              </Grid>
            </Grid>
          </Box>
        </div>
      </Fade>
    </Modal>
  );
}
