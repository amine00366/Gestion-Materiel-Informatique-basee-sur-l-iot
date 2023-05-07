import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { height } from '@mui/system';
import NmaterialTable from "./NmateralTable";
import { Container } from '@mui/material';
import "./TabsMaterial.css";
import MaterielBureau from "./materielBureau"
import Navbar from './Navbar';
import Inventaire from "./inventaire"
import TablePaginationActions from "./Nouveau"

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };


  return (
      <>
      <Navbar/> 
      <div className='TabsMaterial'>
    <Box sx={{ bgcolor: 'background.paper', width: 1800 , height : 800 }}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Liste de Matériels" {...a11yProps(0)} />
          <Tab label="Matériels par bureau " {...a11yProps(1)} />
          <Tab label="Inventaire" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
             <NmaterialTable/>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
         <MaterielBureau/> 
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
        <TablePaginationActions />
        </TabPanel>
      </SwipeableViews>
    </Box>
    </div>
    </>
  );
}