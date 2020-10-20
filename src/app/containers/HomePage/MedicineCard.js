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
}));

function MedicineCard({ title }) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          Category or Explanation
        </Typography>
        <Typography variant="h6" component="h2" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Some basic content about the medicine or lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Fusce tincidunt diam vel turpis lobortis
          rhoncus. Fusce in ante ac dui fringilla rhoncus. Nunc lacinia luctus
          sem. Quisque luctus tempus lorem rutrum condimentum. Integer non risus
          dapibus, pretium mauris vitae, finibus augue. Quisque pretium turpis
          vitae enim feugiat dictum.
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <Button size="small">Request Assistance</Button>
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
            Additional Information:
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

          <Typography paragraph>
            Cras fermentum eget ex a scelerisque. Sed posuere nulla nec purus
            elementum, in posuere elit dapibus. Aenean consectetur elit feugiat
            viverra elementum. Sed sodales felis diam, sit amet auctor nisi
            efficitur quis. Nam vel arcu ultrices nulla vehicula ornare. Nunc
            dapibus nulla accumsan, gravida leo ac, tempor ipsum. In at mattis
            orci, in pulvinar urna.
          </Typography>

          <Typography paragraph>
            Phasellus ut neque finibus, pharetra ex ultrices, aliquam nulla.
            Vivamus tellus metus, feugiat a semper id, pretium ut ex. Aliquam
            rhoncus gravida ullamcorper. Praesent ut lorem sit amet mi varius
            placerat venenatis ac mi. Ut luctus maximus elit eu consectetur. Ut
            ut molestie orci. Etiam facilisis, nisl ut facilisis scelerisque,
            risus sapien gravida mi, eu sagittis leo ligula vel augue. Proin vel
            ultricies lorem, vitae hendrerit tellus. Proin ex sem, tincidunt a
            facilisis ac, venenatis consectetur neque. Quisque vel porttitor
            nisl. Nullam ut tortor vel velit convallis euismod quis ut orci.
            Duis ac nunc dignissim, ornare purus non, sodales quam. Nam sit amet
            consequat dui, eu sagittis lacus.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

MedicineCard.propTypes = {
  title: PropTypes.string.isRequired,
};

export default MedicineCard;
