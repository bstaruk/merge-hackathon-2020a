import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';

import { actions } from './slice';

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
  chipsWrapper: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    marginTop: theme.spacing(2),
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));

function MedicineCard({ category, content, moreContent, dosage, tags, title }) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const dispatch = useDispatch();

  const handleContactClick = () => {
    dispatch(actions.setContactModalOpen(true));
  };

  const handleCommunityClick = mood => {
    dispatch(actions.setCommunityModalOpen({ open: true, med: title, mood }));
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography color="textSecondary">{category}</Typography>

        <Typography variant="h6" component="h2" gutterBottom>
          {title} ({dosage})
        </Typography>

        {content}

        <div className={classes.chipsWrapper}>
          {tags.map((tag, index) => (
            <Chip variant="outlined" size="small" label={tag} key={index} />
          ))}
        </div>
      </CardContent>

      <CardActions disableSpacing>
        <Box>
          <IconButton
            color="primary"
            aria-label="share a positive experience"
            onClick={() => handleCommunityClick('good')}
          >
            <SentimentVerySatisfiedIcon />
          </IconButton>
        </Box>
        <Box>
          <IconButton
            aria-label="share some tips or advice"
            onClick={() => handleCommunityClick('neutral')}
          >
            <SentimentDissatisfiedIcon />
          </IconButton>
        </Box>
        <Box mr={1}>
          <IconButton
            color="secondary"
            aria-label="share a poor experience"
            onClick={() => handleCommunityClick('bad')}
          >
            <SentimentVeryDissatisfiedIcon />
          </IconButton>
        </Box>
        <Box>
          <Button size="small" onClick={handleContactClick}>
            Request Assistance
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
        <CardContent>{moreContent}</CardContent>
      </Collapse>
    </Card>
  );
}

MedicineCard.propTypes = {
  category: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
  moreContent: PropTypes.node.isRequired,
  dosage: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

export default MedicineCard;
