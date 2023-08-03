import { Box, Button, FormControl, Grid, MenuItem, Select, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import './FormStyle.scss'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import MUIRichTextEditor from 'mui-rte'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { AddCircleOutlineOutlined, DeleteOutlineOutlined } from '@mui/icons-material';

const Form = () => {
  const [expanded, setExpanded] = useState('panel1');
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
            height: '200px',
            overflow: 'auto',
            border: '1px solid gray',
            padding: '5px',
            borderRadius: '10px',
          },
          toolbar:{
            borderBottom: '1px solid gray',
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
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']}>
                      <DatePicker className='datetime' views={['month', 'year']} />
                    </DemoContainer>
                  </LocalizationProvider>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography className='inputlabel'>To</Typography>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']}>
                      <DatePicker className='datetime' views={['month', 'year']} />
                    </DemoContainer>
                  </LocalizationProvider>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography className='inputlabel'>Percent</Typography>
                  <TextField name='l_name' className='txtbox' id="standard-basic" variant="outlined" 
                    placeholder='Percent' autoComplete='off' inputProps={{ maxLength: 180 }}>
                  </TextField>
                </Grid>
                <Grid className='btnsec' item xs={12}>
                  <Button className='btnadd'><AddCircleOutlineOutlined /> Add New</Button>
                  <Button className='btndel'><DeleteOutlineOutlined /> Delete </Button>
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
              <Typography className='accstyle'>Work Experience</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container>
                <Grid item xs={12} sm={6}>
                  <Typography className='inputlabel'>Position</Typography>
                  <TextField name='f_name' className='txtbox' id="standard-basic" variant="outlined" 
                    placeholder='Course Name' autoComplete='off' inputProps={{ maxLength: 180 }}>
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography className='inputlabel'>organization Name </Typography>
                  <TextField name='l_name' className='txtbox' id="standard-basic" variant="outlined" 
                    placeholder='University Name' autoComplete='off' inputProps={{ maxLength: 180 }}>
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography className='inputlabel'>From Date</Typography>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']}>
                      <DatePicker className='datetime' views={['month', 'year']} />
                    </DemoContainer>
                  </LocalizationProvider>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography className='inputlabel'>To Date</Typography>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']}>
                      <DatePicker className='datetime' views={['month', 'year']} />
                    </DemoContainer>
                  </LocalizationProvider>
                </Grid>
                <Grid item xs={12}>
                  <Typography className='inputlabel'>Description</Typography>
                  <ThemeProvider theme={myTheme}>
                      <MUIRichTextEditor label="Start typing..." />
                  </ThemeProvider>
                </Grid>
                <Grid className='btnsec' item xs={12}>
                  <Button className='btnadd'><AddCircleOutlineOutlined /> Add New</Button>
                  <Button className='btndel'><DeleteOutlineOutlined /> Delete </Button>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Typography className='accstyle'>Certification</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container>
                <Grid item xs={12} sm={6}>
                  <Typography className='inputlabel'>Title</Typography>
                  <TextField name='f_name' className='txtbox' id="standard-basic" variant="outlined" 
                    placeholder='Course Name' autoComplete='off' inputProps={{ maxLength: 180 }}>
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography className='inputlabel'>organization Name</Typography>
                  <TextField name='l_name' className='txtbox' id="standard-basic" variant="outlined" 
                    placeholder='University Name' autoComplete='off' inputProps={{ maxLength: 180 }}>
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography className='inputlabel'>From Date</Typography>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']}>
                      <DatePicker className='datetime' views={['month', 'year']} />
                    </DemoContainer>
                  </LocalizationProvider>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography className='inputlabel'>To Date</Typography>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']}>
                      <DatePicker className='datetime' views={['month', 'year']} />
                    </DemoContainer>
                  </LocalizationProvider>
                </Grid>
                <Grid item xs={12}>
                  <Typography className='inputlabel'>Description</Typography>
                  <ThemeProvider theme={myTheme}>
                      <MUIRichTextEditor label="Start typing..." />
                  </ThemeProvider>
                </Grid>                
                <Grid className='btnsec' item xs={12}>
                  <Button className='btnadd'><AddCircleOutlineOutlined /> Add New</Button>
                  <Button className='btndel'><DeleteOutlineOutlined /> Delete </Button>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Typography className='accstyle'>Hard Skill</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container>
                <Grid item xs={12} sm={6}>
                  <Typography className='inputlabel'>Skill</Typography>
                  <TextField name='f_name' className='txtbox' id="standard-basic" variant="outlined" 
                    placeholder='Course Name' autoComplete='off' inputProps={{ maxLength: 180 }}>
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography className='inputlabel'>Rating </Typography>
                  <FormControl className='drpbx'>
                    <Select
                      // value={age}
                      onChange={handleChange}
                      displayEmpty
                      inputProps={{ 'aria-label': 'Without label' }}
                    >
                      <MenuItem value={0}>
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={1}>One</MenuItem>
                      <MenuItem value={2}>Two</MenuItem>
                      <MenuItem value={3}>Three</MenuItem>
                      <MenuItem value={4}>Four</MenuItem>
                      <MenuItem value={5}>Five</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid className='btnsec' item xs={12}>
                  <Button className='btnadd'><AddCircleOutlineOutlined /> Add New</Button>
                  <Button className='btndel'><DeleteOutlineOutlined /> Delete </Button>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Typography className='accstyle'>Soft Skills</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container>
                <Grid item xs={12} sm={6}>
                  <Typography className='inputlabel'>Skill</Typography>
                  <TextField name='f_name' className='txtbox' id="standard-basic" variant="outlined" 
                    placeholder='Course Name' autoComplete='off' inputProps={{ maxLength: 180 }}>
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography className='inputlabel'>Rating </Typography>
                  <FormControl className='drpbx'>
                    <Select
                      // value={age}
                      onChange={handleChange}
                      displayEmpty
                      inputProps={{ 'aria-label': 'Without label' }}
                    >
                      <MenuItem value={0}>
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={1}>One</MenuItem>
                      <MenuItem value={2}>Two</MenuItem>
                      <MenuItem value={3}>Three</MenuItem>
                      <MenuItem value={4}>Four</MenuItem>
                      <MenuItem value={5}>Five</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid className='btnsec' item xs={12}>
                  <Button className='btnadd'><AddCircleOutlineOutlined /> Add New</Button>
                  <Button className='btndel'><DeleteOutlineOutlined /> Delete </Button>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
          <div className='sbmbtnsec'>
            <Button className='btnsubmit'>Submit</Button>
          </div>
        </Box>
      </Box>
    </div>
  )
}

export default Form