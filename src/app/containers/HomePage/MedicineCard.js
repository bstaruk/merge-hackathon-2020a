import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

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
import { selectMedCardExpanded } from './selectors';

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
  image: {
    maxWidth: theme.spacing(20),
    float: 'right',
    paddingLeft: theme.spacing(3),
    paddingBottom: theme.spacing(1),
  },
  green: {
    color: '#6dc750',
  },
  red: {
    color: '#ff0000',
  },
}));

function MedicineCard({
  category,
  content,
  id,
  image,
  moreContent,
  dosage,
  tags,
  title,
}) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const medCardExpanded = useSelector(selectMedCardExpanded);
  const expanded = medCardExpanded.some(m => m === id);

  const handleContactClick = () => {
    dispatch(actions.setContactModalOpen(true));
  };

  const handleCommunityClick = mood => {
    dispatch(actions.setCommunityModalOpen({ open: true, med: title, mood }));
  };

  const handleExpandClick = () => {
    dispatch(
      actions.setMedCardExpanded(
        !expanded
          ? medCardExpanded.concat([id])
          : medCardExpanded.filter(m => m !== id),
      ),
    );
  };

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography color="textSecondary">{category}</Typography>

        <Typography variant="h6" component="h2" gutterBottom>
          {title} ({dosage})
        </Typography>

        {image && <img src={image} alt={title} className={classes.image} />}

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
            className={classes.green}
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
            className={classes.red}
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
  image: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default MedicineCard;
