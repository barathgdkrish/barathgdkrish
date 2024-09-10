import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import Box from '@mui/material/Box';

export default function RetirmentSystems() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <CheckCircleOutlineIcon htmlColor='green' sx={{marginRight: "1rem"}} /> Records
        </AccordionSummary>
        <AccordionDetails>  
        <Box>
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <InsertEmoticonIcon htmlColor='green' sx={{marginRight: "1rem"}} /> Valic Online
        </AccordionSummary>
        <AccordionDetails>
        All systems are operational
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <InsertEmoticonIcon htmlColor='green' sx={{marginRight: "1rem"}} /> Gear 905
        </AccordionSummary>
        <AccordionDetails>
        All systems are operational
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <InsertEmoticonIcon htmlColor='green' sx={{marginRight: "1rem"}} /> AWD
        </AccordionSummary>
        <AccordionDetails>
        All systems are operational
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
          <CheckCircleOutlineIcon htmlColor='green' sx={{marginRight: "1rem"}} /> Call Center Apps
        </AccordionSummary>
        <AccordionDetails>
            <Box>
            <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <InsertEmoticonIcon htmlColor='green' sx={{marginRight: "1rem"}} /> Client 360
        </AccordionSummary>
        <AccordionDetails>
        All systems are operational
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
          <CheckCircleOutlineIcon htmlColor='green' sx={{marginRight: "1rem"}} /> Specialty Apps
        </AccordionSummary>
        <AccordionDetails>
<Box>
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
         <InsertEmoticonIcon htmlColor='green' sx={{marginRight: "1rem"}} /> Valic Online
        </AccordionSummary>
        <AccordionDetails>
        All systems are operational
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
         <InsertEmoticonIcon htmlColor='green' sx={{marginRight: "1rem"}} /> Gear 905
        </AccordionSummary>
        <AccordionDetails>
        All systems are operational
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <InsertEmoticonIcon htmlColor='green' sx={{marginRight: "1rem"}} /> AWD
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
