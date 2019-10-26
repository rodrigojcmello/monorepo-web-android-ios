/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import { Typography, Box, Tab, Tabs, AppBar, Toolbar } from '@material-ui/core';

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps): JSX.Element {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

function a11yProps(index: any): any {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 600
  },
  tabs: {
    backgroundColor: theme.palette.primary.main
  }
}));

export default function Main(): JSX.Element {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (
    event: React.ChangeEvent<{}>,
    newValue: number
  ): void => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number): void => {
    setValue(index);
  };

  return (
    <div>
      <div className={classes.root}>
        <Box boxShadow={4}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6">WhatsApp</Typography>
            </Toolbar>
          </AppBar>
          <AppBar position="static" elevation={0} color="default">
            <Tabs
              value={value}
              onChange={handleChange}
              className={classes.tabs}
              textColor="secondary"
              variant="fullWidth"
              aria-label="full width tabs example"
            >
              <Tab label="Item One" {...a11yProps(0)} />
              <Tab label="Item Two" {...a11yProps(1)} />
              <Tab label="Item Three" {...a11yProps(2)} />
              <Tab label="Item Three" {...a11yProps(3)} />
              <Tab label="Item Three" {...a11yProps(4)} />
            </Tabs>
          </AppBar>
        </Box>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            Item One
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            Item Three
          </TabPanel>
          <TabPanel value={value} index={3} dir={theme.direction}>
            Item Three
          </TabPanel>
          <TabPanel value={value} index={4} dir={theme.direction}>
            Item Three
          </TabPanel>
        </SwipeableViews>
      </div>
    </div>
  );
}
