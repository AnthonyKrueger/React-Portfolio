import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Project from './Project'

import techblog1 from "../images/techblog1.png"
import techblog2 from "../images/techblog2.png"
import techblog3 from "../images/techblog3.png"

import trashparty1 from "../images/trashparty1.png"
import trashparty2 from "../images/trashparty2.png"
import trashparty3 from "../images/trashparty3.png"
import trashparty4 from "../images/trashparty4.png"

import tcgTracker1 from "../images/tcgTracker1.png"
import tcgTracker2 from "../images/tcgTracker2.png"
import tcgTracker3 from "../images/tcgTracker3.png"

const techImages = [techblog1, techblog2, techblog3]
const techLinks = { github: "https://github.com/AnthonyKrueger/MVC_Demo-Tech_Blog", deployed: "https://ak-tech-blog.herokuapp.com/" }

const tcgImages = [tcgTracker1, tcgTracker2, tcgTracker3]
const tcgLinks = { github: "https://github.com/Project01-TCG-Price-Tracker/TCG_Price_Tracker", deployed: "https://project01-tcg-price-tracker.github.io/TCG_Price_Tracker/" }

const trashImages = [trashparty1, trashparty2, trashparty3, trashparty4]
const trashLinks = {github: "https://github.com/Q-GAP/TrashParty", deployed: "https://trashy-houseparty.herokuapp.com/"}

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
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
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

export default function ProjectTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <AppBar className="bg-theme-main" position="static">
        <Tabs className="bg-theme-main text-theme-accent-light" TabIndicatorProps={{ style: { background: '#ff79c6' } }} value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="TCG Tracker" {...a11yProps(0)} />
          <Tab label="Trash Party" {...a11yProps(1)} />
          <Tab label="Tech Blog" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel className="bg-theme-light rounded" value={value} index={0}>
        <Project
          title={"TCG Price Tracker"}
          images={tcgImages}
          role={"Backend Lead/Frontend Support"}
          techUsed={"Javascript, HTML, CSS, jQuery, Materialize, API's, Font-Awesome"}
          description={"An application to search a Pokemon card database by specific search criteria. Cards can be saved to a list of favorites to keep track of cards you like or have. Card arts can be clicked on to display a page with more information on the card including the artist and ID. Prices can be converted into different forms of cryptocurrency which are kept updated using an API"}
          links={tcgLinks}
        />
      </TabPanel>
      <TabPanel className="bg-theme-light rounded" value={value} index={1}>
      <Project
          title={"Trash Party"}
          images={trashImages}
          role={"Backend Lead/Creator"}
          techUsed={"Javascript, NodeJS, MySQL, Sequelize, Express, Handlebars, Express-Sessions, HTML, CSS, jQuery, Materialize, GiphyAPI"}
          description={"A website where twice a day the user can open a pack of random gifs of different types and rarities, jokingly name 'trash'. You can trade your 'trash' with other users until you get items you like. Throw cards you don't like away into the landfill for other users to collect, or trade specific cards user-to-user to get specific trash. Basically a virtual trading card game built using relational databases and ExpressJS."}
        links={trashLinks}
        />
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Project
          title={"Tech Blog"}
          images={techImages}
          role={"Sole Developer"}
          techUsed={"NodeJS, Express, MySQL, Handlebars, Javascript, HTML, CSS"}
          description={"This is a simple CMS-Style blog application built to demonstrate knowledge of the Model View Controller structure in web app development. It allows the user to create an account with an encrypted password and then create posts or comment on other user's content. All data is stored in a MySQL database."}
        links={techLinks}
        />
      </TabPanel>
    </div>
  );
}