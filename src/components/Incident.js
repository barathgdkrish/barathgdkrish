import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import LaunchIcon from '@mui/icons-material/Launch';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

export default function Incident({incidents}) {
  return (
    <div>{incidents.map( incident => 
      <Accordion>
        <AccordionSummary
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Box sx={{display: 'flex', flexFlow: 'row wrap', alignItems:'center', justifyContent:'space-between',width: '100%'}}>
          <Box sx={{display: 'flex', flexFlow: 'row wrap', alignItems:'center'}}><LaunchIcon htmlColor='blue' sx={{marginRight: "1rem"}} /> {incident?.id}</Box>
          <Typography
            variant="h6"
            noWrap
            component="p"
            sx={{
                marginRight:'5rem'
            }}
          >
            {incident?.summary}
          </Typography>
          </Box>
        </AccordionSummary>
      </Accordion>
    )
    }
    </div>
  );
}
