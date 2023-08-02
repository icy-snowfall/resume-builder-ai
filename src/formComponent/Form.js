import { Box, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import './FormStyle.scss'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import MUIRichTextEditor from 'mui-rte'

const Form = () => {
  const [expanded, setExpanded] = useState(false);
  const [file, setFile] = useState();

  const handleUpload = (e) =>{
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const myTheme = createTheme({
    components: {
      MUIRichTextEditor: {
        styleOverrides: {
          root: {
            height:'200px',
            overflow : 'auto',
          },
        },
      },
    },
  })
  return (
    <div className='formbg'>
      <Box className='formframe'>
        <div className='headtitle'>
          Resume Form
        </div>
        <Box className='formbox'>
          <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography className='accstyle'>
                Personal Details
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container>
                <Grid item xs={12} sm={6}>
                  <Typography className='inputlabel'>First Name</Typography>
                  <TextField name='f_name' className='txtbox' id="standard-basic" variant="outlined" 
                    placeholder='First Name' autoComplete='off' inputProps={{ maxLength: 180 }}>
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography className='inputlabel'>Last Name</Typography>
                  <TextField name='l_name' className='txtbox' id="standard-basic" variant="outlined" 
                    placeholder='Last Name' autoComplete='off' inputProps={{ maxLength: 180 }}>
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography className='inputlabel'>Contact Number</Typography>
                  <TextField name='f_name' className='txtbox' id="standard-basic" variant="outlined" 
                    placeholder='Contact Number' autoComplete='off' inputProps={{ maxLength: 180 }}>
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography className='inputlabel'>Email ID</Typography>
                  <TextField name='l_name' className='txtbox' id="standard-basic" variant="outlined" 
                    placeholder='Email ID' autoComplete='off' inputProps={{ maxLength: 180 }}>
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography className='inputlabel'>Address</Typography>
                  <TextField id="outlined-multiline-static" multiline rows={4} name='l_name' className='txtbox' 
                  variant="outlined" placeholder='Address' autoComplete='off' inputProps={{ maxLength: 180 }}>
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography className='inputlabel'>LinkedIn ID</Typography>
                  <TextField name='l_name' className='txtbox' id="standard-basic" variant="outlined" 
                    placeholder='LinkedIn ID' autoComplete='off' inputProps={{ maxLength: 180 }}>
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography className='inputlabel'>Picture</Typography>
                  <input type='file' onChange={handleUpload} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography className='inputlabel'>Preview</Typography>
                  <img className='prvimg' src={file} />
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography className='accstyle'>Summery</Typography>
              {/* <Typography sx={{ color: 'text.secondary' }}>
                You are currently not an owner
              </Typography> */}
            </AccordionSummary>
            <AccordionDetails>
              <ThemeProvider theme={myTheme}>
                  <MUIRichTextEditor label="Start typing..." />
              </ThemeProvider>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography className='accstyle'>
                Education
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              
              <Grid container>
                <Grid item xs={12} sm={6}>
                  <Typography className='inputlabel'>Course</Typography>
                  <TextField name='f_name' className='txtbox' id="standard-basic" variant="outlined" 
                    placeholder='Course Name' autoComplete='off' inputProps={{ maxLength: 180 }}>
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography className='inputlabel'>University</Typography>
                  <TextField name='l_name' className='txtbox' id="standard-basic" variant="outlined" 
                    placeholder='University Name' autoComplete='off' inputProps={{ maxLength: 180 }}>
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography className='inputlabel'>From</Typography>
                  <TextField name='f_name' className='txtbox' id="standard-basic" variant="outlined" 
                    placeholder='Contact Number' autoComplete='off' inputProps={{ maxLength: 180 }}>
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography className='inputlabel'>To</Typography>
                  <TextField name='l_name' className='txtbox' id="standard-basic" variant="outlined" 
                    placeholder='Email ID' autoComplete='off' inputProps={{ maxLength: 180 }}>
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography className='inputlabel'>Percent</Typography>
                  <TextField name='l_name' className='txtbox' id="standard-basic" variant="outlined" 
                    placeholder='Percent' autoComplete='off' inputProps={{ maxLength: 180 }}>
                  </TextField>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Typography className='accstyle'>Personal data</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                amet egestas eros, vitae egestas augue. Duis vel est augue.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Box>
    </div>
  )
}

export default Form