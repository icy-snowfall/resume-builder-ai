import { Box, Button, FormControl, Grid, MenuItem, Select, TextField, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import './FormStyle.scss'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import MUIRichTextEditor from 'mui-rte'
import {Editor} from 'mui-rte'
import { convertToRaw } from 'draft-js'
import { AddCircleOutlineOutlined, DeleteOutlineOutlined } from '@mui/icons-material';
import { StateContext } from '../Context';

const Form = ({handlePageTemplate}) => {

  const { nwfile, setNwFile, nwpersonalDetails, setNwPersonalDetails, 
    nwsummery, setNwSummery, nweducation, setNwEducation , nwworkExperience, setNwWorkExperience, nwcertification, setNwCertification, nwhardSkill, setNwHardSkill,nwsoftSkill, setNwSoftSkill } = useContext(StateContext);

  const [expanded, setExpanded] = useState('panel1');
  const [file, setFile] = useState();
  const [personalDetails, setPersonalDetails] = useState({f_name:'', l_name:'', cnt_nmber:'', 
  email_id:'', address:'', lnkin_id:''});
  const [summery, setSummery] = useState({summery:''});
  const [education, setEducation] = useState([{ course:'', university:'', course_start:'', 
  course_end:'', percent:''}]);
  const [workExperience, setWorkExperience] = useState([{ position:'', org_name:'', work_start:'',
    work_leave:'', work_summery:''}]);
  const [certification, setCertification] = useState([{certi_title:'', org_name:'', course_start:'',
    course_end:'', course_descr:'',}]);
  const [hardSkill, setHardSkill] = useState([{ skill:'', rating:''}]);
  const [softSkill, setSoftSkill] = useState([{ skill:'', rating:'',}]);



  useEffect(() => {
    setNwFile(file);
    setNwPersonalDetails(personalDetails);
    setNwSummery(summery);
    setNwEducation(education);
    setNwWorkExperience(workExperience);
    setNwCertification(certification);
    setNwHardSkill(hardSkill);
    setNwSoftSkill(softSkill);
  })


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
    setEducation([...education, { course:'', university:'', course_start:'', 
    course_end:'', percent:''}]);
  }
  const handleWorkSec = () =>{
    setWorkExperience([...workExperience, {position:'', org_name:'', work_start:'',
    work_leave:'', work_summery:''}]);
  }
  const handleCertiSec = () =>{
    setCertification([...certification, {certi_title:'', org_name:'', course_start:'',
    course_end:'', course_descr:'',}]);
  }
  const handleHardSkillSec = () =>{
    setHardSkill([...hardSkill, { skill:'', rating:''}]);
  }
  const handleSoftSkillSec = () =>{
    setSoftSkill([...softSkill, { skill:'', rating:'',}]);
  }
  
  //Remove sec button

  const handleRemoveEduc = (index) =>{
    const list = [...education];
        list.splice(index, 1);
        setEducation(list);
  }
  const handleRemoveWorkSec = (index) =>{
    const list = [...workExperience];
        list.splice(index, 1);
        setWorkExperience(list);
  }
  const handleRemoveCertiSec = (index) =>{
    const list = [...certification];
        list.splice(index, 1);
        setCertification(list);
  }
  const handleRemoveHardSkillSec = (index) =>{
    const list = [...hardSkill];
        list.splice(index, 1);
        setHardSkill(list);
  }
  const handleRemoveSoftSkillSec = (index) =>{
    const list = [...softSkill];
        list.splice(index, 1);
        setSoftSkill(list);
  }
  
  let name, value;
  const getpersonalData = (event) =>{
    name= event.target.name;
    value= event.target.value;
    setPersonalDetails({...personalDetails, [name]: value})
  }
  const getSummeryData = event =>{
    const plainText = event.getCurrentContent().getPlainText() // for plain text
    const rteContent = convertToRaw(event.getCurrentContent()); // for rte content with text formating
    rteContent && setSummery(JSON.stringify(rteContent)) // store your rteContent to state
  }
  const getEduData = (event, index) =>{
    const educationList = [...education];
    educationList[index][event.target.name] = event.target.value;
    setEducation(educationList);
  }
  const getExperienceData = (event, index) =>{
    const expDataList = [...workExperience]
    expDataList[index][event.target.name] = event.target.value
    setWorkExperience(expDataList)
  }
  const getcertificationData = (event, index) =>{
    const certiData= [...certification]
    certiData[index][event.target.name]= event.target.value
    setCertification(certiData)
  }
  
  const getHskillData = (event, index) =>{
    const hrskillData = [...hardSkill]
    hrskillData[index][event.target.name]= event.target.value
    setHardSkill(hrskillData)
  }
  const getSskillData = (event, index) =>{
    const sfskillData = [...hardSkill]
    sfskillData[index][event.target.name]= event.target.value
    setSoftSkill(sfskillData)
  }


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
              {/* <Editor value={summery} onChange={getSummeryData} /> */}
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
              {education.map((eduData, index) =>(
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
                    <input type='month' className='datetime' name='course_start' value={eduData.course_start} onChange={(e)=>getEduData(e, index)} />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography className='inputlabel'>To</Typography>
                    <input type='month' className='datetime' name='course_end' value={eduData.course_end} onChange={(e)=>getEduData(e, index)} />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography className='inputlabel'>Percent</Typography>
                    <TextField value={eduData.percent} onChange={(e)=>getEduData(e, index)} name='percent' className='txtbox' id="standard-basic" variant="outlined" 
                      placeholder='Percent' autoComplete='off' inputProps={{ maxLength: 180 }}>
                    </TextField>
                  </Grid>
                  {education.length !== 1 && (<Grid className='btnsec' item xs={6}>
                    <Button className='btndel' onClick={()=>handleRemoveEduc(index)}><DeleteOutlineOutlined /> Delete </Button>
                  </Grid>)}                  
                </Grid>
              ))}
              {education.length < 4 && 
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
              {workExperience.map((workData, index) => (
                <Grid container key={index}>
                  <Grid item xs={12} sm={6}>
                    <Typography className='inputlabel'>Position</Typography>
                    <TextField value={workData.position} onChange={(e) => getExperienceData(e, index)} name='position' className='txtbox' id="standard-basic" variant="outlined" 
                      placeholder='Position' autoComplete='off' inputProps={{ maxLength: 180 }}>
                    </TextField>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography className='inputlabel'>Organization Name </Typography>
                    <TextField value={workData.org_name} onChange={(e) => getExperienceData(e, index)} name='org_name' className='txtbox' id="standard-basic" variant="outlined" 
                      placeholder='Organization Name' autoComplete='off' inputProps={{ maxLength: 180 }}>
                    </TextField>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography className='inputlabel'>From Date</Typography>
                    <input type='month' className='datetime' name='work_start' value={workData.work_start} onChange={(e)=>getExperienceData(e, index)} />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography className='inputlabel'>To Date</Typography>
                    <input type='month' className='datetime' name='work_leave' value={workData.work_leave} onChange={(e)=>getExperienceData(e, index)} />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography className='inputlabel'>Description</Typography>
                    <ThemeProvider theme={myTheme}>
                        <MUIRichTextEditor label="Start typing..." controls={["bold", "italic", "underline", "strikethrough", "highlight", "undo", "redo", "link", "numberList", "bulletList", "clear" ]} onChange={(event) => {
                            const plainText = event.getCurrentContent().getPlainText();
                            const rteContent = convertToRaw(event.getCurrentContent());
                            const newWorkExperience = workExperience.map((workData, i) => {
                                if (i === index) {
                                    workData.work_summery = JSON.stringify(rteContent);
                                }
                                return workData;
                            });
                            setWorkExperience(newWorkExperience);
                            }} />
                    </ThemeProvider>
                  </Grid>
                  {workExperience.length !== 1 && (
                  <Grid className='btnsec' item xs={12}>
                    <Button className='btndel' onClick={()=>handleRemoveWorkSec(index)}><DeleteOutlineOutlined /> Delete </Button>
                  </Grid>)}
                </Grid>
              ))}
              {workExperience.length < 5 && (<Grid className='btnsec' item xs={12}>
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
              {certification.map((certiData, index) =>(
                <Grid container key={index}>
                  <Grid item xs={12} sm={6}>
                    <Typography className='inputlabel'>Title</Typography>
                    <TextField value={certiData.certi_title} onChange={(e) => getcertificationData(e, index)} name='certi_title' className='txtbox' id="standard-basic" variant="outlined" 
                      placeholder='Course Name' autoComplete='off' inputProps={{ maxLength: 180 }}>
                    </TextField>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography className='inputlabel'>organization Name</Typography>
                    <TextField value={certiData.org_name} onChange={(e) => getcertificationData(e, index)} name='org_name' className='txtbox' id="standard-basic" variant="outlined" 
                      placeholder='University Name' autoComplete='off' inputProps={{ maxLength: 180 }}>
                    </TextField>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography className='inputlabel'>From Date</Typography>
                    <input type='month' className='datetime' name='course_start' value={certiData.course_start} onChange={(e)=>getcertificationData(e, index)} />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography className='inputlabel'>To Date</Typography>
                    <input type='month' className='datetime' name='course_end' value={certiData.course_end} onChange={(e)=>getcertificationData(e, index)} />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography className='inputlabel'>Description</Typography>
                    <ThemeProvider theme={myTheme}>
                        <MUIRichTextEditor label="Start typing..."  controls={["bold", "italic", "underline", "strikethrough", "highlight", "undo", "redo", "link", "numberList", "bulletList", "clear" ]}  onChange={(event) => {
                            const plainText = event.getCurrentContent().getPlainText();
                            const rteContent = convertToRaw(event.getCurrentContent());
                            const newcertification = certification.map((certiData, i) => {
                                if (i === index) {
                                    certiData.course_descr = JSON.stringify(rteContent);
                                }
                                return certiData;
                            });
                            setCertification(newcertification);
                            }} />
                    </ThemeProvider>
                  </Grid>
                  {certification.length !== 1 && (
                  <Grid className='btnsec' item xs={12}>
                  <Button className='btndel' onClick={()=>handleRemoveCertiSec(index)}><DeleteOutlineOutlined /> Delete </Button>
                </Grid>)}
                </Grid>
              ))}
              {certification.length < 4 && (
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
              {hardSkill.map((hSkillData, index) => (
                <Grid container key={index}>
                  <Grid item xs={12} sm={6}>
                    <Typography className='inputlabel'>Skill</Typography>
                    <TextField value={hSkillData.skill} onChange={(e) => getHskillData(e, index)} name='skill' className='txtbox' id="standard-basic" variant="outlined" 
                      placeholder='Course Name' autoComplete='off' inputProps={{ maxLength: 180 }}>
                    </TextField>
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <Typography className='inputlabel'>Rating </Typography>
                    <FormControl className='drpbx'>
                      <Select
                        value={hSkillData.rating}
                        onChange={(e) => getHskillData(e, index)}
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
                  {hardSkill.length !== 1 && (
                  <Grid className='btnsec' item xs={12} sm={3}>
                    <Button className='btndel' onClick={()=>handleRemoveHardSkillSec(index)}><DeleteOutlineOutlined /> Delete </Button>
                  </Grid>)}
                </Grid>
              ))}
              {hardSkill.length < 4 && (
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
              {softSkill.map((sSkillData , index) =>(
                <Grid container key={index}>
                  <Grid item xs={12} sm={6}>
                    <Typography className='inputlabel'>Skill</Typography>
                    <TextField value={sSkillData.skill} onChange={(e) => getSskillData(e, index)} name='skill' className='txtbox' id="standard-basic" variant="outlined" 
                      placeholder='Course Name' autoComplete='off' inputProps={{ maxLength: 180 }}>
                    </TextField>
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <Typography className='inputlabel'>Rating </Typography>
                    <FormControl className='drpbx'>
                      <Select
                        value={sSkillData.rating}
                        onChange={(e) => getSskillData(e, index)}
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
                  {softSkill.length !== 1 && (
                  <Grid className='btnsec' item xs={12} sm={3}>
                    <Button className='btndel' onClick={() => handleRemoveSoftSkillSec(index) }><DeleteOutlineOutlined /> Delete </Button>
                  </Grid>)}
                </Grid>
              ))}
              {softSkill.length < 4 && (
                <Grid className='btnsec' item xs={12}>
                  <Button onClick={handleSoftSkillSec} className='btnadd'><AddCircleOutlineOutlined /> Add New</Button>
                </Grid>
              )}
            </AccordionDetails>
          </Accordion>
          <div className='sbmbtnsec'>
            <Button onClick={handlePageTemplate} className='btnsubmit'>Submit</Button>
          </div>
        </Box>
      </Box>
    </div>
  )
}

export default Form