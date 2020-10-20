import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import MedicineCard from '../MedicineCard';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="sticky">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
          centered
        >
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Typography variant="h5" component="h2" gutterBottom>
          Tab One
        </Typography>
        <Typography variant="body1" gutterBottom>
          Pellentesque efficitur sit amet sapien ac tristique. Donec viverra
          libero eget iaculis suscipit. Vestibulum rutrum leo eu fringilla
          commodo. Suspendisse potenti. Donec ultrices massa sit amet nulla
          eleifend, eget rhoncus metus tristique. Cras ac porttitor purus.
          Suspendisse laoreet id sem at tristique.
        </Typography>
        <Box mb={2} mt={3}>
          <MedicineCard title="Medicine Card One" />
        </Box>
        <Box mb={2}>
          <MedicineCard title="Medicine Card Two" />
        </Box>
        <Box mb={2}>
          <MedicineCard title="Medicine Card Three" />
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Typography variant="h5" component="h2" gutterBottom>
          Tab Two
        </Typography>
        <Typography variant="body1" gutterBottom>
          Aliquam erat volutpat. Vestibulum ante ipsum primis in faucibus orci
          luctus et ultrices posuere cubilia curae; Proin nec auctor eros.
          Curabitur vitae egestas sem, ac lobortis lorem. Phasellus dapibus elit
          vel dui tincidunt, scelerisque congue magna mattis. Suspendisse et
          pretium urna. Etiam rhoncus, dui ut tempor tincidunt, odio purus
          vehicula nulla, eu viverra dolor mauris eu lacus.
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Typography variant="h5" component="h2" gutterBottom>
          Tab Three
        </Typography>
        <Typography variant="body1" gutterBottom>
          Cras fermentum eget ex a scelerisque. Sed posuere nulla nec purus
          elementum, in posuere elit dapibus. Aenean consectetur elit feugiat
          viverra elementum. Sed sodales felis diam, sit amet auctor nisi
          efficitur quis. Nam vel arcu ultrices nulla vehicula ornare. Nunc
          dapibus nulla accumsan, gravida leo ac, tempor ipsum. In at mattis
          orci, in pulvinar urna.
        </Typography>
      </TabPanel>
    </div>
  );
}