import React, { useState } from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Tooltip from '@material-ui/core/Tooltip';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive';
import ChildFriendlyIcon from '@material-ui/icons/ChildFriendly';

import { deepPurple } from '@material-ui/core/colors';

const dummyUsers = {
  appleseed: {
    firstName: 'Johnny',
    lastName: 'Appleseed',
    initials: 'JA',
  },
  eastwood: {
    firstName: 'Clint',
    lastName: 'Eastwood',
    initials: 'CE',
  },
  cartman: {
    firstName: 'Liane',
    lastName: 'Cartman',
    initials: 'LC',
  },
};

const useStyles = makeStyles(theme => ({
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    width: theme.spacing(6),
    height: theme.spacing(6),
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));

function CommunityCard({ category, title, user }) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const userData = dummyUsers[user] || dummyUsers[0];

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography color="textSecondary">{category}</Typography>
        <Typography variant="h6" component="h2" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Some advice about the medicine or lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Fusce tincidunt diam vel turpis lobortis
          rhoncus. Fusce in ante ac dui fringilla rhoncus. Nunc lacinia luctus
          sem. Quisque luctus tempus lorem rutrum condimentum. Integer non risus
          dapibus, pretium mauris vitae, finibus augue. Quisque pretium turpis
          vitae enim feugiat dictum.
        </Typography>

        {/* user info */}
        <Box
          display="flex"
          justifyContent="flex-start"
          alignItems="center"
          mt={3}
        >
          <Avatar className={classes.avatar}>{userData.initials}</Avatar>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="flex-start"
            ml={2}
          >
            <Typography variant="body2" color="textSecondary">
              {userData.firstName} {userData.lastName}
            </Typography>
            <Box
              display="flex"
              justifyContent="flex-start"
              alignItems="center"
              mt={0.5}
            >
              <Box>
                <Tooltip title="Parent" arrow>
                  <Typography color="textSecondary">
                    <ChildFriendlyIcon fontSize="small" color="inherit" />
                  </Typography>
                </Tooltip>
              </Box>
              <Box ml={1}>
                <Tooltip title="Cyclist" arrow>
                  <Typography color="textSecondary">
                    <DirectionsBikeIcon fontSize="small" color="inherit" />
                  </Typography>
                </Tooltip>
              </Box>
              <Box ml={1}>
                <Tooltip title="Traveler" arrow>
                  <Typography color="textSecondary">
                    <AirplanemodeActiveIcon fontSize="small" color="inherit" />
                  </Typography>
                </Tooltip>
              </Box>
            </Box>
          </Box>
        </Box>
      </CardContent>

      <CardActions disableSpacing>
        <Box mr={2}>
          <Button
            variant="contained"
            size="small"
            color="secondary"
            startIcon={<FavoriteBorderIcon />}
          >
            Thank User
          </Button>
        </Box>
        <Box>
          <Button size="small">Dismiss</Button>
        </Box>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="h6" component="h5" gutterBottom>
            Why am I seeing this?
          </Typography>
          <Typography paragraph>
            Aliquam erat volutpat. Vestibulum ante ipsum primis in faucibus orci
            luctus et ultrices posuere cubilia curae; Proin nec auctor eros.
            Curabitur vitae egestas sem, ac lobortis lorem. Phasellus dapibus
            elit vel dui tincidunt, scelerisque congue magna mattis. Suspendisse
            et pretium urna. Etiam rhoncus, dui ut tempor tincidunt, odio purus
            vehicula nulla, eu viverra dolor mauris eu lacus. Ut rhoncus
            pharetra enim. Quisque ullamcorper, diam quis tempus mollis, purus
            orci tincidunt ipsum, lacinia pellentesque nisi arcu at mauris.
            Suspendisse vel lectus sit amet purus suscipit tincidunt. Morbi a
            mauris et quam imperdiet sodales. Pellentesque a elit tortor.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

CommunityCard.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  user: PropTypes.oneOf(['eastwood', 'cartman', 'appleseed']).isRequired,
};

export default CommunityCard;
