import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Avatar from '@material-ui/core/Avatar';

import DrImg from './lexus.jpg';

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
    maxWidth: 640,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  avatar: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
}));

export default function ContactModal({ handleClose, open }) {
  const classes = useStyles();

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
          <Box className={classes.header} mb={4}>
            <Box>
              <Avatar alt="Dr. Lexus" src={DrImg} className={classes.avatar} />
            </Box>
            <Box pl={2}>
              <Typography variant="h6" component="h3">
                Contacting Dr. Lexus
              </Typography>
              <Typography variant="body2" color="textSecondary" gutterBottom>
                (866) 555-1234
              </Typography>
              <Typography variant="body2" color="textSecondary">
                <Link href="mailto:dr.lexus@brawndocorp.com">
                  dr.lexus@brawndocorp.com
                </Link>
              </Typography>
            </Box>
          </Box>
          <Typography variant="body1" gutterBottom>
            Pellentesque efficitur sit amet sapien ac tristique. Donec viverra
            libero eget iaculis suscipit. Vestibulum rutrum leo eu fringilla
            commodo. Suspendisse potenti. Donec ultrices massa sit amet nulla
            eleifend, eget rhoncus metus tristique. Cras ac porttitor purus.
            Suspendisse laoreet id sem at tristique.
          </Typography>
          <Box mt={2}>
            <Button onClick={() => handleClose()}>Cancel</Button>
          </Box>
        </div>
      </Fade>
    </Modal>
  );
}