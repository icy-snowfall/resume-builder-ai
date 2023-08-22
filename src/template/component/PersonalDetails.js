import React from 'react'
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Typography } from '@mui/material';
const PersonalDetails = ({p_data}) => {
  return (
    <>
    <div style={{textAlign:'left', margin:'10px auto', padding:'0 10px'}}>
    <Typography className='tlt_text'>Personal Details</Typography>
    <Typography className='para_text' ><EmailIcon sx={{fontSize:'14px'}} /> {p_data.email_id} </Typography>
    <Typography className='para_text' ><CallIcon sx={{fontSize:'14px'}}  /> {p_data.cnt_nmber}</Typography>
    <Typography className='para_text' ><LocationOnIcon sx={{fontSize:'14px'}}  />{p_data.address} </Typography>
    <Typography className='para_text' ><LinkedInIcon sx={{fontSize:'14px'}}  />{p_data.lnkin_id} </Typography>
    </div>
    </>
  )
}

export default PersonalDetails