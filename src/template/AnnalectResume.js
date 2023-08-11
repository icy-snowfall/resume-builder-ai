import { Grid } from '@mui/material'
import React, { useContext } from 'react'
import annalect_logo from '../assets/annalect_logo.png'
import PersonalDetails from './component/PersonalDetails'
import './TemplateStyle.scss'
import PersonalInfo from './component/PersonalInfo'
import Skill from './component/Skill'
import Education from './component/Education'
import Summery from './component/Summery'
import WorkExperience from './component/WorkExperience'
import Certification from './component/Certification'
import { hard_skill, soft_skill, edu_details } from '../DataFile'
import { StateContext } from '../Context'
const AnnalectResume = () => {
  const { nwfile, nwpersonalDetails, nwsummery, nweducation, nwworkExperience, nwcertification, nwhardSkill, nwsoftSkill} = useContext(StateContext);

  return (
    <>
    <Grid container id='header' sx={{width: '650px', margin: 'auto',flexDirection: 'row-reverse'}}>
        <img style={{width:'25%', opacity:'0.5'}} src={annalect_logo} />
    </Grid>
    <Grid container sx={{width: '650px', margin: 'auto'}}>
        <Grid item sm={4} sx={{background: '#57eaf124' }}>
          <PersonalInfo p_data={nwpersonalDetails} pasprt_img={nwfile} />
          <PersonalDetails p_data={nwpersonalDetails}/>
          <Skill skills={hard_skill} />
          <Skill skills={soft_skill} />
          <Education edu_details={nweducation} />
        </Grid>
        <Grid item sm={8}>
          <Summery Summery={nwsummery} />
          <WorkExperience exp_data={nwworkExperience} />
          <Certification certi_data={nwcertification} />
        </Grid>
    </Grid>
    </>
  )
}

export default AnnalectResume