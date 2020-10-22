import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';

import CommunityCard from '../CommunityCard';
import MedicineCard from '../MedicineCard';
import { selectActiveTab, selectAdviceDismissed } from '../selectors';
import { actions } from '../slice';

const medicineCards = [
  {
    id: 1,
    title: 'Atorvastatin',
    dosage: '40MG, 1 tablet daily',
    category: 'Use before 12/1/21',
    tags: ['Tag A', 'Tag B', 'Tag C'],
    content: (
      <Typography variant="body2" color="textSecondary">
        Atorvastatin is used along with a proper diet to help lower "bad"
        cholesterol and fats (such as LDL, triglycerides) and raise "good"
        cholesterol (HDL) in the blood. It belongs to a group of drugs known as
        "statins." It works by reducing the amount of cholesterol made by the
        liver. Lowering "bad" cholesterol and triglycerides and raising "good"
        cholesterol decreases the risk of heart disease and helps prevent
        strokes and heart attacks.
      </Typography>
    ),
  },
  {
    id: 2,
    title: 'Hydrochlorothiazide',
    dosage: '25MG, 1 tablet daily',
    category: 'Use before 10/7/21',
    tags: ['Tag A', 'Tag B', 'Tag C'],
    content: (
      <Typography variant="body2" color="textSecondary">
        This medication is used to treat high blood pressure. Lowering high
        blood pressure helps prevent strokes, heart attacks, and kidney
        problems. Hydrochlorothiazide belongs to a class of drugs known as
        diuretics/"water pills." It works by causing you to make more urine.
        This helps your body get rid of extra salt and water.This medication
        also reduces extra fluid in the body (edema) caused by conditions such
        as heart failure, liver disease, or kidney disease. This can lessen
        symptoms such as shortness of breath or swelling in your ankles or feet.
      </Typography>
    ),
  },
  {
    id: 3,
    title: 'Quinapril',
    dosage: '40MG, 1 tablet daily',
    category: 'Use before 10/7/21',
    tags: ['Tag A', 'Tag B', 'Tag C'],
    content: (
      <Typography variant="body2" color="textSecondary">
        Quinapril is used to treat high blood pressure. Lowering high blood
        pressure helps prevent strokes, heart attacks, and kidney problems. This
        medication is also used to treat heart failure. Quinapril belongs to a
        class of drugs known as ACE inhibitors. It works by relaxing blood
        vessels so blood can flow more easily.
      </Typography>
    ),
  },
];

const communityCards = [
  {
    id: 1,
    category: 'Advice & Encouragement',
    title: 'Quisque tincidunt ultricies vestibulum',
    user: 'eastwood',
  },
  {
    id: 2,
    category: 'Tips & Tricks',
    title: 'Etiam in tellus ultrices, efficitur sem nec, semper elit',
    user: 'cartman',
  },
  {
    id: 3,
    category: 'Ramping-Up Advice',
    title: 'Curabitur et feugiat felis, auctor efficitur mi',
    user: 'appleseed',
  },
];

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
  noResultsIcon: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const value = useSelector(selectActiveTab);
  const adviceDismissed = useSelector(selectAdviceDismissed);

  const handleChange = (event, newValue) => {
    dispatch(actions.setActiveTab(newValue));
  };

  const communityCardsFiltered = communityCards.filter(
    c => !adviceDismissed.some(d => d === `${c.id}`),
  );

  return (
    <div className={classes.root}>
      <AppBar position="sticky">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="dashboard tabs"
          centered
        >
          <Tab label="Your Medications" {...a11yProps(0)} />
          <Tab label="Community Support" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Box mb={3}>
          <Typography variant="h5" component="h2" gutterBottom>
            Your Medications
          </Typography>
          <Typography variant="body1" gutterBottom>
            Pellentesque efficitur sit amet sapien ac tristique. Donec viverra
            libero eget iaculis suscipit. Vestibulum rutrum leo eu fringilla
            commodo. Suspendisse potenti. Donec ultrices massa sit amet nulla
            eleifend, eget rhoncus metus tristique. Cras ac porttitor purus.
            Suspendisse laoreet id sem at tristique.
          </Typography>
        </Box>

        {medicineCards.map(card => (
          <Box mb={2} key={card.id}>
            <MedicineCard
              title={card.title}
              dosage={card.dosage}
              category={card.category}
              content={card.content}
              tags={card.tags}
            />
          </Box>
        ))}
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Box mb={3}>
          <Typography variant="h5" component="h2" gutterBottom>
            Community Support
          </Typography>
          <Typography variant="body1" gutterBottom>
            Aliquam erat volutpat. Vestibulum ante ipsum primis in faucibus orci
            luctus et ultrices posuere cubilia curae; Proin nec auctor eros.
            Curabitur vitae egestas sem, ac lobortis lorem. Phasellus dapibus
            elit vel dui tincidunt, scelerisque congue magna mattis. Suspendisse
            et pretium urna. Etiam rhoncus, dui ut tempor tincidunt, odio purus
            vehicula nulla, eu viverra dolor mauris eu lacus.
          </Typography>
        </Box>

        {communityCardsFiltered.length > 0 ? (
          <>
            {communityCardsFiltered.map(card => (
              <Box mb={2} key={card.id}>
                <CommunityCard
                  category={card.category}
                  id={card.id}
                  title={card.title}
                  user={card.user}
                />
              </Box>
            ))}
          </>
        ) : (
          <Box display="flex" justifyContent="flex-start" alignItems="center">
            <Box mr={2}>
              <LiveHelpIcon
                className={classes.noResultsIcon}
                color="secondary"
              />
            </Box>
            <Box>
              <Typography variant="body1" color="secondary">
                There is no more advice to show for now, but be sure to check
                back later because new content is added every day!
              </Typography>
            </Box>
          </Box>
        )}
      </TabPanel>
    </div>
  );
}
