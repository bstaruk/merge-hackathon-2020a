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

import MedImg1 from './assets/1.jpg';
import MedImg2 from './assets/2.jpeg';
import MedImg3 from './assets/3.jpeg';
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
    image: MedImg1,
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
    moreContent: (
      <>
        <Typography variant="h6" component="h5" gutterBottom>
          Pro Tips:
        </Typography>
        <ul>
          <li>
            <Typography component="span">
              In addition to eating a proper diet (such as a
              low-cholesterol/low-fat diet), other lifestyle changes that may
              help this medication work better include exercising, losing weight
              if overweight, and stopping smoking.
            </Typography>
          </li>
          <li>
            <Typography component="span">
              Try to take your Atorvastatin around the same time every day.
            </Typography>
          </li>
          <li>
            <Typography component="span">
              Check with your doctor before including grapefruit or grapefruit
              juice in your diet.{' '}
            </Typography>
          </li>
          <li>
            <Typography component="span">
              If you forget a dose, take the missed dose as soon as you
              remember. If it’s less than 12 hours until your next dose, skip
              the missed dose and continue the following day. Don’t take a
              double dose to make up for the missed one.
            </Typography>
          </li>
          <li>
            <Typography component="span">
              Store it at room temperature and away from excess heat and
              moisture (not in the bathroom){' '}
            </Typography>
          </li>
        </ul>

        <Typography variant="h6" component="h5" gutterBottom>
          Additional Information:
        </Typography>

        <Typography paragraph>
          Common Side Effects include: diarrhea, heartburn, gas, joint pain,
          forgetfulness/memory loss, confusion
        </Typography>

        <Typography paragraph>
          Less Common, More Serious Side Effects (time to talk to your doctor!):
          muscle pain, tenderness, weakness, lack of energy, fever, chest pain,
          nausea, exhaustion, unusual bleeding/bruising, loss of appetite, pain
          in upper right part of stomach, flu-like symptoms, dark urine,
          yellowing of skin or eyes, rash, hives, itching, difficulty
          breathing/swallowing, swelling of face / throat / tongue / lips / eyes
          / hands / feet / ankles / lower legs, hoarseness
        </Typography>
      </>
    ),
  },
  {
    id: 2,
    title: 'Hydrochlorothiazide',
    dosage: '25MG, 1 tablet daily',
    category: 'Use before 10/7/21',
    tags: ['Tag A', 'Tag B', 'Tag C'],
    image: MedImg2,
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
    moreContent: (
      <>
        <Typography variant="h6" component="h5" gutterBottom>
          Pro Tips:
        </Typography>
        <ul>
          <li>
            <Typography component="span">
              Take this medication once daily in the morning
            </Typography>
          </li>
          <li>
            <Typography component="span">
              If you take this drug too close to bedtime, you may need to wake
              up to pee. It’s best to take this medication at least 4 hours
              before bedtime.
            </Typography>
          </li>
          <li>
            <Typography component="span">
              You should avoid prolonged or excessive exposure to direct
              sunlight while taking this medicine.
            </Typography>
          </li>
          <li>
            <Typography component="span">
              If you forget a dose, take the missed dose as soon as you remember
              it. However, if it is almost time for your next dose, skip the
              missed dose and continue your regular dosing schedule. Do not take
              a double dose to make up for a missed one.
            </Typography>
          </li>
          <li>
            <Typography component="span">
              Store it at room temperature and away from excess heat and
              moisture (not in the bathroom). Do not allow the liquid to freeze.
            </Typography>
          </li>
        </ul>

        <Typography variant="h6" component="h5" gutterBottom>
          Additional Information:
        </Typography>

        <Typography paragraph>
          Common Side Effects Include: Dizziness
        </Typography>

        <Typography paragraph>
          Less Common, More Serious Side Effects (time to talk to your doctor!):
          frequent urination, diarrhea, loss of appetite, headache, hair loss,
          dry mouth, thirst, nausea, vomiting, weakness, tiredness; drowsiness;
          restlessness; confusion; muscle weakness, pain, or cramps; fast
          heartbeat and other signs of dehydration and electrolyte imbalance,
          blisters or peeling skin, hives, rash, itching, difficulty breathing
          or swallowing, fever, sore throat, chills, and other signs of
          infection, unusual bleeding or bruising, ongoing pain that begins in
          the stomach area, but may spread to the back, joint pain or swelling,
          changes in vision, eye pain, or swelling or redness in or around the
          eye
        </Typography>
      </>
    ),
  },
  {
    id: 3,
    title: 'Quinapril',
    dosage: '40MG, 1 tablet daily',
    category: 'Use before 10/7/21',
    tags: ['Tag A', 'Tag B', 'Tag C'],
    image: MedImg3,
    content: (
      <Typography variant="body2" color="textSecondary">
        Quinapril is used to treat high blood pressure. Lowering high blood
        pressure helps prevent strokes, heart attacks, and kidney problems. This
        medication is also used to treat heart failure. Quinapril belongs to a
        class of drugs known as ACE inhibitors. It works by relaxing blood
        vessels so blood can flow more easily.
      </Typography>
    ),
    moreContent: (
      <>
        <Typography variant="h6" component="h5" gutterBottom>
          Pro Tips:
        </Typography>
        <ul>
          <li>
            <Typography component="span">
              High-fat meals may decrease the absorption of this medicine.
            </Typography>
          </li>
          <li>
            <Typography component="span">
              Check with your doctor before drinking alcohol.
            </Typography>
          </li>
          <li>
            <Typography component="span">
              Use care when operating vehicle.
            </Typography>
          </li>
          <li>
            <Typography component="span">
              Do not use a salt substitute without checking with your Doctor or
              Pharmacist.
            </Typography>
          </li>
          <li>
            <Typography component="span">
              Store it at room temperature and away from light and excess heat
              and moisture (not in the bathroom).
            </Typography>
          </li>
        </ul>

        <Typography variant="h6" component="h5" gutterBottom>
          Additional Information:
        </Typography>

        <Typography paragraph>
          Common Side Effects Include: Dizziness
        </Typography>

        <Typography paragraph>
          Less Common, More Serious Side Effects (time to talk to your doctor!):
          excessive tiredness, cough, upset stomach, vomiting, swelling of face
          / throat / tongue / lips / eyes / hands / feet / ankles / lower legs,
          hoarseness, difficulty breathing / swallowing, yellowing of skin or
          eyes, fever, sore throat, chills, other signs of infection, chest
          pain, lightheadedness, fainting
        </Typography>
      </>
    ),
  },
];

const communityCards = [
  {
    id: 1,
    category: 'Drug Interaction',
    title:
      'Why does grapefruit juice affect certain medications, and do other citrus fruits have the same effect?',
    prefix: 'Dr.',
    firstName: 'Phillip',
    lastName: 'Morris',
    location: 'Washington, DC',
    content: (
      <Typography variant="body2" color="textSecondary">
        Years ago, a blood pressure medication study used grapefruit juice as
        the blinding agent so nobody would know what they were getting. It was
        discovered by pure chance that people taking the drug with the
        grapefruit juice experienced totally unexpected results. This happens
        because grapefruit juice contains flavonoids, but other citrus juices do
        not and are safe to take.
      </Typography>
    ),
  },
  {
    id: 2,
    category: 'Keeping on track with medication',
    title:
      'Finding it hard to remember to take my meds, whats a good trick for remembering',
    firstName: 'Jane',
    lastName: 'Doe',
    location: 'Boston, MA',
    content: (
      <Typography variant="body2" color="textSecondary">
        Visualize your day and taking your medication at a certain time and
        place. Once you have that image set in your mind it will help you
        remember when you are in that location, or at the time of day you
        visualized.
      </Typography>
    ),
  },
  {
    id: 3,
    category: 'Side effect',
    title:
      'My skin started to itch and I broke out in hives when I started the medication',
    firstName: 'Frank',
    lastName: 'Fernando',
    location: 'Kansas City, MO',
    content: (
      <Typography variant="body2" color="textSecondary">
        This is a common occurrence when taking the drug. Found that using
        moisturizing cream on the affected area helped a lot for the first few
        weeks of starting on the drug. After 3 weeks the itching went away and I
        no longer had to use the moisturizer.
      </Typography>
    ),
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
              image={card.image}
              content={card.content}
              moreContent={card.moreContent}
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
                  content={card.content}
                  prefix={card.prefix}
                  firstName={card.firstName}
                  lastName={card.lastName}
                  location={card.location}
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
