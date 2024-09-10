import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import LifeAppGroups from './Life';
import RetirmentSystems from './RetirmentSystems';
import Imr from './Imr';
import WarningIcon from '@mui/icons-material/Warning';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function CustomTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '80%',border:'1px solid black', marginLeft:'5rem',borderRadius:'5px' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab icon={<WarningIcon htmlColor='#FFA700' />} label="LIFE" {...a11yProps(0)} />
          <Tab icon={<CheckCircleOutlineIcon htmlColor='green' />} label="Retrirement Systems" {...a11yProps(1)} />
          <Tab icon={<CheckCircleOutlineIcon htmlColor='green' />} label="Institutionalized Market Reinsurance" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <LifeAppGroups />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <RetirmentSystems />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Imr />
      </CustomTabPanel>
    </Box>
  );
}
