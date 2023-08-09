import { Box, Button, FormControl, Grid, MenuItem, Select, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './FormStyle.scss'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import MUIRichTextEditor from 'mui-rte'
import { convertToRaw } from 'draft-js'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { AddCircleOutlineOutlined, DeleteOutlineOutlined } from '@mui/icons-material';

const Form = () => {
  const [expanded, setExpanded] = useState('panel1');
  const [file, setFile] = useState();
  const [personalDetails, setPersonalDetails] = useState({f_name:'', l_name:'', cnt_nmber:'', 
  email_id:'', address:'', lnkin_id:''});
  const [summery, setSummery] = useState({summery:''});
  const [education, setEducation] = useState([{ course:'', university:'', course_start:'', 
  course_end:'', percent:''}]);
  const [eduSec, setEduSec] = useState([education]);
  const [workExperience, setWorkExperience] = useState([{position:'', org_name:'', work_start:'',
    work_leave:'', work_summery:'', }]);
  const [workSec, setWorkSec] = useState([workExperience]);
  const [certification, setCertification] = useState([{certi_title:'', org_name:'', course_start:'',
    course_end:'', course_descr:'',}]);
  const [certiSec, setCertiSec] = useState([certification]);
  const [hardSkill, setHardSkill] = useState([{ hard_skill:'', rating:''}]);
  const [hardSkillSec, setHardSkillSec] = useState([hardSkill]);
  const [softSkill, setSoftSkill] = useState([{ soft_skill:'', rating:'',}]);
  const [softSkillSec, setSoftSkillSec] = useState([softSkill]);
  const [allData, setAllData] = useState();

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
  });

  // Add Sec Buttons

  const handleAddEduc = () =>{
    setEduSec([...eduSec, [{ course:'', university:'', course_start:'', 
    course_end:'', percent:''}]]);
  }
  const handleWorkSec = () =>{
    setWorkSec([...workSec, [{position:'', org_name:'', work_start:'',
    work_leave:'', work_summery:'', }]]);
  }
  const handleCertiSec = () =>{
    setCertiSec([...certiSec, [{certi_title:'', org_name:'', course_start:'',
    course_end:'', course_descr:'',}]]);
  }
  const handleHardSkillSec = () =>{
    setHardSkillSec([...hardSkillSec, [{ hard_skill:'', rating:''}]]);
  }
  const handleSoftSkillSec = () =>{
    setSoftSkillSec([...softSkillSec, [{ soft_skill:'', rating:'',}]]);
  }
  
  //Remove sec button

  const handleRemoveEduc = (index) =>{
    const list = [...eduSec];
        list.splice(index, 1);
        setEduSec(list);
  }
  const handleRemoveWorkSec = (index) =>{
    const list = [...workSec];
        list.splice(index, 1);
        setWorkSec(list);
  }
  const handleRemoveCertiSec = (index) =>{
    const list = [...certiSec];
        list.splice(index, 1);
        setCertiSec(list);
  }
  const handleRemoveHardSkillSec = (index) =>{
    const list = [...hardSkillSec];
        list.splice(index, 1);
        setHardSkillSec(list);
  }
  const handleRemoveSoftSkillSec = (index) =>{
    const list = [...softSkillSec];
        list.splice(index, 1);
        setSoftSkillSec(list);
  }
  
  let name, value;
  const getpersonalData = (event) =>{
    name= event.target.name;
    value= event.target.value;
    setPersonalDetails({...education, [name]: value})
  }
  const getSummeryData = event =>{
    const plainText = event.getCurrentContent().getPlainText() // for plain text
    const rteContent = convertToRaw(event.getCurrentContent()); // for rte content with text formating
    rteContent && setSummery(JSON.stringify(rteContent)) // store your rteContent to state
  }
  const getEduData = (event, index) =>{
    name= event.target.name;
    value= event.target.value;
    const list = [...education]
    list[index][name] = value
    setEducation(list)
  }
  const getExperienceData = (event) =>{
    name= event.target.name;
    value= event.target.value;
    setWorkExperience({...workExperience, [name]: value})
  }
  const getExpDescrData = event => {
    const plainText = event.getCurrentContent().getPlainText() 
    const rteContent = convertToRaw(event.getCurrentContent());
    rteContent && setWorkExperience({...workExperience, 'work_summery': JSON.stringify(rteContent)})
  }
  const getcertificationData = (event) =>{
    name= event.target.name;
    value= event.target.value;
    setCertification({...certification, [name]: value})
  }
  
  const getCertiDescrData = event => {
    const plainText = event.getCurrentContent().getPlainText() 
    const rteContent = convertToRaw(event.getCurrentContent());
    rteContent && setCertification({...certification, 'course_descr': JSON.stringify(rteContent)})
  }
  const getHskillData = (event) =>{
    name= event.target.name;
    value= event.target.value;
    setHardSkill({...hardSkill, [name]: value})
  }
  const getSskillData = (event) =>{
    name= event.target.name;
    value= event.target.value;
    setSoftSkill({...softSkill, [name]: value})
  }

  useEffect(() => {
    console.log(education);
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
                  <TextField value={personalDetails.f_name} onChange={getpersonalData} name='f_name' className='txtbox' id="standard-basic" variant="outlined" 
                    placeholder='First Name' autoComplete='off' inputProps={{ maxLength: 180 }}>
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography className='inputlabel'>Last Name</Typography>
                  <TextField value={personalDetails.l_name} onChange={getpersonalData} name='l_name' className='txtbox' id="standard-basic" variant="outlined" 
                    placeholder='Last Name' autoComplete='off' inputProps={{ maxLength: 180 }}>
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography className='inputlabel'>Contact Number</Typography>
                  <TextField value={personalDetails.cnt_nmber} onChange={getpersonalData} name='cnt_nmber' className='txtbox' id="standard-basic" variant="outlined" 
                    placeholder='Contact Number' autoComplete='off' inputProps={{ maxLength: 180 }}>
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography className='inputlabel'>Email ID</Typography>
                  <TextField value={personalDetails.email_id} onChange={getpersonalData} name='email_id' className='txtbox' id="standard-basic" variant="outlined" 
                    placeholder='Email ID' autoComplete='off' inputProps={{ maxLength: 180 }}>
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography className='inputlabel'>Address</Typography>
                  <TextField value={personalDetails.address} onChange={getpersonalData} id="outlined-multiline-static" multiline rows={4} name='address' className='txtbox' 
                  variant="outlined" placeholder='Address' autoComplete='off' inputProps={{ maxLength: 180 }}>
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography className='inputlabel'>LinkedIn ID</Typography>
                  <TextField value={personalDetails.lnkin_id} onChange={getpersonalData} name='lnkin_id' className='txtbox' id="standard-basic" variant="outlined" 
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
                  <MUIRichTextEditor label="Start typing..." controls={["bold", "italic", "underline", "strikethrough", "highlight", "undo", "redo", "link", "numberList", "bulletList", "clear" ]} onChange={getSummeryData} />
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
              {eduSec.map((eduData, index) =>(
                <Grid container key={index}>
                  <Grid item xs={12} sm={6}>
                    <Typography className='inputlabel'>Course</Typography>
                    <TextField value={eduData.course} onChange={(e)=>getEduData(e, index)} name='course' className='txtbox' id="standard-basic" variant="outlined" 
                      placeholder='Course Name' autoComplete='off' inputProps={{ maxLength: 180 }}>
                    </TextField>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography className='inputlabel'>University</Typography>
                    <TextField value={eduData.university} onChange={(e)=>getEduData(e, index)} name='university' className='txtbox' id="standard-basic" variant="outlined" 
                      placeholder='University Name' autoComplete='off' inputProps={{ maxLength: 180 }}>
                    </TextField>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography className='inputlabel'>From</Typography>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer components={['DatePicker']}>
                        <DatePicker value={eduData.course_start} onChange={(newValue) => setEducation({...education, course_start: JSON.stringify(newValue)})} className='datetime' views={['month', 'year']} />
                      </DemoContainer>
                    </LocalizationProvider>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography className='inputlabel'>To</Typography>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer components={['DatePicker']}>
                        <DatePicker value={eduData.course_end} onChange={(newValue) => setEducation({...education, course_end: JSON.stringify(newValue)})} className='datetime' views={['month', 'year']} />
                      </DemoContainer>
                    </LocalizationProvider>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography className='inputlabel'>Percent</Typography>
                    <TextField value={eduData.percent} onChange={(e)=>getEduData(e, index)} name='percent' className='txtbox' id="standard-basic" variant="outlined" 
                      placeholder='Percent' autoComplete='off' inputProps={{ maxLength: 180 }}>
                    </TextField>
                  </Grid>
                  {eduSec.length !== 1 && (<Grid className='btnsec' item xs={6}>
                    <Button className='btndel' onClick={()=>handleRemoveEduc(index)}><DeleteOutlineOutlined /> Delete </Button>
                  </Grid>)}                  
                </Grid>
              ))}
              {eduSec.length < 4 && 
              <Grid className='btnsec' item xs={12}>
                <Button onClick={handleAddEduc} className='btnadd'><AddCircleOutlineOutlined /> Add New</Button>
              </Grid>}
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
              {workSec.map((workData, index) =>(
                <Grid container key={index}>
                  <Grid item xs={12} sm={6}>
                    <Typography className='inputlabel'>Position</Typography>
                    <TextField value={workData.position} onChange={getExperienceData} name='position' className='txtbox' id="standard-basic" variant="outlined" 
                      placeholder='Course Name' autoComplete='off' inputProps={{ maxLength: 180 }}>
                    </TextField>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography className='inputlabel'>organization Name </Typography>
                    <TextField value={workData.org_name} onChange={getExperienceData} name='org_name' className='txtbox' id="standard-basic" variant="outlined" 
                      placeholder='University Name' autoComplete='off' inputProps={{ maxLength: 180 }}>
                    </TextField>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography className='inputlabel'>From Date</Typography>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer components={['DatePicker']}>
                        <DatePicker value={workData.work_start} onChange={(newValue) => setWorkExperience({...workExperience, work_start: JSON.stringify(newValue)})} className='datetime' views={['month', 'year']} />
                      </DemoContainer>
                    </LocalizationProvider>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography className='inputlabel'>To Date</Typography>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer components={['DatePicker']}>
                        <DatePicker value={workData.work_leave} onChange={(newValue) => setWorkExperience({...workExperience, work_leave: JSON.stringify(newValue)})} className='datetime' views={['month', 'year']} />
                      </DemoContainer>
                    </LocalizationProvider>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography className='inputlabel'>Description</Typography>
                    <ThemeProvider theme={myTheme}>
                        <MUIRichTextEditor label="Start typing..." controls={["bold", "italic", "underline", "strikethrough", "highlight", "undo", "redo", "link", "numberList", "bulletList", "clear" ]} onChange={getExpDescrData} />
                    </ThemeProvider>
                  </Grid>
                  {workSec.length !== 1 && (
                  <Grid className='btnsec' item xs={12}>
                    <Button className='btndel' onClick={()=>handleRemoveWorkSec(index)}><DeleteOutlineOutlined /> Delete </Button>
                  </Grid>)}
                </Grid>
              ))}
              {workSec.length < 5 && (<Grid className='btnsec' item xs={12}>
                <Button onClick={handleWorkSec} className='btnadd'><AddCircleOutlineOutlined /> Add New</Button>
              </Grid>)}
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
              {certiSec.map((sertiData, index) =>(
                <Grid container key={index}>
                  <Grid item xs={12} sm={6}>
                    <Typography className='inputlabel'>Title</Typography>
                    <TextField value={sertiData.certi_title} onChange={getcertificationData} name='certi_title' className='txtbox' id="standard-basic" variant="outlined" 
                      placeholder='Course Name' autoComplete='off' inputProps={{ maxLength: 180 }}>
                    </TextField>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography className='inputlabel'>organization Name</Typography>
                    <TextField value={sertiData.org_name} onChange={getcertificationData} name='org_name' className='txtbox' id="standard-basic" variant="outlined" 
                      placeholder='University Name' autoComplete='off' inputProps={{ maxLength: 180 }}>
                    </TextField>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography className='inputlabel'>From Date</Typography>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer components={['DatePicker']}>
                        <DatePicker value={sertiData.course_start} onChange={(newValue) => setCertification({...certification, course_start: JSON.stringify(newValue)})} className='datetime' views={['month', 'year']} />
                      </DemoContainer>
                    </LocalizationProvider>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography className='inputlabel'>To Date</Typography>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer components={['DatePicker']}>
                        <DatePicker value={sertiData.course_end} onChange={(newValue) => setCertification({...certification, course_end: JSON.stringify(newValue)})} className='datetime' views={['month', 'year']} />
                      </DemoContainer>
                    </LocalizationProvider>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography className='inputlabel'>Description</Typography>
                    <ThemeProvider theme={myTheme}>
                        <MUIRichTextEditor label="Start typing..." />
                    </ThemeProvider>
                  </Grid>
                  {certiSec.length !== 1 && (
                  <Grid className='btnsec' item xs={12}>
                  <Button className='btndel' onClick={()=>handleRemoveCertiSec(index)}><DeleteOutlineOutlined /> Delete </Button>
                </Grid>)}
                </Grid>
              ))}
              {certiSec.length < 4 && (
                <Grid className='btnsec' item xs={12}>
                  <Button onClick={handleCertiSec} className='btnadd'><AddCircleOutlineOutlined /> Add New</Button>
                </Grid>
              )}
              
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
              {hardSkillSec.map((hSkillData, index) => (
                <Grid container key={index}>
                  <Grid item xs={12} sm={6}>
                    <Typography className='inputlabel'>Skill</Typography>
                    <TextField value={hSkillData.hard_skill} onChange={getHskillData} name='hard_skill' className='txtbox' id="standard-basic" variant="outlined" 
                      placeholder='Course Name' autoComplete='off' inputProps={{ maxLength: 180 }}>
                    </TextField>
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <Typography className='inputlabel'>Rating </Typography>
                    <FormControl className='drpbx'>
                      <Select
                        value={hSkillData.rating}
                        onChange={getHskillData}
                        name='rating'
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
                  {hardSkillSec.length !== 1 && (
                  <Grid className='btnsec' item xs={12} sm={3}>
                    <Button className='btndel' onClick={()=>handleRemoveHardSkillSec(index)}><DeleteOutlineOutlined /> Delete </Button>
                  </Grid>)}
                </Grid>
              ))}
              {hardSkillSec.length < 4 && (
                <Grid className='btnsec' item xs={12}>
                  <Button onClick={handleHardSkillSec} className='btnadd'><AddCircleOutlineOutlined /> Add New</Button>
                </Grid>
              )}
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
              {softSkillSec.map((sSkillData , index) =>(
                <Grid container key={index}>
                  <Grid item xs={12} sm={6}>
                    <Typography className='inputlabel'>Skill</Typography>
                    <TextField value={sSkillData.soft_skill} onChange={getSskillData} name='soft_skill' className='txtbox' id="standard-basic" variant="outlined" 
                      placeholder='Course Name' autoComplete='off' inputProps={{ maxLength: 180 }}>
                    </TextField>
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <Typography className='inputlabel'>Rating </Typography>
                    <FormControl className='drpbx'>
                      <Select
                        value={sSkillData.rating}
                        onChange={getSskillData}
                        name='rating'
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
                  {softSkillSec.length !== 1 && (
                  <Grid className='btnsec' item xs={12} sm={3}>
                    <Button className='btndel' onClick={() => handleRemoveSoftSkillSec(index) }><DeleteOutlineOutlined /> Delete </Button>
                  </Grid>)}
                </Grid>
              ))}
              {softSkillSec.length < 4 && (
                <Grid className='btnsec' item xs={12}>
                  <Button onClick={handleSoftSkillSec} className='btnadd'><AddCircleOutlineOutlined /> Add New</Button>
                </Grid>
              )}
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