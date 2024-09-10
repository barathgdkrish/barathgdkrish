import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import WarningIcon from '@mui/icons-material/Warning';


import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Incident from './Incident';

export default function Life() {

const callidus = [
    {
        id: 'INC00000001',
        summary: ' Authentication issue causing user session invalidation.',
        major: false
    },
    {
        id: 'INC00000002',
        summary: ' Users are unable to quote and bind a policy.',
        major: false
    }
];
const alip = [
    {
        id: 'INC00000003',
        summary: ' Application is not loading and spinning out.',
        major: false
    }
];
const connext = [
    {
        id: 'INC00000004',
        summary: ' Underwriters are unable to attend policy referrals.',
        major: false
    },
    {
        id: 'INC00000005',
        summary: 'One of the application node is unhealthy.',
        major: false
    }
];
const expressionEnterprise = [
    {
        id: 'INC00000006',
        summary: ' All systems are unavailable! application database is capacity overrun.',
        major: false
    },
    {
        id: 'INC00000007',
        summary: 'One of the application node is unhealthy.',
        major: false
    }
];
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <WarningIcon htmlColor='#FFA700' sx={{marginRight: "1rem"}} /> Underwriting
        </AccordionSummary>
        <AccordionDetails>  
        <Box>
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Box sx={{display: 'flex', flexFlow: 'row wrap', alignItems:'center', justifyContent:'space-between',width: '100%'}}>
          <Box sx={{display: 'flex', flexFlow: 'row wrap', alignItems:'center'}}><SentimentDissatisfiedIcon htmlColor='#FFA700' sx={{marginRight: "1rem"}} /> Callidus</Box>
          <Typography
            variant="h6"
            noWrap
            component="p"
            sx={{
                marginRight:'5rem'
            }}
          >
            Something is wrong with the system.
          </Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Incident incidents={callidus}/>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Box sx={{display: 'flex', flexFlow: 'row wrap', alignItems:'center', justifyContent:'space-between',width: '100%'}}>
          <Box sx={{display: 'flex', flexFlow: 'row wrap', alignItems:'center'}}><SentimentDissatisfiedIcon htmlColor='#FFA700' sx={{marginRight: "1rem"}} /> ALIP</Box>
          <Typography
            variant="h6"
            noWrap
            component="p"
            sx={{
                marginRight:'5rem'
            }}
          >
            Something is wrong with the system.
          </Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
            <Incident incidents={alip} />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Box sx={{display: 'flex', flexFlow: 'row wrap', alignItems:'center', justifyContent:'space-between',width: '100%'}}>
          <Box sx={{display: 'flex', flexFlow: 'row wrap', alignItems:'center'}}><SentimentDissatisfiedIcon htmlColor='#FFA700' sx={{marginRight: "1rem"}} /> Connext</Box>
          <Typography
            variant="h6"
            noWrap
            component="p"
            sx={{
                marginRight:'5rem'
            }}
          >
            Something is wrong with the system.
          </Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
            <Incident incidents={connext} />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Box sx={{display: 'flex', flexFlow: 'row wrap', alignItems:'center', justifyContent:'space-between',width: '100%'}}>
          <Box sx={{display: 'flex', flexFlow: 'row wrap', alignItems:'center'}}><SentimentVeryDissatisfiedIcon htmlColor='red' sx={{marginRight: "1rem"}} /> Expression Enterprise</Box>
          <Typography
            variant="h6"
            noWrap
            component="p"
            sx={{
                marginRight:'5rem'
            }}
          >
            Something is wrong with the system.
          </Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
        <Incident incidents={expressionEnterprise} />
        </AccordionDetails>
      </Accordion>
        </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
        <CheckCircleOutlineIcon htmlColor='green' sx={{marginRight: "1rem"}} /> Claims
        </AccordionSummary>
        <AccordionDetails>
            <Box>
            <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
         <InsertEmoticonIcon htmlColor='green' sx={{marginRight: "1rem"}} /> Claims Enhancement Program
        </AccordionSummary>
        <AccordionDetails>
          All systems are operational
        </AccordionDetails>
      </Accordion>
            </Box>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
