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
import { StateContext } from '../Context'
import { Button } from '@mui/base'
import { jsPDF } from "jspdf";

const AnnalectResume = () => {
  const { nwfile, nwpersonalDetails, nwsummery, nweducation, nwworkExperience, nwcertification, nwhardSkill, nwsoftSkill} = useContext(StateContext);
  const generatePDF = () => {

    const report = new jsPDF('portrait','pt','a4');
    report.html(document.querySelector('#annalect_temp'), {
        callback: () => {
            // Set footer content
            const footerComponent = document.querySelector('#annalect_footer');
            const pageCount = report.internal.getNumberOfPages();
            
            // Set the footer for each page
            for (let i = 1; i <= pageCount; i++) {
                report.setPage(i);
                report.setFontSize(10);
                report.setTextColor(128);
                const footerText = footerComponent.innerText;
                    report.text(footerText, report.internal.pageSize.getWidth() / 2, 
                    report.internal.pageSize.getHeight() - 5, { align: 'center', marginBottom:'10px' });
            }
        }
    }).then(() => {
        report.save('Annalect India Resume - ');
    });
};
  
  return (
    <>
    <div>
        <div className='btnSec'><Button className='butnClass' onClick={generatePDF}>Print</Button></div>
    </div>
    <div id='annalect_temp' className='template'>
      <Grid container className='logoImg'>
            <Grid item xs={12} md={12} sx={{textAlign:'right'}}>
                <img className='imgSize' src={annalect_logo} />
            </Grid>
        </Grid>
      <Grid container sx={{ margin: '10px'}}>
          <Grid item sm={4} sx={{background: '#57eaf124' }}>
            <PersonalInfo p_data={nwpersonalDetails} position={nwworkExperience[0].position} pasprt_img={nwfile} />
            <PersonalDetails p_data={nwpersonalDetails}/>
            <Skill skills={nwhardSkill} title={'Hard Skills'} />
            <Skill skills={nwsoftSkill} title={'Soft Skills'} />
            <Education edu_details={nweducation} />
          </Grid>
          <Grid item sm={8}>
            <Summery summery={nwsummery} />
            <WorkExperience exp_data={nwworkExperience} />
            <Certification certi_data={nwcertification} />
          </Grid>
      </Grid>
    </div>
    <div id='annalect_footer' style={{height:'10px'}}></div>
    </>
  )
}

export default AnnalectResume