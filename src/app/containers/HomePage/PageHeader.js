import React from 'react';
import { useSelector } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Tooltip from '@material-ui/core/Tooltip';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive';
import ChildFriendlyIcon from '@material-ui/icons/ChildFriendly';

import { deepPurple } from '@material-ui/core/colors';

import { selectUser } from 'app/data/user/selectors';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));

function PageHeader() {
  const classes = useStyles();
  const user = useSelector(selectUser);

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Avatar className={classes.avatar}>B</Avatar>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="flex-start"
        ml={2}
      >
        <Typography variant="h6" component="h2">
          Hi, {user.firstName}!
        </Typography>
        <Box
          display="flex"
          justifyContent="flex-start"
          alignItems="center"
          mt={0.5}
        >
          <Box>
            <Tooltip title="Parent" arrow>
              <ChildFriendlyIcon fontSize="small" color="action" />
            </Tooltip>
          </Box>
          <Box ml={1}>
            <Tooltip title="Cyclist" arrow>
              <DirectionsBikeIcon fontSize="small" color="action" />
            </Tooltip>
          </Box>
          <Box ml={1}>
            <Tooltip title="Traveler" arrow>
              <AirplanemodeActiveIcon fontSize="small" color="action" />
            </Tooltip>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default PageHeader;
