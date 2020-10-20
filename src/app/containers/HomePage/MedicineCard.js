import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

function MedicineCard({ title }) {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          Category or Explanation
        </Typography>
        <Typography variant="h6" component="h2" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2">
          Some basic content about the medicine or lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Fusce tincidunt diam vel turpis lobortis
          rhoncus. Fusce in ante ac dui fringilla rhoncus. Nunc lacinia luctus
          sem. Quisque luctus tempus lorem rutrum condimentum. Integer non risus
          dapibus, pretium mauris vitae, finibus augue. Quisque pretium turpis
          vitae enim feugiat dictum.
        </Typography>
      </CardContent>

      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

MedicineCard.propTypes = {
  title: PropTypes.string.isRequired,
};

export default MedicineCard;
