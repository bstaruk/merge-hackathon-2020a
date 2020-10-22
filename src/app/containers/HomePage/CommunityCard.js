import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Tooltip from '@material-ui/core/Tooltip';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive';
import ChildFriendlyIcon from '@material-ui/icons/ChildFriendly';

import { deepPurple } from '@material-ui/core/colors';

import { actions } from './slice';
import { selectAdviceLiked } from './selectors';

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
    width: theme.spacing(8),
    height: theme.spacing(8),
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  red: {
    backgroundColor: red[500],
    color: 'white',

    '&:hover': {
      backgroundColor: red[400],
    },
  },
}));

function CommunityCard({
  category,
  content,
  id,
  title,
  prefix,
  firstName,
  lastName,
  location,
}) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const adviceLiked = useSelector(selectAdviceLiked);
  const dispatch = useDispatch();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleLikeClick = () => {
    dispatch(actions.likeAdvice(`${id}`));
  };

  const handleDismissClick = () => {
    dispatch(actions.dismissAdvice(`${id}`));
  };

  const isLiked = adviceLiked.some(a => a === `${id}`);

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography color="textSecondary">{category}</Typography>
        <Typography variant="h6" component="h2" gutterBottom>
          {title}
        </Typography>

        {content}

        {/* user info */}
        <Box
          display="flex"
          justifyContent="flex-start"
          alignItems="center"
          mt={3}
        >
          <Avatar className={classes.avatar}>
            {firstName.charAt(0)}
            {lastName.charAt(0)}
          </Avatar>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="flex-start"
            ml={2}
          >
            <Typography variant="body2" color="textPrimary">
              {prefix && `${prefix} `}
              {firstName} {lastName.charAt(0)}.
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {location}
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
            className={classes.red}
            startIcon={isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            onClick={isLiked ? undefined : handleLikeClick}
          >
            {isLiked ? 'Thanked' : 'Thank'} User
          </Button>
        </Box>
        <Box>
          <Button size="small" onClick={handleDismissClick}>
            Dismiss
          </Button>
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
  id: PropTypes.number.isRequired,
  content: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  prefix: PropTypes.string,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default CommunityCard;
